#!/usr/bin/env node
/**
 * Valia · build-styles.mjs
 * Genera styles/light.json i styles/dark.json a partir de l'estil "Liberty"
 * d'OpenFreeMap (esquema OpenMapTiles), amb la paleta de verds de Valia,
 * relleu ombrejat (Terrain Tiles) i etiquetes multillengua.
 *
 *   node scripts/build-styles.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = 'https://tiles.openfreemap.org/styles/liberty';

/* Paletes (tokens de l'app Valia: --em-*, --paper, --card, --ink) */
const P = {
  light: {
    bg: '#F4F3EC', residential: '#ECEAE1', wood: '#BFE0C9', woodOp: 0.75, grass: '#D6EBD4', park: '#D2EBD9', parkLine: '#9FD3B4',
    farmland: '#EEF0DD', water: '#A7D3EA', waterway: '#86BEDD', waterText: '#2F6D96', sand: '#F1E9C9', ice: '#EEF4F4',
    building: '#E2DED3', buildingLine: '#D3CEC1', pitch: '#DCEBCF', cemetery: '#D9E3CC', hospital: '#F6E3E6', school: '#EEEBD8',
    aeroway: '#E4E2DA', minor: '#FFFFFF', minorCasing: '#D8D4C8', service: '#FFFFFF', secondary: '#FFF6DC', secondaryCasing: '#DCCB9F',
    primary: '#FCEBC0', primaryCasing: '#D4B26C', motorway: '#F7D49B', motorwayCasing: '#C99A52', path: '#FFFFFF', rail: '#B3AFA6',
    boundary: '#9AA49E', text: '#1F2924', textSoft: '#4E5852', halo: 'rgba(244,243,236,0.92)', poiText: '#5E6361',
    shade: '#2F4A3C', highlight: '#FFFFFF', accent: '#5D7F6B', hsExag: 0.32
  },
  dark: {
    bg: '#0F1512', residential: '#18201C', wood: '#163324', woodOp: 0.8, grass: '#17291F', park: '#163022', parkLine: '#245A3E',
    farmland: '#141C18', water: '#0E2A3B', waterway: '#1E4E6B', waterText: '#7FB6D8', sand: '#2A2719', ice: '#1C2424',
    building: '#222C27', buildingLine: '#2C3833', pitch: '#18291F', cemetery: '#18241D', hospital: '#2A1E22', school: '#232419',
    aeroway: '#1E2421', minor: '#2E3934', minorCasing: '#151C19', service: '#2A3430', secondary: '#45493B', secondaryCasing: '#1E211A',
    primary: '#5A5236', primaryCasing: '#26231A', motorway: '#6E5A30', motorwayCasing: '#2C2416', path: '#4A5550', rail: '#4E5853',
    boundary: '#5E6A64', text: '#E3ECE7', textSoft: '#B5C2BB', halo: 'rgba(13,18,16,0.92)', poiText: '#A9B6AF',
    shade: '#000000', highlight: '#4E6B5C', accent: '#22352B', hsExag: 0.45
  }
};

function recolor(layer, c, theme) {
  const id = layer.id, p = layer.paint = layer.paint || {};
  const set = (k, v) => { p[k] = v; };
  if (layer.type === 'background') set('background-color', c.bg);
  else if (id === 'natural_earth') set('raster-opacity', theme === 'dark' ? 0.08 : ['interpolate', ['exponential', 1.5], ['zoom'], 0, 0.5, 6, 0.08]);
  else if (id === 'park') { set('fill-color', c.park); set('fill-opacity', 0.75); set('fill-outline-color', c.parkLine); }
  else if (id === 'park_outline') set('line-color', c.parkLine);
  else if (id === 'landuse_residential') { set('fill-color', c.residential); delete p['fill-opacity']; }
  else if (id === 'landcover_wood') { set('fill-color', c.wood); set('fill-opacity', c.woodOp); }
  else if (id === 'landcover_grass') { set('fill-color', c.grass); set('fill-opacity', 0.6); }
  else if (id === 'landcover_ice') set('fill-color', c.ice);
  else if (id === 'landcover_sand') set('fill-color', c.sand);
  else if (id === 'landcover_wetland') set('fill-opacity', theme === 'dark' ? 0.25 : 0.6);
  else if (id === 'landuse_pitch' || id === 'landuse_track') set('fill-color', c.pitch);
  else if (id === 'landuse_cemetery') set('fill-color', c.cemetery);
  else if (id === 'landuse_hospital') set('fill-color', c.hospital);
  else if (id === 'landuse_school') set('fill-color', c.school);
  else if (id === 'water') set('fill-color', c.water);
  else if (id.startsWith('waterway')) { if (layer.type === 'line') set('line-color', c.waterway); }
  else if (id.startsWith('aeroway')) { if (layer.type === 'fill') set('fill-color', c.aeroway); else set('line-color', c.aeroway); }
  else if (id === 'building') { set('fill-color', c.building); set('fill-outline-color', c.buildingLine); }
  else if (id === 'building-3d') { set('fill-extrusion-color', c.building); set('fill-extrusion-opacity', 0.6); }
  else if (id.startsWith('boundary')) set('line-color', c.boundary);
  else if (layer.type === 'line' && /^(tunnel|road|bridge)_/.test(id)) {
    const casing = id.includes('casing');
    let col;
    if (/rail/.test(id)) col = c.rail;
    else if (/motorway/.test(id)) col = casing ? c.motorwayCasing : c.motorway;
    else if (/trunk_primary/.test(id)) col = casing ? c.primaryCasing : c.primary;
    else if (/secondary_tertiary|_link/.test(id)) col = casing ? c.secondaryCasing : c.secondary;
    else if (/path_pedestrian/.test(id)) col = casing ? c.minorCasing : c.path;
    else if (/service_track/.test(id)) col = casing ? c.minorCasing : c.service;
    else col = casing ? c.minorCasing : c.minor;
    set('line-color', col);
    if (/path_pedestrian/.test(id) && !casing) set('line-opacity', theme === 'dark' ? 0.7 : 0.9);
  } else if (id === 'road_area_pattern') { delete p['fill-pattern']; set('fill-color', theme === 'dark' ? '#202A25' : '#F1EFE7'); }
  if (layer.type === 'symbol') {
    const water = /water/.test(id);
    set('text-color', water ? c.waterText : /poi|airport|highway-name/.test(id) ? c.poiText : /label_(other|village)/.test(id) ? c.textSoft : c.text);
    set('text-halo-color', c.halo); set('text-halo-width', 1.4); set('text-halo-blur', 0.3);
    if (theme === 'dark' && layer.layout && layer.layout['icon-image']) set('icon-opacity', 0.85);
  }
}

const NAME = ['coalesce', ['get', 'name:ca'], ['get', 'name']];
function build(base, theme) {
  const c = P[theme], s = JSON.parse(JSON.stringify(base));
  s.name = `Valia ${theme === 'dark' ? 'fosc' : 'clar'}`;
  s.metadata = { 'valia:theme': theme, 'valia:source': SRC, 'valia:generated': new Date().toISOString().slice(0, 10) };
  s.sources.openmaptiles.attribution = '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://www.openmaptiles.org/" target="_blank" rel="noopener">© OpenMapTiles</a> · Dades <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a> (ODbL)';
  s.sources['valia-dem'] = {
    type: 'raster-dem', tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'], encoding: 'terrarium', tileSize: 256, maxzoom: 14,
    attribution: '<a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noopener">Terrain Tiles</a> (AWS Open Data · EU-DEM © Copernicus)'
  };
  s.sources['valia-terrain'] = { type: 'raster-dem', tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'], encoding: 'terrarium', tileSize: 256, maxzoom: 14 };
  const layers = [];
  for (const l of s.layers) {
    if (/shield|one_way_arrow|road_shield_us/.test(l.id)) continue; // menys soroll visual
    recolor(l, c, theme);
    if (l.layout && l.layout['text-field']) l.layout['text-field'] = NAME;
    if (l.id === 'label_village' || l.id === 'label_town') l.layout['text-font'] = ['Noto Sans Bold'];
    layers.push(l);
    if (l.id === 'water') {
      layers.push({
        id: 'valia-hillshade', type: 'hillshade', source: 'valia-dem', metadata: { 'valia:group': 'relief' },
        paint: { 'hillshade-shadow-color': c.shade, 'hillshade-highlight-color': c.highlight, 'hillshade-accent-color': c.accent, 'hillshade-exaggeration': c.hsExag, 'hillshade-illumination-direction': 315 }
      });
    }
  }
  s.layers = layers;
  return s;
}

const res = await fetch(SRC); if (!res.ok) throw new Error('No puc baixar ' + SRC);
const base = await res.json();
await fs.mkdir(path.join(ROOT, 'styles'), { recursive: true });
for (const t of ['light', 'dark']) {
  const st = build(base, t);
  await fs.writeFile(path.join(ROOT, 'styles', `${t}.json`), JSON.stringify(st, null, 1));
  console.log('[valia] styles/' + t + '.json ·', st.layers.length, 'capes');
}
