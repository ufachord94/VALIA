/*!
 * Valia Map · mapa del Vallès Oriental per a l'app Valia
 * MapLibre GL JS + OpenFreeMap + OpenStreetMap + Terrain Tiles + ICGC
 * Mòdul ES sense dependències externes en temps d'execució (llibreries a ./vendor).
 *
 *   import { initValiaMap } from './valia-map/valia-map.js';
 *   const map = await initValiaMap(document.getElementById('mapa'), { lang: 'ca', theme: 'light', mode: 'full' });
 */
export const VALIA_MAP_VERSION = '1.0.0';

const MODULE_BASE = new URL('./', import.meta.url).href;
const DEM_URL = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
const ORTO_URL = 'https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto/MON3857NW/{z}/{x}/{y}.png';
const LANGS = ['ca', 'es', 'en', 'fr'];
const TERRAIN = { source: 'valia-terrain', exaggeration: 1.35 };

/* ------------------------------------------------------------------ */
/* Textos (4 idiomes)                                                  */
/* ------------------------------------------------------------------ */
const T = {
  ca: {
    search: 'Cerca rutes o municipis', layers: 'Capes', close: 'Tanca', base: 'Mapa base', bMap: 'Mapa', bTopo: 'Relleu', bSat: 'Satèl·lit',
    routes: 'Rutes senyalitzades', hiking: 'Senderisme', mtb: 'BTT', road: 'Carretera i cicloturisme', paths: 'Xarxa de camins', contours: 'Corbes de nivell', terrain: 'Vista 3D',
    pois: 'Punts d\'interès', mirador: 'Miradors', font: 'Fonts', patrimoni: 'Patrimoni', picnic: 'Àrees de pícnic', parking: 'Aparcaments', tren: 'Estacions de Rodalies', bus: 'Bus',
    distance: 'Distància', up: 'Desnivell +', down: 'Desnivell −', time: 'Temps est.', difficulty: 'Dificultat', maxEle: 'Alt. màxima',
    diff: ['', 'Fàcil', 'Moderada', 'Difícil', 'Molt difícil'], detail: 'Veure detall', profile: 'Perfil d\'elevació', partial: 'Tram dins del Vallès Oriental', total: 'recorregut total',
    roundtrip: 'Circular', linear: 'Lineal', municipalities: 'Municipis', noResults: 'Cap resultat', routesN: n => `${n} rutes`, municipality: 'Municipi',
    locate: 'Ubica\'m', locError: 'No s\'ha pogut obtenir la ubicació', zoomIn: 'Apropa', zoomOut: 'Allunya', compass: 'Orienta al nord', toggle3d: 'Vista 3D',
    loading: 'Carregant el mapa…', mapOf: 'Mapa del Vallès Oriental', open: 'Obre el mapa', kinds: { gr: 'GR', pr: 'PR', sl: 'SL', local: 'Local', btt: 'BTT', ciclo: 'Cicloturisme' },
    stage: 'Etapa de', clearSearch: 'Esborra la cerca', km: 'km', h: 'h', ele: 'm', estimated: 'Temps i dificultat estimats a partir de la distància i el desnivell.', outside: 'Fora de la comarca'
  },
  es: {
    search: 'Buscar rutas o municipios', layers: 'Capas', close: 'Cerrar', base: 'Mapa base', bMap: 'Mapa', bTopo: 'Relieve', bSat: 'Satélite',
    routes: 'Rutas señalizadas', hiking: 'Senderismo', mtb: 'BTT', road: 'Carretera y cicloturismo', paths: 'Red de caminos', contours: 'Curvas de nivel', terrain: 'Vista 3D',
    pois: 'Puntos de interés', mirador: 'Miradores', font: 'Fuentes', patrimoni: 'Patrimonio', picnic: 'Áreas de pícnic', parking: 'Aparcamientos', tren: 'Estaciones de Rodalies', bus: 'Bus',
    distance: 'Distancia', up: 'Desnivel +', down: 'Desnivel −', time: 'Tiempo est.', difficulty: 'Dificultad', maxEle: 'Alt. máxima',
    diff: ['', 'Fácil', 'Moderada', 'Difícil', 'Muy difícil'], detail: 'Ver detalle', profile: 'Perfil de elevación', partial: 'Tramo dentro del Vallès Oriental', total: 'recorrido total',
    roundtrip: 'Circular', linear: 'Lineal', municipalities: 'Municipios', noResults: 'Sin resultados', routesN: n => `${n} rutas`, municipality: 'Municipio',
    locate: 'Ubícame', locError: 'No se ha podido obtener la ubicación', zoomIn: 'Acercar', zoomOut: 'Alejar', compass: 'Orientar al norte', toggle3d: 'Vista 3D',
    loading: 'Cargando el mapa…', mapOf: 'Mapa del Vallès Oriental', open: 'Abrir el mapa', kinds: { gr: 'GR', pr: 'PR', sl: 'SL', local: 'Local', btt: 'BTT', ciclo: 'Cicloturismo' },
    stage: 'Etapa de', clearSearch: 'Borrar la búsqueda', km: 'km', h: 'h', ele: 'm', estimated: 'Tiempo y dificultad estimados a partir de la distancia y el desnivel.', outside: 'Fuera de la comarca'
  },
  en: {
    search: 'Search routes or towns', layers: 'Layers', close: 'Close', base: 'Base map', bMap: 'Map', bTopo: 'Terrain', bSat: 'Satellite',
    routes: 'Waymarked routes', hiking: 'Hiking', mtb: 'Mountain bike', road: 'Road & cycle touring', paths: 'Path network', contours: 'Contour lines', terrain: '3D view',
    pois: 'Points of interest', mirador: 'Viewpoints', font: 'Springs & fountains', patrimoni: 'Heritage', picnic: 'Picnic areas', parking: 'Car parks', tren: 'Rodalies stations', bus: 'Bus',
    distance: 'Distance', up: 'Ascent', down: 'Descent', time: 'Est. time', difficulty: 'Difficulty', maxEle: 'Max. altitude',
    diff: ['', 'Easy', 'Moderate', 'Hard', 'Very hard'], detail: 'View details', profile: 'Elevation profile', partial: 'Section within Vallès Oriental', total: 'full route',
    roundtrip: 'Loop', linear: 'One way', municipalities: 'Towns', noResults: 'No results', routesN: n => `${n} routes`, municipality: 'Town',
    locate: 'Locate me', locError: 'Your location could not be found', zoomIn: 'Zoom in', zoomOut: 'Zoom out', compass: 'Reset north', toggle3d: '3D view',
    loading: 'Loading map…', mapOf: 'Map of Vallès Oriental', open: 'Open map', kinds: { gr: 'GR', pr: 'PR', sl: 'SL', local: 'Local', btt: 'MTB', ciclo: 'Cycling' },
    stage: 'Stage of', clearSearch: 'Clear search', km: 'km', h: 'h', ele: 'm', estimated: 'Time and difficulty estimated from distance and elevation gain.', outside: 'Outside the county'
  },
  fr: {
    search: 'Chercher itinéraires ou communes', layers: 'Calques', close: 'Fermer', base: 'Fond de carte', bMap: 'Carte', bTopo: 'Relief', bSat: 'Satellite',
    routes: 'Itinéraires balisés', hiking: 'Randonnée', mtb: 'VTT', road: 'Route et cyclotourisme', paths: 'Réseau de chemins', contours: 'Courbes de niveau', terrain: 'Vue 3D',
    pois: 'Points d\'intérêt', mirador: 'Belvédères', font: 'Sources', patrimoni: 'Patrimoine', picnic: 'Aires de pique-nique', parking: 'Parkings', tren: 'Gares Rodalies', bus: 'Bus',
    distance: 'Distance', up: 'Dénivelé +', down: 'Dénivelé −', time: 'Durée est.', difficulty: 'Difficulté', maxEle: 'Alt. max.',
    diff: ['', 'Facile', 'Moyenne', 'Difficile', 'Très difficile'], detail: 'Voir le détail', profile: 'Profil altimétrique', partial: 'Tronçon dans le Vallès Oriental', total: 'parcours complet',
    roundtrip: 'Boucle', linear: 'Linéaire', municipalities: 'Communes', noResults: 'Aucun résultat', routesN: n => `${n} itinéraires`, municipality: 'Commune',
    locate: 'Me localiser', locError: 'Impossible d\'obtenir la position', zoomIn: 'Zoomer', zoomOut: 'Dézoomer', compass: 'Réorienter au nord', toggle3d: 'Vue 3D',
    loading: 'Chargement de la carte…', mapOf: 'Carte du Vallès Oriental', open: 'Ouvrir la carte', kinds: { gr: 'GR', pr: 'PR', sl: 'SL', local: 'Local', btt: 'VTT', ciclo: 'Cyclotourisme' },
    stage: 'Étape de', clearSearch: 'Effacer la recherche', km: 'km', h: 'h', ele: 'm', estimated: 'Durée et difficulté estimées d\'après la distance et le dénivelé.', outside: 'Hors de la comarque'
  }
};

/* Colors d'activitat (contrast AA sobre el fons del mapa i amb halo) */
const ACT = {
  hiking: { light: '#00875A', dark: '#3DDC97' },
  mtb: { light: '#C2410C', dark: '#FF8A4C' },
  road: { light: '#1D5FD1', dark: '#6AB0FF' }
};
const KIND_BADGE = { gr: ['#C8102E', '#fff'], pr: ['#F2C200', '#1A1A1A'], sl: ['#00754A', '#fff'], local: ['#4E5852', '#fff'], btt: ['#B4400B', '#fff'], ciclo: ['#0A55B8', '#fff'] };
const POI = {
  mirador: { color: '#5B3FD0', glyph: 'eye' }, font: { color: '#0A63D6', glyph: 'drop' }, patrimoni: { color: '#8A4A12', glyph: 'castle' },
  picnic: { color: '#00603D', glyph: 'tree' }, parking: { color: '#3D4B5C', glyph: 'P' }, tren: { color: '#C8102E', glyph: 'train' }, bus: { color: '#B0341C', glyph: 'bus' }
};
const POI_ORDER = ['mirador', 'font', 'patrimoni', 'picnic', 'parking', 'tren', 'bus'];

/* ------------------------------------------------------------------ */
/* Càrrega diferida de llibreries i dades                              */
/* ------------------------------------------------------------------ */
let libsP = null;
function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = () => rej(new Error('No s\'ha pogut carregar ' + src)); document.head.appendChild(s); });
}
function loadCss(href) {
  if ([...document.styleSheets].some(s => s.href === href) || document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.appendChild(l);
}
function loadLibs(base) {
  if (!libsP) libsP = (async () => {
    loadCss(base + 'vendor/maplibre-gl.css'); loadCss(base + 'valia-map.css');
    if (!window.maplibregl) await loadScript(base + 'vendor/maplibre-gl.js');
    if (!window.mlcontour) await loadScript(base + 'vendor/maplibre-contour.js').catch(() => null);
    return window.maplibregl;
  })();
  return libsP;
}
const jsonCache = new Map();
function getJSON(url) {
  if (!jsonCache.has(url)) jsonCache.set(url, fetch(url).then(r => { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }).catch(e => { jsonCache.delete(url); throw e; }));
  return jsonCache.get(url);
}
let demSource = null, contourUrl = null;
function contourTiles(ml) {
  if (contourUrl || !window.mlcontour) return contourUrl;
  try {
    demSource = new window.mlcontour.DemSource({ url: DEM_URL, encoding: 'terrarium', maxzoom: 13, worker: true, cacheSize: 60, timeoutMs: 15000 });
    demSource.setupMaplibre(ml);
    contourUrl = demSource.contourProtocolUrl({ multiplier: 1, thresholds: { 11: [100, 500], 12: [50, 250], 13: [20, 100], 14: [10, 50], 15: [10, 50] }, contourLayer: 'contours', elevationKey: 'ele', levelKey: 'level', extent: 4096, buffer: 1 });
  } catch (e) { contourUrl = null; }
  return contourUrl;
}

/* ------------------------------------------------------------------ */
/* Utilitats                                                           */
/* ------------------------------------------------------------------ */
const norm = s => (s || '').toString().normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[·'’\-_.]/g, ' ').replace(/\s+/g, ' ').trim();
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = (n, lang, d = 1) => Number(n).toLocaleString(lang === 'en' ? 'en-GB' : lang + '-ES', { maximumFractionDigits: d, minimumFractionDigits: 0 });
const hav = (a, b) => { const R = 6371008.8, r = Math.PI / 180, dLat = (b[1] - a[1]) * r, dLon = (b[0] - a[0]) * r; const s = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLon / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(s)); };
const fmtHours = (h, lang) => { const H = Math.floor(h), M = Math.round((h - H) * 60); return M ? `${H} h ${String(M).padStart(2, '0')}` : `${H} h`; };
const routeName = (p, lang) => p['name_' + lang] || p.name;
const nameExpr = lang => ['coalesce', ['get', 'name_' + lang], ['get', 'name']];
const tileNameExpr = lang => lang === 'ca' ? ['coalesce', ['get', 'name:ca'], ['get', 'name']] : ['coalesce', ['get', 'name:' + lang], ['get', 'name:ca'], ['get', 'name']];
function prefersDark() { return !!(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches); }
const SVG = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  loc: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
  cube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
  hiking: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13" cy="4" r="2"/><path d="m7 22 3-7 3 2v5M10 15l1-5 3 2 3 1M11 10 8 12v3"/></svg>',
  mtb: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="M15 6h2l1.5 11M5.5 17 9 9h6l-3 8M9 9 8 6"/></svg>',
  road: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="m5.5 17 4-7h7l2 7M9.5 10 12 17M14 6h3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* Icones de POI dibuixades en canvas (sense sprites externs) */
function poiImage(cat, dark) {
  const S = 64, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  g.beginPath(); g.arc(32, 32, 27, 0, Math.PI * 2); g.fillStyle = POI[cat].color; g.fill(); g.lineWidth = 5; g.strokeStyle = dark ? '#0D1210' : '#FFFFFF'; g.stroke();
  g.save(); g.translate(14, 14); g.scale(1.5, 1.5); g.strokeStyle = '#fff'; g.fillStyle = '#fff'; g.lineWidth = 2.2; g.lineCap = 'round'; g.lineJoin = 'round';
  const P = d => new Path2D(d), gl = POI[cat].glyph;
  if (gl === 'eye') { g.stroke(P('M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z')); g.beginPath(); g.arc(12, 12, 3, 0, 7); g.fill(); }
  else if (gl === 'drop') g.fill(P('M12 2.5c3 4 6.5 7.6 6.5 11.2A6.5 6.5 0 0 1 5.5 13.7C5.5 10.1 9 6.5 12 2.5Z'));
  else if (gl === 'castle') { g.stroke(P('M4 21V9l2-1V5h2.5v2h2V5h3v2h2V5H18v3l2 1v12Z')); g.stroke(P('M10 21v-5h4v5')); }
  else if (gl === 'tree') { g.fill(P('M12 2 18 11h-3.5l4.5 6H5l4.5-6H6Z')); g.stroke(P('M12 17v5')); }
  else if (gl === 'train') { g.stroke(P('M7 3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z')); g.stroke(P('M4 11h16M8 21l2-4M16 21l-2-4')); g.beginPath(); g.arc(8.5, 14, 1, 0, 7); g.arc(15.5, 14, 1, 0, 7); g.fill(); }
  else if (gl === 'bus') { g.stroke(P('M6 3h12a2 2 0 0 1 2 2v12H4V5a2 2 0 0 1 2-2Z')); g.stroke(P('M4 11h16M7 17v3M17 17v3')); }
  else if (gl === 'P') { g.font = 'bold 19px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('P', 12, 13); }
  g.restore();
  return g.getImageData(0, 0, S, S);
}

/* ------------------------------------------------------------------ */
/* Gestió global: un sol mapa interactiu actiu                         */
/* ------------------------------------------------------------------ */
let activeFull = null;
const live = new Set();
let previewChain = Promise.resolve();
const snapshotCache = new Map();

export async function preloadValiaMap(opts = {}) {
  const base = opts.basePath || MODULE_BASE;
  await loadLibs(base);
  await Promise.all(['data/routes.geojson', 'styles/' + (opts.theme === 'dark' ? 'dark' : 'light') + '.json'].map(u => getJSON(base + u)));
}
/** Llista de rutes (propietats) per a cercadors o llistats de l'app. */
export async function getValiaRoutes(opts = {}) {
  const fc = await getJSON((opts.basePath || MODULE_BASE) + 'data/routes.geojson');
  return fc.features.map(f => f.properties);
}
/** Cerca rutes per nom, codi o municipi (insensible a accents). */
export async function searchValiaRoutes(q, opts = {}) {
  const rs = await getValiaRoutes(opts), n = norm(q); if (!n) return [];
  return rs.filter(p => norm([p.name, p.name_es, p.name_en, p.name_fr, p.ref, p.parent, (p.municipalities || '').replace(/\|/g, ' ')].join(' ')).includes(n));
}
export function destroyAllValiaMaps() { [...live].forEach(m => m.destroy()); }

/**
 * Munta automàticament tots els elements <div data-valia-map='{"mode":"preview","route":7375461}'>
 * que apareguin dins de `root`, i els destrueix quan surten del DOM.
 * @param {HTMLElement} root
 * @param {object} d  { lang: ()=>'ca', theme: ()=>'light', options:{...}, onRouteDetail(p), onRouteSelect(p), onOpen(opts, el) }
 *                    `lang` i `theme` poden ser valors o funcions (es tornen a llegir a cada muntatge i a sync()).
 */
export function autoMountValiaMaps(root = document.body, d = {}) {
  const val = v => (typeof v === 'function' ? v() : v), mounted = new Set(); let tm = null;
  const scan = () => {
    root.querySelectorAll('[data-valia-map]').forEach(el => {
      if (el.__valiaMap || el.__vmPending) return;
      let o = {}; try { o = JSON.parse(el.dataset.valiaMap || '{}'); } catch (e) { console.warn('[valia-map] data-valia-map no és JSON vàlid', el); }
      const opts = Object.assign({ lang: val(d.lang), theme: val(d.theme) }, d.options || {}, o);
      if (d.onRouteDetail) opts.onRouteDetail = d.onRouteDetail;
      if (d.onRouteSelect) opts.onRouteSelect = d.onRouteSelect;
      if (d.onPoiSelect) opts.onPoiSelect = d.onPoiSelect;
      if (d.onOpen && opts.mode === 'preview') opts.onOpen = () => d.onOpen(o, el);
      el.__vmPending = true;
      initValiaMap(el, opts).then(m => mounted.add(m), e => console.error('[valia-map]', e)).finally(() => { el.__vmPending = false; });
    });
    mounted.forEach(m => { if (!m.el.isConnected) { m.destroy(); mounted.delete(m); } });
  };
  const mo = new MutationObserver(() => { clearTimeout(tm); tm = setTimeout(scan, 50); });
  mo.observe(root, { childList: true, subtree: true });
  scan();
  return {
    scan,
    sync() { const l = val(d.lang), th = val(d.theme); mounted.forEach(m => { if (m.el.isConnected) { m.setLang(l); m.setTheme(th); } }); },
    disconnect() { mo.disconnect(); clearTimeout(tm); }
  };
}

/**
 * Inicialitza un mapa Valia.
 * @param {HTMLElement|string} container
 * @param {object} o  { lang, theme:'light'|'dark'|'auto', mode:'full'|'preview', route, base:'map'|'topo'|'sat',
 *                      layers:{...}, center, zoom, basePath, onRouteSelect, onRouteDetail, onPoiSelect, onOpen, ariaLabel }
 */
export async function initValiaMap(container, o = {}) {
  const el = typeof container === 'string' ? document.querySelector(container) : container;
  if (!el) throw new Error('initValiaMap: contenidor inexistent');
  if (el.__valiaMap) el.__valiaMap.destroy();
  const m = (o.mode === 'preview') ? new ValiaPreview(el, o) : new ValiaMap(el, o);
  el.__valiaMap = m; live.add(m);
  await m.ready;
  return m;
}

/* ------------------------------------------------------------------ */
/* Composició d'estil                                                  */
/* ------------------------------------------------------------------ */
function composeStyle(baseStyle, st, data) {
  const s = JSON.parse(JSON.stringify(baseStyle)), dark = st.theme === 'dark', L = st.lang, sat = st.base === 'sat', topo = st.base === 'topo';
  const firstSymbol = s.layers.findIndex(l => l.type === 'symbol');
  const firstRoad = s.layers.findIndex(l => /^tunnel_|^road_/.test(l.id));
  for (const l of s.layers) {
    if (l.layout && l.layout['text-field']) l.layout['text-field'] = tileNameExpr(L);
    if (l.id === 'valia-hillshade') {
      l.layout = { visibility: sat ? 'none' : 'visible' };
      l.paint['hillshade-exaggeration'] = topo ? (dark ? 0.7 : 0.62) : (dark ? 0.42 : 0.3);
    }
    if (sat && l.type === 'symbol') { l.paint = Object.assign({}, l.paint, { 'text-color': '#FFFFFF', 'text-halo-color': 'rgba(0,0,0,0.75)', 'text-halo-width': 1.6 }); }
    if (topo && /^landcover_wood$|^park$/.test(l.id)) l.paint['fill-opacity'] = dark ? 0.55 : 0.5;
  }
  const insertAt = (idx, ...ls) => s.layers.splice(idx, 0, ...ls);
  const before = id => { const i = s.layers.findIndex(l => l.id === id); return i < 0 ? s.layers.length : i; };

  /* Satèl·lit ICGC */
  if (sat) {
    s.sources['icgc-orto'] = { type: 'raster', tiles: [ORTO_URL], tileSize: 256, maxzoom: 19, minzoom: 7, bounds: [0.1, 40.4, 3.4, 42.9],
      attribution: 'Ortofoto <a href="https://www.icgc.cat/" target="_blank" rel="noopener">© Institut Cartogràfic i Geològic de Catalunya (ICGC)</a>, CC BY 4.0' };
    insertAt(firstSymbol, { id: 'valia-orto', type: 'raster', source: 'icgc-orto', paint: { 'raster-fade-duration': 150 } });
  }
  /* Corbes de nivell */
  if (st.layers.contours && data.contourUrl) {
    s.sources['valia-contours'] = { type: 'vector', tiles: [data.contourUrl], maxzoom: 15, minzoom: 11 };
    const cc = sat ? 'rgba(255,255,255,0.55)' : dark ? 'rgba(170,200,185,0.30)' : 'rgba(105,82,52,0.42)';
    insertAt(sat ? before('valia-orto') + 1 : (firstRoad > 0 ? firstRoad : firstSymbol),
      { id: 'valia-contour-lines', type: 'line', source: 'valia-contours', 'source-layer': 'contours', minzoom: 11,
        paint: { 'line-color': cc, 'line-width': ['match', ['get', 'level'], 1, 1.1, 0.55] } });
    insertAt(before(s.layers.find(l => l.type === 'symbol' && l.id !== 'valia-orto')?.id),
      { id: 'valia-contour-labels', type: 'symbol', source: 'valia-contours', 'source-layer': 'contours', minzoom: 12.5, filter: ['>', ['get', 'level'], 0],
        layout: { 'symbol-placement': 'line', 'text-size': 10, 'text-field': ['concat', ['number-format', ['get', 'ele'], {}], ' m'], 'text-font': ['Noto Sans Regular'], 'symbol-spacing': 320 },
        paint: { 'text-color': sat ? '#fff' : dark ? '#9FB5A9' : '#7A6346', 'text-halo-color': sat ? 'rgba(0,0,0,.7)' : dark ? '#0F1512' : '#F4F3EC', 'text-halo-width': 1.2 } });
  }
  const symIdx = s.layers.findIndex(l => l.type === 'symbol' && !/^valia-contour/.test(l.id));
  const ours = [];

  /* Màscara fora de la comarca + límit */
  s.sources['valia-mask'] = { type: 'geojson', data: data.base + 'data/mask.geojson' };
  s.sources['valia-limit'] = { type: 'geojson', data: data.base + 'data/limit.geojson' };
  ours.push({ id: 'valia-mask', type: 'fill', source: 'valia-mask', paint: { 'fill-color': dark ? '#000000' : '#1E2B24', 'fill-opacity': dark ? 0.45 : (sat ? 0.38 : 0.22) } });
  ours.push({ id: 'valia-limit-glow', type: 'line', source: 'valia-limit', paint: { 'line-color': dark ? '#3DDC97' : '#00A86B', 'line-opacity': 0.22, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 4, 13, 9], 'line-blur': 3 } });
  ours.push({ id: 'valia-limit', type: 'line', source: 'valia-limit', paint: { 'line-color': dark ? '#5FD3A2' : '#00754A', 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.2, 13, 2.2], 'line-dasharray': [3, 1.5], 'line-opacity': 0.85 } });

  /* Xarxa de camins */
  if (data.full) {
    s.sources['valia-paths'] = { type: 'geojson', data: st.pathsLoaded ? data.base + 'data/paths.geojson' : { type: 'FeatureCollection', features: [] }, tolerance: 0.45, buffer: 32, maxzoom: 15 };
    const pc = dark ? { sender: '#C9B48E', pista: '#9C8D72', bici: '#6AB0FF', viaverda: '#5FD3A2' } : { sender: '#7A5F3A', pista: '#A08B68', bici: '#1D6FD8', viaverda: '#13925F' };
    if (sat) Object.assign(pc, { sender: '#FFE8B8', pista: '#F3DDB0' });
    const vis = st.layers.paths ? 'visible' : 'none';
    ours.push({ id: 'valia-paths-track', type: 'line', source: 'valia-paths', minzoom: 11, filter: ['==', ['get', 'c'], 'pista'], layout: { visibility: vis, 'line-cap': 'round' },
      paint: { 'line-color': pc.pista, 'line-opacity': ['interpolate', ['linear'], ['zoom'], 11, 0.35, 14, 0.8], 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 0.6, 14, 1.4, 17, 3] } });
    ours.push({ id: 'valia-paths-path', type: 'line', source: 'valia-paths', minzoom: 11.5, filter: ['==', ['get', 'c'], 'sender'], layout: { visibility: vis },
      paint: { 'line-color': pc.sender, 'line-opacity': ['interpolate', ['linear'], ['zoom'], 11.5, 0.35, 14, 0.85], 'line-width': ['interpolate', ['linear'], ['zoom'], 11.5, 0.6, 14, 1.2, 17, 2.4], 'line-dasharray': [2.2, 1.4] } });
    ours.push({ id: 'valia-paths-bike', type: 'line', source: 'valia-paths', minzoom: 11, filter: ['match', ['get', 'c'], ['bici', 'viaverda'], true, false], layout: { visibility: vis, 'line-cap': 'round' },
      paint: { 'line-color': ['match', ['get', 'c'], 'viaverda', pc.viaverda, pc.bici], 'line-opacity': 0.8, 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 0.8, 14, 1.8, 17, 3.4] } });
  }

  /* Rutes senyalitzades */
  s.sources['valia-routes'] = { type: 'geojson', data: data.base + 'data/routes.geojson', promoteId: 'id', tolerance: 0.3 };
  s.sources['valia-route-labels'] = { type: 'geojson', data: data.base + 'data/route-labels.geojson', tolerance: 1 };
  const actOn = ['hiking', 'mtb', 'road'].filter(a => st.layers[a]);
  const rf = ['match', ['get', 'activity'], actOn.length ? actOn : ['__none__'], true, false];
  const col = ['match', ['get', 'activity'], 'mtb', ACT.mtb[dark ? 'dark' : 'light'], 'road', ACT.road[dark ? 'dark' : 'light'], ACT.hiking[dark ? 'dark' : 'light']];
  const sel = st.selected, isSel = ['==', ['get', 'id'], sel ?? -1];
  const dim = sel != null ? ['case', isSel, 1, 0.32] : 1;
  const w = k => ['interpolate', ['linear'], ['zoom'], 8, 1.3 * k, 11, 2.4 * k, 14, 4 * k, 17, 6.5 * k];
  ours.push({ id: 'valia-routes-casing', type: 'line', source: 'valia-routes', filter: rf, layout: { 'line-join': 'round', 'line-cap': 'round' },
    paint: { 'line-color': dark ? '#0B100E' : '#FFFFFF', 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 2.6, 11, 4.4, 14, 7, 17, 10.5], 'line-opacity': sel != null ? ['case', isSel, 1, 0.25] : 0.92 } });
  ours.push({ id: 'valia-routes', type: 'line', source: 'valia-routes', filter: rf, layout: { 'line-join': 'round', 'line-cap': 'round', 'line-sort-key': ['match', ['get', 'kind'], 'gr', 3, 'pr', 2, 'sl', 1, 0] },
    paint: { 'line-color': col, 'line-width': w(1), 'line-opacity': dim } });
  ours.push({ id: 'valia-routes-dash', type: 'line', source: 'valia-routes', filter: ['all', rf, ['==', ['get', 'kind'], 'gr']], minzoom: 12,
    paint: { 'line-color': dark ? '#0B100E' : '#FFFFFF', 'line-width': ['interpolate', ['linear'], ['zoom'], 12, 0.8, 17, 1.6], 'line-dasharray': [2, 3], 'line-opacity': sel != null ? ['case', isSel, 0.9, 0.2] : 0.75 } });
  if (sel != null) {
    ours.push({ id: 'valia-route-sel-glow', type: 'line', source: 'valia-routes', filter: isSel, layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: { 'line-color': col, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 9, 14, 18], 'line-opacity': 0.25, 'line-blur': 4 } });
    ours.push({ id: 'valia-route-sel', type: 'line', source: 'valia-routes', filter: isSel, layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: { 'line-color': col, 'line-width': w(1.45) } });
  }
  ours.push({ id: 'valia-routes-hit', type: 'line', source: 'valia-routes', filter: rf, paint: { 'line-color': '#000', 'line-opacity': 0.01, 'line-width': 22 } });

  /* Punts d'inici/final de la ruta seleccionada */
  s.sources['valia-sel-pts'] = { type: 'geojson', data: data.selPts || { type: 'FeatureCollection', features: [] } };
  ours.push({ id: 'valia-sel-pts', type: 'circle', source: 'valia-sel-pts',
    paint: { 'circle-radius': ['match', ['get', 't'], 'start', 7, 6], 'circle-color': ['match', ['get', 't'], 'start', '#FFFFFF', dark ? '#ECF2EE' : '#0B0D0C'], 'circle-stroke-width': 3, 'circle-stroke-color': ['match', ['get', 't'], 'start', dark ? '#3DDC97' : '#00754A', dark ? '#0B0D0C' : '#FFFFFF'] } });

  /* POI (agrupats) */
  if (data.full) {
    s.sources['valia-pois'] = { type: 'geojson', data: data.pois, cluster: true, clusterRadius: 46, clusterMaxZoom: 14, clusterMinPoints: 3 };
    ours.push({ id: 'valia-poi-cluster', type: 'circle', source: 'valia-pois', filter: ['has', 'point_count'], minzoom: 10.5,
      paint: { 'circle-color': dark ? '#18201C' : '#FFFFFF', 'circle-stroke-color': dark ? '#3DDC97' : '#00754A', 'circle-stroke-width': 2, 'circle-opacity': 0.92,
        'circle-radius': ['step', ['get', 'point_count'], 12, 10, 14, 50, 17, 150, 20] } });
  }

  /* Etiquetes de les rutes (seguint la línia, en l'idioma actiu) */
  const NM = nameExpr(L);
  const lblLayer = (g, minzoom, maxzoom) => ({ id: 'valia-routes-label-' + g, type: 'symbol', source: 'valia-route-labels', minzoom, maxzoom,
    filter: ['all', ['==', ['get', 'g'], g], ...(sel != null ? [rf, isSel] : [rf])],
    layout: { 'symbol-placement': 'line', 'symbol-spacing': g === 0 ? 220 : 300, 'text-field': g < 2 ? ['coalesce', ['get', 'ref'], NM] : NM, 'text-font': ['Noto Sans Bold'],
      'text-size': g === 0 ? 11 : g === 1 ? 12 : 13.5, 'text-max-angle': 60, 'text-padding': 2, 'symbol-sort-key': ['match', ['get', 'kind'], 'gr', 0, 'pr', 1, 'sl', 2, 3], 'text-letter-spacing': 0.02 },
    paint: { 'text-color': sat ? '#FFFFFF' : (dark ? ['match', ['get', 'activity'], 'mtb', '#FFB38A', 'road', '#9CCBFF', '#7FE8B8'] : ['match', ['get', 'activity'], 'mtb', '#9A3409', 'road', '#174CA8', '#006B48']),
      'text-halo-color': sat ? 'rgba(0,0,0,.8)' : dark ? 'rgba(11,16,14,.95)' : 'rgba(255,255,255,.96)', 'text-halo-width': 1.8 } });
  ours.push(lblLayer(0, 9.5, 12), lblLayer(1, 12, 14), lblLayer(2, 14, 24));
  if (data.full) {
    ours.push({ id: 'valia-poi-cluster-count', type: 'symbol', source: 'valia-pois', filter: ['has', 'point_count'], minzoom: 10.5,
      layout: { 'text-field': ['get', 'point_count_abbreviated'], 'text-font': ['Noto Sans Bold'], 'text-size': 11, 'text-allow-overlap': true, 'text-ignore-placement': true },
      paint: { 'text-color': dark ? '#ECF2EE' : '#00603D' } });
    ours.push({ id: 'valia-poi', type: 'symbol', source: 'valia-pois', filter: ['!', ['has', 'point_count']], minzoom: 10.5,
      layout: { 'icon-image': ['concat', 'valia-poi-', ['get', 'c']], 'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0.55, 15, 0.75], 'icon-allow-overlap': true, 'icon-ignore-placement': true,
        'text-field': ['step', ['zoom'], '', 14.5, ['coalesce', ['get', 'name_' + L], ['get', 'name'], '']], 'text-font': ['Noto Sans Regular'], 'text-size': 11.5, 'text-offset': [0, 1.35], 'text-anchor': 'top', 'text-optional': true, 'text-max-width': 9 },
      paint: { 'text-color': sat ? '#fff' : dark ? '#DDE6E1' : '#2B332F', 'text-halo-color': sat ? 'rgba(0,0,0,.8)' : dark ? '#0F1512' : '#FFFFFF', 'text-halo-width': 1.4 } });
  }
  insertAt(symIdx < 0 ? s.layers.length : symIdx, ...ours.filter(l => l.type !== 'symbol'));
  // els noms de ruta van al capdamunt: es col·loquen primer i tenen prioritat sobre la resta d'etiquetes
  const syms = ours.filter(l => l.type === 'symbol');
  s.layers.push(...syms.filter(l => !l.id.startsWith('valia-routes-label')), ...syms.filter(l => l.id.startsWith('valia-routes-label')));

  /* 3D (el terreny s'aplica amb map.setTerrain abans del diff: vegeu ValiaMap.set3D) */
  if (st.terrain3d) {
    s.terrain = TERRAIN;
    s.sky = { 'sky-color': dark ? '#0B1411' : '#CFE6F2', 'horizon-color': dark ? '#1B2A23' : '#EEF3EA', 'fog-color': dark ? '#0F1512' : '#F4F3EC', 'sky-horizon-blend': 0.6, 'horizon-fog-blend': 0.6, 'fog-ground-blend': 0.4, 'atmosphere-blend': 0 };
  } else { delete s.terrain; delete s.sky; }
  return s;
}

/* ------------------------------------------------------------------ */
/* Mapa complet (interactiu)                                           */
/* ------------------------------------------------------------------ */
class ValiaMap {
  constructor(el, o) {
    this.el = el; this.o = o; this.base = o.basePath || MODULE_BASE; this.handlers = {};
    this.st = {
      lang: LANGS.includes(o.lang) ? o.lang : 'ca', themePref: o.theme || 'auto', theme: 'light', base: o.base || 'map',
      layers: Object.assign({ hiking: true, mtb: true, road: true, paths: true, contours: o.base === 'topo', pois: { mirador: true, font: true, patrimoni: true, picnic: true, parking: false, tren: true, bus: false } }, o.layers || {}),
      selected: null, terrain3d: !!o.terrain3d, pathsLoaded: false
    };
    this.st.theme = this.st.themePref === 'auto' ? (prefersDark() ? 'dark' : 'light') : this.st.themePref;
    this.ready = this._init().catch(e => { this._error(e); throw e; });
  }
  get t() { return T[this.st.lang]; }
  on(ev, cb) { (this.handlers[ev] = this.handlers[ev] || []).push(cb); return this; }
  _emit(ev, ...a) { (this.handlers[ev] || []).forEach(f => { try { f(...a); } catch (e) { console.error(e); } }); }

  async _init() {
    if (activeFull && activeFull !== this) activeFull.destroy();
    activeFull = this;
    const el = this.el; el.classList.add('vm-root'); el.classList.toggle('vm-dark', this.st.theme === 'dark');
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.innerHTML = `<div class="vm-canvas" role="application" aria-label="${esc(this.o.ariaLabel || this.t.mapOf)}"></div><div class="vm-loading"><span class="vm-spin" aria-hidden="true"></span><span class="vm-ltx">${esc(this.t.loading)}</span></div>`;
    const ml = await loadLibs(this.base);
    if (this._destroyed) return;
    const [routes, pois, munis, meta] = await Promise.all(['data/routes.geojson', 'data/pois.geojson', 'data/municipis.json', 'data/meta.json'].map(u => getJSON(this.base + u)));
    if (this._destroyed) return;
    this.routes = routes; this.poisAll = pois; this.munis = munis; this.meta = meta;
    this.routeById = new Map(routes.features.map(f => [f.properties.id, f]));
    this.ml = ml; this.contourUrl = contourTiles(ml);
    const styleJson = await this._baseStyle();
    const b = meta.comarca.bbox;
    const map = this.map = new ml.Map({
      container: el.querySelector('.vm-canvas'), style: this._compose(styleJson), bounds: this.o.center ? undefined : [[b[0], b[1]], [b[2], b[3]]],
      center: this.o.center, zoom: this.o.zoom, fitBoundsOptions: { padding: 24 }, minZoom: 6.5, maxZoom: 18.5, maxPitch: 75, attributionControl: false,
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2), fadeDuration: 180, refreshExpiredTiles: false, dragRotate: true, touchPitch: true, cooperativeGestures: false,
      locale: { 'NavigationControl.ZoomIn': this.t.zoomIn, 'NavigationControl.ZoomOut': this.t.zoomOut, 'NavigationControl.ResetBearing': this.t.compass, 'GeolocateControl.FindMyLocation': this.t.locate, 'GeolocateControl.LocationNotAvailable': this.t.locError }
    });
    this._addImages();
    // icones del sprite d'OpenFreeMap que no existeixen per a algunes subclasses de POI: imatge buida (evita avisos)
    const blank = { width: 1, height: 1, data: new Uint8Array(4) };
    map.on('styleimagemissing', e => { if (/^valia-poi-/.test(e.id)) return this._addImages(); try { if (!map.hasImage(e.id)) map.addImage(e.id, blank); } catch (er) { /* res */ } });
    map.addControl(new ml.AttributionControl({ compact: true }), 'bottom-right');
    map.addControl(new ml.ScaleControl({ maxWidth: 90, unit: 'metric' }), 'bottom-left');
    this.nav = new ml.NavigationControl({ visualizePitch: true, showCompass: true, showZoom: true });
    map.addControl(this.nav, 'top-right');
    this.geo = new ml.GeolocateControl({ positionOptions: { enableHighAccuracy: true, timeout: 12000 }, trackUserLocation: true, showAccuracyCircle: true, fitBoundsOptions: { maxZoom: 15 } });
    map.addControl(this.geo, 'top-right');
    this.geo.on('error', () => this._toast(this.t.locError));
    this._ui();
    map.on('zoomend', () => this._maybeLoadPaths());
    map.on('moveend', () => this._maybeLoadPaths());
    map.on('click', e => this._click(e));
    map.on('mousemove', e => { if (!map.isStyleLoaded()) return; const f = map.queryRenderedFeatures(e.point, { layers: this._hitLayers() }); map.getCanvas().style.cursor = f.length ? 'pointer' : ''; });
    map.on('pitchend', () => this._sync3dBtn());
    await new Promise(res => { if (map.loaded()) res(); else map.once('load', res); });
    if (this._destroyed) return;
    el.querySelector('.vm-loading')?.remove();
    if (this.st.themePref === 'auto' && window.matchMedia) {
      this._mq = matchMedia('(prefers-color-scheme: dark)'); this._mqf = () => this.setTheme('auto'); this._mq.addEventListener?.('change', this._mqf);
    }
    this._maybeLoadPaths();
    if (this.o.route != null) { const f = this._resolveRoute(this.o.route); if (f) this.selectRoute(f.properties.id, { fit: true, animate: false }); }
    this._emit('ready', this);
  }
  _error(e) {
    console.error('[valia-map]', e);
    const l = this.el.querySelector('.vm-loading'); if (l) l.innerHTML = `<span class="vm-ltx">⚠︎ ${esc(e.message || e)}</span>`;
  }
  async _baseStyle() { return getJSON(this.base + `styles/${this.st.theme}.json`); }
  _compose(styleJson) {
    return composeStyle(styleJson, this.st, { base: this.base, full: true, contourUrl: this.contourUrl, pois: this._poiData(), selPts: this._selPts() });
  }
  _poiData() {
    const on = this.st.layers.pois; return { type: 'FeatureCollection', features: this.poisAll.features.filter(f => on[f.properties.c]) };
  }
  _selPts() {
    const f = this.st.selected != null && this.routeById.get(this.st.selected); if (!f) return null;
    const g = f.geometry, first = g.type === 'LineString' ? g.coordinates : g.coordinates[0];
    const pts = [{ type: 'Feature', properties: { t: 'start' }, geometry: { type: 'Point', coordinates: first[0] } }];
    if (!f.properties.roundtrip) pts.push({ type: 'Feature', properties: { t: 'end' }, geometry: { type: 'Point', coordinates: first[first.length - 1] } });
    return { type: 'FeatureCollection', features: pts };
  }
  async _restyle() {
    if (!this.map || this._destroyed) return;
    const sj = await this._baseStyle(); if (this._destroyed) return;
    const imgsLost = this._lastTheme && this._lastTheme !== this.st.theme;
    this.map.setStyle(this._compose(sj), { diff: true });
    this._lastTheme = this.st.theme;
    if (imgsLost) this._addImages(true);
  }
  _addImages(replace) {
    const map = this.map, dark = this.st.theme === 'dark';
    for (const c of POI_ORDER) {
      const id = 'valia-poi-' + c, img = poiImage(c, dark);
      try { if (map.hasImage(id)) { if (replace) map.updateImage(id, img); } else map.addImage(id, img, { pixelRatio: 2 }); } catch (e) { /* estil en càrrega */ }
    }
  }
  _hitLayers() { return ['valia-poi', 'valia-poi-cluster', 'valia-routes-hit'].filter(id => this.map.getLayer(id)); }
  _maybeLoadPaths() {
    if (this.st.pathsLoaded || !this.map || this.map.getZoom() < 10.3) return;
    this.st.pathsLoaded = true; this._restyle();
  }
  _resolveRoute(r) {
    if (r == null) return null;
    if (typeof r === 'object' && r.id) r = r.id;
    if (this.routeById.has(+r)) return this.routeById.get(+r);
    const n = norm(r);
    return this.routes.features.find(f => norm(f.properties.ref) === n) || this.routes.features.find(f => norm(f.properties.name).includes(n)) || null;
  }

  /* ---------------- Interfície ---------------- */
  _ui() {
    const t = this.t, el = this.el;
    const top = document.createElement('div'); top.className = 'vm-top';
    top.innerHTML = `<div class="vm-search" role="search"><span class="vm-ic">${SVG.search}</span><input type="search" enterkeyhint="search" autocomplete="off" spellcheck="false" aria-label="${esc(t.search)}" placeholder="${esc(t.search)}"><button type="button" class="vm-clear" hidden aria-label="${esc(t.clearSearch)}">${SVG.x}</button></div>
      <button type="button" class="vm-btn vm-layers-btn" aria-haspopup="dialog" aria-label="${esc(t.layers)}" title="${esc(t.layers)}">${SVG.layers}</button>
      <div class="vm-results" role="listbox" hidden></div>`;
    el.appendChild(top);
    const side = document.createElement('div'); side.className = 'vm-side';
    side.innerHTML = `<button type="button" class="vm-btn vm-3d" aria-pressed="false" aria-label="${esc(t.toggle3d)}" title="${esc(t.toggle3d)}">${SVG.cube}<span>3D</span></button>`;
    el.appendChild(side);
    const panel = document.createElement('div'); panel.className = 'vm-panel'; panel.hidden = true; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'false');
    el.appendChild(panel);
    const sheet = document.createElement('div'); sheet.className = 'vm-sheet'; sheet.hidden = true; sheet.setAttribute('role', 'dialog');
    el.appendChild(sheet);
    const toast = document.createElement('div'); toast.className = 'vm-toast'; toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite'); el.appendChild(toast);
    this.ui = { top, side, panel, sheet, toast, input: top.querySelector('input'), results: top.querySelector('.vm-results'), clear: top.querySelector('.vm-clear') };
    const inp = this.ui.input;
    inp.addEventListener('input', () => this._search(inp.value));
    inp.addEventListener('focus', () => { if (inp.value) this._search(inp.value); this._closePanel(); });
    inp.addEventListener('keydown', e => { if (e.key === 'Escape') { inp.value = ''; this._search(''); inp.blur(); } if (e.key === 'Enter') { const b = this.ui.results.querySelector('[data-r],[data-m]'); if (b) b.click(); } });
    this.ui.clear.addEventListener('click', () => { inp.value = ''; this._search(''); inp.focus(); });
    this.ui.results.addEventListener('click', e => {
      const b = e.target.closest('[data-r],[data-m]'); if (!b) return;
      this.ui.results.hidden = true; inp.blur();
      if (b.dataset.r) this.selectRoute(+b.dataset.r, { fit: true }); else this.flyToMunicipality(b.dataset.m);
    });
    top.querySelector('.vm-layers-btn').addEventListener('click', () => this.ui.panel.hidden ? this._openPanel() : this._closePanel());
    side.querySelector('.vm-3d').addEventListener('click', () => this.set3D(!this.st.terrain3d));
    panel.addEventListener('change', e => this._panelChange(e));
    panel.addEventListener('click', e => { const b = e.target.closest('[data-base]'); if (b) this.setBase(b.dataset.base); if (e.target.closest('.vm-pclose')) this._closePanel(); });
    sheet.addEventListener('click', e => {
      if (e.target.closest('.vm-sclose')) this.clearSelection();
      const d = e.target.closest('.vm-detail'); if (d) { const f = this.routeById.get(this.st.selected); this._emit('routedetail', f.properties, f); this.o.onRouteDetail && this.o.onRouteDetail(f.properties, f); }
    });
    this._sheetDrag(sheet);
    this._renderPanel();
    this._localizeControls();
    el.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!this.ui.panel.hidden) this._closePanel(); else if (this.st.selected != null) this.clearSelection(); } });
  }
  _localizeControls() {
    const t = this.t, q = s => this.el.querySelector(s);
    const set = (b, l) => { if (b) { b.title = l; b.setAttribute('aria-label', l); } };
    set(q('.maplibregl-ctrl-zoom-in'), t.zoomIn); set(q('.maplibregl-ctrl-zoom-out'), t.zoomOut); set(q('.maplibregl-ctrl-compass'), t.compass); set(q('.maplibregl-ctrl-geolocate'), t.locate);
  }
  _toast(msg) { const t = this.ui.toast; t.textContent = msg; t.classList.add('on'); clearTimeout(this._tt); this._tt = setTimeout(() => t.classList.remove('on'), 3200); }
  _search(q) {
    const r = this.ui.results, t = this.t, L = this.st.lang; this.ui.clear.hidden = !q;
    const n = norm(q); if (!n) { r.hidden = true; r.innerHTML = ''; return; }
    const ms = this.munis.filter(m => norm(m.name).includes(n)).slice(0, 4);
    const msNames = new Set(this.munis.filter(m => norm(m.name).includes(n)).map(m => m.name));
    const rs = this.routes.features.map(f => f.properties).map(p => {
      const nm = norm([routeName(p, L), p.name, p.ref, p.parent].join(' ')), mu = (p.municipalities || '').split('|');
      const score = nm.startsWith(n) || norm(p.ref) === n ? 0 : nm.includes(n) ? 1 : mu.some(x => msNames.has(x)) ? 2 : 9;
      return [score, p];
    }).filter(([s]) => s < 9).sort((a, b) => a[0] - b[0] || b[1].km - a[1].km).slice(0, 12).map(([, p]) => p);
    if (!ms.length && !rs.length) { r.innerHTML = `<div class="vm-empty">${esc(t.noResults)}</div>`; r.hidden = false; return; }
    r.innerHTML = ms.map(m => `<button type="button" role="option" class="vm-res" data-m="${esc(m.name)}"><span class="vm-badge vm-b-muni">${esc(t.municipality)}</span><span class="vm-rn">${esc(m.name)}</span><span class="vm-rm">${esc(t.routesN(m.routes))}</span></button>`).join('')
      + rs.map(p => { const [bg, fg] = KIND_BADGE[p.kind]; return `<button type="button" role="option" class="vm-res" data-r="${p.id}"><span class="vm-badge" style="background:${bg};color:${fg}">${esc(p.ref || t.kinds[p.kind])}</span><span class="vm-rn">${esc(routeName(p, L))}</span><span class="vm-rm">${fmt(p.km, L)} km · ${esc((p.municipalities || '').split('|')[0] || '')}</span></button>`; }).join('');
    r.hidden = false;
  }
  _renderPanel() {
    const t = this.t, s = this.st, ly = s.layers, c = this.meta.counts;
    const sw = (k, label, checked, extra = '', dot = '') => `<label class="vm-row">${dot}<span class="vm-rl">${esc(label)}${extra ? `<small>${esc(extra)}</small>` : ''}</span><input type="checkbox" class="vm-sw" data-k="${k}" ${checked ? 'checked' : ''}></label>`;
    const dot = col => `<i class="vm-dot" style="background:${col}"></i>`;
    const icn = cat => `<i class="vm-dot vm-pdot" style="background:${POI[cat].color}"></i>`;
    const dk = s.theme === 'dark' ? 'dark' : 'light';
    this.ui.panel.innerHTML = `<div class="vm-phead"><h2>${esc(t.layers)}</h2><button type="button" class="vm-btn vm-pclose" aria-label="${esc(t.close)}">${SVG.x}</button></div>
      <div class="vm-pbody">
      <h3>${esc(t.base)}</h3><div class="vm-seg" role="radiogroup" aria-label="${esc(t.base)}">${[['map', t.bMap], ['topo', t.bTopo], ['sat', t.bSat]].map(([k, l]) => `<button type="button" role="radio" data-base="${k}" aria-checked="${s.base === k}" class="vm-segb vm-bt-${k}"><span class="vm-thumb"></span>${esc(l)}</button>`).join('')}</div>
      <h3>${esc(t.routes)}</h3>
      ${sw('hiking', t.hiking, ly.hiking, '', dot(ACT.hiking[dk]))}${sw('mtb', t.mtb, ly.mtb, '', dot(ACT.mtb[dk]))}${sw('road', t.road, ly.road, '', dot(ACT.road[dk]))}
      ${sw('paths', t.paths, ly.paths, `${fmt(c.paths_km_total, s.lang, 0)} km`, '<i class="vm-dot vm-dash"></i>')}
      ${sw('contours', t.contours, ly.contours, '', '<i class="vm-dot vm-ctr"></i>')}
      ${sw('terrain3d', t.terrain, s.terrain3d, '', `<i class="vm-dot vm-3dd">${SVG.cube}</i>`)}
      <h3>${esc(t.pois)}</h3>
      ${POI_ORDER.map(k => sw('poi:' + k, t[k], ly.pois[k], `${c.pois[k] || 0}`, icn(k))).join('')}
      <p class="vm-src">${esc(this.meta.source.includes('PBF') ? 'OpenStreetMap' : 'OpenStreetMap')} · ${esc(new Date(this.meta.osm_timestamp).toLocaleDateString(s.lang === 'en' ? 'en-GB' : s.lang))}</p>
      </div>`;
    this.ui.panel.setAttribute('aria-label', t.layers);
  }
  _panelChange(e) {
    const k = e.target.dataset.k; if (!k) return; const v = e.target.checked;
    if (k === 'terrain3d') return this.set3D(v);
    if (k.startsWith('poi:')) this.st.layers.pois[k.slice(4)] = v; else this.st.layers[k] = v;
    this._restyle();
  }
  _openPanel() { this._renderPanel(); this.ui.panel.hidden = false; this.ui.results.hidden = true; this.ui.top.querySelector('.vm-layers-btn').setAttribute('aria-expanded', 'true'); this.ui.panel.querySelector('.vm-pclose').focus(); }
  _closePanel() { if (!this.ui.panel.hidden) { this.ui.panel.hidden = true; this.ui.top.querySelector('.vm-layers-btn').setAttribute('aria-expanded', 'false'); } }
  _sync3dBtn() { const b = this.ui && this.ui.side.querySelector('.vm-3d'); if (b) b.setAttribute('aria-pressed', String(this.st.terrain3d)); }
  _sheetDrag(sheet) {
    let y0 = null, dy = 0;
    sheet.addEventListener('pointerdown', e => { if (!e.target.closest('.vm-grab,.vm-shead') || e.target.closest('button,a,input')) return; y0 = e.clientY; dy = 0; sheet.setPointerCapture(e.pointerId); sheet.style.transition = 'none'; });
    sheet.addEventListener('pointermove', e => { if (y0 == null) return; dy = Math.max(0, e.clientY - y0); sheet.style.transform = `translateY(${dy}px)`; });
    const end = () => { if (y0 == null) return; y0 = null; sheet.style.transition = ''; sheet.style.transform = ''; if (dy > 90) this.clearSelection(); };
    sheet.addEventListener('pointerup', end); sheet.addEventListener('pointercancel', end);
  }

  /* ---------------- Clic ---------------- */
  async _click(e) {
    const map = this.map, p = e.point, pad = 8;
    const fs = map.queryRenderedFeatures([[p.x - pad, p.y - pad], [p.x + pad, p.y + pad]], { layers: this._hitLayers() });
    this.ui.results.hidden = true; this._closePanel();
    const cl = fs.find(f => f.layer.id === 'valia-poi-cluster');
    if (cl) { const z = await map.getSource('valia-pois').getClusterExpansionZoom(cl.properties.cluster_id); map.easeTo({ center: cl.geometry.coordinates, zoom: Math.min(z + 0.2, 17) }); return; }
    const poi = fs.find(f => f.layer.id === 'valia-poi');
    if (poi) return this._poiPopup(poi);
    const rs = fs.filter(f => f.layer.id === 'valia-routes-hit');
    if (rs.length) {
      // si ja hi ha una ruta seleccionada i també és a sota, cicla a la següent
      const ids = [...new Set(rs.map(f => f.properties.id))];
      const i = ids.indexOf(this.st.selected);
      return this.selectRoute(ids[(i + 1) % ids.length], { fit: true });
    }
    if (this.st.selected != null) this.clearSelection();
  }
  _poiPopup(f) {
    const t = this.t, p = f.properties, L = this.st.lang;
    if (this._popup) this._popup.remove();
    const nm = p['name_' + L] || p.name || t[p.c];
    const sub = p.c === 'mirador' && p.ele ? `${fmt(p.ele, L, 0)} m` : p.op || '';
    this._popup = new this.ml.Popup({ closeButton: true, offset: 14, maxWidth: '260px', className: 'vm-popup' + (this.st.theme === 'dark' ? ' vm-popup-dark' : '') })
      .setLngLat(f.geometry.coordinates).setHTML(`<div class="vm-pp"><span class="vm-ppc" style="background:${POI[p.c].color}">${esc(t[p.c])}</span><strong>${esc(nm)}</strong>${sub ? `<span>${esc(sub)}</span>` : ''}</div>`).addTo(this.map);
    const props = Object.assign({}, p); this._emit('poiselect', props); this.o.onPoiSelect && this.o.onPoiSelect(props);
  }

  /* ---------------- API pública ---------------- */
  async selectRoute(id, opt = {}) {
    const f = this._resolveRoute(id); if (!f) return null;
    const p = f.properties; this.st.selected = p.id;
    const a = p.activity; if (!this.st.layers[a]) this.st.layers[a] = true;
    await this._restyle();
    const sheetP = this._renderSheet(f); // la part síncrona ja ha pintat la fitxa: se'n pot mesurar l'alçada
    if (opt.fit !== false) {
      const b = p.bbox, small = this.el.clientWidth < 700;
      const sheetH = small ? this.ui.sheet.offsetHeight : 0;
      this.map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: { top: 84, bottom: (small ? sheetH : 0) + 40, left: small ? 28 : 420, right: small ? 64 : 80 }, maxZoom: 15.5, duration: opt.animate === false ? 0 : 900, pitch: this.st.terrain3d ? 55 : 0 });
    }
    await sheetP;
    this._emit('routeselect', p, f); this.o.onRouteSelect && this.o.onRouteSelect(p, f);
    return p;
  }
  clearSelection() {
    if (this.st.selected == null) return; this.st.selected = null; this.ui.sheet.hidden = true; this.el.classList.remove('vm-has-sheet');
    if (this._hover) { this._hover.remove(); this._hover = null; }
    this._restyle(); this._emit('routeselect', null);
  }
  setLang(lang) {
    if (!LANGS.includes(lang) || lang === this.st.lang) return; this.st.lang = lang;
    const t = this.t; this.ui.input.placeholder = t.search; this.ui.input.setAttribute('aria-label', t.search);
    this.ui.top.querySelector('.vm-layers-btn').setAttribute('aria-label', t.layers);
    this.ui.side.querySelector('.vm-3d').setAttribute('aria-label', t.toggle3d);
    this.el.querySelector('.vm-canvas').setAttribute('aria-label', this.o.ariaLabel || t.mapOf);
    this._localizeControls(); this._renderPanel(); if (this.ui.input.value && !this.ui.results.hidden) this._search(this.ui.input.value);
    if (this.st.selected != null) this._renderSheet(this.routeById.get(this.st.selected));
    this._restyle();
  }
  setTheme(theme) {
    this.st.themePref = theme || 'auto';
    const th = this.st.themePref === 'auto' ? (prefersDark() ? 'dark' : 'light') : this.st.themePref;
    if (th === this.st.theme) return; this.st.theme = th; this.el.classList.toggle('vm-dark', th === 'dark');
    if (this._popup) this._popup.remove();
    this._renderPanel(); if (this.st.selected != null) this._renderSheet(this.routeById.get(this.st.selected));
    this._lastTheme = this._lastTheme || (th === 'dark' ? 'light' : 'dark');
    this._restyle();
  }
  setBase(b) {
    if (!['map', 'topo', 'sat'].includes(b) || b === this.st.base) return;
    const was = this.st.base; this.st.base = b;
    if (b === 'topo' && was !== 'topo') this.st.layers.contours = true;
    if (was === 'topo' && b !== 'topo') this.st.layers.contours = false;
    this._renderPanel(); this._restyle();
  }
  setLayers(l = {}) { Object.assign(this.st.layers, l, { pois: Object.assign({}, this.st.layers.pois, l.pois || {}) }); this._renderPanel(); this._restyle(); }
  set3D(on) {
    this.st.terrain3d = !!on; this._sync3dBtn();
    // MapLibre 5.x: el diff d'estil amb canvi de 'terrain' falla; s'aplica directament i el diff ja no hi veu canvis
    try { this.map.setTerrain(on ? TERRAIN : null); } catch (e) { /* estil en càrrega */ }
    this._restyle();
    this.map.easeTo({ pitch: on ? 58 : 0, duration: 800 });
    const cb = this.ui.panel.querySelector('[data-k="terrain3d"]'); if (cb) cb.checked = !!on;
  }
  flyToMunicipality(name) {
    const m = this.munis.find(x => x.name === name); if (!m) return;
    const b = m.bbox; this.map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 50, maxZoom: 14, duration: 900 });
    this.ui.input.value = name; this._search('');
  }
  getRoutes() { return this.routes.features.map(f => f.properties); }
  resize() { this.map && this.map.resize(); }
  destroy() {
    if (this._destroyed) return; this._destroyed = true; live.delete(this);
    if (activeFull === this) activeFull = null;
    if (this._mq && this._mqf) this._mq.removeEventListener?.('change', this._mqf);
    try { this.map && this.map.remove(); } catch (e) { /* res */ }
    this.el.innerHTML = ''; this.el.classList.remove('vm-root', 'vm-dark', 'vm-has-sheet'); if (this.el.__valiaMap === this) delete this.el.__valiaMap;
  }

  /* ---------------- Fitxa (bottom sheet) ---------------- */
  async _renderSheet(f) {
    const p = f.properties, t = this.t, L = this.st.lang, sh = this.ui.sheet, [bg, fg] = KIND_BADGE[p.kind];
    const actC = ACT[p.activity][this.st.theme === 'dark' ? 'dark' : 'light'];
    const munis = (p.municipalities || '').split('|').filter(Boolean);
    sh.innerHTML = `<div class="vm-grab" aria-hidden="true"></div>
      <div class="vm-shead"><div class="vm-sk"><span class="vm-badge" style="background:${bg};color:${fg}">${esc(p.ref || t.kinds[p.kind])}</span><span class="vm-act" style="color:${actC}">${SVG[p.activity]}${esc(t[p.activity === 'road' ? 'road' : p.activity])}</span><span class="vm-rt">${esc(p.roundtrip ? t.roundtrip : t.linear)}</span></div>
        <h2 class="vm-stitle">${esc(routeName(p, L))}</h2>${p.parent ? `<p class="vm-ssub">${esc(t.stage)} ${esc(p.parent)}</p>` : ''}
        <button type="button" class="vm-btn vm-sclose" aria-label="${esc(t.close)}">${SVG.x}</button></div>
      <div class="vm-sbody">
        ${p.complete ? '' : `<p class="vm-note">${esc(t.partial)}${p.km_total ? ` · ${esc(t.total)} ${fmt(p.km_total, L)} km` : ''}</p>`}
        <dl class="vm-stats">
          <div><dt>${esc(t.distance)}</dt><dd>${fmt(p.km, L)} <small>km</small></dd></div>
          <div><dt>${esc(t.up)}</dt><dd>${fmt(p.up, L, 0)} <small>m</small></dd></div>
          <div><dt>${esc(t.down)}</dt><dd>${fmt(p.down, L, 0)} <small>m</small></dd></div>
          <div><dt>${esc(t.time)}</dt><dd>${fmtHours(p.hours, L)}</dd></div>
          <div><dt>${esc(t.difficulty)}</dt><dd><span class="vm-diff vm-d${p.difficulty}">${esc(t.diff[p.difficulty])}</span></dd></div>
          <div><dt>${esc(t.maxEle)}</dt><dd>${fmt(p.ele_max, L, 0)} <small>m</small></dd></div>
        </dl>
        <h3 class="vm-h3">${esc(t.profile)}</h3>
        <div class="vm-prof" aria-label="${esc(t.profile)}"><div class="vm-prof-sk"></div></div>
        ${munis.length ? `<p class="vm-munis"><strong>${esc(t.municipalities)}:</strong> ${munis.map(esc).join(', ')}</p>` : ''}
        <p class="vm-est">${esc(t.estimated)}</p>
        <button type="button" class="vm-detail">${esc(t.detail)}${SVG.arrow}</button>
      </div>`;
    sh.setAttribute('aria-label', routeName(p, L));
    sh.hidden = false; this.el.classList.add('vm-has-sheet');
    try {
      const prof = await getJSON(this.base + `data/profiles/${p.id}.json`);
      if (this.st.selected !== p.id) return;
      this._profile(sh.querySelector('.vm-prof'), prof, f, actC);
    } catch (e) { const pr = sh.querySelector('.vm-prof'); if (pr) pr.textContent = '—'; }
  }
  _profile(box, prof, f, color) {
    const L = this.st.lang, W = 600, H = 150, pl = 38, pr = 10, pt = 10, pb = 22;
    const d = prof.d, e = prof.e, maxD = d[d.length - 1] || 1, lo = Math.floor((Math.min(...e) - 10) / 50) * 50, hi = Math.ceil((Math.max(...e) + 10) / 50) * 50;
    const X = v => pl + (v / maxD) * (W - pl - pr), Y = v => pt + (1 - (v - lo) / Math.max(1, hi - lo)) * (H - pt - pb);
    const line = d.map((v, i) => `${i ? 'L' : 'M'}${X(v).toFixed(1)} ${Y(e[i]).toFixed(1)}`).join('');
    const gid = 'vmg' + Math.random().toString(36).slice(2, 7);
    const ticks = []; const step = maxD > 40 ? 10 : maxD > 16 ? 5 : maxD > 6 ? 2 : maxD > 2.5 ? 1 : 0.5;
    for (let k = 0; k <= maxD + 1e-6; k += step) ticks.push(k);
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${esc(this.t.profile)}: ${fmt(prof.min, L, 0)}–${fmt(prof.max, L, 0)} m">
      <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".45"/><stop offset="1" stop-color="${color}" stop-opacity=".04"/></linearGradient></defs>
      <g class="vm-grid">${[lo, (lo + hi) / 2, hi].map(v => `<line x1="${pl}" x2="${W - pr}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${pl - 6}" y="${Y(v) + 4}" text-anchor="end">${fmt(Math.round(v), L, 0)}</text>`).join('')}
      ${ticks.map(k => `<text x="${X(k)}" y="${H - 6}" text-anchor="middle">${fmt(k, L)}</text>`).join('')}</g>
      <path d="${line}L${X(maxD)} ${H - pb}L${X(0)} ${H - pb}Z" fill="url(#${gid})"/><path d="${line}" fill="none" stroke="${color}" stroke-width="2.2" vector-effect="non-scaling-stroke"/>
      <line class="vm-cur" x1="0" x2="0" y1="${pt}" y2="${H - pb}" visibility="hidden"/></svg><div class="vm-tip" hidden></div>`;
    // geometria acumulada per situar el cursor al mapa
    const g = f.geometry, parts = g.type === 'LineString' ? [g.coordinates] : g.coordinates, pts = [], cum = [];
    let acc = 0; for (const l of parts) for (let i = 0; i < l.length; i++) { if (pts.length && i > 0) acc += hav(pts[pts.length - 1], l[i]); pts.push(l[i]); cum.push(acc); }
    const scale = acc ? (maxD * 1000) / acc : 1;
    const svg = box.querySelector('svg'), cur = svg.querySelector('.vm-cur'), tip = box.querySelector('.vm-tip');
    const move = ev => {
      const r = svg.getBoundingClientRect(), x = ((ev.clientX - r.left) / r.width) * W; const dk = Math.max(0, Math.min(maxD, ((x - pl) / (W - pl - pr)) * maxD));
      let i = 0; while (i < d.length - 1 && d[i + 1] < dk) i++;
      const ele = e[i]; cur.setAttribute('x1', X(dk)); cur.setAttribute('x2', X(dk)); cur.setAttribute('visibility', 'visible');
      tip.hidden = false; tip.textContent = `${fmt(dk, L)} km · ${fmt(ele, L, 0)} m`; tip.style.left = Math.min(r.width - 90, Math.max(0, (X(dk) / W) * r.width - 45)) + 'px';
      const target = dk * 1000 / scale; let j = 0; while (j < cum.length - 1 && cum[j + 1] < target) j++;
      const a = pts[j], b = pts[Math.min(j + 1, pts.length - 1)], seg = (cum[j + 1] - cum[j]) || 1, fr = Math.max(0, Math.min(1, (target - cum[j]) / seg));
      const ll = [a[0] + (b[0] - a[0]) * fr, a[1] + (b[1] - a[1]) * fr];
      if (!this._hover) { const m = document.createElement('div'); m.className = 'vm-hover'; m.style.setProperty('--c', color); this._hover = new this.ml.Marker({ element: m }).setLngLat(ll).addTo(this.map); }
      else this._hover.setLngLat(ll);
    };
    const leave = () => { cur.setAttribute('visibility', 'hidden'); tip.hidden = true; if (this._hover) { this._hover.remove(); this._hover = null; } };
    svg.addEventListener('pointermove', move); svg.addEventListener('pointerdown', move);
    svg.addEventListener('pointerleave', leave); svg.addEventListener('pointercancel', leave);
    svg.style.touchAction = 'none';
  }
}

/* ------------------------------------------------------------------ */
/* Vista prèvia: render únic → imatge estàtica (cap WebGL viu)         */
/* ------------------------------------------------------------------ */
class ValiaPreview {
  constructor(el, o) {
    this.el = el; this.o = o; this.base = o.basePath || MODULE_BASE;
    this.lang = LANGS.includes(o.lang) ? o.lang : 'ca';
    this.theme = (o.theme || 'auto') === 'auto' ? (prefersDark() ? 'dark' : 'light') : o.theme;
    el.classList.add('vm-root', 'vm-preview'); el.classList.toggle('vm-dark', this.theme === 'dark');
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.innerHTML = `<div class="vm-pv-sk" aria-hidden="true"></div>`;
    el.setAttribute('role', o.onOpen ? 'button' : 'img'); el.tabIndex = o.onOpen ? 0 : -1;
    el.setAttribute('aria-label', o.ariaLabel || T[this.lang].mapOf);
    if (o.onOpen) { this._open = e => { if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); o.onOpen(); } }; el.addEventListener('click', this._open); el.addEventListener('keydown', this._open); }
    this.ready = new Promise(res => {
      const go = () => { this._render().then(res, err => { console.error('[valia-map preview]', err); res(); }); };
      if ('IntersectionObserver' in window && o.lazy !== false) {
        this._io = new IntersectionObserver(es => { if (es.some(x => x.isIntersecting)) { this._io.disconnect(); this._io = null; go(); } }, { rootMargin: '200px' });
        this._io.observe(el);
        // no bloquejar l'app: resol de seguida, la imatge arriba quan es veu
        res();
      } else go();
    });
  }
  _key() { const r = this.el.getBoundingClientRect(); return [this.o.route, this.theme, this.lang, this.o.base || 'map', Math.round(r.width), Math.round(r.height), JSON.stringify(this.o.center || ''), this.o.zoom || ''].join('|'); }
  _render() {
    const job = previewChain.then(() => this._doRender()); previewChain = job.catch(() => null); return job;
  }
  async _doRender() {
    if (this._destroyed) return;
    const key = this._key();
    if (snapshotCache.has(key)) return this._show(snapshotCache.get(key));
    const ml = await loadLibs(this.base);
    const [routes, meta, sj] = await Promise.all([getJSON(this.base + 'data/routes.geojson'), getJSON(this.base + 'data/meta.json'), getJSON(this.base + `styles/${this.theme}.json`)]);
    if (this._destroyed) return;
    const f = this.o.route != null ? (routes.features.find(x => x.properties.id === +this.o.route) || routes.features.find(x => norm(x.properties.ref) === norm(this.o.route)) || routes.features.find(x => norm(x.properties.name).includes(norm(this.o.route)))) : null;
    const st = { lang: this.lang, theme: this.theme, base: this.o.base || 'map', layers: { hiking: true, mtb: true, road: true, paths: false, contours: false, pois: {} }, selected: f ? f.properties.id : null, terrain3d: false };
    let selPts = null;
    if (f) { const g = f.geometry, l = g.type === 'LineString' ? g.coordinates : g.coordinates[0]; selPts = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { t: 'start' }, geometry: { type: 'Point', coordinates: l[0] } }].concat(f.properties.roundtrip ? [] : [{ type: 'Feature', properties: { t: 'end' }, geometry: { type: 'Point', coordinates: l[l.length - 1] } }]) }; }
    const style = composeStyle(sj, st, { base: this.base, full: false, selPts });
    const box = document.createElement('div'); box.className = 'vm-pv-gl'; this.el.appendChild(box);
    const b = f ? f.properties.bbox : meta.comarca.bbox;
    const map = new ml.Map({ container: box, style, interactive: false, attributionControl: false, preserveDrawingBuffer: true, fadeDuration: 0, pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      bounds: this.o.center ? undefined : [[b[0], b[1]], [b[2], b[3]]], center: this.o.center, zoom: this.o.zoom, fitBoundsOptions: { padding: f ? 26 : 10, maxZoom: 15 } });
    await new Promise(res => { let done = false; const fin = () => { if (!done) { done = true; res(); } }; map.once('idle', fin); setTimeout(fin, 9000); });
    let url = null; try { url = map.getCanvas().toDataURL('image/webp', 0.86); if (!url.startsWith('data:image/webp')) url = map.getCanvas().toDataURL('image/jpeg', 0.86); } catch (e) { url = null; }
    map.remove(); box.remove();
    if (url) { snapshotCache.set(key, url); if (snapshotCache.size > 40) snapshotCache.delete(snapshotCache.keys().next().value); }
    this._show(url);
  }
  _show(url) {
    if (this._destroyed) return;
    this.el.innerHTML = url ? `<img class="vm-pv-img" alt="" src="${url}"><span class="vm-pv-attr">© OpenStreetMap · OpenFreeMap</span>` : `<div class="vm-pv-sk"></div>`;
  }
  setTheme(th) {
    const t = (th || 'auto') === 'auto' ? (prefersDark() ? 'dark' : 'light') : th; if (t === this.theme) return;
    this.o.theme = th; this.theme = t; this.el.classList.toggle('vm-dark', t === 'dark'); this._render();
  }
  setLang(l) {
    if (!LANGS.includes(l) || l === this.lang) return;
    this.lang = l; this.el.setAttribute('aria-label', this.o.ariaLabel || T[l].mapOf); this._render();
  }
  destroy() {
    this._destroyed = true; live.delete(this); if (this._io) this._io.disconnect();
    if (this._open) { this.el.removeEventListener('click', this._open); this.el.removeEventListener('keydown', this._open); }
    this.el.innerHTML = ''; this.el.classList.remove('vm-root', 'vm-preview', 'vm-dark'); if (this.el.__valiaMap === this) delete this.el.__valiaMap;
  }
}
