/* Valia · service worker: l'app funciona sense connexió un cop oberta. Versió 8925284e71 */
const CACHE = 'valia5-8925284e71';
const ASSETS = ["./", "index.html", "guia.html", "qr.js", "app.css?v=8925284e71", "app.js?v=8925284e71", "manifest.webmanifest", "img/btt-torre-cim.webp", "img/castell.webp", "img/ciclistes-tardor-platans.webp", "img/esglesia-turo.webp", "img/excursionista-muntanya.webp", "img/familia-cistells.webp", "img/placa-esglesia-escultura.webp", "img/poble-horts.webp", "img/restaurant.webp", "img/riera-tardor.webp", "img/ruines-montseny.webp", "img/sant-miquel-del-fai.webp", "img/torre-bandera.webp", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/icon.svg", "icons/logo.svg", "valia-map/valia-map.js", "valia-map/valia-map.css", "valia-map/vendor/maplibre-gl.js", "valia-map/vendor/maplibre-gl.css", "valia-map/vendor/maplibre-contour.js", "valia-map/styles/light.json", "valia-map/styles/dark.json", "valia-map/data/meta.json", "valia-map/data/routes.geojson", "valia-map/data/route-labels.geojson", "valia-map/data/limit.geojson", "valia-map/data/mask.geojson", "valia-map/data/pois.geojson", "valia-map/data/municipis.json"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('valia5-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') { e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(k => k.put('index.html', c)); return res; }).catch(() => caches.match('index.html'))); return; }
  if (u.origin === location.origin || u.hostname.endsWith('fonts.gstatic.com') || u.hostname.endsWith('fonts.googleapis.com')) {
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok || res.type === 'opaque') { const c = res.clone(); caches.open(CACHE).then(k => k.put(r, c)); } return res; })));
  }
});
