#!/usr/bin/env node
/** Copia les llibreries del navegador a vendor/ (sense CDN: funciona offline i a GitHub Pages). */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILES = [
  ['node_modules/maplibre-gl/dist/maplibre-gl.js', 'vendor/maplibre-gl.js'],
  ['node_modules/maplibre-gl/dist/maplibre-gl.css', 'vendor/maplibre-gl.css'],
  ['node_modules/maplibre-gl/LICENSE.txt', 'vendor/LICENSE-maplibre-gl.txt'],
  ['node_modules/maplibre-contour/dist/index.min.js', 'vendor/maplibre-contour.js'],
  ['node_modules/maplibre-contour/LICENSE', 'vendor/LICENSE-maplibre-contour.txt']
];
await fs.mkdir(path.join(ROOT, 'vendor'), { recursive: true });
for (const [a, b] of FILES) {
  try { await fs.copyFile(path.join(ROOT, a), path.join(ROOT, b)); console.log('[valia]', b); }
  catch (e) { console.warn('[valia] no trobat:', a); }
}
