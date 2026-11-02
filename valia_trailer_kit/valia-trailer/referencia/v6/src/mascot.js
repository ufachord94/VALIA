/* GreenVallès · mascota
   El personatge del logotip (excursionista amb motxilla i bastó) és la cara visible de la IA.
   Fa servir exactament la mateixa figura articulada que el logotip i la pantalla de càrrega
   (mateixes peces, proporcions i gruixos); només canvia la postura i el color segons el fons.
   Unitats: u de la figura; món amb y cap amunt i terra a y = 0; a l'SVG, y cap avall. */
(function (root) {
  'use strict';
  const R = root.ValiaRig, A = root.ValiaAnim, C = R.C, D2R = Math.PI / 180;
  const RW = R.make({ flat: true });              // marxa sobre terra pla («buscant»)
  const NECK = [1.2, -23.5];                       // pivot del cap, en coordenades del tronc
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  const ss = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  const out3 = x => { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); };
  const dir = a => [Math.sin(a * D2R), -Math.cos(a * D2R)];
  const TAU = Math.PI * 2;

  /* ---------- cinemàtica inversa (igual que el rig de la càrrega) ---------- */
  function ik2(H, P, l1, l2) {
    const dx = P[0] - H[0], dy = P[1] - H[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.9995);
    const base = Math.atan2(dy, dx), a = Math.acos(clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1));
    const th1 = base + a;
    return { K: [H[0] + l1 * Math.cos(th1), H[1] + l1 * Math.sin(th1)], P: [H[0] + Dc * Math.cos(base), H[1] + Dc * Math.sin(base)] };
  }
  function ikArm(S, P, l1, l2, up) {
    const dx = P[0] - S[0], dy = P[1] - S[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.999);
    const base = Math.atan2(dy, dx), a = Math.acos(clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1));
    const th1 = up ? base + a : base - a;           // colze cap enrere i avall (per defecte) o cap amunt
    return { E: [S[0] + l1 * Math.cos(th1), S[1] + l1 * Math.sin(th1)], P: [S[0] + Dc * Math.cos(base), S[1] + Dc * Math.sin(base)] };
  }

  /* ---------- postura a partir d'objectius ----------
     s = { hx, hy, lean (°), head (°), fF:[x,y,g], fN:[x,y,g], hF:[x,y], hN:[x,y] | stick.held,
           stick: { tip:[x,y], ang, held, grip } | { ang, grip } (agafat per la mà propera), fx } */
  function pose(s) {
    const H = [s.hx || 0, s.hy], lean = (s.lean || 0) * D2R;
    const tor = p => [H[0] + p[0] * Math.cos(lean) + p[1] * Math.sin(lean), H[1] - p[0] * Math.sin(lean) + p[1] * Math.cos(lean)];
    const SN = tor(C.SHN), SF = tor(C.SHF), st = s.stick || {};
    let tip, top, hN = s.hN;
    const d = dir(st.ang == null ? 186 : st.ang), g = st.grip || C.GS;
    if (st.tip) { tip = st.tip; if (st.held) hN = [tip[0] + g * d[0], tip[1] + g * d[1]]; }
    else tip = [hN[0] - g * d[0], hN[1] - g * d[1]];
    top = [tip[0] + C.LS * d[0], tip[1] + C.LS * d[1]];
    return {
      H, lean, head: s.head || 0,
      lF: ik2(H, s.fF, C.L1, C.L2), lN: ik2(H, s.fN, C.L1, C.L2), fF: { g: s.fF[2] || 0 }, fN: { g: s.fN[2] || 0 },
      SN, SF, armN: ikArm(SN, hN, C.LU, C.LFA, s.upN), armF: ikArm(SF, s.hF, C.LU, C.LFA, s.upF), tip, top, fx: s.fx || {}
    };
  }
  /* interpolació entre dues postures (posicions); els angles es tornen a calcular en dibuixar */
  function mix(a, b, t) {
    if (typeof a === 'number') return lerp(a, b, t);
    if (Array.isArray(a)) return a.map((v, i) => mix(v, b[i], t));
    if (a && typeof a === 'object') { const o = {}; for (const k in a) o[k] = k === 'fx' ? (t < 0.5 ? a.fx : b.fx) : (b && k in b ? mix(a[k], b[k], t) : a[k]); return o; }
    return a;
  }

  /* ---------- postures clau ---------- */
  const LOGO = { hx: 0, hy: 26.63, lean: 3, head: 0, fF: [9.16, 3.7, 14], fN: [-10.27, 4.52, -8.5], hF: [1.92, 27.66], stick: { tip: [21, 0], ang: 186.4, held: true } };
  const STAND = { hx: 0, hy: 27.4, lean: 2, head: 0, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-2.5, 28.5], stick: { tip: [17, 0], ang: 191, held: true, grip: 38 } };
  const WALKX = R.make({ flat: true });
  const K = {
    logo: LOGO, stand: STAND,
    wave: { hx: 0, hy: 27.4, lean: 1, head: -6, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-4, 30], hN: [12, 63], stick: { ang: 180, grip: 30 } },
    listen: { hx: 0, hy: 26.6, lean: 12, head: 12, fF: [6.5, 3.7, 0], fN: [-5.2, 3.7, 0], hF: [-1, 30], hN: [-1.6, 55.5], upN: true, stick: { tip: [14.5, 0], ang: 197 } },
    think: { hx: 0, hy: 27.4, lean: -3, head: -16, fF: [4.6, 3.7, 0], fN: [-5.4, 3.7, 0], hF: [7, 45.5], hN: [8.6, 54.2], upN: true, stick: { tip: [16, 0], ang: 200 } },
    talk: { hx: 0, hy: 27.4, lean: 4, head: 4, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [8, 38], hN: [15, 44], stick: { ang: 128, grip: 22 } },
    point: { hx: 0, hy: 27.1, lean: 6, head: 10, fF: [6.5, 3.7, 0], fN: [-5.5, 3.7, 0], hF: [-2.5, 29], hN: [15, 42], stick: { ang: 240, grip: 30 } },
    sit: { hx: 1, hy: 14.6, lean: 16, head: 24, fF: [15.5, 3.7, 0], fN: [13, 3.7, 0], hF: [12.5, 18.5], hN: [14.5, 19.5], stick: { tip: [-24, 1.6], ang: 92 } },
    crouch: { hx: 0, hy: 21.5, lean: 14, head: 6, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-8, 26], hN: [8, 30], stick: { ang: 205, grip: 34 } },
    tuck: { hx: 0, hy: 27.4, lean: -4, head: -8, fF: [7, 9.5, -10], fN: [-7.5, 9, -25], hF: [-10, 57], hN: [14, 61], upN: true, upF: true, stick: { ang: 172, grip: 32 } },
    cheer: { hx: 0, hy: 27.4, lean: -3, head: -8, fF: [6, 3.7, 0], fN: [-5.5, 3.7, 0], hF: [-10, 57], hN: [13.5, 61], upN: true, upF: true, stick: { ang: 174, grip: 32 } }
  };
  const B = {}; for (const k in K) B[k] = pose(K[k]);
  const with_ = (base, o) => Object.assign({}, base, o);

  /* ---------- estats ----------
     Cada estat: f(t, m) → postura i efectes. one: durada si és d'un sol cop (després passa a «next»). */
  const STATES = {
    repos: { label: 'en repòs', f(t) { const b = Math.sin(TAU * t / 3.4); const tap = ss((t % 3.4 - 2.6) / 0.15) * (1 - ss((t % 3.4 - 2.85) / 0.2));
      return pose(with_(LOGO, { hy: LOGO.hy + 0.35 * b, lean: 3 + 0.7 * b, head: 1.5 * Math.sin(TAU * t / 3.4 + 1), stick: { tip: [21, 1.6 * tap], ang: 186.4, held: true } })); },
      still: () => B.logo },
    saludant: { label: 'saludant', one: 1.5, next: 'repos', f(t) {
      const up = ss((t - 0.08) / 0.24), down = ss((t - 1.22) / 0.26), w = up * (1 - down);
      const wv = Math.sin(TAU * 2.2 * (t - 0.3)) * ss((t - 0.3) / 0.15) * (1 - ss((t - 1.1) / 0.2));
      let s = mix(B.stand, pose(with_(K.wave, { hN: [12 + 1.5 * wv, 63], stick: { ang: 180 + 16 * wv, grip: 30 } })), w);
      const cr = t < 0.12 ? ss(t / 0.12) : 1 - ss((t - 0.12) / 0.1);
      if (cr > 0) s = mix(s, B.crouch, 0.3 * cr);
      const air = t > 0.17 && t < 0.47 ? Math.sin(Math.PI * (t - 0.17) / 0.3) * 3.4 : 0;
      return lift(s, air); },
      still: () => B.wave },
    escoltant: { label: 't\'escolta', f(t, m) { const p = m._pulse ? clamp(1 - (performance.now() - m._pulse) / 380, 0, 1) : 0;
      const b = Math.sin(TAU * t / 2.4);
      const s = pose(with_(K.listen, { lean: 11 + 1.2 * b + 2 * p, head: 14 + 3 * p, hy: 26.6 + 0.25 * b }));
      s.fx = { arcs: 0.35 + 0.65 * p }; return s; },
      still: () => { const s = pose(K.listen); s.fx = { arcs: 0.7 }; return s; } },
    pensant: { label: 'pensant', f(t) { const b = Math.sin(TAU * t / 2.8);
      const s = pose(with_(K.think, { lean: -3 + 1.2 * b, head: -16 + 4 * b, hx: 0.4 * b }));
      s.fx = { dots: (t % 1.2) / 1.2 }; return s; },
      still: () => { const s = pose(K.think); s.fx = { dots: -1 }; return s; } },
    responent: { label: 'responent', f(t) { const g = Math.sin(TAU * 1.5 * t), n = Math.sin(TAU * 3 * t);
      const s = pose(with_(K.talk, { stick: { ang: 128 + 9 * g, grip: 22 }, hN: [15 + 1.2 * g, 44 + 1 * g], hF: [8 + 1.5 * Math.sin(TAU * 1.5 * t + 1.4), 38], head: 4 + 3 * n, hy: 27.4 + 0.25 * n }));
      s.fx = { lines: (t * 1.5) % 1 }; return s; },
      still: () => B.talk },
    proposant: { label: 'proposant', one: 0.9, next: 'proposantHold', f(t) { const k = out3(t / 0.45);
      return mix(B.stand, B.point, k); }, still: () => B.point },
    proposantHold: { label: 'proposant', f(t) { const tap = Math.sin(TAU * 0.9 * t);
      return pose(with_(K.point, { stick: { ang: 240 + 3.5 * tap, grip: 30 }, head: 10 + 2 * tap })); }, still: () => B.point },
    error: { label: 'sense connexió', f(t) { const b = Math.sin(TAU * t / 4.2);
      const s = pose(with_(K.sit, { lean: 16 + 2.2 * b, head: 24 + 3 * b }));
      s.fx = { rock: 1, cloud: 0.5 + 0.5 * Math.sin(TAU * t / 2.1) }; return s; },
      still: () => { const s = pose(K.sit); s.fx = { rock: 1, cloud: 1 }; return s; } },
    buscant: { label: 'buscant', f(t) { const p = RW.pose(3 + t), X = p.st.X; const s = shift(p, -X); s.head = 0; s.fx = { ground: p.st.G % 8 }; return s; },
      still: () => { const s = shift(RW.pose(3.3), -RW.state(3.3).X); s.head = 0; s.fx = { ground: 0, still: 1 }; return s; } },
    celebrant: { label: 'celebrant', one: 1.7, next: 'celebrantHold', f(t) {
      let s;
      if (t < 0.16) s = mix(B.stand, B.crouch, out3(t / 0.16));
      else if (t < 0.56) { const u = (t - 0.16) / 0.4; s = mix(B.crouch, B.tuck, out3(Math.min(1, u * 2.5))); s = mix(s, B.crouch, ss((u - 0.74) / 0.26)); s = lift(s, 14 * Math.sin(Math.PI * u)); }
      else if (t < 0.78) s = mix(B.crouch, B.cheer, out3((t - 0.56) / 0.22));
      else { const w = Math.sin(TAU * 2 * (t - 0.78)); s = pose(with_(K.cheer, { hN: [13.5 + 1.4 * w, 61], hF: [-10 - 1.4 * w, 57], stick: { ang: 174 + 9 * w, grip: 32 } })); }
      s.fx = { confetti: clamp((t - 0.4) / 1.2, 0, 1) }; return s; },
      still: () => { const s = pose(K.cheer); s.fx = { sparkle: 1 }; return s; } },
    celebrantHold: { label: 'celebrant', f(t) { const w = Math.sin(TAU * 0.8 * t);
      return pose(with_(K.cheer, { hN: [13.5 + w, 61], hF: [-10 - w, 57], stick: { ang: 174 + 4 * w, grip: 32 }, hy: 27.4 + 0.3 * Math.sin(TAU * 1.6 * t) })); },
      still: () => { const s = pose(K.cheer); s.fx = { sparkle: 1 }; return s; } }
  };
  function shift(p, dx) { const o = mix(p, p, 0); const sx = a => { a[0] += dx; }; sx(o.H); sx(o.lF.K); sx(o.lF.P); sx(o.lN.K); sx(o.lN.P); sx(o.SN); sx(o.SF); sx(o.armN.E); sx(o.armN.P); sx(o.armF.E); sx(o.armF.P); sx(o.tip); sx(o.top); return o; }
  function lift(p, dy) { if (!dy) return p; const o = mix(p, p, 0); [o.H, o.lF.K, o.lF.P, o.lN.K, o.lN.P, o.SN, o.SF, o.armN.E, o.armN.P, o.armF.E, o.armF.P, o.tip, o.top].forEach(a => { a[1] += dy; }); return o; }

  /* ---------- dibuix ---------- */
  const NS = 'http://www.w3.org/2000/svg';
  const LEAFP = 'M0 6C3.6 4.3 4.2 -0.6 0 -4.6C-4.2 -0.6 -3.6 4.3 0 6Z';
  function fxMarkup() {
    const dots = [0, 1, 2].map(i => `<circle data-dot="${i}" cx="${14 + i * 6}" cy="${-62 - i * 6.5}" r="${2.2 + i * 0.5}"/>`).join('');
    const arcs = [0, 1, 2].map(i => { const r = 4.6 + i * 3.4, x = 16 + i * 3.4, y = -57; return `<path data-arc="${i}" d="M${x} ${y + r}a${r} ${r} 0 0 0 0 ${-2 * r}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" transform="rotate(-14 ${x} ${y})"/>`; }).join('');
    const conf = Array.from({ length: 12 }, (_, i) => `<path data-cf="${i}" d="${LEAFP}" fill="${['#00A86B', '#F2B200', '#1FD08A', '#0E8257'][i % 4]}"/>`).join('');
    return {
      back: `<g data-fx="rock" opacity="0"><path d="M-12 0C-13 -6 -9 -13.2 0 -13.6C9 -14 13 -7 12.4 0Z" fill="var(--m-rock,#C9D3CC)"/></g>
             <g data-fx="ground" opacity="0" fill="currentColor">${Array.from({ length: 11 }, (_, i) => `<circle cx="${-36 + i * 8}" cy="1.6" r="1.2" opacity="${(1 - Math.abs(i - 5) / 6).toFixed(2)}"/>`).join('')}</g>`,
      front: `<g data-fx="dots" opacity="0" fill="currentColor">${dots}</g>
              <g data-fx="arcs" opacity="0">${arcs}</g>
              <g data-fx="cloud" opacity="0" transform="translate(16 -74)"><path d="M-9 4h17a5.5 5.5 0 0 0 0-11a7.6 7.6 0 0 0-14.6 1.6A4.8 4.8 0 0 0-9 4Z" fill="var(--m-cloud,#E5E9E6)"/><path d="M-6 -9L8 6" stroke="var(--m-slash,#D70015)" stroke-width="2.4" stroke-linecap="round"/></g>
              <g data-fx="lines" opacity="0" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M0 0l5 -3"/><path d="M1 5l6 0"/></g>
              <g data-fx="conf">${conf}</g>
              <g data-fx="sparkle" opacity="0" fill="var(--m-spark,#F2B200)"><path d="M-14 -70l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6Z"/><path d="M22 -66l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2Z"/><path d="M26 -84l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1Z"/></g>`
    };
  }
  const CONF = Array.from({ length: 12 }, (_, i) => { const a = -Math.PI / 2 + (i - 5.5) * 0.24 + (i % 2 ? 0.06 : -0.05); return { vx: Math.cos(a) * (34 + (i * 7) % 16), vy: Math.sin(a) * (52 + (i * 11) % 20), r: (i * 47) % 360, vr: (i % 2 ? 1 : -1) * (240 + (i * 37) % 200), s: 0.8 + (i % 3) * 0.18 }; });

  const LIVE = new Set();
  let RM = false;                                     // «Reduir moviment»
  let PAUSED = false;
  function tick(now) {
    if (!PAUSED) LIVE.forEach(m => { if (!m.el.isConnected) { LIVE.delete(m); return; } m.frame(now); });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  class Mascot {
    /* opt: { size (px d'alçada), view: 'full'|'avatar'|'bust', color, state, label } */
    constructor(host, opt) {
      opt = opt || {};
      this.opt = opt; this.el = document.createElement('span'); this.el.className = 'masc ' + (opt.cls || '');
      const vb = opt.view === 'avatar' ? '-26 -76 62 70' : opt.view === 'bust' ? '-22 -74 52 52' : '-34 -104 96 110';
      const fx = fxMarkup();
      this.el.innerHTML = `<svg viewBox="${vb}" role="img" aria-label="" focusable="false" style="height:${opt.size || 96}px;width:auto;overflow:visible">
        <g class="m-root">${fx.back}<g class="m-body">${A.figureMarkup('currentColor')}</g>${fx.front}</g></svg>`;
      host && host.appendChild(this.el);
      this.svg = this.el.firstElementChild; this.parts = {};
      this.svg.querySelectorAll('.m-body [data-p]').forEach(g => { this.parts[g.getAttribute('data-p')] = g; });
      this.fx = {}; this.svg.querySelectorAll('[data-fx]').forEach(g => { this.fx[g.getAttribute('data-fx')] = g; });
      this.dots = [...this.svg.querySelectorAll('[data-dot]')]; this.arcs = [...this.svg.querySelectorAll('[data-arc]')]; this.cf = [...this.svg.querySelectorAll('[data-cf]')];
      this.state = null; this.t0 = performance.now(); this.from = null; this.blend = 0; this.label = opt.label || 'Assistent de GreenVallès';
      this.set(opt.state || 'repos', { instant: true });
      LIVE.add(this);
    }
    set(state, o) {
      o = o || {};
      if (!STATES[state]) return this;
      if (this.state === state && !o.restart) return this;
      const now = performance.now();
      this.from = o.fromPose || this.cur || null; this.fromT = now; this.blendDur = o.instant || RM ? 0 : (o.blend || 0.28);
      this.state = state; this.t0 = now; this.onDone = o.onDone || null;
      this.svg.setAttribute('aria-label', this.label + ': ' + STATES[state].label);
      this.svg.dataset.state = state;
      this.frame(now);
      return this;
    }
    pulse() { this._pulse = performance.now(); }
    frame(now) {
      const S = STATES[this.state];
      let t = (now - this.t0) / 1000, p;
      if (RM || this.opt.still) p = S.still();
      else {
        if (S.one && t >= S.one) { const cb = this.onDone; this.onDone = null; this.set(S.next, { blend: 0.2 }); cb && cb(); return; }
        p = S.f(t, this);
      }
      if (this.from && this.blendDur > 0) {
        const k = ss((now - this.fromT) / 1000 / this.blendDur);
        if (k < 1) { const fxB = p.fx; p = mix(this.from, p, k); p.fx = k < 0.5 ? (this.from.fx || {}) : fxB; } else this.from = null;
      }
      this.cur = p; this.draw(p, t);
    }
    draw(p, t) {
      const tr = A.poseTransforms(p);
      for (const k in tr) if (this.parts[k]) this.parts[k].setAttribute('transform', tr[k]);
      if (this.parts.head) this.parts.head.setAttribute('transform', `rotate(${(p.head || 0).toFixed(2)} ${NECK[0]} ${NECK[1]})`);
      const fx = p.fx || {}, F = this.fx;
      F.rock.setAttribute('opacity', fx.rock ? 1 : 0);
      F.ground.setAttribute('opacity', fx.ground != null ? 0.45 : 0);
      if (fx.ground != null) F.ground.setAttribute('transform', `translate(${(-(fx.ground || 0)).toFixed(2)} 0)`);
      // punts de «pensant»
      F.dots.setAttribute('opacity', fx.dots != null ? 1 : 0);
      if (fx.dots != null) this.dots.forEach((d, i) => { const ph = fx.dots < 0 ? 1 : clamp(Math.sin(Math.PI * clamp((fx.dots * 1.6 - i * 0.22), 0, 1)), 0, 1); d.setAttribute('opacity', (fx.dots < 0 ? 0.85 : 0.25 + 0.75 * ph).toFixed(2)); d.setAttribute('transform', `translate(0 ${fx.dots < 0 ? 0 : (-2.4 * ph).toFixed(2)})`); });
      F.arcs.setAttribute('opacity', fx.arcs != null ? 1 : 0);
      if (fx.arcs != null) this.arcs.forEach((a, i) => a.setAttribute('opacity', clamp(fx.arcs * 1.4 - i * 0.28, 0.12, 1).toFixed(2)));
      F.cloud.setAttribute('opacity', fx.cloud ? (0.75 + 0.25 * fx.cloud).toFixed(2) : 0);
      if (fx.cloud) F.cloud.setAttribute('transform', `translate(16 ${(-74 - 1.2 * fx.cloud).toFixed(2)})`);
      // línies de gest vora la punta del bastó
      if (fx.lines != null) { const tp = p.tip; F.lines.setAttribute('opacity', (0.25 + 0.6 * Math.sin(Math.PI * fx.lines)).toFixed(2)); F.lines.setAttribute('transform', `translate(${(tp[0] + 2).toFixed(1)} ${(-tp[1] - 4).toFixed(1)})`); } else F.lines.setAttribute('opacity', 0);
      // confeti de fulles
      const cfv = fx.confetti;
      this.cf.forEach((c, i) => {
        if (cfv == null || cfv <= 0 || cfv >= 1) { c.setAttribute('opacity', 0); return; }
        const q = CONF[i], tt = cfv * 1.15, x = q.vx * tt, y = -62 + q.vy * tt + 46 * tt * tt;
        c.setAttribute('opacity', (1 - ss((cfv - 0.62) / 0.38)).toFixed(2));
        c.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(q.r + q.vr * tt).toFixed(0)}) scale(${q.s})`);
      });
      F.sparkle.setAttribute('opacity', fx.sparkle ? 1 : 0);
    }
    destroy() { LIVE.delete(this); this.el.remove(); }
  }

  root.Mascot = {
    create: (host, opt) => new Mascot(host, opt),
    STATES, pose, mix, K, B,
    setReduced(v) { RM = !!v; LIVE.forEach(m => m.frame(performance.now())); },
    pause(v) { PAUSED = !!v; },
    get reduced() { return RM; },
    labels: () => Object.fromEntries(Object.entries(STATES).map(([k, v]) => [k, v.label]))
  };
})(typeof window !== 'undefined' ? window : globalThis);
