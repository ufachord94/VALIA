# GreenVallès · Viabilidad, MVP y plan de construcción con Claude

*Versión 1 · 23/09/2026 · Basado en el prototipo v3 (35 pantallas), Teoria.docx y datos verificados en septiembre de 2026.*

> Nota (11/10/2026): «GreenVallès» = **Valia** (nombre definitivo). El stack de la sección 3.1 (Expo) lo sustituye la guía de publicación v2 (PWA con React + Vite + TypeScript). La paleta visual que manda es la del prototipo v6, no las de la sección 4.1.

**Esquema:** 0 Veredicto · 1 Viabilidad · 2 Cambios y MVP · 3 Plan con Claude · 4 Sistema de diseño · 5 Mapa de pantallas · 6 Configuración · 7 Especificación para Claude Code · Recomendación final · Pendent · Fuentes

---

## 0. Veredicto

- **Viable** para dos personas + Claude con 4 condiciones: (1) la IA **elige y explica** rutas de un catálogo verificado, no las inventa; (2) la grabación se sustituye por **check-ins GPS** que validan la actividad; (3) *Explorar* empieza como **catálogo comunitario moderado**, no como red social; (4) las recompensas las **financian los comercios** (descuentos), no vosotros.
- Infraestructura de un piloto (≈300 usuarios activos/mes): **≈55–75 $/mes**. El cuello de botella no es técnico: es **contenido, convenios y tiempo**.
- La "IA que propone rutas" ya no diferencia: Komoot busca rutas en lenguaje natural dentro de ChatGPT (feb. 2026) y AllTrails vende rutas personalizadas con IA desde 2025. Vuestra ventaja es **lo local conectado**: patrimonio + Km0 + recompensas + impacto medido (IIT).
- Para el TR, el entregable realista es un **prototipo funcional en el móvil** (catálogo real + IA real). La app publicada es la fase siguiente.

---

## 1. Viabilidad

### 1.1 Por sección

| Sección | Viabilidad | Dificultad | Coste/mes (piloto) | Riesgo principal | ¿Tú + Claude? |
|---|---|---|---|---|---|
| IA · chat | Alta | Media | 10–25 $ (API) | Alucinaciones (rutas o datos inventados); coste sin límite de mensajes | Sí |
| IA · buscador con filtros | Muy alta | Baja | 0 $ (consulta a la base de datos, sin IA) | Taxonomía de filtros mal definida | Sí |
| Explorar (comunidad) | Media | Alta | ≈0 $ + horas de moderación | Arranque en frío, rutas peligrosas, obligaciones DSA y Apple | Código sí; moderar: vosotros |
| Recompensas | Técnica alta; comercial baja sin convenios | Media / alta | 0 $ si las pagan los comercios | Sin comercios no hay catálogo; fraude de puntos | Código sí; convenios: vosotros |
| Perfil (impacto, estadísticas, retos) | Alta | Media | 0 $ | Cifras de CO₂ no defendibles ante el tribunal | Sí; metodología: vosotros |
| Configuración | Alta | Baja | 0 $ | Exceso de opciones = más errores | Sí |
| Mapas | Alta | Media | 0 € (ICGC, CC BY) | Servicio sin SLA documentado | Sí |
| Datos de rutas y patrimonio | Media | Alta (trabajo de campo) | 0 € + tiempo | Licencias: descargar ≠ poder reutilizar | Parcial: el campo es vuestro |
| Legal y tiendas | Media | Media | 99 $/año Apple + 25 $ Google (una vez) | Menores, RGPD, revisión de Apple | Borradores sí; revisión: un tercero |

### 1.2 Costes

| Concepto | Desarrollo | Piloto (300 MAU) | 1.000 MAU | Nota |
|---|---|---|---|---|
| Claude API (chat) | < 5 $ | ≈ 23 $ | ≈ 76 $ | Haiku 4.5 (1 $/5 $ por M tokens), 10 mensajes/usuario/mes, ≈0,008 $/mensaje |
| Supabase | 0 $ | 25 $ | 25 $ | El plan Free se pausa tras 1 semana sin uso → Pro para el piloto |
| Expo EAS | 0 $ | 0–19 $ | 19 $ | Free: 15 compilaciones iOS + 15 Android al mes |
| Mapas ICGC | 0 € | 0 € | 0 € | Atribución obligatoria «©ICGC» |
| Embeddings (v1.1) | 0 $ | 0 $ | 0 $ | voyage-4-lite: 0,02 $/M tokens, 200 M gratis |
| Apple · Google | — | 99 $/año · 25 $ una vez | — | — |
| **Total infraestructura** | **≈0–5 $/mes** | **≈55–75 $/mes** | **≈130 $/mes** | + Claude para construir: Pro 20 $/mes (17 $ anual) |

*Supuestos del coste de IA (cálculo propio con los precios de Anthropic):* prompt de sistema de 2.500 tokens en caché, 2 llamadas por mensaje (uso de herramientas), 8 rutas candidatas, respuesta de 450 tokens. Con Sonnet 5 (2 $/10 $) sería ≈0,015 $/mensaje. Los filtros no gastan IA.

### 1.3 Qué haces tú con Claude y qué necesita terceros

**Tú + Claude:** la app entera en Expo (pantallas, navegación, estados, accesibilidad, idiomas); el backend en Supabase (tablas, seguridad por filas, funciones de búsqueda, check-in, puntos y canje); la integración con la API de Claude; la conversión de GPX y la importación del patrimonio de la Diputació; los borradores de la política de privacidad, las condiciones y las bases del programa de puntos; los textos y capturas de las tiendas; la web de soporte y de eliminación de cuenta.

**Necesita terceros o conocimiento que no tenéis:**
- **Revisión legal** de privacidad, condiciones, bases de puntos y evaluación de impacto (RGPD): asesor de un servicio de emprendimiento o profesional.
- **Convenios** con comercios y con el Consell Comarcal: negociación presencial (área de Turismo y Convenios).
- **Cuentas de desarrollador:** Apple exige mayoría de edad (si sois menores, la abre y comparte un padre, madre o tutor) y Google Play exige 18 años.
- **Revisión de seguridad** antes de abrir al público: Claude audita, pero conviene un segundo par de ojos humano (profesor de informática o desarrollador).
- **Validación de rutas sobre el terreno y fotografía propia.**
- **Moderación humana:** Claude filtra, vosotros decidís.

### 1.4 Obligaciones y dependencias que condicionan el diseño

- **AI Act, art. 50** (aplicable desde el 2/8/2026): hay que informar de que se habla con una IA → etiqueta «Estàs parlant amb una IA» en el chat.
- **DSA, arts. 16–17** (todo servicio de alojamiento, microempresas incluidas): mecanismo de denuncia y motivo explicado de cada retirada. La exención para micro y pequeñas empresas (art. 19) solo cubre la sección de plataformas en línea.
- **Apple 1.2** (contenido de usuarios): filtro, denuncia, bloqueo de usuarios y contacto publicado. **Apple 5.1.1(v)** y **Google Play**: eliminar la cuenta desde la app; Google exige además un enlace web.
- **RGPD y LOPDGDD:** en España, consentimiento propio a partir de 14 años. La AEPD exige evaluación de impacto si se dan dos o más criterios de su lista (p. ej., geolocalización sistemática y exhaustiva + menores de 14). Check-ins sin rastreo continuo y usuarios de 14+ reducen ese riesgo; documentadlo igualmente.
- **Licencias:** ICGC y Diputació son CC BY (atribución obligatoria); OpenStreetMap es ODbL.
- **Strava:** sus condiciones prohíben usar los datos de su API en IA (desde nov. 2024) y, desde junio de 2026, exigen suscripción a los desarrolladores estándar. No la uséis: que cada usuario suba su propio GPX.

---

## 2. Cambios recomendados

### 2.1 Lo que corregiría del concepto

| # | Propuesta actual | Problema | Cambio |
|---|---|---|---|
| 1 | La app no graba rutas | Sin datos de actividad no hay puntos, ni gráfico semanal, ni CO₂. Además, el prototipo v3 sí graba (pantallas 19–21): contradicción | **Mode ruta sin grabación:** check-ins GPS en 3–5 puntos (radio ≈100 m, permiso solo «mientras uses l'app»). Valida la ruta y alimenta puntos, estadísticas e impacto. Grabación completa → v2, opcional |
| 2 | Filtros → la app genera un prompt | Pasar datos estructurados a texto para que la IA los vuelva a estructurar es más lento, más caro y menos fiable | Filtros → **consulta directa** a la base de datos (instantánea, 0 $). Un único motor `buscar_rutes` con dos entradas: chat y filtros. La IA solo interviene en el chat y en la redacción |
| 3 | La IA genera la ruta | Un modelo de lenguaje puede inventar caminos, fuentes o monumentos: riesgo de seguridad y de credibilidad | La IA **elige y explica** rutas del catálogo verificado. Rutas a medida con motor de enrutamiento → v2, revisadas |
| 4 | Explorar = red social tipo Strava | Moderación, DSA, norma 1.2 de Apple, menores y arranque en frío: demasiado para un MVP | MVP: **Comunitat** = rutas propuestas por usuarios, moderadas, con valoraciones y guardados. Feed, seguidores y comentarios → v2 |
| 5 | Recompensas de transporte, tarjetas regalo y suscripciones (v3) | Cuestan dinero real, exigen acuerdos con grandes empresas y no ayudan al comercio local | **Solo recompensas financiadas por comercios y equipamientos locales** (el descuento es su coste de captación). Transporte → v2 si hay acuerdo |
| 6 | Configuración como 5.ª sección, personalizable «como el código abierto» | Una pestaña de ajustes quita espacio a lo importante; la personalización libre multiplica errores y rompe el contraste | **4 pestañas** (IA · Explorar · Recompenses · Perfil); ajustes desde el Perfil (⚙). Personalización **curada**: temas y acentos predefinidos que ya cumplen el contraste |
| 7 | Público: todo el mundo | Diluye el MVP | MVP para **residentes de 14 años o más** (familias con un adulto, senderistas, ciclistas). Escuelas y entidades → v2 (cuentas de grupo y menores de 14) |

**Extra · «contaminació zero» defendible desde la app**
- Mostrad **«CO₂e evitat (estimat)»**, no «estalviat», y contad solo lo defendible: el trayecto de acceso hecho sin coche (pregunta «Com has arribat?») y las rutas que sustituyen un desplazamiento. Una ruta circular a pie no evita emisiones por sí misma.
- Añadid la tarjeta **«Petjada digital de l'app»**: una respuesta de IA emite del orden de 0,03 g CO₂e (Google, 2025) a 1,14 g CO₂e (Mistral, 2025); un coche, del orden de 121–191 g CO₂e/km (MITECO 2025: híbrido 0,121; taxi 0,191 kg/km). 1 km sin coche compensa ≈100–6.000 respuestas. La hipótesis se puede reformular como «impacte net positiu mesurat».

### 2.2 MVP y versiones futuras

| Área | MVP (piloto) | v1.1 | v2+ |
|---|---|---|---|
| IA | Chat acotado al territorio con uso de herramientas; filtros visuales; «Per què aquesta ruta?»; límite de mensajes | Microaventuras de varias paradas (ruta + patrimonio + Km0 + transporte); búsqueda semántica; meteo | Rutas a medida; voz; audioguías |
| Catálogo | 30–40 microaventuras verificadas; 150–300 puntos de patrimonio (Diputació, CC BY); 5–10 comercios | 80–100 rutas; colecciones temáticas | Convenios municipales; offline completo |
| Explorar | Catálogo + comunidad moderada + valoraciones + denuncias | Perfil público de autor | Feed, seguir, comentarios, clubs y entidades, fotos públicas |
| Actividad | Mode ruta con check-ins; resumen; tarjeta para compartir | Preguntas en los puntos de patrimonio | Grabación GPS opcional; Apple Health y Health Connect |
| Recompensas | Puntos por microaventura y check-in; 5–10 recompensas; objetivo favorito; cupón con PIN del comercio; historial; caducidad a 12 meses | Retos semanales con puntos extra; bonificación por primera visita a un comercio | Portal web del comercio; transporte; niveles |
| Perfil | Impacto (km sin coche, CO₂e evitado estimado, patrimonio, comercios) con su metodología; gráfico semanal; medallas básicas; 1 reto global mensual | «Petjada digital de l'app» | Retos de grupo y entidad; escuelas; **panel IIT para ayuntamientos** (ingreso B2G) |
| Configuración | Tema, acentos, texto, reducir movimiento, idioma, notificaciones, privacidad, cuenta | Orden de pestañas, estilos de mapa | Laboratorio de funciones experimentales |
| Plataforma | iOS + Android, catalán (castellano preparado) | Inglés | Web |

### 2.3 Cómo debe «aprender» la IA de las rutas de los usuarios

| Opción | Qué es | A favor | En contra | Veredicto |
|---|---|---|---|---|
| Reentrenar (fine-tuning) | Ajustar el modelo con vuestras rutas | — | Caro, lento, poco práctico para vosotros, no sirve para datos que cambian cada día y no elimina las alucinaciones | ❌ No |
| Solo RAG vectorial | Guardar descripciones como vectores y recuperar las más parecidas | Entiende peticiones vagas («algo tranquilo con vistas») | Respeta mal restricciones numéricas (≤2 h, perro, tren) | ⚠️ Complemento |
| Base de datos + herramientas | Rutas en Postgres/PostGIS con atributos; la IA llama a `buscar_rutes(filtres)` | Exacto, barato, auditable; una ruta nueva está disponible al instante | Hay que definir bien los atributos | ✅ **MVP** |
| Híbrido | SQL para filtrar + vectores para ordenar por afinidad + señales de calidad | Lo mejor de las dos | Algo más complejo | ✅ **v1.1** (a partir de ≈200 rutas) |

**Decisión:** base de datos estructurada + herramientas en el MVP; vectores (pgvector) en v1.1; nunca reentrenar.

«Aprender», en la práctica, son tres mecanismos:
1. **Crece el catálogo.** Ruta de usuario → validación automática (GPX válido, dentro de la comarca, longitud razonable, texto sin datos personales, revisión con Claude) → revisión humana → tabla `routes` con `font = 'comunitat'` → disponible en el chat y en los filtros sin reentrenar nada. La IA cita al autor.
2. **Mejora el orden.** Cada ruta acumula señales (valoración, % de check-ins completados, guardados, denuncias, antigüedad) → `puntuacio_qualitat`, recalculada cada noche.
3. **Personalización.** Tabla `preferencies` (explícitas del onboarding + implícitas: tipo de rutas completadas) que se envía resumida a la IA en cada consulta. El usuario puede verla y borrarla.

```
«2 h amb gos i esmorzar de forquilla»
  → función /ia (valida sesión y límite de mensajes)
  → Claude + herramienta buscar_rutes
      → SQL/PostGIS (+ vectores en v1.1) → 8 candidatas
  → Claude elige 2–3, explica por qué y cita las paradas Km0
  → la app pinta tarjetas con datos de la base de datos (no texto inventado)
```

Añadid un **banco de 30–50 preguntas de prueba** con criterios comprobables (p. ej., «amb gos, ≤2 h» solo puede devolver rutas que admiten perros y duran 1,5–2,5 h). Es vuestra métrica de calidad de la IA y un indicador medible para la hipótesis 1.

---

## 3. Plan de construcción con Claude

### 3.1 Stack

| Capa | Elección | Por qué | Descartado |
|---|---|---|---|
| App iOS + Android | **Expo (React Native) + TypeScript + Expo Router** | Un solo código; iOS se compila en la nube con EAS (no necesitáis Mac para compilar); actualizaciones sin pasar por la tienda; rutas por archivos = mapa de pantallas 1:1; TypeScript es el ecosistema con más ejemplos, lo que ayuda a Claude Code | Flutter (Dart); nativo Swift + Kotlin (dos apps); no-code (se queda corto con IA + mapas + puntos) |
| Backend | **Supabase** en región UE: Postgres + PostGIS + pgvector + Auth + Storage + Edge Functions | Consultas geográficas («rutas a 15 min de una estación»); SQL para calcular el IIT; seguridad por filas; acceso con Apple, Google y correo | Firebase (peor para consultas geográficas y analítica) |
| IA | **API de Claude**: Haiku 4.5 para el chat; Sonnet 5 para redactar microaventuras (v1.1) | Uso de herramientas nativo; caché de prompt (lecturas a 0,1×); Batch −50 % para pregenerar descripciones | — |
| Mapas | **MapLibre React Native + estilos del ICGC** (topográfico y ortofoto, CC BY) | Gratis; cartografía oficial 1:5.000 con toponimia catalana; cobertura perfecta de la comarca | Mapbox (gratis hasta 25.000 MAU móviles); Google Maps (no topográfico) |
| Búsqueda semántica (v1.1) | pgvector + voyage-4-lite | Coste ≈0 | — |
| Calidad | TypeScript estricto, ESLint, Jest + Testing Library | Dan a Claude una forma de comprobar su trabajo | — |

MapLibre no funciona en Expo Go: necesita un *development build* (EAS lo compila dentro del plan gratuito). En la fase 2 el mapa puede ser una imagen estática para seguir usando Expo Go.

### 3.2 Fases

*Supuesto: entrega del TR en unos 3 meses. Las fases 0–4 cubren el TR; la 5 y la 6, después o si sobra tiempo.*

| Fase | Semanas | Objetivo | Entregable | Herramienta |
|---|---|---|---|---|
| 0 · Decisiones y especificación | 1 | Cerrar alcance, paleta, filtros y reglas de puntos | `docs/` con producto, pantallas y CLAUDE.md | Chat (Proyecto TR) para decidir; Cowork para escribir los archivos |
| 1 · Contenido y datos | 2–3 (en paralelo) | Catálogo inicial | 30 rutas GPX con ficha; patrimonio importado; 5 comercios entrevistados | Cowork (GPX, JSON, hojas de cálculo, entrevistas) + trabajo de campo |
| 2 · Prototipo navegable | 2–3 | Pantallas MVP con datos locales | App instalada en vuestros móviles | Claude Code |
| 3 · IA real + filtros | 2 | `buscar_rutes` + chat con herramientas | Función de IA + banco de pruebas automático | Claude Code |
| 4 · Pruebas con usuarios | 1–2 | Medir la hipótesis 1 | 10–15 usuarios: tareas completadas, cuestionario SUS, intención de uso | Cowork (análisis y gráficos) + chat (redacción del TR) |
| 5 · MVP completo | 4–6 | Cuentas, check-ins, puntos, recompensas, comunidad, moderación | TestFlight + prueba cerrada de Google Play (12 testers × 14 días: vuestra clase) | Claude Code |
| 6 · Piloto | 4 | 100–300 usuarios y 5–10 comercios | Métricas reales para el plan financiero y el IIT | Cowork (panel de métricas) |

### 3.3 Cómo sacar el máximo a cada herramienta

- **Claude chat (Proyecto TR):** decidir, redactar el TR en catalán y cuestionar supuestos. Mantened aquí Teoria.docx y este plan.
- **Cowork:** todo lo que son archivos y datos en una carpeta de vuestro ordenador: convertir GPX, importar la API de la Diputació, hojas de cálculo del plan financiero, análisis de encuestas, maquetas HTML rápidas, búsqueda con fuentes y tareas programadas. En tu cuenta existe el tipo de artefacto **Design System**: úsalo para fijar tokens y componentes y exportarlos después a `theme/tokens.ts`.
- **Claude Code** (la app de escritorio es lo más sencillo):
  - `/init` para crear CLAUDE.md; **modo plan** (`Shift+Tab`) antes de cada tarea no trivial y `Ctrl+G` para editar el plan.
  - Para funciones grandes: «Entrevístame con AskUserQuestion y escribe SPEC.md»; después, sesión nueva para implementar.
  - **Skills** en `.claude/skills/` (p. ej., `nova-pantalla`: lee la ficha y crea la pantalla con los tokens).
  - **Subagentes** en `.claude/agents/` (revisor de accesibilidad, revisor de i18n).
  - **Hooks**: lint + comprobación de tipos tras cada edición; un hook de parada que ejecute los tests.
  - `/goal` («no pares hasta que pasen los tests»), `/code-review` antes de cada commit, `/rewind` si algo se tuerce, `/clear` entre tareas.
- **Suscripción:** Pro (20 $/mes) incluye Claude Code y Cowork. Si os quedáis sin uso en las fases 2–5, Max (desde 100 $/mes) solo esas semanas.

---

## 4. Sistema de diseño

**Concepto:** la claridad de una app financiera con los colores del Vallès. De Robinhood, la cifra grande y el gráfico limpio; de Qapital, los objetivos con progreso visible; de Zogo, la recompensa inmediata. Los colores salen del territorio, no de otra app verde más.

**Principios**
1. **La cifra manda:** un número grande por tarjeta, gráfico debajo, sin cajas innecesarias.
2. **Progreso visible:** cada acción suma a algo que se ve avanzar (objetivo, reto, nivel).
3. **Recompensa inmediata:** puntos y medallas con animación breve y vibración, nunca bloqueante.
4. **Legible al sol:** modo claro por defecto (se usa al aire libre), contraste AA, zonas táctiles ≥44 pt.
5. **Territorio:** fotos propias, ilustraciones de patrimonio, nombres de color locales.

### 4.1 Paletas (contraste WCAG 2.x calculado; ☀ claro, ☾ oscuro)

| Token | **Fageda** (recomendada) | **Termal** | **Ginesta** |
|---|---|---|---|
| Inspiración | Hayedo del Montseny en otoño · Qapital | Aguas termales de Caldes · Robinhood | Retama y río Congost · Zogo |
| Modo por defecto | Claro | Oscuro | Claro |
| Fondo | ☀ `#F6F7F4` · ☾ `#0F1512` | ☾ `#0A1418` · ☀ `#F5FAFA` | ☀ `#FFFFFF` · ☾ `#0E1230` |
| Superficie | ☀ `#ECEFEA` · ☾ `#18201B` | ☾ `#11212A` · ☀ `#E7F0F1` | ☀ `#F4F6FF` · ☾ `#171C44` |
| Texto | ☀ `#14201A` (15,6) · ☾ `#EEF2EE` (16,3) | ☾ `#EAF4F6` (16,7) · ☀ `#0A1F26` (16,1) | ☀ `#141A3A` (17,0) · ☾ `#F2F4FF` (16,7) |
| Texto secundario | ☀ `#55615A` (6,0) · ☾ `#A9B4AD` (8,6) | ☾ `#9FB5BC` (8,7) · ☀ `#4E6770` (5,7) | ☀ `#56608A` (6,1) · ☾ `#AEB5DA` (9,1) |
| Primario | Faig ☀ `#1D5C42` + texto blanco (7,9) · ☾ `#62CF97` + texto `#0C1A12` (9,3) | Aigua ☾ `#37D6C4` + texto `#0A1418` (10,3) · ☀ `#0E6E6A` + blanco (6,1) | Blau Congost ☀ `#2A4BE0` + blanco (6,6) · ☾ `#7F95FF` + `#0E1230` (6,7) |
| Acento (patrimonio, recompensas) | Coure ☀ `#B4561F` + blanco (4,9) · ☾ `#F08A55` (7,5) | Or (el mismo color que los puntos) | Rosella ☀ `#FF5A4E` + texto oscuro (5,5) · ☾ `#FF7A70` |
| Puntos | Blat ☀ `#E8B23A` + texto oscuro (8,7) · ☾ `#F5C451` | Or `#FFC34D` (11,7); texto ☀ `#8A5A00` (5,6) | Ginesta ☀ `#FFD23F` (11,7) · ☾ `#FFDB5C` |
| Eco / éxito | = primario | = primario | Molsa ☀ `#2FBF71` (7,1) · ☾ `#4FD98C` |
| Información | ☀ `#2E6BC6` (4,8) · ☾ `#7FB0FF` (8,4) | ☾ `#7CB7FF` (9,0) · ☀ `#1F63C6` (5,5) | = primario |
| Error | ☀ `#B42318` (6,1) · ☾ `#FF7A6B` (7,3) | ☾ `#FF6B6B` (6,7) · ☀ `#B42318` (6,2) | ☀ `#C8281B` (5,6) · ☾ `#FF7B6E` (7,2) |
| A favor | Identidad del territorio, cálida y seria; el primario admite texto blanco (el maragda `#00A86B` del v3 no: 3,25:1) | La más «fintech»; los datos lucen en oscuro | La más atractiva para jóvenes y para la gamificación |
| En contra | Menos impacto inicial; depende de buena fotografía | El modo oscuro se lee peor al sol | Menos seria ante ayuntamientos y comercios; el azul no evoca sostenibilidad |

Las tres paletas están aplicadas a la pantalla de Perfil, en claro y oscuro, en el artefacto **«Paletes GreenVallès»**.

**Decisión: Fageda** como tema por defecto (claro + oscuro) y **Termal** como tema alternativo seleccionable en *Aparença*. Así la personalización es real y nunca rompe el contraste. Los separadores (`#DCE1DA`) son decorativos y no necesitan contraste.

### 4.2 Tipografía

| Paleta | Títulos y cifras grandes | Interfaz y cuerpo |
|---|---|---|
| **Fageda** | **Bricolage Grotesque** 700–800 | **Inter** 400–600 con cifras tabulares (`tabular-nums`: los números no «bailan» al animarse) |
| Termal | IBM Plex Sans 600 | IBM Plex Sans + IBM Plex Mono para cifras |
| Ginesta | Fredoka 600 | Nunito Sans |

Escala (pt): display 40/44 · H1 30/36 · H2 22/28 · H3 17/22 · cuerpo 15/22 · pequeño 13/18 · etiqueta 12/16. Todas son de Google Fonts (licencia OFL) e incluyen los caracteres del catalán (à, ç, ï, l·l). Probad la interfaz con el texto del sistema al 200 % sin que nada se corte.

### 4.3 Componentes base

Botón (primario, secundario, fantasma, destructivo; 56 y 48 pt) · chip de filtro (selección múltiple, contador) · control segmentado · tarjeta de ruta (foto, título, 4 datos, insignias tren/Km0/perro) · tarjeta de microaventura (línea de tiempo de paradas) · burbuja de chat + tarjeta incrustada + sugerencias · hoja inferior · stat tile (cifra + etiqueta + variación) · anillo de progreso · barra de progreso · medalla (bloqueada/desbloqueada) · contador de puntos tipo odómetro · cupón (código + temporizador + sello animado + PIN) · fila de ajustes · marcadores de mapa (patrimonio, natura, Km0, check-in, inicio y fin) · perfil de elevación interactivo · aviso breve (toast) · estado vacío · esqueleto de carga · banner (sin conexión, IA limitada) · etiqueta «Estàs parlant amb una IA». Se mantiene del v3: la escala de espaciado de 4 px, los radios, las zonas táctiles y los paneles de vidrio sobre foto (mínimo 60 % de negro).

### 4.4 Gráficos

| Gráfico | Dónde | Interacción |
|---|---|---|
| Barras de 7 días | Perfil | Arrastrar para ver cada día; la barra de hoy en primario y el resto en neutro |
| Línea acumulada (km sin coche o CO₂e) | Impacto | Arrastrar con vibración en cada punto (estilo Robinhood) |
| Perfil de elevación (área) | Detalle de ruta, Mode ruta | Arrastrar mueve un punto en el mapa |
| Anillos de progreso | Retos, objetivo favorito | Se llenan al entrar (600 ms) |
| Barra comunitaria | Reto global | Marca tu aportación dentro del total |

Evitad donuts de más de 3 segmentos, 3D y rojo/verde como único código (daltonismo). Librería: Victory Native (sobre Skia) o react-native-gifted-charts, con Reanimated.

### 4.5 Animaciones clave

Todas con versión sin movimiento si el sistema tiene activado «Reducir movimiento».

| Momento | Animación | Duración |
|---|---|---|
| Elegir un filtro | El chip se encoge a 0,96 y vuelve + vibración leve; el contador «Veure 23 rutes» cambia contando | 150–200 ms |
| La IA piensa | Una línea de ruta se dibuja sobre un minimapa (no una rueda genérica) | bucle |
| Llega la respuesta | Las tarjetas entran escalonadas (60 ms entre ellas) | 300 ms |
| Abrir una ruta | La foto de la tarjeta se convierte en cabecera; el mapa vuela al trazado y la línea se dibuja | 600–900 ms |
| Check-in | Pulso en el marcador + «+20» que sube + vibración de éxito | 700 ms |
| Fin de ruta | Odómetro de puntos + confeti breve + medalla que gira; se puede saltar | ≤2 s |
| Gráficos | Las barras crecen desde cero; arrastre con vibración | 400 ms |
| Cupón activo | Sello animado + temporizador circular (dificulta usar capturas) | continuo |
| Esqueletos | Brillo suave | 1,4 s |

Herramientas: Reanimated + Moti; Lottie o Rive para celebraciones; expo-haptics.

---

## 5. Mapa de pantallas

*P12 = pantalla 12 del prototipo v3 · Nueva · Mod. = modificada. Navegación: 4 pestañas (IA · Explorar · Recompenses · Perfil); la configuración se abre desde el Perfil.*

### A. Primer uso y cuenta

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| A1 | Càrrega (P1) | Entrar en ≤2 s | Logotipo, foto de fondo, indicador | Automática; si tarda más, esqueleto | MVP |
| A2 | Benvinguda (P2) | Propuesta de valor en 3 frases | Carrusel de 3 fotos; «Començar», «Iniciar sessió», «Continuar sense compte» | Deslizar | MVP |
| A3 | Registre (P3–P5) | Cuenta en menos de 30 s | Apple, Google, correo | Diálogo del sistema | MVP |
| A4 | Codi de verificació (P7) | Confirmar el correo | 6 casillas, reenviar con temporizador | Autorrelleno del código | MVP |
| A5 | Inici de sessió (P6) | Volver a entrar | Apple, Google, correo sin contraseña | — | MVP |
| A6 | Edat i consentiments (Mod. P10) | Cumplir RGPD y LOPDGDD | Año de nacimiento (bloquea menores de 14); condiciones; interruptores opcionales: analítica, novedades comerciales, personalización con IA | Nada marcado de entrada | MVP |
| A7 | Com et mous? (Nueva, 3 pasos) | Personalizar desde el primer minuto | Chips: actividades, ritmo, con quién, intereses, cómo llegas (tren, bus, bici, coche) | Se puede saltar; editable | MVP |
| A8 | Permís d'ubicació (P8) | Explicar antes del diálogo | Motivo: check-ins y rutas cercanas; solo mientras se usa | «Ara no» no bloquea | MVP |
| A9 | Permís de notificacions (Mod. P9) | Pedirlo en contexto | Aparece al guardar la primera ruta o unirse a un reto | — | MVP |
| A10 | Mode convidat (P11) | Probar sin cuenta | Banner de límites: filtros sí, 3 mensajes de IA, sin puntos | «Crea un compte» | MVP |

### B. IA (pestaña principal)

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| B1 | Inici IA (Mod. P12) | Empezar sin escribir | Selector «Xat · Filtres»; saludo; 3 sugerencias según la hora y tus preferencias; campo de texto; etiqueta de IA | Tocar una sugerencia la envía | MVP |
| B2 | Conversa (P13) | Respuesta visual, no texto largo | Burbujas; carrusel de tarjetas de ruta; «Per què aquesta ruta?»; sugerencias de seguimiento; valoración de la respuesta | Tarjeta → C3; mantener pulsado = guardar | MVP |
| B3 | Filtres ràpids (Nueva; sustituye a P15 en Explorar) | Buscar «como en una tienda» | Barra de chips: Activitat, Durada, Amb qui, Interessos; «Més filtres (n)»; contador vivo «Veure 23 rutes» | Cada chip abre una mini hoja; resultados al momento | MVP |
| B4 | Més filtres (Mod. P15) | Filtrar a fondo | Distancia, desnivel, dificultad, circular o lineal, llegar sin coche, parada Km0, accesibilidad, sombra y fuentes, evitar aglomeraciones, sostenibilidad, presupuesto | Deslizadores con valores predefinidos; «Esborra-ho tot» | MVP |
| B5 | Resultats (Nueva) | Comparar y elegir | Lista o mapa; orden; tarjetas con 4 datos + insignias | Cambiar lista ↔ mapa; guardar | MVP |
| B6 | Microaventura (Nueva) | Plan completo | Línea de tiempo: transporte → ruta → patrimonio → parada Km0 → vuelta; tiempo total; puntos posibles | «Canvia una parada», «Desa», «Comença» | v1.1 |
| B7 | Historial de xats (Nueva) | Retomar o borrar | Lista; borrar todo | Deslizar para borrar | v1.1 |

**Filtros propuestos** (ninguno obligatorio): visibles siempre → Activitat · Durada · Amb qui · Interessos. En «Més filtres» → Distància · Desnivell · Dificultat · Circular o lineal (con vuelta en tren) · Arribar sense cotxe (estación a ≤15 min) · Parada Km0 (esmorzar, dinar, productor, mercat) · Accessibilitat (cotxet, mobilitat reduïda) · Condicions (ombra, fonts, lavabos) · Evita aglomeracions · Nivell de sostenibilitat · Pressupost · Temporada. El **nivel de sostenibilidad** debe tener fórmula pública (acceso en transporte público, parada Km0, fuera de espacios saturados…) y conectar con el IIT.

### C. Explorar y comunidad

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| C1 | Explorar (Mod. P14) | Descubrir sin buscar | Pestañas «Catàleg · Comunitat»; colecciones (Amb tren, Romànic, Amb nens); buscador | Desplazar colecciones | MVP |
| C2 | Mapa (P16) | Ver qué hay cerca | Mapa del ICGC; capas (patrimonio, Km0, fuentes, estaciones); agrupación de marcadores; tarjeta inferior | «Cerca en aquesta zona» | MVP |
| C3 | Detall de ruta (Mod. P17) | Decidir si ir | Foto o mapa; 4 datos; perfil de elevación interactivo; patrimonio; paradas Km0; cómo llegar en transporte público; seguridad (agua, sombra, enlace al Pla Alfa); autor si es comunitaria; valoración | «Comença», «Desa», «Comparteix» | MVP |
| C4 | Detall de patrimoni (P18) | Difundir el patrimonio | Ficha con la fuente «Diputació de Barcelona (CC BY)»; rutas que pasan | «Com arribar», «Desa» | MVP |
| C5 | Detall de comerç Km0 (Nueva) | Llevar al comercio | Fotos, horario, qué ofrece, recompensas, distancia | «Com arribar», ver la recompensa | MVP |
| C6 | Proposa una ruta · 1 (Nueva) | Aportar rutas | Subir GPX propio; mapa con estadísticas automáticas; recorte de privacidad del inicio y el final | Validaciones en vivo | MVP |
| C7 | Proposa una ruta · 2 (Nueva) | Completar la ficha | Título, descripción, tipo, etiquetas, fotos propias, lista de seguridad (caminos públicos, sin propiedad privada), cesión de licencia | «Envia a revisió» | MVP |
| C8 | Estat de revisió (Nueva) | Transparencia | Pendent, Publicada o Rebutjada con el motivo (DSA, art. 17) | Editar y reenviar | MVP |
| C9 | Valora la ruta (Nueva) | Señales de calidad | Estrellas + etiquetas (ben senyalitzada, apta per a cotxets…) | Dos toques | MVP |
| C10 | Denuncia (Nueva) | Cumplir DSA art. 16 y Apple 1.2 | Motivos, texto opcional | Confirmación y seguimiento | MVP |
| C11 | Perfil d'autor (Nueva) | Reconocer a quien crea | Rutas publicadas, valoración media | Seguir (v2) | v1.1 |
| C12 | Feed de la comunitat (Nueva) | Red social | Actividad de las personas seguidas, «kudos», comentarios | — | v2 |

### D. Hacer la ruta (sin grabación)

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| D1 | Preparació (Nueva) | Salir seguro | Enlaces a la previsión y al Pla Alfa, material, cómo llegar en transporte público | «Comença» | MVP (descarga del mapa en v1.1) |
| D2 | Mode ruta (Mod. P19) | Guiar y validar | Mapa con trazado y posición; próximo punto y distancia; botón «Fer check-in» activo a ≤100 m; sin cronómetro de grabación | Check-in; «Acaba»; trazado y check-ins funcionan sin conexión | MVP |
| D3 | Check-in (Nueva) | Premiar el descubrimiento | «+20 punts»; «Sabies que…?» del lugar; pregunta (v1.1) | Cerrar o seguir | MVP |
| D4 | Resum (Mod. P21) | Cerrar con recompensa | Puntos, lugares visitados, «Com has arribat?» (para el CO₂e), medalla, valoración, tarjeta para compartir | Compartir imagen | MVP |
| D5 | Abandona (sustituye a P20 Pausa) | Salir sin frustración | Confirmación; puntos de los check-ins hechos | — | MVP |

### E. Recompensas

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| E1 | Botiga (Mod. P31) | Gastar puntos en lo local | Saldo (odómetro); objetivo favorito; categorías: Restauració Km0, Productors, Cultura, Oci actiu; «A prop teu» | Filtrar; tocar una tarjeta | MVP |
| E2 | Detall de recompensa (P32) | Entender las condiciones | Comercio, condiciones, caducidad, distancia, «Marca com a objectiu» | «Bescanvia per X punts» | MVP |
| E3 | Cupó actiu (Mod. P33) | Canjear en la tienda | Código de un solo uso, temporizador de 10 min, sello animado, campo «PIN del comerç» | El personal escribe su PIN → «Validat» | MVP |
| E4 | Les meves recompenses (Nueva) | Ver cupones | Activos, usados, caducados | — | MVP |
| E5 | Historial de punts (P34) | Transparencia | Movimientos y filtros | — | MVP |
| E6 | Com guanyar punts (Nueva) | Reglas claras | Tabla de puntos, límite diario, caducidad, antifraude | — | MVP |

**Reglas de puntos MVP:** no se compran, no se transfieren y no valen dinero (así es un programa de fidelización y no dinero electrónico); límite diario; caducidad a 12 meses; bases publicadas. Antifraude: velocidad imposible entre check-ins, detección de ubicación simulada en Android, límite diario y códigos de un solo uso. Con 5–10 comercios, el PIN del personal evita que el comercio necesite otra app.

### F. Perfil

| ID | Pantalla | Objetivo | Elementos | Interacciones | Fase |
|---|---|---|---|---|---|
| F1 | Perfil (Mod. P22) | Panel de logros | Cabecera con foto y vidrio (nivel, puntos, objetivo); selector Setmana/Mes/Any; gráfico semanal; 3 stat tiles | Arrastrar en el gráfico; ⚙ → G1 | MVP |
| F2 | Impacte (Mod. P30) | Impacto defendible | km sin coche; CO₂e evitado estimado con «Com ho calculem»; patrimonio descubierto; comercios visitados; «Petjada digital de l'app» | Tocar una cifra abre la metodología | MVP (petjada en v1.1) |
| F3 | Activitats (Mod. P35) | Historial | Microaventuras hechas; fotos privadas por defecto | Filtrar | MVP |
| F4 | Medalles i nivells (Nueva) | Colección | Cuadrícula de medallas con progreso | Tocar = cómo conseguirla | MVP |
| F5 | Reptes (Nueva) | Objetivos comunitarios | Reto global mensual con tu aportación; grupos y entidades en v2 | Unirse | MVP (global) · v2 (grupos) |
| F6 | Desades (P26 como estado vacío) | Guardados | Rutas, patrimonio, comercios | — | MVP |
| F7 | Les meves propostes (Nueva) | Seguir mis rutas | Estado de cada propuesta | — | MVP |
| F8 | Com calculem l'impacte (Nueva) | Metodología (también sirve al TR) | Fórmulas, factores, fuentes, limitaciones | — | MVP |

### G. Configuración (desde el Perfil)

| ID | Pantalla | Objetivo | Elementos | Fase |
|---|---|---|---|---|
| G1 | Ajustos (Mod. P23) | Entrada | Grupos de la sección 6 | MVP |
| G2 | Aparença (Nueva) | Personalización curada | Tema, acento, vista previa en vivo | MVP |
| G3 | Accessibilitat (P24) | Adaptar | Texto, contraste, movimiento, vibración | MVP |
| G4 | Privadesa i dades (Nueva) | Control | Visibilidad, zonas privadas, IA, historial, consentimientos, bloqueados, exportar | MVP |
| G5 | Notificacions (Nueva) | Control | Por categoría + horas de silencio | MVP |
| G6 | Compte (Nueva) | Gestión | Correo, métodos de acceso, eliminar cuenta (confirmación en dos pasos) | MVP |
| G7 | Ajuda (P25) | Soporte | Preguntas frecuentes y contacto | MVP |
| G8 | Legal i llicències (Nueva) | Transparencia | Condiciones, privacidad, bases de puntos, atribuciones (©ICGC, Diputació, © OpenStreetMap), aviso de IA, accesibilidad | MVP |

### H. Estados transversales

| ID | Estado | Qué muestra | Fase |
|---|---|---|---|
| H1 | Buits (P26) | Sin resultados (propone quitar filtros), sin actividades, sin recompensas | MVP |
| H2 | Càrrega (P27) | Esqueletos | MVP |
| H3 | Error (P28) | Qué ha pasado + «Torna-ho a provar» | MVP |
| H4 | Sense connexió (P29) | Banner; el Mode ruta sigue y los check-ins se sincronizan después | MVP |
| H5 | IA no disponible o límite alcanzado (Nueva) | Mensaje + «Fes servir els filtres» | MVP |
| H6 | Ubicació denegada (Nueva) | Sin ubicación no hay check-in ni puntos; botón a Ajustes | MVP |
| H7 | Fora del radi o GPS feble (Nueva) | «Apropa't 60 m», precisión actual | MVP |
| H8 | Actualització obligatòria (Nueva) | Ir a la tienda | MVP |

### I. Fuera de la app (web)

| ID | Pantalla | Qué es | Fase |
|---|---|---|---|
| I1 | Moderació | Revisar rutas y denuncias. MVP: vistas en el panel de Supabase | MVP |
| I2 | Portal del comerç | Ofertas y canjes. MVP: lo gestionáis vosotros | v2 |
| I3 | Web pública | Privacidad, condiciones, eliminación de cuenta (Google Play exige el enlace web) y soporte | MVP |

---

## 6. Configuración

| Grupo | Ajuste | Opciones | Motivo o referencia | Fase |
|---|---|---|---|---|
| Compte | Perfil | Nombre, foto, municipio | Básico | MVP |
| | Mètodes d'accés | Apple, Google, correo | Apple 4.8 | MVP |
| | Exporta les meves dades | JSON + GPX | RGPD art. 20 (portabilidad) | MVP |
| | Elimina el compte | En la app + enlace web | Apple 5.1.1(v); Google Play | MVP |
| Privadesa | Visibilitat del perfil | Públic / Privat (Amics en v2) | Strava | MVP |
| | Visibilitat de les activitats | Privadas por defecto | RGPD art. 25 (privacidad por defecto) | MVP |
| | Zones privades | Ocultar 200–1.000 m del inicio y el final de las rutas propuestas | Strava (visibilidad del mapa) | MVP |
| | Aparèixer en reptes i rànquings | Sí / No | — | MVP |
| | Personalització amb IA | Activa / Desactiva + «Què sap de mi» (ver y borrar) | Transparencia | MVP |
| | Historial del xat | Guardar 30 días / No guardar / Borrar ahora | Minimización | MVP |
| | Dades per a l'IIT | Aportar datos agregados y anónimos (opt-in) | Consentimiento | MVP |
| | Consentiments | Analítica, comunicaciones comerciales | RGPD; LSSI art. 21 | MVP |
| | Usuaris bloquejats | Lista | Apple 1.2 | MVP |
| Ubicació | Permís | Solo mientras se usa la app (sin segundo plano) | Minimización; revisión más fácil en las tiendas | MVP |
| | Precisió per a recomanacions | Municipio / Exacta | Minimización | MVP |
| Notificacions | Per categoria | Retos, recompensas, rutas nuevas cerca, recordatorios, comunidad, novedades de comercios (opt-in) | LSSI para lo comercial | MVP |
| | Hores de silenci | Franja horaria | — | v1.1 |
| Activitat | Activitats preferides | A pie, correr, BTT, carretera o gravel | Onboarding | MVP |
| | Ritme | Tranquil / Mitjà / Ràpid (ajusta las duraciones estimadas) | Komoot (ritmo) | MVP |
| | Com arribes normalment | Tren, bus, bici, a pie, coche | Cálculo del CO₂e | MVP |
| | Necessitats | Perro, cochecito, movilidad reducida, niños | Filtros de AllTrails | MVP |
| | Unitats | km/m (millas en v2) | — | MVP |
| IA | To | Breu / Detallat | — | MVP |
| | Idioma de la IA | Como la app / català / castellano | — | MVP |
| | Mostra «per què» | Sí / No | Transparencia | MVP |
| Mapa | Estil | Topogràfic ICGC / Ortofoto | — | MVP |
| | Capes per defecte | Patrimonio, Km0, fuentes, estaciones | — | MVP |
| | Mapes sense connexió | Descargar zona | Komoot, AllTrails | v1.1 |
| Aparença | Tema | Clar / Fosc / Sistema | — | MVP |
| | Paleta | Fageda / Termal (Ginesta en v1.1) | Personalización curada | MVP |
| | Pantalla d'inici | IA / Explorar | — | v1.1 |
| | Icona de l'app | Alternativas | Zogo | v2 |
| Accessibilitat | Mida del text | Sigue al sistema + ajuste propio (hasta 200 %) | WCAG 1.4.4 | MVP |
| | Contrast alt | Sí / No | WCAG | MVP |
| | Redueix el moviment | Sigue al sistema / Sí | Ajuste del sistema operativo | MVP |
| | Vibració i sons | Sí / No | — | MVP |
| | Gràfics amb patrons | Sí / No (daltonismo) | WCAG 1.4.1 | v1.1 |
| | Lectura fàcil | Textos simplificados | Inclusión | v2 |
| Recompenses | Avisos de caducitat | Sí / No | — | MVP |
| Seguretat | Avisos Pla Alfa i meteo | Sí / No | Seguridad | v1.1 |
| | Compartir ubicació en directe | Contacto de emergencia | Strava | v2 |
| Dades | Mapes amb dades mòbils | Siempre / Solo wifi | — | v1.1 |
| | Esborra la memòria cau | — | — | MVP |
| Integracions | Apple Health / Health Connect | — | — | v2 |
| Idioma | Idioma de l'app | Català (por defecto), castellano; inglés en v1.1 | — | MVP |
| Ajuda i legal | Ajuda, contacte, reporta un error, condicions, privadesa, bases de punts, llicències de dades, avís d'IA, declaració d'accessibilitat, versió | — | Apple 1.2 (contacto); AI Act art. 50; atribuciones CC BY y ODbL | MVP |
| Laboratori | Funcions experimentals | Interruptores | El espíritu «código abierto», controlado | v2 |

---

## 7. Especificación para Claude Code

### 7.1 No hagáis un documento largo: haced una carpeta

Claude trabaja mejor si lee **solo** la ficha de la tarea. Un documento único de 60 pantallas llena el contexto y empeora los resultados.

```
greenvalles/
├─ CLAUDE.md                  ← <200 líneas: qué es, stack, órdenes, reglas
├─ .claude/
│  ├─ rules/ui.md             ← paths: app/**, components/** (tokens, accesibilidad, i18n)
│  ├─ rules/db.md             ← paths: supabase/** (seguridad por filas, migraciones)
│  ├─ skills/nova-pantalla/SKILL.md
│  └─ agents/revisor-a11y.md
├─ docs/
│  ├─ 00-producte.md          ← visión, usuarios, MVP y fuera de alcance
│  ├─ 01-disseny.md           ← tokens, tipografía, componentes, animaciones
│  ├─ 02-dades.md             ← esquema, fuentes y licencias
│  ├─ 03-ia.md                ← prompt de sistema, herramientas, límites, pruebas
│  ├─ 04-legal.md             ← lista RGPD, DSA, AI Act y tiendas
│  ├─ pantalles/A01-carrega.md … D02-mode-ruta.md …
│  ├─ decisions/ADR-001-stack.md
│  └─ progres.md              ← registro de tareas hechas
├─ app/  components/  theme/tokens.ts  i18n/ca.json
└─ supabase/  migrations/  functions/  seed/
```

### 7.2 CLAUDE.md: sí, corto

Según la documentación de Claude Code: menos de 200 líneas, solo lo que aplica siempre. No importéis la especificación con `@` (lo importado se carga en cada sesión): citad las rutas entre comillas invertidas y usad reglas por ruta en `.claude/rules/`.

```markdown
# GreenVallès — app mòbil (Expo + Supabase + API de Claude)

## Què és
Microaventures sostenibles al Vallès Oriental. Interfície en català (castellà preparat).
Abast del MVP: `docs/00-producte.md`. Fitxes: `docs/pantalles/`. Llegeix NOMÉS la fitxa de la tasca.

## Stack
Expo (SDK estable) · TypeScript estricte · Expo Router · Supabase (Postgres + PostGIS, RLS,
Edge Functions) · MapLibre + estils ICGC · API de Claude només des d'Edge Functions.

## Ordres
- `npx expo start` · `npm run lint` · `npm run typecheck` · `npm test`
- `supabase db reset` · `supabase functions serve`

## Regles
- IMPORTANT: cap clau d'API dins l'app. Tota crida a Claude passa per `supabase/functions/ia`.
- Colors, espais i tipografia només de `theme/tokens.ts`. Cap hexadecimal a les pantalles.
- Tots els textos a `i18n/ca.json` (claus `pantalla.element`).
- Cada element tocable: `accessibilityLabel`, zona ≥44 pt, respecta «Redueix el moviment».
- Taula nova = migració + política RLS + test.
- La IA mai inventa rutes: només mostra el que retorna `buscar_rutes`.

## Flux
Pla (mode plan) → implementa → lint + typecheck + test + captura → actualitza `docs/progres.md` → commit.
```

### 7.3 Ficha de pantalla (plantilla)

```markdown
# D2 · Mode ruta
- Objectiu: guiar per la ruta i validar-la amb check-ins, sense gravar el traçat.
- Arriba des de: C3 («Comença») · Surt cap a: D3, D4, D5
- Dades: `routes`, `route_checkpoints`, funció `fer_checkin(route_id, lat, lon)`
- Elements (de dalt a baix): mapa amb traçat i posició · proper punt i distància · botó «Fer check-in» · «Acaba»
- Estats: carregant · sense connexió (check-ins en cua) · fora del radi · GPS feble · error
- Interaccions i animacions: pols al marcador + «+20» + vibració d'èxit (700 ms)
- Textos (i18n): `modeRuta.titol`, `modeRuta.checkin`, `modeRuta.foraRadi`
- Accessibilitat: el botó anuncia la distància al punt; ordre de focus lògic
- Analítica: `checkin_ok`, `checkin_fora_radi`, `ruta_abandonada`
- Criteris d'acceptació:
  - Donat que sóc a ≤100 m d'un punt, quan toco «Fer check-in», aleshores veig «+20 punts» i el punt queda marcat.
  - Donat que sóc a >100 m, quan toco «Fer check-in», aleshores veig «Apropa't X m» i no rebo punts.
  - Sense connexió, el check-in es desa i se sincronitza en tornar la xarxa, sense duplicar punts.
- Fora d'abast: gravació del traçat, navegació pas a pas.
- Referència visual: prototip v3, pantalla 19 (adaptada).
```

### 7.4 Cómo dividir el trabajo

- **1 tarea = 1 resultado comprobable en una sesión** (1–3 h), de la pantalla a la base de datos («corte vertical»).
- Cada tarea termina con lint + tipos + tests + captura, un commit y una línea en `docs/progres.md`.
- Modo plan al empezar; `/clear` al acabar; si corriges lo mismo dos veces, sesión nueva con mejor instrucción.
- Repositorio privado en GitHub desde el primer día.

| # | Tarea | Resultado comprobable |
|---|---|---|
| T01 | Proyecto Expo + TypeScript + ESLint + Expo Router | Se abre en Expo Go |
| T02 | `theme/tokens.ts` (Fageda + Termal), fuentes, modo oscuro | Pantalla de muestra + test de contraste |
| T03 | 4 pestañas + navegación + i18n en catalán | Se navega; ningún texto fijo en el código |
| T04 | Componentes base: botón, chip, tarjeta de ruta, stat tile | Galería de componentes en `/dev` |
| T05 | `seed/routes.json` (10 rutas) + tipos | Test que valida el JSON |
| T06 | B3, B4 y B5 con datos locales | «≤2 h + perro» devuelve solo rutas correctas (test) |
| T07 | C3 + perfil de elevación | El arrastre funciona; captura comparada con la ficha |
| T08 | Supabase: `routes`, `pois`, PostGIS, seguridad por filas, datos de prueba | `supabase db reset` + tests SQL |
| T09 | Función `buscar_rutes` | 10 casos de prueba en verde |
| T10 | Función de IA con herramientas + límite de mensajes | Banco de 20 preguntas: 0 rutas inventadas |
| T11 | B1 y B2: chat con tarjetas | Conversación real en el móvil |
| T12 | Development build + MapLibre + estilo ICGC | Mapa topográfico con atribución visible |

---

## Recomendación final: por dónde empezar esta semana

**Empezad por el catálogo y el esqueleto de la app a la vez.** Sin 10 microaventuras reales no hay nada que la IA pueda recomendar ni que el tribunal pueda probar.

1. **Hoy · 1 h · Claude chat en el Proyecto TR.** Aceptad o cambiad las 7 decisiones de la tabla 2.1 y la paleta Fageda. Pedid: «Redacta `00-producte.md` amb l'abast del MVP i el fora d'abast a partir d'aquestes decisions».
2. **Esta semana · Cowork + campo.** Cread la carpeta `greenvalles/docs` en el ordenador y pedid a Cowork: «Descarrega de l'API de dades obertes de la Diputació de Barcelona els elements de patrimoni cultural del Vallès Oriental i desa'ls a `docs/dades/pois.json` amb nom, tipologia, municipi, coordenades, descripció breu, URL de la fitxa i atribució CC BY». En paralelo, elegid las 10 primeras microaventuras (al menos 5 con acceso en tren) y pedid cita a 3 comercios con el distintivo Biosphere que aparecen en «El Vallès Oriental al teu ritme».
3. **Esta semana · 2 h · Claude Code.** Instalad Node.js LTS, Git y Claude Code; cread un repositorio privado; ejecutad `npx create-expo-app@latest greenvalles`, después `/init`, sustituid el CLAUDE.md por el de la sección 7.2 y haced T01–T03 en modo plan. Resultado: las 4 pestañas con la paleta Fageda en vuestro móvil.

---

## Pendent

- **[DECIDIR]** Las 7 decisiones de la tabla 2.1, sobre todo: sin grabación + check-ins, 4 pestañas y recompensas solo locales.
- **[DECIDIR]** Paleta (propuesta: Fageda) y nombre de la moneda (punts d'energia o EcoCoins).
- **[VERIFICAR]** Condiciones de uso de los servicios del ICGC en una app: la licencia CC BY está confirmada, pero no hay límites de uso ni disponibilidad documentados → escribir al ICGC.
- **[VERIFICAR]** Derechos de las imágenes del dataset de patrimonio de la Diputació: el dataset es CC BY, pero cada foto puede tener su autor.
- **[VERIFICAR]** Factor de emisión por km del coche medio en la calculadora de la OCCC (versión 2026): su web no me ha dejado acceder. Los factores MITECO 2025 por litro son 2,30 kg CO₂/l (gasolina 95) y 2,55 kg/l (gasóleo), vía un resumen secundario.
- **[VERIFICAR]** Si existe un servicio de datos abiertos del Pla Alfa: solo he encontrado el mapa interactivo de Agents Rurals.
- **[VERIFICAR]** Si alguno de vosotros es menor de edad, las cuentas de Apple y Google deben estar a nombre de un adulto.
- **[VERIFICAR]** Registro de la marca «GreenVallès» (OEPM y EUIPO) antes de invertir en identidad.
- **[CONTRADICCIÓN]** Teoria.docx (3.1) dice «39 municipis» citando al Consell Comarcal. Su web dice hoy «Consta de 38 municipis» y 428.782 habitantes (Cens 2025); su nota de 2024 habla de 39 municipios y el Observatori comarcal da 431.351 habitantes (dic. 2025). Comprobadlo en Idescat y corregid el apartado.
- **[TR]** Este plan alimenta los apartados 5 (propuesta de valor), 11 (marco legal: RGPD, DSA, AI Act art. 50), 12 (IIT) y 13 (prototipo). El banco de preguntas de la IA y las pruebas de usuario son indicadores medibles para la hipótesis 1.

---

## Fuentes

- Anthropic. Precios de la API: https://platform.claude.com/docs/en/about-claude/pricing
- Anthropic. Planes de Claude: https://claude.com/pricing · Cowork: https://claude.com/product/cowork
- Claude Code. Buenas prácticas: https://code.claude.com/docs/en/best-practices · Memoria y CLAUDE.md: https://code.claude.com/docs/en/memory
- Supabase. Precios: https://supabase.com/pricing
- Expo. Precios: https://expo.dev/pricing
- MapLibre React Native. Expo: https://maplibre.org/maplibre-react-native/docs/setup/expo/
- ICGC. Servei de Mapa Base: https://www.icgc.cat/en/Geoinformation-and-Maps/Base-Map-Service · Recursos en obert: https://openicgc.github.io/
- Mapbox. Precios: https://www.mapbox.com/pricing
- Voyage AI. Precios: https://docs.voyageai.com/docs/pricing
- Diputació de Barcelona. Elements de patrimoni cultural (CC BY): https://dadesobertes.diba.cat/datasets/elements-de-patrimoni-cultural
- Consell Comarcal del Vallès Oriental (14/03/2024). El Vallès Oriental al teu ritme: https://www.vallesoriental.cat/actualitat/noticies/el-consell-comarcal-presenta-el-valles-oriental-al-teu-ritme-12-rutes-turistiques-de-benestar-i-slowtourism.html · Descripció: https://www.vallesoriental.cat/la-comarca/descripcio
- somVallès (15/12/2025). Població del Vallès Oriental 2025: https://www.somvalles.cat/noticia/109192/la-poblacio-del-valles-oriental-creix-en-4.698-persones-el-2025
- BIKE (24/02/2026). Komoot amb ChatGPT: https://www.bike-magazin.de/en/tours/tour-tips/komoot-with-ai-route-planning-with-chatgpt-how-it-works/
- TechCrunch (12/05/2025). AllTrails Peak: https://techcrunch.com/2025/05/12/alltrails-debuts-a-80-year-membership-that-includes-ai-powered-smart-routes
- TechRepublic (02/06/2026). Strava API: https://www.techrepublic.com/article/news-strava-api-scraping-crackdown/ · Terra (2024): https://tryterra.co/blog/strava-discontinues-api
- Apple. App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/ · Inscripción: https://developer.apple.com/programs/enroll/
- Google Play. Registro: https://support.google.com/googleplay/android-developer/answer/6112435 · Pruebas: https://support.google.com/googleplay/android-developer/answer/14151465 · Eliminación de cuenta: https://support.google.com/googleplay/android-developer/answer/13327111
- Goodwin (08/2026). AI Act art. 50 en vigor: https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force
- CMS. DSA art. 16: https://www.cms-digitallaws.com/en/dsa/article-16/
- AEPD. Edad de consentimiento: https://www.aepd.es/preguntas-frecuentes/10-menores-y-educacion/FAQ-1001-cual-es-la-edad-para-que-los-menores-puedan-prestar-consentimiento-para-tratar-sus-datos-personales · Lista de EIPD: https://www.aepd.es/sites/default/files/2019-09/listas-dpia-es-35-4.pdf
- Google Cloud (21/08/2025). Impacto ambiental de la inferencia: https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference
- The Batch (2025). Ciclo de vida de Mistral Large 2: https://www.deeplearning.ai/the-batch/french-ai-startup-discloses-full-lifecycle-consumption-and-emissions-for-mistral-large-2
- Factores MITECO 2025 (resumen secundario): https://calculartuhuellacarbono.com/factores-emision-miteco-2025/
- Strava. Privacidad: https://support.strava.com/en-us/articles/15401951-privacy-controls · Komoot. Planificar rutas: https://support.komoot.com/hc/en-us/articles/10206792140826-Plan-routes-in-the-app · AllTrails. Filtros: https://support.alltrails.com/hc/en-us/articles/37227964040852-How-to-use-filters-to-find-trails
