# Guia de publicació de l'app GreenVallès · v2 (05/10/2026)

Artefacte: https://claude.ai/artifact/FXtGLpbmULLG9YsfibxVdT (versió 2; substitueix la v1 del mateix dia)
Condicions noves (missatge del 05/10/2026): app totalment gratuïta (0 €) i feta en un mes.
Base: prototip visual v3 (35 pantalles), Teoria (revisió 27/09/2026) i pla de l'app (23/09/2026). No adjuntats: ANEXO_PROGRAMACION.md, design-tokens.css, estudi de viabilitat (citat per apartats §5–§14 amb la marca «no comprovat").

## Estructura
- 16 fases (15 obligatòries + «Traçabilitat al TR i declaració d'ús d'IA"), 8 camps per fase, checklists, Gantt per dies amb data d'inici editable, bloc «On encaixen els prompts de pantalla", glossari, fonts, pendents i control de verificació.
- Calendari: 28 dies (per defecte, dia 1 = 05/10/2026 → dia 28 = 01/11/2026). Fites: primera versió en línia (dia 3) · demo mínima per al TR (dia 14) · MVP complet (dia 21) · fi de la beta (dia 25) · llançament i informe (dia 28).
- Camí crític: fases 1 → 2 → 3 → 4 → 5 → 10 → 11 → 12. Regla de tall el dia 10; decisió sobre les Should el dia 14.

## Decisions (v2)
- Distribució: app web instal·lable (PWA) a iPhone (iOS 16.4+) i Android. App Store (99 USD/any) i Google Play (25 USD) queden per després del TR; el kit de botigues es deixa preparat.
- Tecnologia: React + Vite + TypeScript reaprofitant l'HTML/CSS del prototip i design-tokens.css · Supabase Free (UE) · MapLibre GL JS + ICGC ContextMaps · Cloudflare Pages + Pages Functions · Claude Code amb la subscripció existent.
- Accés: anònim per defecte + «Desa el progrés amb Google" (OAuth sense verificar: 100 usuaris). Sense correu (l'SMTP de Supabase només envia a l'equip, 2/h), sense contrasenyes i sense Apple.
- IA: Mistral Small 3.1 a Workers AI (10.000 neurones/dia gratuïtes). Una crida per missatge: el model retorna filtres en JSON i la base de dades tria les rutes. ≈ 186 neurones per conversa de 4 missatges → ≈ 54 converses/dia (càlcul propi). Pla B: Qwen3 30B (≈ 262/dia).
- Abast: compromís amb 23 pantalles Must; 5 Should (11, 15, 20, 25, 34) només si el dia 14 aneu al dia; Could: 6 (fusionada amb la 3) i 24; Won't (v1.1): 4, 5, 7, 9, 35.
- Escenaris (tots a 0 €): mínim ≈ 142 h · realista ≈ 156 h · ambiciós ≈ 180 h. Supòsit: 20 h/setmana cadascú (≈ 160 h). Decisió: mínim com a compromís.
- Legal: 14+, EIPD amb Gestiona EIPD, sense entitat jurídica, marca només cercada (registrar-la: 127,88 €).
- Finançament: cap durant el mes. Després: Verkami o autofinançament per a les botigues (124 USD); ACCIÓ i ENISA només amb SL i tracció.

## Límits gratuïts verificats el 05/10/2026
Supabase Free: 500 MB, 50.000 MAU, 5 GB de trànsit, 2 projectes, pausa després d'1 setmana sense ús · Cloudflare Pages: 500 compilacions/mes, 100 projectes · Workers Free: 100.000 peticions/dia, 10 ms de CPU · Workers AI: 10.000 neurones/dia (Mistral Small 3.1: 31.876/50.488 neurones per M tokens) · PWA: HTTPS + manifest (nom, icones 192/512, start_url, display); iOS 16.4+ instal·la des de Safari, Chrome, Edge, Firefox i Orion (MDN) · Supabase anònim: 30 altes/hora per IP, recomana CAPTCHA · Google OAuth sense verificar: 100 usuaris.

## Pendent
Data de lliurament del TR · edat mínima i titular dels comptes gratuïts · responsable del tractament · durada de la verificació de Google · Sign in with Apple de pagament (confirmar) · qualitat en català de Mistral/Qwen · resposta de Workers AI en esgotar la quota · permís d'ubicació a la PWA de l'iPhone · permís per a les rutes del Consell Comarcal · factors d'emissió per km · pesos de l'IIT · normes del centre sobre IA · 38/39 municipis i Wikiloc · adjuntar els tres fitxers que falten.
