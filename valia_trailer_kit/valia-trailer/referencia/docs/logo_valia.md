# Identitat visual Valia — isotip (actualitzat 08/10/2026)

> Nom de l'app: **Valia** (abans GreenVallès).
> **Isotip vigent: vectorització del boceto de l'equip (08/10/2026)** — fulla amb nervis visibles, excursionista (cap, motxilla, bastó) en espai negatiu que trepitja la base de la fulla, tija amb dues fulletes.
> - **Opció A:** fidel al boceto (Verd Faig + blanc).
> - **Opció B:** igual, però tres nervis surten lleugerament de la fulla i acaben en nodes (xarxa neuronal = camins + IA): Verd Faig, Verd Alzina i un node Groc Ginesta.
> - Proposta anterior «Fulla excursionista» (versió sense nervis) i «Taula del Vallès» queden com a alternatives documentades.

> Nota (11/10/2026): l'isotip que fa servir el prototip v6 (i que s'ha de mantenir) és el de `referencia/v6/src/anim.js` → `logoSVG`.

## Concepte
Fulla de faig (referència: fagedes del Montseny), inclinada 22°, amb un excursionista amb motxilla i bastó en espai negatiu, caminant cap a la punta de la fulla.

## Construcció (retícula 12×12 u)
- Fulla: dues corbes de Bézier simètriques des de la base (0; +5) fins a la punta (0; −5,3), punts de control (±4,7; +3,2) i (±3,9; −2,6), relatius al centre (6,2; 5,9). Rotació 22° en sentit horari.
- Pecíol: traç de 0,85 u, 1,5 u de llarg, a l'eix de la fulla.
- Excursionista (negatiu, escala 0,84): cap r = 0,85; tors 1,5 u; cames 1,1 u; braç 0,8 u; bastó 0,5 u; motxilla 1,2 × 2 u.
- Per sota de 32 px: favicon = fulla amb el nervi central en negatiu (sense figura).

## Paleta
| Rol | Nom | HEX | Contrast |
|---|---|---|---|
| Principal | Verd Faig | #0E8257 | blanc a sobre 4,83:1 (AA) |
| Text / fons fosc | Verd Alzina | #0C2E22 | sobre blanc 14,7:1 |
| Accent (punts, recompenses) | Groc Ginesta | #F2B200 | només amb Alzina, 7,8:1; mai text sobre blanc (1,88:1) |
| Mode fosc | Verd Brot | #34C77B | sobre Alzina 6,72:1 |
| Superfícies | Blanc / Boira | #FFFFFF / #F4F7F5 | — |

## Marca
- Logotip: «Valia» en Inter Display SemiBold 600, tracking −2 %, color Verd Alzina; fulla en Verd Faig.
- Horitzontal: fulla a l'esquerra, text alineat òpticament al centre de la fulla.

## Pendent
- Riscos: fulla + persona és un recurs molt utilitzat en marques eco i d'excursionisme → menys distintiu per registrar la marca; fer una cerca de marques figuratives (EUIPO / OEPM, classes 9, 39 i 41).
- Test dels 2 segons amb 10–15 persones.
- Convertir el text a corbes abans de l'entrega.
