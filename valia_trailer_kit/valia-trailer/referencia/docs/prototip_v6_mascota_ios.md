# Prototipo visual v6 · La mascota es la IA + estilo iOS nativo (10/10/2026)

Artifact: https://claude.ai/artifact/CkgsJUHbB7srA4QoKnuAag (copia local: `referencia/v6/prototip_v6.html`)
Base: v5 (pantallas 1 y 2 corregidas) + v4 (resto). El brief la llama «versión 4»; se numera v6 porque ya existen la v4 (Valia) y la v5 (carga y acceso).
Formato: HTML navegable a tamaño iPhone 15 (393 × 852 pt), 50 entradas en el índice: las 35 pantallas de la v3, las 8 de la v4 (36–43), 6 estados nuevos de la mascota y la carga para primera vez.

## Lecturas aplicadas
- Nombre: «GreenVallès» (pendiente de decidir; la v4 proponía «Valia»). Asistente: «Assistent». (11/10/2026: el nombre definitivo es **Valia**.)
- Mascota = el mismo excursionista del logo, sin redibujar: solo cambian postura y color (verde #0E8257 sobre fondo claro, blanco sobre foto). No tiene cara: se expresa con el cuerpo, el bastón y pocos signos.
- Fotos del equipo solo en el carrusel de la pantalla 2.
- Texto del perfil tal como lo pide el brief: «Enhorabona! Has estalviat 5 kg de CO₂.» (propuesta: «evitat»).

## Reglas de la mascota
- Nunca tapa contenido ni botones: fuera del chat, o va dentro del contenido (cargas, estados vacíos, celebración) o asoma por el lateral en una franja libre de la foto. Si no cabe (texto AX2), no sale.
- Se cierra tocándola, tocando el globo (con «×» visible), deslizando o sola a los 6,5 s.
- Máximo una vez por pantalla y sesión fuera del chat (los indicadores de carga no cuentan).
- Mensajes de una frase, en catalán. No sale en momentos de seguridad (desvío, ubicación en directo, 112) ni en pantallas legales.

## Dónde aparece
| Pantalla | Momento | Animación | Texto |
|---|---|---|---|
| 1 Càrrega | Mientras carga y al terminar | Camina sobre el globo; vuela hasta el chat (blanco → verde) y saluda | — (VoiceOver: «GreenVallès s'està carregant») |
| 12 Xat | Al abrir el chat vacío | Saludant | «Què et ve de gust fer avui?» |
| 12–13 Xat | Mientras escribes | Escoltant (ondas a cada tecla) | Cabecera: «t'escolta…» |
| 13 Xat | Desde que envías hasta la 1.ª palabra | Pensant (3 puntos) | «pensant…» |
| 13 Xat | Mientras llega la respuesta | Responent (avatar y cabecera) | «escrivint…» |
| Xat · error | Envío sin conexión | Sense connexió | «Ara no tinc connexió: ho tornem a provar?» |
| 14 y 27 Explorar | Carga de resultados o filtros | Buscant (sustituye el spinner) | «Buscant rutes…» |
| 17 Detall | Descarga de la ruta | Buscant, mini dentro del botón | «Descarregant… 45 %» |
| 14 Sin resultados | Búsqueda vacía (1 vez/sesión) | Proposant | «No he trobat res: prova alguna d'aquestes opcions.» |
| 22 Perfil | Al abrir (1 vez/sesión) | Asoma por la derecha (−8°) + saludant | «Enhorabona! Has estalviat 5 kg de CO₂.» / «Repetim la ruta de dissabte?» |
| 33 Botiga | Al confirmar un canje (1 vez/sesión) | Celebrant | — (título «Canvi fet!») |
| 28 y 29 | Error del servidor / sin red | Sense connexió (propuesta) | Textos de la v3 |
| Tab bar | Siempre | Icono quieto de la pestaña Xat | — |

## Estados (para animador · Rive o Lottie)
| Estado | Duración | Movimiento | Efectos | Reduir moviment |
|---|---|---|---|---|
| Repòs | Bucle 3,4 s | Postura del logo; respira; golpecito de bastón en el s 2,6 | — | Postura del logo quieta |
| Saludant | 1,5 s → repòs | Se agacha, salta 3,4 u, bastón arriba con vaivén ±16° | — | Bastón arriba, quieta |
| Escoltant | Bucle 2,4 s + pulso 0,38 s por tecla | Inclinada 12°, mano a la oreja | 3 ondas | Quieta con ondas |
| Pensant | Bucle 2,8 s | Mano en la barbilla, mira arriba | 3 puntos en cascada | Quieta con 3 puntos |
| Responent | Bucle 0,67 s | Señala el texto con el bastón y asiente | 2 trazos | Gesto quieto |
| Sense connexió | Entrada 0,28 s + bucle 4,2 s | Sentada en una piedra, cabeza baja, suspira | Piedra, nube con raya roja | Quieta |
| Buscant | Ciclo 1,05 s | Marcha (IK) sobre suelo plano | Puntos del suelo | Paso quieto |
| Proposant | 0,9 s → bucle 1,1 s | Señala abajo-adelante con el bastón | — | Quieta |
| Treient el cap | Entrada 0,5 s, salida 0,36 s | Entra girada −8° por el lateral y saluda | Globo de texto | Fundido 0,26 s, quieta |
| Celebrant | 1,7 s → bucle 1,25 s | Se agacha, salta 14 u, brazos arriba | 12 hojas en arco | Brazos arriba + 3 destellos |
| Caminant (càrrega) | Ciclo 1,05 s | Marcha existente sobre el globo (7 pasos/vuelta) | Globo con 7 lugares | Logo quieto y fundido |
| Vuelo al chat | 0,45 s (muelle 0,62/0,82) | Traslación y escala; los pasos se paran al llegar | Fondo, globo y nombre se desvanecen | Fundido 0,3 s |

## iOS
- Muelles (response/damping): push 0,42/0,98 · pop 0,38/1 · sheet 0,44/0,84 · pantalla completa 0,46/0,96 · héroe 0,48/0,84 · micro 0,32/0,6 · alerta 0,3/0,78 · listas 0,42/0,9.
- Títulos grandes que se contraen, tab bar, sheets con alturas (filtros media/grande, pausa media, seguridad grande), vidrio translúcido, swipe back desde el borde, héroe tarjeta → detalle, micro-animaciones y aparición escalonada.
- Accesibilidad: áreas ≥ 44 × 44 pt; contraste AA (texto 19,5:1, secundario 6,0:1, verde de texto 5,8:1, texto sobre botón verde 6,3:1, mascota 4,8:1); texto dinámico hasta AX2; etiquetas VoiceOver en iconos y mascota; «Reduir moviment» con fundidos y mascota quieta.

## Verificación (Playwright, 10/10/2026)
- La mascota no tapa ningún botón: auditoría automática de las 50 entradas.
- 567 textos y etiquetas revisados: todo en catalán (solo nombres propios, «Wi-Fi», «Km0» y «check-in»).
- Cada animación tiene versión «Reduir moviment».
- No se ha perdido ninguna pantalla de la v3 (35) ni de la v4 (8).
- Sin errores de JavaScript; texto dinámico sin cortes ni desbordes (títulos de barra truncados con «…» como en iOS).

## Pendiente
- Nombre de la app y del asistente. (Nombre decidido: Valia.)
- «estalviat» o «evitat» en el mensaje del perfil.
- Mascota en 28 y 29: propuesta.
- Producción real en Rive o Lottie; SF Symbols en la app nativa; SF Pro solo en Apple (Inter en el resto).
- Esquinas continuas solo en navegadores Chromium.
- Datos, respuestas del chat y 3.ª tarjeta de Explorar: ilustrativos. Fotos compuestas por programa: sustituir.
- Modo oscuro de la app sin diseñar. Definir qué es una «sesión» (p. ej., 30 min de inactividad).
- Prueba con usuarios para la H1.
