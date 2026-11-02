/* Valia · logotip articulat + animació de càrrega (SVG + requestAnimationFrame)
   Unitats: u = unitat de la figura. Coordenades del món en u, eix y cap amunt, origen a terra sota el maluc inicial.
   Tot el moviment es fa amb transform i opacity. */
(function (root) {
  'use strict';
  function make(o) {
    o = o || {};
    var D2R = Math.PI / 180, R2D = 180 / Math.PI;

    /* ---------- cos i marxa ---------- */
    var C = {
      T: 1.05,            // s per cicle (2 passos) → 114 passos/min
      S: 39,              // gambada (2 passos) en u
      BETA: 0.62,         // fracció de recolzament
      AF: 0.235,          // peu davanter en tocar terra: +0,27·S davant del maluc
      L1: 12.5, L2: 12.5, // cuixa, tíbia
      LF: 5.5, RC: 3.7,   // peu (taló→punta) i radi de la bota
      H_LOW: 26.7, BOB: 1.3, // alçada del maluc al doble recolzament i oscil·lació (≈2,5 px)
      GHS: 14, GTO: -55,  // inclinació del peu en tocar (taló) i en enlairar-se (punta), graus
      PF0: 0.12, PF1: 0.45, CLEAR: 2.0,
      LU: 9.5, LFA: 9.0,  // braç i avantbraç
      SHN: [2.6, 18.6],   // espatlla propera (x endavant, y amunt des del maluc, al marc del tronc)
      SHF: [-0.6, 18.6],
      DS: 21, GS: 40, LS: 46, RH: 14, STK: 0.55, // bastó: on es planta, on l'agafa la mà, llarg, fase en què s'aixeca
      CF: 0.6,            // els peus veuen el 60 % de la curvatura (diferència < 0,6 px; evita que el maluc baixi massa)
      N_REV: o.N_REV || 9 // una volta del globus = N cicles exactes → bucle perfecte
    };
    C.V = C.S / C.T;                       // u/s
    C.R = C.N_REV * C.S / (2 * Math.PI);   // radi del globus en u (≈66,5 u)

    /* ---------- calendari ---------- */
    /* Logotip: figura dins la fulla (caixa de 120 u de fulla). f = escala figura→fulla; HX, GY = maluc i terra inicials; CX, CY = centre de la fulla */
    var LOGO = { f: 0.9, HX: 46, GY: 92, CX: 60.6, CY: 57.65 };
    var TL = { t0: 1.2, tGlobe: 2.4, tPop: 0.45, tStop: 2.6, travel: (LOGO.CX - LOGO.HX) / LOGO.f };

    function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }
    function sstep(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
    function s5(x) { x = clamp(x, 0, 1); return x * x * x * (x * (x * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function easeOutBack(x, c1) { var c3 = c1 + 1, y = x - 1; return 1 + c3 * y * y * y + c1 * y * y; }
    function easeOutCubic(x) { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); }

    /* Integració numèrica del calendari: velocitat relativa al terra (w), velocitat a pantalla (u), fase, terra recorregut (G), posició (X), escala i gir del globus */
    var DT = 1 / 1000, TMAX = 4.5, N = Math.round(TMAX / DT) + 1;
    var A = { w: new Float64Array(N), u: new Float64Array(N), ph: new Float64Array(N), G: new Float64Array(N), X: new Float64Array(N), s: new Float64Array(N), th: new Float64Array(N) };
    function wAt(t) { return C.V * sstep((t - TL.t0) / 1.05); }
    function globeScale(t) { if (t < TL.tGlobe) return 0; var x = (t - TL.tGlobe) / TL.tPop; return x >= 1 ? 1 : easeOutBack(x, 1.5); }
    function solveTimeline(td0) {
      var X = 0, G = 0, ph = 0, th = 0;
      for (var i = 0; i < N; i++) {
        var t = i * DT, w = wAt(t), m = 1 - sstep((t - td0) / (TL.tStop - td0)), u = w * m, s = globeScale(t);
        A.w[i] = w; A.u[i] = u; A.ph[i] = ph; A.G[i] = G; A.X[i] = X; A.s[i] = s; A.th[i] = th;
        X += u * DT; G += w * DT; ph += w / C.S * DT;
        if (t >= TL.tGlobe) th -= w / (C.R * Math.max(s, 0.35)) * DT; // sense lliscament: ω = w / (R·s)
      }
      return X;
    }
    // tria el moment en què comença a frenar perquè recorri exactament TL.travel u (≈26 px)
    var lo = TL.t0 + 0.05, hi = TL.tStop - 0.05;
    for (var k = 0; k < 40; k++) { var mid = (lo + hi) / 2; if (solveTimeline(mid) > TL.travel) hi = mid; else lo = mid; }
    TL.td0 = (lo + hi) / 2; solveTimeline(TL.td0);
    var END = { t: (N - 1) * DT, ph: A.ph[N - 1], G: A.G[N - 1], X: A.X[N - 1], th: A.th[N - 1] };

    function sample(arr, t) { var f = t / DT, i = Math.floor(f); if (i >= N - 1) return arr[N - 1]; if (i < 0) return arr[0]; var a = f - i; return arr[i] * (1 - a) + arr[i + 1] * a; }
    function state(t) {
      if (t <= END.t) return { w: sample(A.w, t), u: sample(A.u, t), ph: sample(A.ph, t), G: sample(A.G, t), X: sample(A.X, t), s: globeScale(t), th: sample(A.th, t) };
      var dt = t - END.t; // règim estable: caminar sobre el globus a velocitat constant
      return { w: C.V, u: 0, ph: END.ph + dt / C.T, G: END.G + C.V * dt, X: END.X, s: 1, th: END.th - C.V * dt / C.R };
    }
    // terra recorregut en funció de la fase (per planificar les petjades)
    function GofPh(ph) {
      if (ph <= 0) return ph * C.S;
      if (ph >= END.ph) return END.G + (ph - END.ph) * C.S;
      var a = 0, b = N - 1; while (b - a > 1) { var m = (a + b) >> 1; if (A.ph[m] < ph) a = m; else b = m; }
      var f = (ph - A.ph[a]) / ((A.ph[b] - A.ph[a]) || 1); return A.G[a] + (A.G[b] - A.G[a]) * f;
    }
    function curv(t) { return o.flat ? 0 : sstep((t - TL.tGlobe) / 0.35); }

    /* Terra: un punt del terra a distància d (u, mesurada sobre la superfície) del maluc → posició al món, tangent i normal */
    function groundFrame(d, X, c) {
      var a = c * d / C.R;
      return { x: X + (1 - c) * d + c * C.R * Math.sin(d / C.R), y: -c * C.R * (1 - Math.cos(d / C.R)), tx: Math.cos(a), ty: -Math.sin(a), nx: Math.sin(a), ny: Math.cos(a) };
    }
    function gp(F, a, b) { return [F.x + a * F.tx + b * F.nx, F.y + a * F.ty + b * F.ny]; } // a: al llarg del terra, b: cap amunt

    /* Peu: retorna turmell (A) i inclinació absoluta del peu (graus, + = punta amunt) */
    function footAt(ph, off, st, c) {
      var p = ph - off, n = Math.floor(p), q = p - n; c *= C.CF;
      var gTd = GofPh(n + off) + C.AF * C.S;           // on toca el taló en aquest pas
      var d = gTd - st.G;                               // distància taló–maluc sobre el terra
      var gam, Ap, Fr;
      if (q < C.BETA) {
        if (q < C.PF1) {                                  // taló com a pivot i després peu pla
          gam = q < C.PF0 ? C.GHS * (1 - s5(q / C.PF0)) : 0;
          Fr = groundFrame(d, st.X, c); Ap = gp(Fr, 0, C.RC);
        } else {                                          // punta com a pivot: el taló s'aixeca
          gam = C.GTO * s5((q - C.PF1) / (C.BETA - C.PF1));
          var g = gam * D2R; Fr = groundFrame(d + C.LF, st.X, c);
          Ap = gp(Fr, -C.LF * Math.cos(g), C.RC - C.LF * Math.sin(g));
        }
        return { A: Ap, g: gam + Math.atan2(Fr.ty, Fr.tx) * R2D, contact: true };
      }
      // vol: del punt d'enlairament al següent contacte de taló
      var u = (q - C.BETA) / (1 - C.BETA);
      var gLo = gTd;                                     // el peu s'enlaira des de la seva pròpia petjada
      var gNext = GofPh(n + 1 + off) + C.AF * C.S;
      var dLo = gLo - st.G + C.LF, dTd = gNext - st.G;   // punta a l'enlairar, taló a l'arribar
      var e = s5(u), e2 = u * u * (3 - 2 * u) + 0.5 * u * (1 - u) * (1 - u); // surt amb una mica de velocitat cap endavant
      var gam2 = lerp(C.GTO, C.GHS, s5(clamp((u - 0.05) / 0.9, 0, 1)));
      var gr = gam2 * D2R;
      // turmell interpolat sobre el terra: a l'inici, turmell = punta − LF·dir; al final, turmell sobre el taló
      var aLo = dLo - C.LF * Math.cos(C.GTO * D2R), hLo = C.RC - C.LF * Math.sin(C.GTO * D2R);
      var dd = lerp(aLo, dTd, e2), hh = lerp(hLo, C.RC, e) + C.CLEAR * Math.pow(Math.sin(Math.PI * u), 1.3);
      var Fs = groundFrame(dd, st.X, c);
      return { A: gp(Fs, 0, hh), g: gam2 + Math.atan2(Fs.ty, Fs.tx) * R2D, contact: false };
    }

    /* IK de dues barres al pla: maluc H → turmell P; el genoll apunta endavant (+x) */
    function ik2(H, P, l1, l2) {
      var dx = P[0] - H[0], dy = P[1] - H[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.9995);
      var base = Math.atan2(dy, dx);
      var cosA = clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1), a = Math.acos(cosA);
      var th1 = base + a;                       // genoll endavant (en y amunt, girar cap a +x des de baix)
      var K = [H[0] + l1 * Math.cos(th1), H[1] + l1 * Math.sin(th1)];
      var Pe = [H[0] + Dc * Math.cos(base), H[1] + Dc * Math.sin(base)];
      return { K: K, P: Pe, slip: D - Dc };
    }
    function ikArm(S, P, l1, l2) { // colze cap enrere i avall
      var dx = P[0] - S[0], dy = P[1] - S[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.999);
      var base = Math.atan2(dy, dx), cosA = clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1), a = Math.acos(cosA);
      var th1 = base - a;
      return { E: [S[0] + l1 * Math.cos(th1), S[1] + l1 * Math.sin(th1)], P: [S[0] + Dc * Math.cos(base), S[1] + Dc * Math.sin(base)] };
    }

    /* Bastó: punta clavada al terra (fase 0 → STK) i vol fins al següent clavat */
    function stickTip(ph, st, c) {
      var n = Math.floor(ph), q = ph - n;
      var g0 = GofPh(n) + C.DS;
      if (q < C.STK) { var F = groundFrame(g0 - st.G, st.X, c); return { T: [F.x, F.y], planted: true }; }
      var u = (q - C.STK) / (1 - C.STK), g1 = GofPh(n + 1) + C.DS;
      var d = lerp(g0, g1, s5(u)) - st.G, F2 = groundFrame(d, st.X, c);
      return { T: gp(F2, 0, 4.2 * Math.pow(Math.sin(Math.PI * u), 1.2)), planted: false };
    }

    function circleX(P0, r0, P1, r1) {
      var dx = P1[0] - P0[0], dy = P1[1] - P0[1], d = Math.hypot(dx, dy);
      if (d > r0 + r1 || d < Math.abs(r0 - r1)) return [P0[0] + r0 * dx / d, P0[1] + r0 * dy / d];
      var a = (r0 * r0 - r1 * r1 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, r0 * r0 - a * a));
      var mx = P0[0] + a * dx / d, my = P0[1] + a * dy / d;
      var c1 = [mx + h * dy / d, my - h * dx / d], c2 = [mx - h * dy / d, my + h * dx / d];
      return c1[0] > c2[0] ? c1 : c2;
    }

    function softMin(a, b, k) { var h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1); return lerp(b, a, h) - k * h * (1 - h); }

    /* Postura completa en el temps t */
    function pose(t) {
      var st = state(t), ph = st.ph, c = curv(t);
      var walk = sstep((t - TL.t0) / 0.6);
      var lean = lerp(3, 5, walk) * D2R;                     // inclinació endavant 3° → 5°
      var hy = C.H_LOW + C.BOB * Math.pow(Math.sin(2 * Math.PI * ph), 2); // més baix al doble recolzament, més alt a mig pas
      var fF = footAt(ph, 0, st, c), fN = footAt(ph, 0.5, st, c);
      // el maluc no pot pujar més del que permet la cama de recolzament estirada (sobre el globus els peus queden més avall)
      var Lr = (C.L1 + C.L2) * 0.992;
      [fF, fN].forEach(function (f) { if (!f.contact) return; var dx = f.A[0] - st.X; if (Math.abs(dx) < Lr) hy = softMin(hy, f.A[1] + Math.sqrt(Lr * Lr - dx * dx), 0.35); });
      var H = [st.X, hy];
      var lF = ik2(H, fF.A, C.L1, C.L2), lN = ik2(H, fN.A, C.L1, C.L2);
      function tor(p) { return [H[0] + p[0] * Math.cos(lean) + p[1] * Math.sin(lean), H[1] - p[0] * Math.sin(lean) + p[1] * Math.cos(lean)]; }
      var SN = tor(C.SHN), SF = tor(C.SHF);
      var tip = stickTip(ph, st, c);
      // la mà propera és on el bastó (agafat a GS de la punta) queda a RH de l'espatlla: intersecció de dos cercles, la de davant
      var hand = circleX(tip.T, C.GS, SN, C.RH);
      var armN = ikArm(SN, hand, C.LU, C.LFA);
      var sdx = armN.P[0] - tip.T[0], sdy = armN.P[1] - tip.T[1], sl = Math.hypot(sdx, sdy);
      var top = [tip.T[0] + C.LS * sdx / sl, tip.T[1] + C.LS * sdy / sl];
      var aF = (10 - 22 * Math.cos(2 * Math.PI * ph)) * D2R, eF = aF + 35 * D2R;
      var handF = [SF[0] + C.LU * Math.sin(aF) + C.LFA * Math.sin(eF), SF[1] - C.LU * Math.cos(aF) - C.LFA * Math.cos(eF)];
      var armF = ikArm(SF, handF, C.LU, C.LFA);
      return { st: st, c: c, H: H, lean: lean, lF: lF, lN: lN, fF: fF, fN: fN, SN: SN, SF: SF, armN: armN, armF: armF, tip: tip.T, top: top, planted: tip.planted };
    }

    return { C: C, TL: TL, LOGO: LOGO, pose: pose, state: state, GofPh: GofPh, groundFrame: groundFrame, curv: curv, globeScale: globeScale, sstep: sstep, s5: s5, easeOutCubic: easeOutCubic, easeOutBack: easeOutBack, clamp: clamp, lerp: lerp };
  }
  root.ValiaRig = make({ N_REV: 9 });
  root.ValiaRig.make = make;
})(typeof window !== 'undefined' ? window : globalThis);
