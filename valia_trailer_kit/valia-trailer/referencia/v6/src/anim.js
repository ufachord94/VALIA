/* Valia · construcció del logotip (SVG) i de l'escena de càrrega. Depèn de ValiaRig. */
(function (root) {
  'use strict';
  var V = root.ValiaRig, C = V.C, LOGO = V.LOGO, D2R = Math.PI / 180, R2D = 180 / Math.PI; // rig per defecte (postura estàtica del logotip)
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------- fulla (caixa de 120 u, girada 22° en sentit horari sobre 62,59) ---------- */
  var LEAF = {
    rot: 'rotate(22 62 59)',
    blade: 'M62 109C109 91 101 33 62 6C23 33 15 91 62 109Z',
    rib: 'M62 104C60.6 80 60.8 42 62 13',
    stem: 'M62 107C62.6 113 62 117 60.4 121'
  };

  /* ---------- figura: dimensions en u ---------- */
  var W = { thigh: 8, shin: 7.4, foot: 7.4, uarm: 6, farm: 5.6, stick: 3.2 };
  function line(L, w, col, up) { return '<line x1="0" y1="0" x2="0" y2="' + (up ? -L : L) + '" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round"/>'; }
  /* marcatge de la figura articulada; cada part és un grup separat (data-p) que es mou només amb transform */
  function figureMarkup(col) {
    var leg = function (s) {
      return '<g data-p="thigh' + s + '">' + line(C.L1, W.thigh, col) +
        '<g data-p="shin' + s + '" transform="translate(0 ' + C.L1 + ')">' + line(C.L2, W.shin, col) +
        '<g data-p="foot' + s + '" transform="translate(0 ' + C.L2 + ')">' + line(C.LF, W.foot, col) + '</g></g></g>';
    };
    var arm = function (s, w1, w2) {
      return '<g data-p="uarm' + s + '">' + line(C.LU, w1, col) +
        '<g data-p="farm' + s + '" transform="translate(0 ' + C.LU + ')">' + line(C.LFA, w2, col) + '</g></g>';
    };
    return '<g data-p="armFgrp">' + arm('F', W.uarm, W.farm) + '</g>' + leg('F') +
      '<g data-p="torso"><rect x="-6.5" y="-22" width="13" height="23.5" rx="6.5" fill="' + col + '"/>' +
      '<g data-p="pack"><rect x="-13.2" y="-20.6" width="9.6" height="14.4" rx="3.6" fill="' + col + '"/></g>' +
      '<g data-p="head"><circle cx="1.8" cy="-30.6" r="6.2" fill="' + col + '"/></g></g>' +
      leg('N') + '<g data-p="stick">' + line(C.LS, W.stick, col) + '</g>' + arm('N', W.uarm, W.farm);
  }
  function angSvg(P, Q) { return Math.atan2(Q[0] - P[0], -(Q[1] - P[1])) * R2D; } // angle des de "avall" cap a +x
  function tf(x, y, a) { return 'translate(' + x.toFixed(3) + ' ' + y.toFixed(3) + ') rotate(' + (-a).toFixed(3) + ')'; }
  function footDir(g) { return Math.atan2(Math.cos(g * D2R), Math.sin(g * D2R)) * R2D; } // vector (cos g, sin g) amb y amunt
  /* transformacions de cada part per a una postura (coordenades de la figura: x endavant, y amunt → SVG: (x, -y)) */
  function poseTransforms(p) {
    var o = {};
    function legT(s, L, f) {
      var a1 = angSvg(p.H, L.K), a2 = angSvg(L.K, L.P), a3 = footDir(f.g);
      o['thigh' + s] = tf(p.H[0], -p.H[1], a1);
      o['shin' + s] = 'translate(0 ' + C.L1 + ') rotate(' + (-(a2 - a1)).toFixed(3) + ')';
      o['foot' + s] = 'translate(0 ' + C.L2 + ') rotate(' + (-(a3 - a2)).toFixed(3) + ')';
    }
    legT('F', p.lF, p.fF); legT('N', p.lN, p.fN);
    o.torso = 'translate(' + p.H[0].toFixed(3) + ' ' + (-p.H[1]).toFixed(3) + ') rotate(' + (p.lean * R2D).toFixed(3) + ')';
    function armT(s, SH, A) { var a1 = angSvg(SH, A.E), a2 = angSvg(A.E, A.P); o['uarm' + s] = tf(SH[0], -SH[1], a1); o['farm' + s] = 'translate(0 ' + C.LU + ') rotate(' + (-(a2 - a1)).toFixed(3) + ')'; }
    armT('N', p.SN, p.armN); armT('F', p.SF, p.armF);
    o.stick = tf(p.tip[0], -p.tip[1], angSvg(p.tip, p.top));
    return o;
  }
  function bake(markup, tr) { // insereix les transformacions dins del marcatge (per al logotip estàtic)
    return markup.replace(/<g data-p="(\w+)"( transform="[^"]*")?/g, function (m, k) { return tr[k] ? '<g data-p="' + k + '" transform="' + tr[k] + '"' : m; });
  }

  /* ---------- logotip estàtic ----------
     variant: 'color' (fulla + persona blanca), 'mono' (fulla blanca, persona en negatiu), 'icon' (icona d'app), 'iconDark'
     leaf: color de la fulla; small: versió per a mides petites (≤32 px), figura més gran i traços més gruixuts */
  var _id = 0;
  function figBox(small) { return small ? { f: 1.02, HX: 44.5, GY: 96 } : { f: LOGO.f, HX: LOGO.HX, GY: LOGO.GY }; }
  function staticFigure(col, small) {
    var b = figBox(small), tr = poseTransforms(V.pose(0)), m = figureMarkup(col);
    if (small) m = m.replace(/stroke-width="([\d.]+)"/g, function (s, w) { return 'stroke-width="' + (+w * 1.14).toFixed(2) + '"'; });
    return '<g transform="translate(' + b.HX + ' ' + b.GY + ') scale(' + b.f + ')">' + bake(m, tr) + '</g>';
  }
  function logoSVG(opt) {
    opt = opt || {}; var v = opt.variant || 'color', size = opt.size || 64, leaf = opt.leaf || '#00A86B', id = 'vl' + (++_id), small = !!opt.small;
    var vb = '0 4 120 120', fig, body;
    if (v === 'color') {
      body = '<g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="' + leaf + '" stroke-width="' + (small ? 5.5 : 4.2) + '" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="' + leaf + '"/>' +
        (small ? '' : '<path d="' + LEAF.rib + '" fill="none" stroke="' + (opt.figure || '#FFFFFF') + '" stroke-opacity=".32" stroke-width="2" stroke-linecap="round"/>') + '</g>' + staticFigure(opt.figure || '#FFFFFF', small);
    } else {
      var fg = opt.fg || '#FFFFFF';
      var mask = '<mask id="' + id + '" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="130"><rect x="0" y="0" width="120" height="130" fill="#fff"/>' +
        (small ? '' : '<path transform="' + LEAF.rot + '" d="' + LEAF.rib + '" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>') + staticFigure('#000', small) + '</mask>';
      var leafG = '<g mask="url(#' + id + ')"><g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="' + fg + '" stroke-width="' + (small ? 5.5 : 4.2) + '" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="' + fg + '"/></g></g>';
      if (v === 'mono') body = '<defs>' + mask + '</defs>' + leafG;
      else { // icona d'app: fons sòlid i fulla dins de la zona segura (cercle del 62 %)
        var bg = v === 'iconDark' ? '#0B0D0C' : '#00A86B';
        vb = '0 0 120 120';
        if (v === 'iconDark') {
          body = '<rect width="120" height="120" rx="27" fill="' + bg + '"/><g transform="translate(60 60) scale(.64) translate(-60.6 -63)"><g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="#00A86B" stroke-width="5" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="#00A86B"/></g>' + staticFigure('#FFFFFF', true) + '</g>';
        } else {
          body = '<defs>' + mask + '</defs><rect width="120" height="120" rx="27" fill="' + bg + '"/><g transform="translate(60 60) scale(.64) translate(-60.6 -63)">' + leafG + '</g>';
        }
      }
    }
    return '<svg xmlns="' + NS + '" viewBox="' + vb + '" width="' + size + '" height="' + size + '" role="img" aria-label="' + (opt.label || 'GreenVallès') + '">' + body + '</svg>';
  }

  /* ---------- escena de càrrega (390×844), configurable ----------
     cfg: rig (instància de ValiaRig.make), K (px per u de la figura), OY (centre del logotip), name, font, size, weight, ls,
          nameGap (de la base del globus a la línia base del nom), tagline, tagGap */
  var MINT = '#D3F4E4', DK = '#0A6B44', RP0 = 95; // el globus es dibuixa amb radi de referència RP0 i s'escala
  /* fites del Vallès Oriental, dibuixades amb la base a (0,0) i cap amunt */
  var LANDMARKS = [
    { k: 'termes', n: 'Termes romanes de Caldes', svg: '<path d="M-23 0V-16H23V0Z" fill="' + MINT + '"/><rect x="-25" y="-19.5" width="50" height="3.5" rx="1.2" fill="' + MINT + '"/>' +
      [-14, 0, 14].map(function (x) { return '<path d="M' + (x - 4.6) + ' 0V-7.6A4.6 4.6 0 0 1 ' + (x + 4.6) + ' -7.6V0Z" fill="' + DK + '"/>'; }).join('') +
      '<g fill="none" stroke="#FFFFFF" stroke-opacity=".75" stroke-width="1.6" stroke-linecap="round"><path d="M-9 -23q-3-3.5 0-7t0-7"/><path d="M0 -23q-3-3.5 0-7t0-7"/><path d="M9 -23q-3-3.5 0-7t0-7"/></g>' },
    { k: 'montseny', n: 'Montseny · Turó de l\'Home', svg: '<path d="M-30 0L-12 -27L-6 -22L4 -34L30 0Z" fill="' + MINT + '"/><path d="M4 -34L-1 -27.5L3 -26L7 -29.5Z" fill="#FFFFFF"/><rect x="1.4" y="-41" width="5.2" height="5" rx="1" fill="' + MINT + '"/><path d="M4 -41V-50M1.8 -46.5H6.2" stroke="' + MINT + '" stroke-width="1.6" stroke-linecap="round"/>' },
    { k: 'fai', n: 'Sant Miquel del Fai', svg: '<path d="M-26 0V-25Q-26 -32 -18 -32H16Q24 -32 24 -25V0Z" fill="' + MINT + '"/><path d="M5 -32C3 -22 7 -11 5 0" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" fill="none"/><path d="M9 -30C8 -20 10 -10 9 0" stroke="#FFFFFF" stroke-opacity=".6" stroke-width="1.6" fill="none"/><path d="M-21 0V-9L-14.5 -14.5L-8 -9V0Z" fill="' + DK + '"/><path d="M-15.8 -14.5V-19.5H-13.2V-14.5" fill="' + DK + '"/>' },
    { k: 'porxada', n: 'La Porxada de Granollers', svg: '<path d="M-27 -15L-20 -22H20L27 -15Z" fill="' + MINT + '"/><rect x="-26" y="-15.5" width="52" height="2.6" fill="' + MINT + '"/>' +
      [0, 1, 2, 3, 4, 5].map(function (i) { return '<rect x="' + (-22.6 + i * 8.6).toFixed(1) + '" y="-13" width="2.4" height="12" fill="' + MINT + '"/>'; }).join('') + '<rect x="-27" y="-1.6" width="54" height="1.6" fill="' + MINT + '"/>' },
    { k: 'campanar', n: 'Campanar romànic', svg: '<rect x="-7.5" y="-37" width="15" height="37" fill="' + MINT + '"/><path d="M-9 -37L0 -46L9 -37Z" fill="' + MINT + '"/>' +
      [-31, -21].map(function (y) { return '<path d="M-5 ' + y + 'v-4.2a1.7 1.7 0 0 1 3.4 0v4.2zM1.6 ' + y + 'v-4.2a1.7 1.7 0 0 1 3.4 0v4.2z" fill="' + DK + '"/>'; }).join('') + '<path d="M-7.5 -26.5H7.5M-7.5 -16.5H7.5" stroke="' + DK + '" stroke-opacity=".35" stroke-width="1"/>' },
    { k: 'fageda', n: 'La fageda del Montseny', svg: '<g fill="' + MINT + '"><rect x="-14.2" y="-14" width="2.6" height="14"/><circle cx="-12.9" cy="-19" r="8"/><rect x="-1.3" y="-19" width="2.8" height="19"/><circle cx="0" cy="-26" r="10.5"/><rect x="11" y="-11" width="2.4" height="11"/><circle cx="12.2" cy="-15.5" r="6.8"/></g><g fill="' + DK + '" fill-opacity=".18"><circle cx="-10.5" cy="-17" r="4"/><circle cx="3.5" cy="-23" r="5"/></g>' },
    { k: 'gallecs', n: 'Espai rural de Gallecs', svg: '<path d="M-15 0V-12L-5 -20L5 -12V0Z" fill="' + MINT + '"/><path d="M5 0V-9H16V0Z" fill="' + MINT + '"/><rect x="-7" y="-7" width="4" height="7" fill="' + DK + '"/><rect x="-11" y="-13" width="3" height="3" fill="' + DK + '"/><rect x="-2" y="-13" width="3" height="3" fill="' + DK + '"/>' +
      '<g stroke="' + MINT + '" stroke-width="1.4" stroke-linecap="round"><path d="M-27 0V-6M-24 0V-8M-21 0V-6"/><path d="M20 0V-7M23 0V-9M26 0V-6"/></g>' }
  ];
  var LM_A0 = 64; // angle inicial de la primera fita (graus des de dalt, en sentit horari): arriba per la dreta

  function geom(cfg) {
    var R = cfg.rig || V, K = cfg.K || 1.7, KB = K / LOGO.f, OX = cfg.OX || 195, OY = cfg.OY || 270;
    var GROUND = OY + (LOGO.GY - LOGO.CY) * KB, X0 = OX + (LOGO.HX - LOGO.CX) * KB, RP = R.C.R * K;
    var WM_Y = GROUND + 2 * RP + (cfg.nameGap || 100);
    return { R: R, K: K, KB: KB, OX: OX, OY: OY, GROUND: GROUND, X0: X0, RP: RP, gsc: RP / RP0, WM_Y: WM_Y, TG_Y: WM_Y + (cfg.tagGap || 32) };
  }
  function sceneMarkup(g, cfg) {
    var trees = '', i, a;
    var treeAng = [20, 41, 92, 113, 146, 165, 196, 219, 247, 271, 302, 324, 352];
    for (i = 0; i < treeAng.length; i++) {
      a = treeAng[i]; var h = 6 + (i * 7) % 5;
      trees += '<g transform="rotate(' + a + ') translate(0 ' + (-RP0) + ')"><rect x="-.8" y="' + (-h) + '" width="1.6" height="' + h + '" fill="' + DK + '"/><circle cx="0" cy="' + (-h - 2.6) + '" r="' + (3.2 + (i % 3) * .6) + '" fill="' + DK + '"/></g>';
    }
    var lms = LANDMARKS.map(function (L, j) { return '<g data-lm="' + L.k + '" transform="rotate(' + (LM_A0 + j * 360 / LANDMARKS.length).toFixed(2) + ') translate(0 ' + (-RP0 + 0.5) + ')"><title>' + L.n + '</title>' + L.svg + '</g>'; }).join('');
    var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    return '<defs>' +
      '<radialGradient id="vgG" cx="36%" cy="28%" r="78%"><stop offset="0" stop-color="#2DCB8B"/><stop offset=".55" stop-color="#00A86B"/><stop offset="1" stop-color="#06774B"/></radialGradient>' +
      '<radialGradient id="vgH"><stop offset=".78" stop-color="#D9FBEA" stop-opacity="0"/><stop offset=".83" stop-color="#D9FBEA" stop-opacity=".34"/><stop offset="1" stop-color="#D9FBEA" stop-opacity="0"/></radialGradient>' +
      '<filter id="vgB" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="2.6"/></filter>' +
      '<filter id="vgS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="1.1" flood-color="#00140B" flood-opacity=".38"/></filter>' +
      '</defs>' +
      '<g id="vHalo" opacity="0"><g transform="translate(' + g.OX + ' ' + (g.GROUND + g.RP).toFixed(2) + ') scale(' + g.gsc.toFixed(4) + ')"><circle r="' + (RP0 + 24) + '" fill="url(#vgH)"/></g></g>' +
      '<g id="vGlobe" transform="translate(' + g.OX + ' ' + g.GROUND + ') scale(0)">' +
      '<g id="vGlobeRot">' +
      '<circle r="' + RP0 + '" fill="url(#vgG)"/>' +
      '<g fill="#FFFFFF" fill-opacity=".07"><ellipse cx="-30" cy="-38" rx="34" ry="16" transform="rotate(-24)"/><ellipse cx="34" cy="30" rx="30" ry="14" transform="rotate(32)"/><ellipse cx="-26" cy="44" rx="22" ry="11"/></g>' +
      '<circle r="' + (RP0 - 12) + '" fill="none" stroke="#FFFFFF" stroke-opacity=".26" stroke-width="1.6" stroke-dasharray="18 9 4 9" stroke-linecap="round"/>' +
      '<path d="M-60 40C-30 20 10 52 52 26" fill="none" stroke="#FFFFFF" stroke-opacity=".18" stroke-width="1.4" stroke-dasharray="3 5" stroke-linecap="round"/>' +
      trees + lms + '</g>' +
      '<ellipse cx="0" cy="' + (-RP0 + 2.5) + '" rx="30" ry="5" fill="#00170D" fill-opacity=".42" filter="url(#vgB)"/>' +
      '</g>' +
      '<g id="vLogo">' +
      '<g id="vLeaf"><g transform="translate(' + (g.OX - LOGO.CX * g.KB).toFixed(3) + ' ' + (g.OY - LOGO.CY * g.KB).toFixed(3) + ') scale(' + g.KB.toFixed(4) + ')"><g transform="' + LEAF.rot + '">' +
      '<path d="' + LEAF.stem + '" fill="none" stroke="#00A86B" stroke-width="4.2" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="#00A86B"/><path d="' + LEAF.rib + '" fill="none" stroke="#FFFFFF" stroke-opacity=".32" stroke-width="2" stroke-linecap="round"/></g></g></g>' +
      '<g id="vFlight"><g id="vFig" filter="url(#vgS)" style="color:#FFFFFF"><g id="vFigMap">' + figureMarkup('currentColor') + '</g></g></g>' +
      '</g>' +
      '<g id="vWord" opacity="0"><text x="' + g.OX + '" y="' + g.WM_Y.toFixed(1) + '" text-anchor="middle" font-family="' + (cfg.font || 'Inter, system-ui, sans-serif') + '" font-weight="' + (cfg.weight || 700) + '" font-size="' + (cfg.size || 36) + '" letter-spacing="' + (cfg.ls == null ? -0.7 : cfg.ls) + '" fill="#FFFFFF">' + esc(cfg.name || 'Valia') + '</text>' +
      (cfg.tagline ? '<text data-tag x="' + g.OX + '" y="' + g.TG_Y.toFixed(1) + '" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="500" font-size="15" fill="#FFFFFF" fill-opacity=".9">' + esc(cfg.tagline) + '</text>' : '') + '</g>';
  }

  /* fulla que vola: t de 0 a 1 entre 0,4 s i 1,8 s (desplaçaments en px a escala K = 1,7; s'escalen amb K) */
  function leafFly(u) {
    var s = V.sstep, env = s(u / 0.12);
    var dx = 292 * Math.pow(u, 1.55);
    var dy = -26 * Math.sin(Math.PI * u) * Math.pow(1 - u, 0.6) + 80 * Math.pow(u, 2.2) + 9 * Math.sin(2 * Math.PI * 2.2 * u) * u;
    var rot = env * (34 * Math.sin(2 * Math.PI * 1.45 * u + 0.35) * (0.75 + 0.35 * u) - 34 * Math.sin(0.35) * 0.75 * (1 - s(u / 0.3)) + 25 * u);
    var sx = 1 - 0.8 * Math.sin(Math.PI * s((u - 0.3) / 0.4));
    var sc = 1 - 0.2 * s(u);
    var op = 1 - s((u - 0.62) / 0.3);
    return { dx: dx, dy: dy, rot: rot, sx: sx, sc: sc, op: op };
  }

  function Scene(svg, cfg) {
    cfg = cfg || {};
    this.cfg = cfg; this.g = geom(cfg); this.R = this.g.R;
    svg.innerHTML = sceneMarkup(this.g, cfg);
    if (cfg.label) svg.setAttribute('aria-label', cfg.label);
    var q = function (s) { return svg.querySelector(s); };
    var parts = {}; Array.prototype.forEach.call(svg.querySelectorAll('#vFigMap [data-p]'), function (g) { parts[g.getAttribute('data-p')] = g; });
    this.el = { svg: svg, halo: q('#vHalo'), globe: q('#vGlobe'), rot: q('#vGlobeRot'), logo: q('#vLogo'), leaf: q('#vLeaf'), fig: q('#vFigMap'), word: q('#vWord'), parts: parts };
  }
  Scene.prototype.render = function (t, reduced) {
    var e = this.el, s = V.sstep, g = this.g, R = this.R, OX = g.OX, OY = g.OY;
    if (reduced) { // reduir animacions: logotip quiet + marca, sense moviment
      e.logo.setAttribute('opacity', 1); e.logo.removeAttribute('transform');
      e.leaf.setAttribute('opacity', 1); e.leaf.removeAttribute('transform');
      this.pose(0); e.word.setAttribute('opacity', 1); e.word.removeAttribute('transform');
      e.globe.setAttribute('transform', 'translate(' + OX + ' ' + g.GROUND + ') scale(0)'); e.halo.setAttribute('opacity', 0);
      return;
    }
    // fase 0: el logotip apareix centrat i quiet
    var a = V.easeOutCubic(t / 0.3), sc0 = 0.94 + 0.06 * a;
    e.logo.setAttribute('opacity', a.toFixed(3));
    e.logo.setAttribute('transform', 'translate(' + OX + ' ' + OY + ') scale(' + sc0.toFixed(4) + ') translate(' + (-OX) + ' ' + (-OY) + ')');
    // fase 1: la fulla vola cap a la dreta (recorregut proporcional a la mida del logotip)
    var u = V.clamp((t - 0.4) / 1.4, 0, 1), L = leafFly(u), ks = g.K / 1.7;
    e.leaf.setAttribute('opacity', L.op.toFixed(3));
    e.leaf.setAttribute('transform', 'translate(' + (OX + L.dx * Math.max(ks, 0.85)).toFixed(2) + ' ' + (OY + L.dy * ks).toFixed(2) + ') rotate(' + L.rot.toFixed(2) + ') scale(' + (L.sx * L.sc).toFixed(4) + ' ' + L.sc.toFixed(4) + ') translate(' + (-OX) + ' ' + (-OY) + ')');
    // fases 2–4: la persona camina; el globus apareix i gira
    var p = this.pose(t);
    var st = p.st, gs = st.s, gx = g.X0 + st.X * g.K;
    e.globe.setAttribute('transform', 'translate(' + gx.toFixed(2) + ' ' + (g.GROUND + g.RP * gs).toFixed(2) + ') scale(' + (gs * g.gsc).toFixed(4) + ')');
    e.rot.setAttribute('transform', 'rotate(' + (st.th * R2D).toFixed(3) + ')');
    e.halo.setAttribute('opacity', s((t - 2.5) / 0.45).toFixed(3));
    var wv = s((t - 1.2) / 0.6);
    e.word.setAttribute('opacity', wv.toFixed(3));
    e.word.setAttribute('transform', 'translate(0 ' + (8 * (1 - wv)).toFixed(2) + ')');
  };
  Scene.prototype.pose = function (t) {
    var p = this.R.pose(t), tr = poseTransforms(p), e = this.el, g = this.g;
    e.fig.setAttribute('transform', 'translate(' + g.X0.toFixed(3) + ' ' + g.GROUND.toFixed(3) + ') scale(' + g.K + ')');
    for (var k in tr) if (e.parts[k]) e.parts[k].setAttribute('transform', tr[k]);
    return p;
  };

  root.ValiaAnim = { logoSVG: logoSVG, Scene: Scene, LANDMARKS: LANDMARKS, geom: geom, figureMarkup: figureMarkup, poseTransforms: poseTransforms, LEAF: LEAF, staticFigure: staticFigure };
})(typeof window !== 'undefined' ? window : globalThis);
