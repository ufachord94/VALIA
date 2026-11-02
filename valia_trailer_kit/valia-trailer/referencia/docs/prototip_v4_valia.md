# Prototip visual v4 · Valia (08/10/2026)

Artifact: https://claude.ai/artifact/Ar8AY3rqig3VuieSKnaZGC · Base: v3 (https://claude.ai/artifact/WUKxATpm86cAitRrNGTvcF)

## Qué contiene
- 43 pantallas: 35 de la v3 + 8 nuevas «C · nova v4».
  - 36 Interessos (opcional, con «Omet»)
  - 37 Condicions, afluència i punts destacats
  - 38 Punts destacats de la comunitat
  - 39 Mapes sense connexió
  - 40 Avís de desviament
  - 41 Seguretat (ubicació en directe + 112)
  - 42 Reptes de grup
  - 43 El teu any amb Valia
- Nombre «Valia» en todo. Logo: hoja (#00A86B o #006B47) con excursionista en negativo, figura articulada en grupos SVG. Versiones: color, mono blanco sobre foto e icono de app (claro y oscuro). Variante pequeña ≤32 px.
- Coherencia con los check-ins: las pantallas 8, 10, 19, 20, 21, 25 y 29 ya no hablan de grabar el recorrido.
- Bloque 5: un solo acento; solo «Difícil» lleva color; máximo 2 etiquetas por tarjeta; metadatos en una línea (durada · km · desnivell); 4 tamaños de texto (32/20/15/13) comprobados por script; cifras tabulares; iconos Lucide (trazo 2 o 1,75); menos bordes; microinteracciones de 180 ms.

## Animación de carga (pantalla 1)
- Fases: 0 (0–0,4 s), 1 hoja (0,4–1,8 s), 2 caminar (1,2–2,6 s), 3 globo (2,4–3,0 s) y 4 bucle.
- Datos de la marcha: zancada 39 u = 66,3 px; periodo 1,05 s (114 pasos/min); superficie del globo a 63,1 px/s.
- Globo: radio 95 px; una vuelta = 9 ciclos = 9,45 s, así que el bucle es exacto.
- El personaje avanza 28 px; el cuerpo oscila unos 3 px.
- Deslizamiento de pies y bastón en el bucle: 0 px (comprobado numéricamente).
- Salida: fundido de 300 ms; duración mínima 3 s y máxima 5 s. Con «Reduir animacions», el logo queda quieto.
- En producción: Lottie o Rive. Antes va la launch screen estática del sistema.

## Decisiones y avisos
- Fotos: el entorno no pudo descargar de Wikimedia Commons, así que las imágenes de lugares del Vallès son composiciones procedimentales con la marca «Foto real a substituir».
- Fotos de personas: son las aportadas por el equipo (licencia por confirmar). La de costa no se usó porque el Vallès Oriental no tiene mar.
- Corrección de la v3: el blanco sobre #00A86B da 3,08:1, no 3,25:1.
- La calidad del aire no la da el Meteocat: viene de la XVPCA (datos abiertos diarios, del día anterior). La API del Meteocat pide clave personal.
- La ubicación en directe y el aviso de desviación necesitan ubicación en segundo plano durante la ruta. Esto choca con el principio «solo mientras usas la app» del plan. Propuesta: activarlo por ruta, con indicador visible y caducidad automática.
- Colores del logo en v4: #00A86B / #006B47, por petición de la v4. Son distintos de la propuesta Verd Faig #0E8257 de logo_greenvalles.md.

## Pendiente
- Sustituir todas las composiciones por fotos reales con licencia y crédito.
- Búsqueda de marca «Valia» (OEPM/EUIPO) y test de los 2 segundos del logo.
- Fuentes de datos de afluencia (check-ins agregados) y de condiciones.
- Retos con escuelas o menores de 14 años (v2).
- Leer el artículo de NN/g para citarlo con detalle: existe, pero no se pudo abrir.
