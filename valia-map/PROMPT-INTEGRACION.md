# Prompt de integración · Valia Map

> Copia todo lo que hay debajo de la línea y pégalo en el chat que trabaja en la app Valia (repo `ufachord94/VALIA`). Adjunta también el ZIP `valia-map.zip` o la carpeta `valia-map/`.

---

Vas a integrar en la app Valia (repo `ufachord94/VALIA`, PWA en GitHub Pages) el módulo de mapa real **`valia-map/`** que te adjunto. **Objetivo único:** sustituir TODOS los mapas falsos actuales (dibujados en SVG con `mapSVG()`) por este módulo. **No cambies nada más**: ni el diseño, ni los textos, ni el flujo, ni otras funciones.

## 1. Copiar la carpeta
- Descomprime y copia la carpeta **`valia-map/` en la raíz del repo**, al lado de `index.html`, `app.js` y `sw.js`. Tienen que quedar `valia-map/valia-map.js`, `valia-map/data/…`, `valia-map/styles/…` y `valia-map/vendor/…`.
- No copies `node_modules/` ni `scripts/.cache/` si existen. Tampoco hace falta `demo.html`, aunque puede quedarse.
- No modifiques ningún archivo de dentro de `valia-map/`.

## 2. Cargar el módulo (sin tocar `index.html`)
`app.js` es un script clásico. Usa una **importación dinámica** la primera vez que haga falta un mapa:
```js
let VM = null;
const valiaMap = () => VM || (VM = import('./valia-map/valia-map.js'));
```

## 3. Dónde están los mapas que hay que sustituir
En `app.js` hay una función `mapSVG(w, h, o)`, junto a la constante `ROUTES = { caldes: [...], vall: [...] }`, que dibuja un mapa ilustrado falso. Busca **todas** sus llamadas (`mapSVG(`). Hoy hay 9 y cubren Explorar, el detalle de ruta, la ruta en curso, los check-ins, el tutorial/permisos y las miniaturas que se usan en IA, Comunidad, Recompensas y Perfil:

| Dónde (búscalo por este texto) | Qué es | Sustitución |
|---|---|---|
| `el.querySelector('[data-mapbox]').innerHTML = mapSVG(393, 852, …)` | **Explorar**: mapa a pantalla completa con pines | Mapa **`full`** (interactivo) |
| `const live = o => \`<div class="map" …>${mapSVG(393, 852, …` (módulo `Route`) | Ruta en curso | Mapa **`full`** con `route` |
| `class="pimg dhero mapthumb" … data-hero style="height:320px">${mapSVG(393, 320, { route: a.route …` | Cabecera del detalle de actividad | `preview` con `route` |
| `<h2 class="t3" …>Recorregut</h2>` + `mapSVG(393, 190, …)` | Recorrido en el detalle | `preview` con `route`. Al tocarlo, se abre `full` |
| `class="pimg cc mapthumb"` + `mapSVG(393, 220, …)` | Miniaturas de tarjetas (listas, IA, Comunidad, Recompensas, Perfil) | `preview` con `route` |
| `mapSVG(393, 300, { seed: a.seed + 1, pins: [[.5, .55, 'sel']] })` | Cabecera de un lugar sin ruta | `preview` con `center:[lon,lat]` y `zoom: 14` |
| `mapSVG(120, 120, { route: a.route, seed: a.seed })` | Miniatura cuadrada de una ruta | `preview` con `route` |
| `<div style="height:200px" class="cc">${mapSVG(393, 200, …` | Pantalla de check-in | `preview` con `route` |
| `SC[8]` «Permís d'ubicació»: `<div class="perm-map cc">${mapSVG(393, 340, …` | **Tutorial**/permiso de ubicación | `preview` (comarca entera) |

Si encuentras cualquier otro mapa falso (un SVG que use `ROUTES`, `mapthumb`, `perm-map`, `data-mapbox` o `class="map"`), sustitúyelo igual. Al acabar, `mapSVG(` no debe aparecer en ningún sitio. Borra `mapSVG` y `ROUTES` solo si ya no los usa nada.

## 4. Cómo sustituir (patrón)
Cambia cada `${mapSVG(...)}` por un contenedor vacío con las opciones en JSON. **Mantén el `div` exterior con sus clases y su altura**: solo cambia lo que va dentro.
```js
const vmBox = (o) => `<div data-valia-map='${JSON.stringify(o).replace(/'/g, '&#39;')}' style="position:absolute;inset:0"></div>`;
// p. ej.: `<div class="pimg cc mapthumb" style="${style}">${vmBox({ mode: 'preview', route: ROUTE_ID[a.id] })}</div>`
```
Activa el montaje automático **una sola vez**, justo después de que la app esté lista (por ejemplo, tras `IOS.init`):
```js
valiaMap().then(({ autoMountValiaMaps }) => {
  const app = document.getElementById('app');
  window.__vm = autoMountValiaMaps(app, {
    lang: () => document.documentElement.lang || 'ca',
    theme: () => app.classList.contains('mapdk51') ? 'dark' : 'light',
    onRouteDetail: r => { /* abre el detalle de la actividad asociada a r.id, si existe; si no, no hagas nada */ },
    onOpen: (opts, el) => { /* una vista previa se ha tocado: abre la pantalla de mapa (Explorar) con esa ruta */ }
  });
  new MutationObserver(() => window.__vm.sync()).observe(app, { attributes: true, attributeFilter: ['class', 'lang'] });
});
```
- **Tema:** la app ya calcula el tema del mapa con la clase `mapdk51` en `#app` (preferencia *Mapa* en Ajustes → auto/clar/fosc). Úsala tal cual.
- **Idioma:** la app pone `document.documentElement.lang`. Cuando cambie el idioma, llama a `window.__vm.sync()`. El observador de arriba ya lo hace si cambia `class`. Si el idioma no toca `#app`, llama también a `sync()` desde la función de cambio de idioma (`syncLang`).
- **Un solo mapa interactivo:** el módulo destruye el mapa `full` anterior cuando se crea otro. Los `preview` son imágenes estáticas (sin WebGL activo) y se renderizan al entrar en pantalla.
- Si un mapa `full` está dentro de una pantalla que se muestra después de crearse, el módulo se adapta solo. Si ves el lienzo vacío, llama a `el.__valiaMap.resize()` al mostrarla.

## 5. Rutas reales para las actividades de la app
Las actividades de ejemplo usan `route: 'caldes' | 'vall'`, que son trazados ficticios. Añade este diccionario y úsalo para la opción `route` (son id de relaciones OSM que están en `valia-map/data/routes.geojson`; cada una es la ruta señalizada real más cercana a las coordenadas `ll` de la actividad):
```js
const ROUTE_ID = {
  caldes: 1794375,   // PR-C 9.1 Sender de Caldes de Montbui
  fai: 379910,       // GR 5 Sender dels Miradors (pasa por Sant Miquel del Fai)
  gallecs: 14277266, // Xarxa Pedalable del Vallès Oriental (aprox., a 2 km)
  fageda: 10416927,  // L'empedrat de Morou (Santa Fe del Montseny)
  turo: 7375461,     // PR-C 208 Santa Fe – Turó de l'Home – Les Agudes
  calma: 10424038,   // PR-C 213 Figaró – Tagamanent
  porxada: 1567051,  // PR C-36 Granollers – La Roca del Vallès
  congost: 14277266, // Xarxa Pedalable del Vallès Oriental (Congost)
  cardedeu: 18678450,// El Camí de Llevant, tramo 2 (pasa por Cardedeu)
  megalits: 10366708,// Ruta Prehistòrica I: Can Gol – Céllecs (la Roca)
  llinars: 18727826, // GR 92 Catalunya E15 (aprox., a 1,8 km)
  puig: 18248651     // PR-C 227
};
```
En Explorar (mapa `full`), los pines de las actividades pueden mantenerse como lista o tarjetas fuera del mapa. **No hace falta dibujarlos encima**: el mapa ya muestra rutas, POI y buscador. Si la pantalla Explorar ya tenía un buscador propio por encima del mapa, deja solo el del módulo y oculta el de la app solo en esa pantalla. Lo que **no** debe pasar es que haya dos buscadores superpuestos.

## 6. Atribuciones (cambio obligatorio)
En `app.js`, en `doc(60, 'Atribucions dels mapes', [...])`, la entrada `['Mapa del prototip', "Mapa il·lustratiu de creació pròpia. No reprodueix cap cartografia oficial."]` deja de ser cierta. Sustitúyela por estas (textos en catalán; añade las traducciones a ES/EN/FR en el diccionario de la app, siguiendo el mismo patrón que el resto):
- `['Dades del mapa', "© Col·laboradors d'OpenStreetMap, llicència ODbL 1.0. Rutes, camins i punts d'interès derivats d'OpenStreetMap."]`
- `['Mapa base', "OpenFreeMap · © OpenMapTiles · dades © OpenStreetMap."]`
- `['Relleu i 3D', "Terrain Tiles (AWS Open Data). Dades d'Europa produïdes amb dades de Copernicus finançades per la Unió Europea (EU-DEM); SRTM/GMTED2010 cortesia de l'USGS."]`
- `['Ortofoto', "© Institut Cartogràfic i Geològic de Catalunya (ICGC), CC BY 4.0."]`

## 7. Service worker
- `sw.js` ya guarda en caché los archivos del mismo origen, así que el módulo y sus datos funcionarán sin conexión una vez visitados. **No añadas** `valia-map/` a `ASSETS`, porque inflaría la instalación unos 7 MB.
- Cambia solo la versión de `CACHE` (y el `?v=` de `index.html` si es como versionáis) para que los usuarios reciban la nueva versión.

## 8. Comprobación antes de dar por terminado
1. `grep -n "mapSVG(" app.js` no devuelve nada (o solo la definición, si la has dejado sin usar).
2. Con un servidor local (`python3 -m http.server`) y el móvil emulado a 412 px:
   - Explorar: se ve el mapa con relieve, pueblos y rutas. Puedes hacer zoom, buscar «Turó» y, al tocar una ruta, se abre la ficha con el perfil.
   - El detalle de actividad, las tarjetas, el check-in y el tutorial muestran mapas reales en miniatura.
   - Cambia el tema del mapa en Ajustes (clar/fosc/auto) y el idioma (ca/es/en/fr): los mapas cambian.
   - La consola del navegador no muestra errores.
3. Haz commit con un mensaje claro (por ejemplo, «Substitueix els mapes il·lustratius pel mòdul Valia Map») y **no toques nada más** de la app.
