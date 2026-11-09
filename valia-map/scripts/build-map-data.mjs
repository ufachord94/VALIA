#!/usr/bin/env node
/**
 * Valia · build-map-data.mjs
 * ------------------------------------------------------------------
 * Regenera totes les dades del mapa del Vallès Oriental a partir
 * d'OpenStreetMap (ODbL) i del model digital del terreny Terrain Tiles
 * (AWS Open Data, EU-DEM © Copernicus).
 *
 *   node scripts/build-map-data.mjs                 # auto: Overpass i, si falla, extracte PBF
 *   node scripts/build-map-data.mjs --source=overpass
 *   node scripts/build-map-data.mjs --source=pbf [--pbf=ruta/catalunya-latest.osm.pbf]
 *
 * Sortida (carpeta data/):
 *   limit.geojson      límit oficial de la comarca (OSM admin_level=7)
 *   mask.geojson       màscara "fora de la comarca" (món amb forat)
 *   routes.geojson     rutes senyalitzades (GR, PR, SL, locals, BTT, cicloturisme)
 *   paths.geojson      xarxa de camins (corriols, pistes, carrils bici, vies verdes)
 *   pois.geojson       punts d'interès
 *   municipis.json     municipis de la comarca (nom + bbox + centre)
 *   profiles/<id>.json perfil d'elevació de cada ruta
 *   meta.json          dates, fonts, recomptes i llicències
 *
 * Requisits: Node >= 20. Dependències (devDependencies): osm-pbf-parser-node, pngjs.
 * Si estàs darrere d'un proxy: NODE_USE_ENV_PROXY=1 (Node >= 22.21).
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { PNG } from 'pngjs';
import { union as turfUnion, featureCollection, multiPolygon } from '@turf/turf';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/* ------------------------------------------------------------------ */
/* Configuració                                                        */
/* ------------------------------------------------------------------ */
const ARGS = Object.fromEntries(process.argv.slice(2).map(a => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/); return m ? [m[1], m[2] ?? true] : [a, true];
}));
const CFG = {
  comarca: 'Vallès Oriental',
  // Municipis oficials de la comarca (Idescat: 39) que la relació OSM no inclou.
  // Al novembre de 2026 la relació 2417929 no conté Aiguafreda: s'hi afegeix el seu polígon municipal.
  extraMunicipalities: ['Aiguafreda'],
  // Caixa que conté la comarca amb marge (lon/lat). Només s'usa per al PBF.
  bbox: [2.02, 41.43, 2.68, 41.86],
  source: ARGS.source || 'auto',
  pbf: ARGS.pbf || path.join(ROOT, 'scripts/.cache/catalunya-latest.osm.pbf'),
  pbfUrl: 'https://download.openstreetmap.fr/extracts/europe/spain/catalunya-latest.osm.pbf',
  overpass: [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter'
  ],
  dem: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
  demZoom: 13,
  out: path.resolve(ROOT, ARGS.out || 'data'),
  cache: path.join(ROOT, 'scripts/.cache'),
  routeBufferM: 1500,   // les rutes es retallen a la comarca + 1,5 km
  pathBufferM: 150,     // la xarxa de camins, a la comarca + 150 m
  poiBufferM: 100,
  minRouteKmInside: 0.4 // descarta rutes que gairebé no toquen la comarca
};
const UA = 'Valia-map-builder/1.0 (+https://github.com/ufachord94/VALIA)';
const ROUTE_TYPES = new Set(['hiking', 'foot', 'walking', 'bicycle', 'mtb']);
const PATH_HW = new Set(['path', 'footway', 'bridleway', 'track', 'cycleway', 'steps']);
const log = (...a) => console.log('[valia]', ...a);

/* ------------------------------------------------------------------ */
/* Classificació de POI                                                */
/* ------------------------------------------------------------------ */
const HIST_OK = new Set(['castle', 'ruins', 'archaeological_site', 'monument', 'church', 'monastery', 'manor',
  'tower', 'building', 'bridge', 'aqueduct', 'city_gate', 'fort', 'chapel', 'tomb', 'farm', 'mill', 'watermill',
  'house', 'wayside_chapel', 'citywalls', 'castle_wall', 'dolmen', 'menhir', 'megalith', 'heritage', 'industrial',
  'kiln', 'lime_kiln', 'ice_house', 'icehouse', 'cave', 'well', 'fountain', 'memorial', 'yes']);
function poiCategory(t) {
  if (!t) return null;
  if (t.tourism === 'viewpoint') return ['mirador', 'viewpoint'];
  if (t.amenity === 'drinking_water' || t.natural === 'spring' || t.man_made === 'water_tap') return ['font', t.natural === 'spring' ? 'spring' : 'drinking_water'];
  if (t.tourism === 'picnic_site') return ['picnic', 'picnic_site'];
  if (t.railway === 'station' || t.railway === 'halt' || (t.public_transport === 'station' && t.train === 'yes')) {
    if (t.station === 'subway' || t.station === 'funicular' || t.railway === 'tram_stop') return null;
    return ['tren', t.railway || 'station'];
  }
  if (t.amenity === 'bus_station') return ['bus', 'bus_station'];
  if (t.highway === 'bus_stop') return ['bus', 'bus_stop'];
  if (t.amenity === 'parking') {
    if (['private', 'no', 'customers', 'delivery'].includes(t.access)) return null;
    if (['underground', 'multi-storey', 'rooftop'].includes(t.parking)) return null;
    return ['parking', 'parking'];
  }
  if (t.tourism === 'museum') return t.name ? ['patrimoni', 'museum'] : null;
  if (t.historic && HIST_OK.has(t.historic) && t.name) {
    if (t.historic === 'memorial' && /stolperstein|plaque|placa/i.test(t.memorial || '')) return null;
    return ['patrimoni', t.historic];
  }
  if ((t.heritage || t['heritage:operator']) && t.name && (t.building || t.amenity === 'place_of_worship' || t.man_made)) return ['patrimoni', t.historic || t.building || 'heritage'];
  return null;
}
const POI_KEYS = ['tourism', 'amenity', 'natural', 'man_made', 'railway', 'public_transport', 'train', 'station', 'highway',
  'access', 'parking', 'historic', 'heritage', 'heritage:operator', 'building', 'memorial', 'name', 'name:ca', 'name:es',
  'name:en', 'name:fr', 'ele', 'network', 'operator', 'drinking_water', 'wikidata', 'website'];

/* ------------------------------------------------------------------ */
/* Utilitats geomètriques                                              */
/* ------------------------------------------------------------------ */
const R = 6371008.8, RAD = Math.PI / 180;
function hav(a, b) {
  const dLat = (b[1] - a[1]) * RAD, dLon = (b[0] - a[0]) * RAD;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * RAD) * Math.cos(b[1] * RAD) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
const lineLen = c => { let d = 0; for (let i = 1; i < c.length; i++) d += hav(c[i - 1], c[i]); return d; };
const r5 = v => Math.round(v * 1e5) / 1e5;
const r6 = v => Math.round(v * 1e6) / 1e6;
/** Douglas-Peucker en metres (projecció equirectangular local). */
function simplify(coords, tolM) {
  if (coords.length <= 2) return coords.slice();
  const lat0 = coords[0][1] * RAD, kx = Math.cos(lat0) * R * RAD, ky = R * RAD;
  const P = coords.map(c => [c[0] * kx, c[1] * ky]);
  const keep = new Uint8Array(coords.length); keep[0] = keep[coords.length - 1] = 1;
  const stack = [[0, coords.length - 1]], t2 = tolM * tolM;
  while (stack.length) {
    const [a, b] = stack.pop(); let maxD = 0, idx = -1;
    const [ax, ay] = P[a], [bx, by] = P[b], dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = P[i]; let t = L ? ((px - ax) * dx + (py - ay) * dy) / L : 0; t = Math.max(0, Math.min(1, t));
      const ex = ax + t * dx - px, ey = ay + t * dy - py, d = ex * ex + ey * ey;
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > t2 && idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return coords.filter((_, i) => keep[i]);
}
/** Suavitzat de Chaikin (manté els extrems). */
function chaikin(c, it = 1) {
  for (let k = 0; k < it && c.length > 2; k++) {
    const o = [c[0]];
    for (let i = 0; i < c.length - 1; i++) { const [a, b] = [c[i], c[i + 1]]; o.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]); }
    o.push(c[c.length - 1]); c = o;
  }
  return c;
}
function ringArea(r) { let s = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) s += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); return s / 2; } // >0 = CCW
function pointInRing(p, r) {
  let ins = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if (((yi > p[1]) !== (yj > p[1])) && (p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi)) ins = !ins;
  }
  return ins;
}
const bboxOf = coords => coords.reduce((b, c) => [Math.min(b[0], c[0]), Math.min(b[1], c[1]), Math.max(b[2], c[0]), Math.max(b[3], c[1])], [Infinity, Infinity, -Infinity, -Infinity]);

/** Uneix vies (llistes d'IDs de node) en anells tancats. */
function assembleRings(ways) {
  const segs = ways.filter(w => w.length > 1).map(w => w.slice()), rings = [];
  while (segs.length) {
    let cur = segs.pop(), guard = 0;
    while (cur[0] !== cur[cur.length - 1] && guard++ < 100000) {
      const end = cur[cur.length - 1]; let found = -1, rev = false;
      for (let i = 0; i < segs.length; i++) {
        if (segs[i][0] === end) { found = i; break; }
        if (segs[i][segs[i].length - 1] === end) { found = i; rev = true; break; }
      }
      if (found < 0) break;
      const s = segs.splice(found, 1)[0]; if (rev) s.reverse();
      cur = cur.concat(s.slice(1));
    }
    if (cur[0] === cur[cur.length - 1] && cur.length >= 4) rings.push(cur);
  }
  return rings;
}
/** Polígon(s) d'una relació multipolígon/boundary. */
function relationPolygon(rel, store) {
  const toC = ids => ids.map(id => store.nodes.get(id)).filter(Boolean);
  const outer = [], inner = [];
  const wOuter = [], wInner = [];
  for (const m of rel.members) {
    if (m.type !== 'way') continue; const w = store.ways.get(m.ref); if (!w) continue;
    (m.role === 'inner' ? wInner : wOuter).push(w.refs);
  }
  for (const r of assembleRings(wOuter)) { const c = toC(r); if (c.length >= 4) outer.push(c); }
  for (const r of assembleRings(wInner)) { const c = toC(r); if (c.length >= 4) inner.push(c); }
  if (!outer.length) return null;
  const polys = outer.map(o => [ringArea(o) < 0 ? o.slice().reverse() : o]);
  for (const h of inner) {
    const p = polys.find(pp => pointInRing(h[0], pp[0])); if (p) p.push(ringArea(h) > 0 ? h.slice().reverse() : h);
  }
  return polys; // MultiPolygon coordinates (outer CCW, holes CW)
}

/* ------------------------------------------------------------------ */
/* Ràster de màscares (dins/fora, distància, municipi)                 */
/* ------------------------------------------------------------------ */
class Grid {
  constructor(bbox, cellM = 40) {
    const lat0 = (bbox[1] + bbox[3]) / 2;
    this.dx = cellM / (R * RAD * Math.cos(lat0 * RAD)); this.dy = cellM / (R * RAD); this.cellM = cellM;
    this.x0 = bbox[0]; this.y0 = bbox[1];
    this.w = Math.ceil((bbox[2] - bbox[0]) / this.dx) + 1; this.h = Math.ceil((bbox[3] - bbox[1]) / this.dy) + 1;
  }
  idx(lon, lat) {
    const x = Math.floor((lon - this.x0) / this.dx), y = Math.floor((lat - this.y0) / this.dy);
    return (x < 0 || y < 0 || x >= this.w || y >= this.h) ? -1 : y * this.w + x;
  }
  /** Omple amb `val` les cel·les dins del multipolígon (scanline, regla par-senar). */
  fill(arr, multipoly, val) {
    const rings = multipoly.flat();
    for (let y = 0; y < this.h; y++) {
      const lat = this.y0 + (y + 0.5) * this.dy, xs = [];
      for (const r of rings) for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
        const [xi, yi] = r[i], [xj, yj] = r[j];
        if ((yi > lat) !== (yj > lat)) xs.push((xj - xi) * (lat - yi) / (yj - yi) + xi);
      }
      xs.sort((a, b) => a - b);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const a = Math.max(0, Math.ceil((xs[k] - this.x0) / this.dx - 0.5)), b = Math.min(this.w - 1, Math.floor((xs[k + 1] - this.x0) / this.dx - 0.5));
        for (let x = a; x <= b; x++) arr[y * this.w + x] = val;
      }
    }
  }
  /** Transformada de distància chamfer (en metres) des de les cel·les "seed". */
  distance(seed) {
    const W = this.w, H = this.h, D = new Float32Array(W * H), a = this.cellM, b = this.cellM * Math.SQRT2;
    for (let i = 0; i < D.length; i++) D[i] = seed[i] ? 0 : 1e9;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const i = y * W + x; let v = D[i];
      if (x > 0) v = Math.min(v, D[i - 1] + a);
      if (y > 0) { v = Math.min(v, D[i - W] + a); if (x > 0) v = Math.min(v, D[i - W - 1] + b); if (x < W - 1) v = Math.min(v, D[i - W + 1] + b); }
      D[i] = v;
    }
    for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
      const i = y * W + x; let v = D[i];
      if (x < W - 1) v = Math.min(v, D[i + 1] + a);
      if (y < H - 1) { v = Math.min(v, D[i + W] + a); if (x < W - 1) v = Math.min(v, D[i + W + 1] + b); if (x > 0) v = Math.min(v, D[i + W - 1] + b); }
      D[i] = v;
    }
    return D;
  }
}

/* ------------------------------------------------------------------ */
/* Font 1: Overpass API                                                */
/* ------------------------------------------------------------------ */
async function overpass(query) {
  let lastErr;
  for (const ep of CFG.overpass) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        log('Overpass →', ep);
        const res = await fetch(ep, { method: 'POST', headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(query), signal: AbortSignal.timeout(400000) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const j = await res.json(); if (!j.elements) throw new Error('resposta sense elements');
        return j;
      } catch (e) { lastErr = e; log('  ✗', e.message); await new Promise(r => setTimeout(r, 4000 * (attempt + 1))); }
    }
  }
  throw new Error('Overpass no disponible: ' + (lastErr && lastErr.message));
}
async function loadFromOverpass() {
  const A = `area["boundary"="administrative"]["admin_level"="7"]["name"="${CFG.comarca}"]->.a;`;
  const poiSel = ['node(area.a)["tourism"~"^(viewpoint|picnic_site|museum)$"];', 'node(area.a)["amenity"~"^(drinking_water|parking|bus_station)$"];',
    'node(area.a)["natural"="spring"];', 'node(area.a)["man_made"="water_tap"];', 'node(area.a)["railway"~"^(station|halt)$"];',
    'node(area.a)["highway"="bus_stop"];', 'node(area.a)["historic"]["name"];', 'node(area.a)["heritage"]["name"];',
    'way(area.a)["tourism"~"^(viewpoint|picnic_site|museum)$"];', 'way(area.a)["amenity"~"^(parking|bus_station)$"];',
    'way(area.a)["historic"]["name"];', 'way(area.a)["heritage"]["name"];', 'way(area.a)["railway"="station"];'].join('');
  const q = `[out:json][timeout:600][maxsize:1073741824];${A}
(
  rel["boundary"="administrative"]["admin_level"="7"]["name"="${CFG.comarca}"];
  rel(area.a)["boundary"="administrative"]["admin_level"="8"];
  rel(area.a)["type"="route"]["route"~"^(hiking|foot|walking|bicycle|mtb)$"];
)->.r;
(.r; rel(r.r)["type"="route"];)->.r2;
.r2 out body;
(
  way(r.r2);
  way(area.a)["highway"~"^(path|footway|bridleway|track|cycleway|steps)$"];
  ${poiSel}
)->.w;
.w out body;
node(w.w)->.wn;
.wn out skel qt;
(${poiSel.split(';').filter(s => s.startsWith('node')).join(';')};)->.pn;
.pn out body qt;`;
  const j = await overpass(q);
  const store = newStore();
  for (const e of j.elements) {
    if (e.type === 'node') { store.nodes.set(e.id, [e.lon, e.lat]); if (e.tags && poiCategory(e.tags)) store.poiNodes.push({ id: e.id, lon: e.lon, lat: e.lat, tags: e.tags }); }
    else if (e.type === 'way') store.ways.set(e.id, { refs: e.nodes, tags: e.tags || {} });
    else if (e.type === 'relation') store.rels.set(e.id, { members: e.members, tags: e.tags || {} });
  }
  store.timestamp = j.osm3s && j.osm3s.timestamp_osm_base; store.source = 'Overpass API';
  return store;
}

/* ------------------------------------------------------------------ */
/* Font 2: extracte PBF de Catalunya (openstreetmap.fr / Geofabrik)    */
/* ------------------------------------------------------------------ */
async function ensurePbf() {
  if (fs.existsSync(CFG.pbf)) return CFG.pbf;
  await fsp.mkdir(path.dirname(CFG.pbf), { recursive: true });
  log('Descarregant extracte OSM de Catalunya (~300 MB) →', CFG.pbfUrl);
  const res = await fetch(CFG.pbfUrl, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error('No s\'ha pogut descarregar el PBF: HTTP ' + res.status);
  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(CFG.pbf + '.part'));
  await fsp.rename(CFG.pbf + '.part', CFG.pbf);
  return CFG.pbf;
}
async function loadFromPbf() {
  const file = await ensurePbf();
  const { createOSMStream } = await import('osm-pbf-parser-node');
  const [W, S, E, N] = CFG.bbox, store = newStore();
  const WAY_KEYS = new Set(['highway', 'name', 'name:ca', 'name:es', 'name:en', 'name:fr', 'access', 'foot', 'bicycle', 'surface', 'tracktype', 'footway', 'boundary', 'admin_level', ...POI_KEYS]);
  let n = 0; const t0 = Date.now();
  log('Llegint', path.basename(file), '…');
  for await (const it of createOSMStream(file, { withTags: true, withInfo: false })) {
    if (it.type === 'node') {
      if (it.lon < W || it.lon > E || it.lat < S || it.lat > N) continue;
      store.nodes.set(it.id, [it.lon, it.lat]);
      if (it.tags && poiCategory(it.tags)) store.poiNodes.push({ id: it.id, lon: it.lon, lat: it.lat, tags: it.tags });
    } else if (it.type === 'way') {
      const refs = it.refs; let hit = false;
      for (let i = 0; i < refs.length; i++) if (store.nodes.has(refs[i])) { hit = true; break; }
      if (!hit) continue;
      const tags = {}; if (it.tags) for (const k in it.tags) if (WAY_KEYS.has(k)) tags[k] = it.tags[k];
      store.ways.set(it.id, { refs, tags });
    } else if (it.type === 'relation') {
      const t = it.tags || {};
      const keep = (t.type === 'route' && ROUTE_TYPES.has(t.route)) || (t.boundary === 'administrative' && (t.admin_level === '7' || t.admin_level === '8'));
      if (keep) store.rels.set(it.id, { members: it.members, tags: t });
    } else if (it.osmosis_replication_timestamp) store.timestamp = new Date(it.osmosis_replication_timestamp * 1000).toISOString();
    if (++n % 1e7 === 0) log(`  ${(n / 1e6).toFixed(0)} M elements · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
  }
  if (!store.timestamp) store.timestamp = (await fsp.stat(file)).mtime.toISOString();
  store.source = 'Extracte PBF Catalunya (download.openstreetmap.fr)';
  log(`  nodes a la caixa: ${store.nodes.size} · vies: ${store.ways.size} · relacions: ${store.rels.size}`);
  return store;
}
function newStore() { return { nodes: new Map(), ways: new Map(), rels: new Map(), poiNodes: [], timestamp: null, source: '' }; }

/* ------------------------------------------------------------------ */
/* DEM (Terrain Tiles, codificació Terrarium)                          */
/* ------------------------------------------------------------------ */
const demCache = new Map();
const lon2x = (lon, z) => (lon + 180) / 360 * 2 ** z;
const lat2y = (lat, z) => (1 - Math.log(Math.tan(lat * RAD) + 1 / Math.cos(lat * RAD)) / Math.PI) / 2 * 2 ** z;
async function demTile(z, x, y) {
  const key = `${z}/${x}/${y}`; if (demCache.has(key)) return demCache.get(key);
  const f = path.join(CFG.cache, 'dem', `${z}-${x}-${y}.png`); let buf;
  if (fs.existsSync(f)) buf = await fsp.readFile(f);
  else {
    const url = CFG.dem.replace('{z}', z).replace('{x}', x).replace('{y}', y);
    for (let a = 0; a < 4; a++) {
      try { const r = await fetch(url, { headers: { 'User-Agent': UA } }); if (!r.ok) throw new Error('HTTP ' + r.status); buf = Buffer.from(await r.arrayBuffer()); break; }
      catch (e) { if (a === 3) throw e; await new Promise(r => setTimeout(r, 1500 * (a + 1))); }
    }
    await fsp.mkdir(path.dirname(f), { recursive: true }); await fsp.writeFile(f, buf);
  }
  const png = PNG.sync.read(buf), d = png.data, ele = new Float32Array(256 * 256);
  for (let i = 0; i < ele.length; i++) ele[i] = d[i * 4] * 256 + d[i * 4 + 1] + d[i * 4 + 2] / 256 - 32768;
  demCache.set(key, ele); return ele;
}
async function prefetchDem(bbox) {
  const z = CFG.demZoom, x0 = Math.floor(lon2x(bbox[0], z)), x1 = Math.floor(lon2x(bbox[2], z)), y0 = Math.floor(lat2y(bbox[3], z)), y1 = Math.floor(lat2y(bbox[1], z));
  const jobs = []; for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) jobs.push([x, y]);
  log(`DEM: ${jobs.length} tessel·les z${z}`);
  for (let i = 0; i < jobs.length; i += 8) await Promise.all(jobs.slice(i, i + 8).map(([x, y]) => demTile(z, x, y)));
}
function elevation(lon, lat) {
  const z = CFG.demZoom, fx = lon2x(lon, z) * 256 - 0.5, fy = lat2y(lat, z) * 256 - 0.5;
  const px = Math.floor(fx), py = Math.floor(fy), tx = fx - px, ty = fy - py;
  const get = (X, Y) => { const t = demCache.get(`${z}/${Math.floor(X / 256)}/${Math.floor(Y / 256)}`); return t ? t[(Y & 255) * 256 + (X & 255)] : NaN; };
  const a = get(px, py), b = get(px + 1, py), c = get(px, py + 1), d = get(px + 1, py + 1);
  return (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty;
}

/* ------------------------------------------------------------------ */
/* Construcció                                                         */
/* ------------------------------------------------------------------ */
function linesFromWays(wayIds, store) {
  const out = [];
  for (const id of wayIds) {
    const w = store.ways.get(id); if (!w) continue; let cur = [];
    for (const r of w.refs) { const c = store.nodes.get(r); if (c) cur.push(c); else { if (cur.length > 1) out.push(cur); cur = []; } }
    if (cur.length > 1) out.push(cur);
  }
  return out;
}
const key = c => c[0].toFixed(7) + ',' + c[1].toFixed(7);
function lineMerge(lines) {
  const ls = lines.map(l => l.slice()), res = [];
  while (ls.length) {
    let cur = ls.shift(), changed = true;
    while (changed) {
      changed = false;
      for (let i = 0; i < ls.length; i++) {
        const l = ls[i], cs = key(cur[0]), ce = key(cur[cur.length - 1]), ls0 = key(l[0]), le = key(l[l.length - 1]);
        if (ce === ls0) cur = cur.concat(l.slice(1));
        else if (ce === le) cur = cur.concat(l.slice().reverse().slice(1));
        else if (cs === le) cur = l.concat(cur.slice(1));
        else if (cs === ls0) cur = l.slice().reverse().concat(cur.slice(1));
        else continue;
        ls.splice(i, 1); changed = true; break;
      }
    }
    res.push(cur);
  }
  return res.sort((a, b) => lineLen(b) - lineLen(a));
}
/** Retalla línies mantenint els trams on dist(comarca) <= maxM. */
function clipLines(lines, grid, dist, maxM) {
  const out = [];
  for (const l of lines) {
    let cur = [];
    for (const c of l) {
      const i = grid.idx(c[0], c[1]); const ok = i >= 0 && dist[i] <= maxM;
      if (ok) cur.push(c); else { if (cur.length > 1) out.push(cur); cur = []; }
    }
    if (cur.length > 1) out.push(cur);
  }
  return out;
}
function routeKind(t) {
  const ref = (t.ref || '').toUpperCase().replace(/\s+/g, ' ');
  if (t.route === 'mtb') return 'btt';
  if (t.route === 'bicycle') return 'ciclo';
  if (/^GR\b|^GR[-\s]?\d/.test(ref)) return 'gr';
  if (/^PR\b|^PR[-\s]?C|^PR[-\s]?\d/.test(ref)) return 'pr';
  if (/^SL\b|^SL[-\s]?C|^SL[-\s]?\d/.test(ref)) return 'sl';
  if (t.network === 'rwn' && /^PR/.test(ref)) return 'pr';
  return 'local';
}
const activityOf = t => t.route === 'mtb' ? 'mtb' : t.route === 'bicycle' ? 'road' : 'hiking';
/** Temps estimat i dificultat (DIN 33466 per a peu; velocitats mitjanes per a bici). */
function effort(act, km, up, down) {
  let h;
  if (act === 'hiking') { const tH = km / 4, tV = up / 300 + down / 500; h = Math.max(tH, tV) + Math.min(tH, tV) / 2; }
  else if (act === 'mtb') h = km / 12 + up / 600;
  else h = km / 18 + up / 700;
  const lim = act === 'hiking' ? [2.5, 5, 7.5] : act === 'mtb' ? [1.5, 3, 4.5] : [1.5, 3.5, 5];
  const diff = h < lim[0] ? 1 : h < lim[1] ? 2 : h < lim[2] ? 3 : 4;
  return { hours: Math.round(h * 4) / 4, difficulty: diff };
}
function profileOf(parts) {
  const STEP = 25; const D = [], E = []; let base = 0;
  for (const l of parts) {
    let acc = 0; const samples = [[0, l[0]]];
    for (let i = 1; i < l.length; i++) {
      const seg = hav(l[i - 1], l[i]); let t = STEP - (acc % STEP);
      while (t < seg) { const f = t / seg; samples.push([acc + t, [l[i - 1][0] + (l[i][0] - l[i - 1][0]) * f, l[i - 1][1] + (l[i][1] - l[i - 1][1]) * f]]); t += STEP; }
      acc += seg;
    }
    samples.push([acc, l[l.length - 1]]);
    for (const [d, c] of samples) { D.push(base + d); E.push(elevation(c[0], c[1])); }
    base += acc;
  }
  // suavitzat (mitjana mòbil de ~125 m) per evitar soroll del DEM
  const S = E.map((_, i) => { let s = 0, n = 0; for (let k = -2; k <= 2; k++) { const v = E[i + k]; if (Number.isFinite(v)) { s += v; n++; } } return n ? s / n : 0; });
  let up = 0, down = 0, ref = S[0];
  for (let i = 1; i < S.length; i++) { const d = S[i] - ref; if (Math.abs(d) >= 2) { if (d > 0) up += d; else down -= d; ref = S[i]; } }
  // reducció a ~240 punts per al gràfic
  const n = Math.min(240, S.length), d = [], e = [];
  for (let k = 0; k < n; k++) { const i = Math.round(k * (S.length - 1) / Math.max(1, n - 1)); d.push(Math.round(D[i]) / 1000); e.push(Math.round(S[i])); }
  return { up: Math.round(up), down: Math.round(down), min: Math.round(Math.min(...S)), max: Math.round(Math.max(...S)), d, e, km: base / 1000 };
}
const nameProps = t => ({ name: t.name || null, name_ca: t['name:ca'] || null, name_es: t['name:es'] || null, name_en: t['name:en'] || null, name_fr: t['name:fr'] || null });
const clean = o => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== null && v !== undefined && v !== ''));

async function build(store) {
  await fsp.mkdir(path.join(CFG.out, 'profiles'), { recursive: true });

  /* 1. Límit de la comarca ------------------------------------------------ */
  const comRel = [...store.rels.entries()].find(([, r]) => r.tags.boundary === 'administrative' && r.tags.admin_level === '7' && r.tags.name === CFG.comarca);
  if (!comRel) throw new Error('No s\'ha trobat el límit de la comarca a les dades OSM');
  let comPoly = relationPolygon(comRel[1], store);
  if (!comPoly) throw new Error('No s\'ha pogut tancar el polígon de la comarca');
  const added = [];
  for (const nm of CFG.extraMunicipalities) {
    const mr = [...store.rels.values()].find(r => r.tags.boundary === 'administrative' && r.tags.admin_level === '8' && r.tags.name === nm);
    const mp = mr && relationPolygon(mr, store);
    if (!mp) { log('  avís: no trobo el municipi', nm); continue; }
    const u = turfUnion(featureCollection([multiPolygon(comPoly), multiPolygon(mp)]));
    comPoly = (u.geometry.type === 'Polygon' ? [u.geometry.coordinates] : u.geometry.coordinates)
      .map(p => p.map((r, i) => (i === 0) === (ringArea(r) < 0) ? r.slice().reverse() : r));
    added.push(nm);
  }
  if (added.length) log('  afegits al límit:', added.join(', '));
  const comBbox = bboxOf(comPoly.flat(2));
  log('Comarca: relació', comRel[0], 'bbox', comBbox.map(v => v.toFixed(3)).join(','));
  const extB = [comBbox[0] - 0.03, comBbox[1] - 0.03, comBbox[2] + 0.03, comBbox[3] + 0.03];
  const grid = new Grid(extB, 40), inside = new Uint8Array(grid.w * grid.h);
  grid.fill(inside, comPoly, 1);
  const distCom = grid.distance(inside);
  const limitSimple = comPoly.map(p => p.map(r => simplify(r, 8).map(c => [r6(c[0]), r6(c[1])])));
  const limitFeature = { type: 'Feature', id: comRel[0], properties: { name: CFG.comarca, osm_id: comRel[0], wikidata: comRel[1].tags.wikidata || null }, geometry: { type: 'MultiPolygon', coordinates: limitSimple } };
  await writeJSON('limit.geojson', { type: 'FeatureCollection', features: [limitFeature] });
  const world = [[-180, -85], [180, -85], [180, 85], [-180, 85], [-180, -85]];
  const holes = limitSimple.map(p => { const o = p[0]; return ringArea(o) > 0 ? o.slice().reverse() : o; });
  await writeJSON('mask.geojson', { type: 'FeatureCollection', features: [{ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [world, ...holes] } }] });

  /* 2. Municipis ---------------------------------------------------------- */
  const munis = [], muniGrid = new Uint16Array(grid.w * grid.h);
  for (const [id, r] of store.rels) {
    if (r.tags.boundary !== 'administrative' || r.tags.admin_level !== '8') continue;
    const p = relationPolygon(r, store); if (!p) continue;
    const tmp = new Uint8Array(grid.w * grid.h); grid.fill(tmp, p, 1);
    let tot = 0, inC = 0; for (let i = 0; i < tmp.length; i++) if (tmp[i]) { tot++; if (inside[i]) inC++; }
    if (!tot || inC / tot < 0.6) continue;
    const idx = munis.length + 1; for (let i = 0; i < tmp.length; i++) if (tmp[i] && inside[i]) muniGrid[i] = idx;
    const bb = bboxOf(p.flat(2));
    // centre: cel·la interior més allunyada de la vora (aprox. pol of inaccessibility)
    const notIn = new Uint8Array(tmp.length); for (let i = 0; i < tmp.length; i++) notIn[i] = tmp[i] ? 0 : 1;
    const dd = grid.distance(notIn); let bi = 0; for (let i = 0; i < dd.length; i++) if (dd[i] > dd[bi]) bi = i;
    const cx = grid.x0 + ((bi % grid.w) + 0.5) * grid.dx, cy = grid.y0 + (Math.floor(bi / grid.w) + 0.5) * grid.dy;
    munis.push({ id, name: r.tags.name, ine: r.tags['ine:municipio'] || null, bbox: bb.map(r5), center: [r5(cx), r5(cy)] });
  }
  log('Municipis:', munis.length);

  /* 3. DEM ---------------------------------------------------------------- */
  const demB = [comBbox[0] - 0.02, comBbox[1] - 0.02, comBbox[2] + 0.02, comBbox[3] + 0.02];
  await prefetchDem(demB);

  /* 4. Rutes -------------------------------------------------------------- */
  const childOf = new Map();
  for (const [id, r] of store.rels) if (r.tags.type === 'route') for (const m of r.members) if (m.type === 'relation') {
    const c = store.rels.get(m.ref); if (c && c.tags.type === 'route') { if (!childOf.has(m.ref)) childOf.set(m.ref, []); childOf.get(m.ref).push(id); }
  }
  const routes = [], labels = [], allRouteSeed = new Uint8Array(grid.w * grid.h);
  for (const [id, r] of store.rels) {
    const t = r.tags; if (t.type !== 'route' || !ROUTE_TYPES.has(t.route)) continue;
    if (['proposed', 'abandoned', 'disused'].includes(t.state) || t['disused:route'] || t.state === 'proposed') continue;
    const wayIds = r.members.filter(m => m.type === 'way' && !/platform|stop/.test(m.role)).map(m => m.ref);
    const subRoutes = r.members.filter(m => m.type === 'relation' && store.rels.get(m.ref)?.tags.type === 'route');
    if (!wayIds.length && subRoutes.length) continue; // superruta: es mostren les etapes
    let lines = linesFromWays(wayIds, store); if (!lines.length) continue;
    const totalLenAll = lines.reduce((s, l) => s + lineLen(l), 0);
    lines = clipLines(lines, grid, distCom, CFG.routeBufferM);
    const insideLen = clipLines(lines, grid, distCom, 0).reduce((s, l) => s + lineLen(l), 0) / 1000;
    if (insideLen < CFG.minRouteKmInside) continue;
    const merged = lineMerge(lines);
    const prof = profileOf(merged);
    const act = activityOf(t), kind = routeKind(t), ef = effort(act, prof.km, prof.up, prof.down);
    const missingWays = wayIds.some(w => !store.ways.has(w));
    const complete = !missingWays && Math.abs(totalLenAll / 1000 - prof.km) < 0.05;
    const muniCount = new Map();
    for (const l of merged) for (let i = 0; i < l.length; i++) {
      const gi = grid.idx(l[i][0], l[i][1]); if (gi < 0) continue; allRouteSeed[gi] = 1;
      const m = muniGrid[gi]; if (m) muniCount.set(m, (muniCount.get(m) || 0) + 1);
    }
    const totalPts = [...muniCount.values()].reduce((a, b) => a + b, 0) || 1;
    const municipalities = [...muniCount.entries()].filter(([, c]) => c / totalPts > 0.03 || c > 25).sort((a, b) => b[1] - a[1]).map(([m]) => munis[m - 1].name);
    const parents = (childOf.get(id) || []).map(pid => store.rels.get(pid)).filter(Boolean);
    const parent = parents.find(p => p.tags.name || p.tags.ref);
    const first = merged[0][0], last = merged[0][merged[0].length - 1];
    const roundtrip = t.roundtrip === 'yes' || (merged.length === 1 && hav(first, last) < 250);
    const geomParts = merged.map(l => simplify(l, 4).map(c => [r5(c[0]), r5(c[1])]));
    const label = t.name || [t.ref, t.from && t.to ? `${t.from} – ${t.to}` : null].filter(Boolean).join(' · ') || null;
    const props = clean({
      id, ...nameProps(t), name: label || `${t.ref || 'Ruta'} ${id}`, ref: t.ref ? t.ref.replace(/\s+/g, ' ').trim() : null,
      kind, activity: act, network: t.network, operator: t.operator, osmc: t['osmc:symbol'], colour: t.colour,
      from: t.from, to: t.to, km: Math.round(prof.km * 10) / 10, km_total: !complete && t.distance ? parseFloat(String(t.distance).replace(',', '.')) || null : null,
      complete: complete ? 1 : 0, up: prof.up, down: prof.down, ele_min: prof.min, ele_max: prof.max,
      hours: ef.hours, difficulty: ef.difficulty, roundtrip: roundtrip ? 1 : 0, municipalities: municipalities.join('|'),
      parent: parent ? (parent.tags.name || parent.tags.ref) : null, website: t.website || t.url, description: t.description,
      start: [r5(first[0]), r5(first[1])], bbox: bboxOf(geomParts.flat()).map(r5)
    });
    // geometria suavitzada només per col·locar el nom al llarg de la línia
    // g=0 (zoom < 12), g=1 (12–14), g=2 (>= 14): generalització creixent perquè el text no topi amb els revolts
    [[250, 1500], [80, 500], [25, 300]].forEach(([tol, minLen], g) => {
      const lp = merged.filter(l => lineLen(l) > minLen).map(l => chaikin(simplify(l, tol), 2).map(c => g < 2 ? [Math.round(c[0] * 1e4) / 1e4, Math.round(c[1] * 1e4) / 1e4] : [r5(c[0]), r5(c[1])])).filter(l => l.length > 1);
      if (lp.length) labels.push({ type: 'Feature', properties: clean({ id, g, name: props.name, name_ca: props.name_ca, name_es: props.name_es, name_en: props.name_en, name_fr: props.name_fr, ref: props.ref, kind, activity: act }), geometry: { type: 'MultiLineString', coordinates: lp } });
    });
    routes.push({ type: 'Feature', id, properties: props, geometry: geomParts.length === 1 ? { type: 'LineString', coordinates: geomParts[0] } : { type: 'MultiLineString', coordinates: geomParts } });
    await writeJSON(`profiles/${id}.json`, { id, d: prof.d, e: prof.e, up: prof.up, down: prof.down, min: prof.min, max: prof.max }, true);
  }
  const KORD = { gr: 0, pr: 1, sl: 2, local: 3, btt: 4, ciclo: 5 };
  routes.sort((a, b) => (KORD[a.properties.kind] - KORD[b.properties.kind]) || a.properties.name.localeCompare(b.properties.name, 'ca'));
  // elimina perfils orfes d'execucions anteriors
  const keepIds = new Set(routes.map(r => `${r.id}.json`));
  for (const f of await fsp.readdir(path.join(CFG.out, 'profiles'))) if (!keepIds.has(f)) await fsp.unlink(path.join(CFG.out, 'profiles', f));
  await writeJSON('routes.geojson', { type: 'FeatureCollection', features: routes });
  await writeJSON('route-labels.geojson', { type: 'FeatureCollection', features: labels });
  log('Rutes:', routes.length);

  /* 5. Xarxa de camins ---------------------------------------------------- */
  const pathFeats = [], kmByClass = {};
  for (const [id, w] of store.ways) {
    const t = w.tags; if (!PATH_HW.has(t.highway)) continue;
    if (['private', 'no'].includes(t.access) || ['sidewalk', 'crossing', 'traffic_island'].includes(t.footway)) continue;
    let c = t.highway === 'track' ? 'pista' : (t.highway === 'cycleway' || (t.highway === 'path' && t.bicycle === 'designated')) ? 'bici' : 'sender';
    if (/via verda|vía verde|via-verda|greenway|passeig fluvial|anella verda|ronda verda/i.test(t.name || '')) c = 'viaverda';
    const lines = clipLines(linesFromWays([id], store), grid, distCom, CFG.pathBufferM);
    for (const l of lines) {
      const s = simplify(l, 3).map(p => [r5(p[0]), r5(p[1])]); if (s.length < 2) continue;
      kmByClass[c] = (kmByClass[c] || 0) + lineLen(l) / 1000;
      const p = { c }; if (t.name) p.n = t.name; if (t.highway === 'steps') p.st = 1; if (t.tracktype) p.tt = t.tracktype;
      pathFeats.push({ type: 'Feature', properties: p, geometry: { type: 'LineString', coordinates: s } });
    }
  }
  await writeJSON('paths.geojson', { type: 'FeatureCollection', features: pathFeats });
  log('Camins:', pathFeats.length, 'trams ·', Object.entries(kmByClass).map(([k, v]) => `${k} ${v.toFixed(0)} km`).join(' · '));

  /* 6. Punts d'interès ---------------------------------------------------- */
  const distRoute = grid.distance(allRouteSeed);
  const cand = store.poiNodes.map(p => ({ id: 'n' + p.id, lon: p.lon, lat: p.lat, tags: p.tags }));
  for (const [id, w] of store.ways) {
    if (!poiCategory(w.tags)) continue;
    const cs = w.refs.map(r => store.nodes.get(r)).filter(Boolean); if (!cs.length) continue;
    const lon = cs.reduce((s, c) => s + c[0], 0) / cs.length, lat = cs.reduce((s, c) => s + c[1], 0) / cs.length;
    cand.push({ id: 'w' + id, lon, lat, tags: w.tags });
  }
  const pois = [], seen = [];
  for (const p of cand) {
    const [cat, sub] = poiCategory(p.tags), gi = grid.idx(p.lon, p.lat); if (gi < 0 || distCom[gi] > CFG.poiBufferM) continue;
    if (cat === 'parking' && distRoute[gi] > 500) continue;           // aparcaments útils per començar rutes
    if (cat === 'bus' && sub === 'bus_stop' && distRoute[gi] > 300) continue;
    const nm = p.tags.name || p.tags['name:ca'] || null;
    if (seen.some(s => s.cat === cat && (s.nm || '') === (nm || '') && hav([s.lon, s.lat], [p.lon, p.lat]) < (nm ? 120 : 25))) continue;
    seen.push({ cat, nm, lon: p.lon, lat: p.lat });
    const pr = clean({ id: p.id, c: cat, s: sub, ...nameProps(p.tags), ele: cat === 'mirador' ? Math.round(parseFloat(p.tags.ele) || elevation(p.lon, p.lat)) : null, op: cat === 'tren' || cat === 'bus' ? (p.tags.network || p.tags.operator) : null, wd: p.tags.wikidata });
    pois.push({ type: 'Feature', properties: pr, geometry: { type: 'Point', coordinates: [r5(p.lon), r5(p.lat)] } });
  }
  const poiCount = pois.reduce((o, f) => (o[f.properties.c] = (o[f.properties.c] || 0) + 1, o), {});
  await writeJSON('pois.geojson', { type: 'FeatureCollection', features: pois });
  log('POI:', pois.length, JSON.stringify(poiCount));

  /* 7. Municipis i meta --------------------------------------------------- */
  for (const m of munis) m.routes = routes.filter(r => (r.properties.municipalities || '').split('|').includes(m.name)).length;
  await writeJSON('municipis.json', munis.slice().sort((a, b) => a.name.localeCompare(b.name, 'ca')));
  const byKind = routes.reduce((o, f) => (o[f.properties.kind] = (o[f.properties.kind] || 0) + 1, o), {});
  const meta = {
    generated: new Date().toISOString(), osm_timestamp: store.timestamp, source: store.source,
    comarca: { name: CFG.comarca, osm_relation: comRel[0], bbox: comBbox.map(r5), added_municipalities: added, area_km2: Math.round([...inside].reduce((a, b) => a + b, 0) * grid.cellM * grid.cellM / 1e6 * 10) / 10 },
    counts: { routes: routes.length, routes_by_kind: byKind, routes_km: Math.round(routes.reduce((s, r) => s + r.properties.km, 0)), path_segments: pathFeats.length, paths_km: Object.fromEntries(Object.entries(kmByClass).map(([k, v]) => [k, Math.round(v)])), paths_km_total: Math.round(Object.values(kmByClass).reduce((a, b) => a + b, 0)), pois: poiCount, municipalities: munis.length },
    licenses: {
      osm: '© OpenStreetMap contributors — Open Database License (ODbL) 1.0 · https://www.openstreetmap.org/copyright',
      dem: 'Terrain Tiles (AWS Open Data / Tilezen). Europe terrain data produced using Copernicus data and information funded by the European Union - EU-DEM layers; SRTM/GMTED2010 courtesy of the U.S. Geological Survey'
    },
    method: { difficulty: 'Temps estimat DIN 33466 (a peu: 4 km/h, +300 m/h, -500 m/h); BTT 12 km/h +600 m/h; carretera 18 km/h +700 m/h. 1 fàcil · 2 moderada · 3 difícil · 4 molt difícil', dem_zoom: CFG.demZoom, profile_step_m: 25 }
  };
  await writeJSON('meta.json', meta, false, true);
  return meta;
}

async function writeJSON(rel, obj, quiet = false, pretty = false) {
  const f = path.join(CFG.out, rel); await fsp.mkdir(path.dirname(f), { recursive: true });
  const s = pretty ? JSON.stringify(obj, null, 2) : JSON.stringify(obj);
  await fsp.writeFile(f, s);
  if (!quiet) log(`  → data/${rel} (${(s.length / 1024).toFixed(0)} KB)`);
}

/* ------------------------------------------------------------------ */
(async () => {
  const t0 = Date.now(); let store;
  if (CFG.source === 'pbf') store = await loadFromPbf();
  else {
    try { store = await loadFromOverpass(); }
    catch (e) { if (CFG.source === 'overpass') throw e; log('Overpass ha fallat (' + e.message + '). Faig servir l\'extracte PBF de Catalunya.'); store = await loadFromPbf(); }
  }
  const meta = await build(store);
  log(`Fet en ${((Date.now() - t0) / 1000).toFixed(0)} s ·`, JSON.stringify(meta.counts));
})().catch(e => { console.error('[valia] ERROR:', e); process.exit(1); });
