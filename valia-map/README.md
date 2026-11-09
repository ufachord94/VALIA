# Valia Map · Mapa del Vallès Oriental

Mòdul de mapa real per a la PWA **Valia**: mapa base vectorial complet (carrers, pobles, rius, boscos i noms), relleu ombrejat, corbes de nivell, vista 3D amb terreny, satèl·lit ICGC i **totes les rutes senyalitzades de la comarca** amb fitxa i perfil d'elevació. Cost 0 €, sense claus d'API ni comptes.

| | |
|---|---|
| Rutes senyalitzades | **76** (12 GR · 17 PR · 16 SL · 18 locals · 3 BTT · 10 cicloturisme/carretera), 1.605 km dins la comarca |
| Xarxa de camins | **4.541 km** (2.553 km de pistes · 1.902 km de corriols · 75 km de carrils bici · 12 km de passeigs fluvials i vies verdes) |
| Punts d'interès | **2.048** (64 miradors · 545 fonts · 405 patrimoni · 27 pícnic · 448 aparcaments · 17 estacions Rodalies · 542 bus) |
| Municipis | 39 · 735,7 km² |
| Dades OSM | 9-11-2026 |

---

## 1. Estructura

```
valia-map/
  valia-map.js            mòdul ES: initValiaMap(), autoMountValiaMaps(), searchValiaRoutes()…
  valia-map.css           interfície del mapa (botons ≥ 44 px, clar/fosc)
  styles/light.json       estil base clar (OpenFreeMap Liberty + paleta Valia + relleu)
  styles/dark.json        estil base fosc
  data/limit.geojson      límit de la comarca
  data/mask.geojson       màscara per enfosquir l'exterior
  data/routes.geojson     rutes (geometria + propietats)
  data/route-labels.geojson  geometria suavitzada per escriure el nom al llarg de la línia
  data/paths.geojson      xarxa de camins (es carrega només a partir de zoom 10,3)
  data/pois.geojson       punts d'interès
  data/municipis.json     municipis (cercador)
  data/profiles/<id>.json perfil d'elevació de cada ruta (es carrega en obrir la fitxa)
  data/meta.json          recomptes, data de les dades i llicències
  vendor/                 MapLibre GL JS 5.24.0 i maplibre-contour 0.1.1 (sense CDN)
  scripts/build-map-data.mjs  regenera data/ (Overpass o extracte PBF)
  scripts/build-styles.mjs    regenera styles/
  scripts/vendor.mjs          copia les llibreries a vendor/
  scripts/serve.mjs           servidor local per provar demo.html
  demo.html                provador
```

Cap fitxer passa d'**3,8 MB** (límit de GitHub: 100 MB). Total del mòdul: ~7,5 MB (≈2 MB comprimit per GitHub Pages).

## 2. Provar-lo

`demo.html` necessita un servidor (els navegadors bloquegen `fetch` i els mòduls ES amb `file://`):

```bash
cd valia-map
node scripts/serve.mjs 8080
```

Obre <http://localhost:8080/demo.html>. Paràmetres: `?lang=es&theme=dark&base=topo&route=7375461`.
Qualsevol servidor estàtic serveix (`npx serve`, `python3 -m http.server`, GitHub Pages).

## 3. Integració pas a pas

1. Copia la carpeta `valia-map/` a l'arrel del repositori de l'app (al costat d'`index.html`).
2. Carrega el mòdul de manera diferida (també des d'un script clàssic):

```js
const { initValiaMap } = await import('./valia-map/valia-map.js');
const mapa = await initValiaMap(document.getElementById('mapa'), {
  lang: 'ca',            // 'ca' | 'es' | 'en' | 'fr'
  theme: 'light',        // 'light' | 'dark' | 'auto'
  mode: 'full',          // 'full' (interactiu) | 'preview' (imatge estàtica)
  route: 7375461,        // ruta inicial: id OSM, codi ('PR-C 208') o nom
  base: 'map',           // 'map' | 'topo' | 'sat'
  onRouteDetail: r => obrirDetall(r),   // botó «Veure detall»
  onRouteSelect: r => {},               // en tocar una ruta (null en tancar)
  onPoiSelect: p => {}
});
mapa.setLang('es'); mapa.setTheme('dark'); mapa.setBase('topo');
mapa.selectRoute('PR-C 33'); mapa.clearSelection(); mapa.set3D(true);
mapa.flyToMunicipality('Cardedeu'); mapa.destroy();
```

3. **Més fàcil: muntatge automàtic.** Posa contenidors amb `data-valia-map` a l'HTML i activa'ls una sola vegada:

```html
<div data-valia-map='{"mode":"preview","route":7375461}' style="height:200px"></div>
<div data-valia-map='{"mode":"full"}' style="height:100%"></div>
```

```js
const { autoMountValiaMaps } = await import('./valia-map/valia-map.js');
const vm = autoMountValiaMaps(document.getElementById('app'), {
  lang: () => document.documentElement.lang,
  theme: () => document.getElementById('app').classList.contains('mapdk51') ? 'dark' : 'light',
  onRouteDetail: r => {/* obrir detall */},
  onOpen: (opts, el) => {/* una vista prèvia s'ha tocat: obrir el mapa complet */}
});
vm.sync(); // crida-ho quan canviï l'idioma o el tema
```

Els mapes es destrueixen sols quan el seu element surt del DOM.

### Rendiment (Android de gamma mitjana)
- **Un sol mapa interactiu actiu**: en crear-ne un de nou en mode `full`, l'anterior es destrueix (un únic context WebGL).
- **Vistes prèvies sense WebGL viu**: es renderitzen quan entren a la pantalla (IntersectionObserver), una darrere l'altra, es converteixen en imatge i s'allibera el mapa. Les imatges es guarden en memòria.
- Càrrega diferida: llibreries i dades només en el primer `initValiaMap`; la xarxa de camins només a partir de zoom 10,3; els perfils, en obrir una fitxa.
- `pixelRatio` limitat a 2, sense antialiàsing extra.

### Service worker
Les dades i el codi són del mateix origen, així que el service worker actual de Valia ja els desa per funcionar sense connexió. Les tessel·les del mapa base, el relleu i l'ortofoto vénen de servidors externs i no es desen.
Si regeneres les dades, canvia la versió de la memòria cau del service worker perquè els usuaris rebin els fitxers nous.

## 4. Funcions
- Zoom (pessic, doble toc i botons), desplaçament, rotació amb dos dits, brúixola, escala i inclinació. La vista 3D inclinable fa servir terreny real.
- Mapa base **Mapa · Relleu · Satèl·lit**. Relleu = ombrejat fort + corbes de nivell cada 10/20/50 m segons el zoom. Satèl·lit = ortofoto ICGC amb etiquetes.
- Rutes de color per activitat: **senderisme** (verd), **BTT** (taronja) i **carretera/cicloturisme** (blau). Les GR porten un traç discontinu a dins. El nom s'escriu al llarg de la línia en l'idioma actiu: el codi a zoom baix i el nom complet a zoom alt.
- La xarxa de camins va per sota, més fina: pistes contínues, corriols discontinus, i carrils bici i vies verdes en blau i verd.
- Fora de la comarca el mapa s'enfosqueix i el límit es marca amb una línia verda.
- Filtres per a cada activitat, per als camins, per a les corbes, per al 3D i per a cada tipus de POI.
- Cercador de rutes per nom, codi o municipi (no distingeix accents). Si busques un municipi, el mapa hi vola.
- En tocar una ruta, es ressalta, el mapa s'hi ajusta i s'obre la fitxa. La fitxa mostra distància, desnivell + i −, temps estimat, dificultat, altitud màxima, municipis, perfil interactiu (en arrossegar el dit, un punt es mou pel mapa) i el botó «Veure detall».
- El botó **Ubica'm** fa servir el GPS i segueix la posició. Els POI s'agrupen en allunyar-se.
- Textos en català, castellà, anglès i francès. Botons ≥ 44 px i contrast WCAG AA. Es pot fer servir amb teclat (Esc tanca la fitxa o el panell).

## 5. Dades i metodologia
- **Rutes**: relacions OSM `type=route` + `route=hiking|foot|walking|bicycle|mtb` que toquen la comarca. Les superrutes sense vies pròpies s'eliminen i se'n mostren les etapes (per exemple, «Etapa de GR 92 …»). Les rutes que surten de la comarca es retallen a la comarca + 1,5 km, la fitxa ho indica com a «Tram dins del Vallès Oriental» i, si OSM ho té, dona el recorregut total.
- **Tipus**: GR/PR/SL segons el codi `ref`; BTT = `route=mtb`; cicloturisme/carretera = `route=bicycle`; la resta són locals.
- **Desnivell i perfil**: es mostreja cada 25 m sobre Terrain Tiles z13 (EU-DEM, ~15 m/píxel) amb interpolació bilineal, es suavitza amb una finestra de 125 m i un llindar de 2 m. Comprovació: PR-C 208 Santa Fe – Turó de l'Home dona +578 m, i el desnivell real és de ~576 m (1.130 → 1.706 m).
- **Temps i dificultat (estimats)**: a peu, DIN 33466 (4 km/h, +300 m/h, −500 m/h); BTT, 12 km/h i +600 m/h; carretera, 18 km/h i +700 m/h. Es classifica en fàcil, moderada, difícil o molt difícil. **No és la MIDE oficial.**
- **Camins**: `highway=path|footway|bridleway|track|cycleway|steps`, sense voreres ni accessos privats, retallats a la comarca + 150 m.
- **POI**: els aparcaments només hi surten si són a menys de 500 m d'una ruta, i les parades de bus si són a menys de 300 m. Així es mostra el que serveix per començar una ruta. Les estacions de bus i de Rodalies hi surten totes.
- **Límit**: és la relació OSM 2417929 + **Aiguafreda**. La relació OSM no inclou Aiguafreda, però l'Idescat sí que la compta dins la comarca (39 municipis). L'àrea resultant fa 735,7 km² (Idescat: 735 km²). L'ideal seria corregir-ho també a OpenStreetMap.

### Regenerar les dades

```bash
cd valia-map && npm install
npm run build:data        # Overpass; si no respon, descarrega l'extracte PBF de Catalunya (~300 MB) i el fa servir
npm run build:data:pbf    # directament des del PBF (≈70 s)
npm run build:styles      # torna a generar styles/light.json i dark.json
npm run vendor            # copia MapLibre a vendor/
```

Darrere d'un proxy: `NODE_USE_ENV_PROXY=1 npm run build:data`.
El PBF i les tessel·les del DEM es desen a `scripts/.cache/`, que està ignorada per git.

## 6. Fonts i llicències (cal mantenir l'atribució visible)

| Font | Ús | Llicència / atribució |
|---|---|---|
| © Col·laboradors d'**OpenStreetMap** | rutes, camins, POI, límit, mapa base | **ODbL 1.0**: «© OpenStreetMap contributors». Les dades derivades de `data/` també són ODbL. |
| **OpenFreeMap** + **OpenMapTiles** | tessel·les vectorials, tipografies, sprites | Gratuït i sense clau. Atribució: «OpenFreeMap © OpenMapTiles Data from OpenStreetMap» |
| **Terrain Tiles** (AWS Open Data / Tilezen) | relleu, 3D, corbes, desnivells | Atribució obligatòria. A Europa: «produced using Copernicus data and information funded by the European Union – EU-DEM layers», a més de SRTM/GMTED2010 (USGS) |
| **ICGC** – Ortofoto de Catalunya (servei mapa-base WMTS) | capa Satèl·lit | **CC BY 4.0**. Sense cost i sense restriccions d'accés (WMTS: `Fees none`, `AccessConstraints none`). Atribució: «Ortofoto © Institut Cartogràfic i Geològic de Catalunya (ICGC), CC BY 4.0» |
| MapLibre GL JS 5.24.0 · maplibre-contour 0.1.1 | renderitzat | BSD-3-Clause (vegeu `vendor/LICENSE-*`) |

L'atribució surt al control ⓘ del mapa (desplegat en carregar-lo) i canvia automàticament quan es fa servir el satèl·lit. No es fan servir dades de Strava ni de cap altra app privada, ni mapes de calor.

Referències: [OSM copyright](https://www.openstreetmap.org/copyright) · [OpenFreeMap](https://openfreemap.org) · [Terrain Tiles, AWS Registry](https://registry.opendata.aws/terrain-tiles/) · [Atribució Terrain Tiles (tilezen/joerd)](https://github.com/tilezen/joerd/blob/master/docs/attribution.md) · [Condicions d'ús ICGC](https://icgc.cat/en/Web/Help/Re-use-of-the-information) · [Ortofoto territorial ICGC](https://www.icgc.cat/en/Geoinformation-and-Maps/Data-and-products/Image/Territorial-Orthophoto)

## 7. Limitacions conegudes
- La qualitat depèn d'OSM. Si una ruta senyalitzada no hi està mapada com a relació, no surt al mapa: n'hi ha poques de BTT (3).
- La capa Satèl·lit només cobreix Catalunya, perquè és de l'ICGC.
- Els temps i les dificultats són estimacions, no la valoració oficial de la FEEC/MIDE.
- La branca Overpass del script no s'ha pogut executar en l'entorn on s'ha generat aquesta versió, perquè Overpass no era accessible des d'allà. Les dades d'aquesta entrega s'han generat amb la branca PBF, que fa servir les mateixes dades d'OSM i el mateix processament.
