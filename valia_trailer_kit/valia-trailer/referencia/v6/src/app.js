/* ===================== GreenVallès · runtime de l'app (estil iOS) =====================
   Piles de navegació per pestanya (push/pop amb gest de lliscar per tornar), fulles amb altures,
   pantalles completes, alertes, full d'accions, teclat, transicions «heroi», títols grans que es
   contrauen, aparició escalonada, microinteraccions, text dinàmic i «Reduir moviment». */
const IOS = (function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const h = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const SP = Spring.spring;
  const S = { push: SP(0.42, 0.98), pop: SP(0.38, 1), sheet: SP(0.44, 0.84), cover: SP(0.46, 0.96), hero: SP(0.48, 0.84), micro: SP(0.32, 0.6), alert: SP(0.3, 0.78), list: SP(0.42, 0.9), soft: SP(0.36, 0.9) };
  const W = 393, H = 852;
  const settings = { rm: false, dt: 1, vo: false };
  const listeners = [];
  let app, scenes = {}, layers = {}, statusEl;
  const rm = () => settings.rm;

  /* ---------- animació ---------- */
  function anim(el, kf, sp, extra) {
    if (!el) return Promise.resolve();
    const a = el.animate(kf, Object.assign({ duration: sp.duration, easing: sp.easing, fill: 'both' }, extra || {}));
    return a.finished.then(() => { try { a.commitStyles(); } catch (e) { /* element tret */ } a.cancel(); }).catch(() => {});
  }
  const fadeSp = ms => ({ duration: ms || 240, easing: 'cubic-bezier(.2,.0,.2,1)' });
  function fade(el, a, b, ms) { return anim(el, [{ opacity: a }, { opacity: b }], fadeSp(ms)); }
  function scaleOf() { const r = app.getBoundingClientRect(); return r.width / W || 1; }
  function rectIn(el) { const a = app.getBoundingClientRect(), r = el.getBoundingClientRect(), s = scaleOf(); return { x: (r.left - a.left) / s, y: (r.top - a.top) / s, w: r.width / s, h: r.height / s }; }
  function stagger(els, o) {
    o = o || {};
    els = [...els].filter(e => e && e.nodeType === 1).slice(0, o.max || 10);
    if (rm()) return Promise.all(els.map((e, i) => anim(e, [{ opacity: 0 }, { opacity: 1 }], fadeSp(200), { delay: 30 * i })));
    return Promise.all(els.map((e, i) => anim(e, [{ opacity: 0, transform: `translateY(${o.dy || 16}px)` }, { opacity: 1, transform: 'none' }], S.list, { delay: (o.delay || 0) + 38 * i })));
  }

  /* ---------- pàgines i piles ---------- */
  const SCREENS = {};
  class Page {
    constructor(id, params, stack) {
      const d = SCREENS[id]; if (!d) throw new Error('Pantalla desconeguda: ' + id);
      this.d = d; this.id = id; this.params = params || {}; this.stack = stack; this.cleanups = [];
      const idx = stack.pages.length, prev = stack.pages[idx - 1];
      const back = idx > 0 && d.back !== false ? `<button class="navbtn back press" data-act="back" aria-label="Enrere${prev ? ': ' + (prev.d.short || prev.d.title) : ''}">${d.backGlass ? `<span class="gl">${ICN('chevL', 22)}</span>` : `${ICN('chevL', 26)}<span>${prev ? (prev.d.short || prev.d.title) : 'Enrere'}</span>`}</button>` : (d.navLeft ? d.navLeft(this.params, this) : '');
      const cls = ['page', d.cls || '', d.tabbar === false || stack.modal ? 'notab' : '', d.nav === false ? 'nonav' : ''].join(' ');
      this.el = h(`<section class="${cls}" data-screen="${id}" aria-label="${esc(d.title)}"></section>`);
      const nav = d.nav === false ? '' : `<header class="nav ${d.large ? 'large' : ''} ${d.navCls || ''}"><div class="nl">${back}</div><div class="nt" aria-hidden="${d.large ? 'true' : 'false'}">${d.navCenter ? d.navCenter(this.params, this) : esc(d.navTitle || d.title)}</div><div class="nr">${d.navRight ? d.navRight(this.params, this) : ''}</div></header>`;
      this.el.innerHTML = `<div class="scroll">${d.large ? `<h1 class="lt ltitle">${esc(d.title)}</h1>` : ''}${d.render(this.params, this)}</div>${nav}${d.overlay ? d.overlay(this.params, this) : ''}<div class="dimmer"></div>`;
      this.scroll = this.el.querySelector(':scope > .scroll'); this.nav = this.el.querySelector(':scope > .nav');
    }
    mount() {
      const nav = this.nav, sc = this.scroll, large = this.d.large, th = this.d.scrollThreshold || (large ? 44 : 2);
      if (nav) { const on = () => { const y = sc.scrollTop, was = nav.classList.contains('scrolled'); nav.classList.toggle('scrolled', y > th); if (was !== y > th && window.App && App.topPage() === this) App.syncStatus(); if (large) { const lt = sc.querySelector('.ltitle'); if (lt) lt.style.opacity = String(Math.max(0, 1 - y / 40)); } this.d.onScroll && this.d.onScroll(y, this); }; sc.addEventListener('scroll', on, { passive: true }); on(); }
      this.el.addEventListener('click', e => { const b = e.target.closest('[data-act="back"]'); if (b && this.el.contains(b)) { e.preventDefault(); this.stack.pop(); } });
      this.d.mount && this.d.mount(this.el, this.params, this);
      // la barra inferior creix amb el text dinàmic: el contingut sempre es pot desplaçar per sobre seu
      const bb = this.el.querySelector(':scope > .bbar');
      if (bb && sc) { const fit = () => { sc.style.paddingBottom = (bb.offsetHeight + (parseFloat(getComputedStyle(bb).bottom) || 0) + 16) + 'px'; }; const ro = new ResizeObserver(fit); ro.observe(bb); this.cleanups.push(() => ro.disconnect()); }
      if (this.stack.pages.length > 1 || this.stack.modal) SwipeBack.attach(this);
    }
    didAppear() { this.d.appear && this.d.appear(this.el, this.params, this); App.onPage(this); }
    dim() { return this.el.querySelector(':scope > .dimmer'); }
    hide() { this.el.style.visibility = 'hidden'; this.el.inert = true; }
    show() { this.el.style.visibility = ''; this.el.inert = false; this.el.style.transform = ''; const d = this.dim(); if (d) d.style.opacity = 0; }
    destroy() { this.cleanups.forEach(f => f()); this.d.unmount && this.d.unmount(this.el, this.params, this); this.el.remove(); }
    on(target, ev, fn, opt) { target.addEventListener(ev, fn, opt); this.cleanups.push(() => target.removeEventListener(ev, fn, opt)); }
  }
  class Stack {
    constructor(host, o) { this.host = host; this.pages = []; Object.assign(this, o || {}); }
    get top() { return this.pages[this.pages.length - 1]; }
    async push(id, params, o) {
      o = o || {};
      const prev = this.top, pg = new Page(id, params, this);
      this.host.appendChild(pg.el); this.pages.push(pg); pg.mount();
      if (!prev || o.instant) { if (prev) prev.hide(); pg.didAppear(); return pg; }
      Busy.on();
      if (o.hero && !rm()) await Hero.push(prev, pg, o.hero);
      else if (rm()) { await fade(pg.el, 0, 1, 260); }
      else {
        prev.el.style.zIndex = 1; pg.el.style.zIndex = 2; pg.el.style.boxShadow = '-6px 0 24px rgba(0,0,0,.12)';
        await Promise.all([
          anim(pg.el, [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }], S.push),
          anim(prev.el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-30%)' }], S.push),
          anim(prev.dim(), [{ opacity: 0 }, { opacity: 0.1 }], S.push)
        ]);
        pg.el.style.boxShadow = '';
      }
      prev.hide(); prev.el.style.zIndex = ''; pg.el.style.zIndex = '';
      Busy.off(); pg.didAppear(); return pg;
    }
    async pop(o) {
      o = o || {};
      if (this.pages.length < 2) { if (this.modal && this.onEmptyPop) return this.onEmptyPop(); return; }
      const pg = this.pages.pop(), prev = this.top;
      prev.show(); Busy.on();
      if (pg.heroBack && !rm() && !o.fromGesture) await Hero.pop(prev, pg);
      else if (o.instant) { /* res */ }
      else if (rm()) await fade(pg.el, 1, 0, 220);
      else if (!o.fromGesture) {
        prev.el.style.zIndex = 1; pg.el.style.zIndex = 2;
        await Promise.all([
          anim(pg.el, [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }], S.pop),
          anim(prev.el, [{ transform: 'translateX(-30%)' }, { transform: 'translateX(0)' }], S.pop),
          anim(prev.dim(), [{ opacity: 0.1 }, { opacity: 0 }], S.pop)
        ]);
      }
      pg.destroy(); prev.show(); prev.el.style.zIndex = '';
      Busy.off(); prev.d.reappear && prev.d.reappear(prev.el, prev.params, prev); App.onPage(prev);
    }
    async popTo(n) { while (this.pages.length > n) await this.pop({ instant: true }); }
    clear() { this.pages.forEach(p => p.destroy()); this.pages = []; }
    reset(id, params) { this.clear(); return this.push(id, params, { instant: true }); }
  }

  /* gest de lliscar des de la vora esquerra per tornar enrere */
  const SwipeBack = {
    attach(pg) {
      const el = pg.el; let st = null;
      const down = e => {
        if (st || e.button > 0) return;
        const r = app.getBoundingClientRect(), x = (e.clientX - r.left) / scaleOf();
        if (x > 26 || pg.stack.top !== pg || Busy.n) return;
        if (pg.stack.pages.length < 2) return;
        st = { x0: e.clientX, t0: performance.now(), dx: 0, v: 0, lastX: e.clientX, lastT: performance.now(), id: e.pointerId };
        el.setPointerCapture(e.pointerId);
        const prev = pg.stack.pages[pg.stack.pages.length - 2]; prev.el.style.visibility = ''; st.prev = prev;
        el.style.boxShadow = '-6px 0 24px rgba(0,0,0,.12)';
      };
      const move = e => {
        if (!st || e.pointerId !== st.id) return;
        const s = scaleOf(), dx = Math.max(0, (e.clientX - st.x0) / s), now = performance.now();
        st.v = ((e.clientX - st.lastX) / s) / Math.max(1, now - st.lastT); st.lastX = e.clientX; st.lastT = now; st.dx = dx;
        el.style.transform = `translateX(${dx}px)`;
        if (!rm()) st.prev.el.style.transform = `translateX(${-0.3 * W + 0.3 * dx}px)`;
        const d = st.prev.dim(); if (d) d.style.opacity = String(0.1 * (1 - dx / W));
      };
      const up = e => {
        if (!st || e.pointerId !== st.id) return;
        const done = st.dx > W * 0.38 || st.v > 0.55, s0 = st.dx, prev = st.prev, v = st.v * 1000; st = null;
        const set = x => { el.style.transform = `translateX(${x}px)`; prev.el.style.transform = rm() ? '' : `translateX(${-0.3 * W + 0.3 * x}px)`; const d = prev.dim(); if (d) d.style.opacity = String(0.1 * (1 - x / W)); };
        Spring.runSpring({ from: s0, to: done ? W : 0, velocity: v, response: 0.36, damping: 1, onUpdate: set, onDone: () => {
          el.style.boxShadow = '';
          if (done) pg.stack.pop({ fromGesture: true }); else { prev.hide(); prev.el.style.transform = ''; el.style.transform = ''; }
        } });
      };
      pg.on(el, 'pointerdown', down); pg.on(el, 'pointermove', move); pg.on(el, 'pointerup', up); pg.on(el, 'pointercancel', up);
    }
  };
  const Busy = { n: 0, on() { this.n++; }, off() { this.n = Math.max(0, this.n - 1); } };

  /* ---------- transició «heroi»: la targeta es converteix en la capçalera del detall ---------- */
  const Hero = {
    async push(prev, pg, o) {
      const src = o.src, tgt = pg.el.querySelector(o.target || '[data-hero]');
      if (!src || !tgt) { await fade(pg.el, 0, 1, 240); return; }
      const a = rectIn(src), b = rectIn(tgt);
      const clone = h(`<div class="pimg" style="position:absolute;z-index:58;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;border-radius:16px;background-size:cover"></div>`);
      const bpA = getComputedStyle(src).backgroundPosition, bpB = getComputedStyle(tgt).backgroundPosition;
      clone.style.backgroundImage = getComputedStyle(src).backgroundImage; clone.style.backgroundPosition = bpA;
      app.appendChild(clone); src.style.visibility = 'hidden'; tgt.style.visibility = 'hidden';
      pg.el.style.zIndex = 2; prev.el.style.zIndex = 1;
      const kids = [...pg.scroll.children].filter(c => !c.contains(tgt)).slice(0, 6);
      kids.forEach(k => { k.style.opacity = 0; });
      pg.el.style.background = 'transparent'; pg.el.style.opacity = 1;
      const bg = h('<div style="position:absolute;inset:0;background:#fff;opacity:0;z-index:0"></div>'); pg.el.prepend(bg);
      await Promise.all([
        anim(clone, [{ left: a.x + 'px', top: a.y + 'px', width: a.w + 'px', height: a.h + 'px', borderRadius: '16px', backgroundPosition: bpA }, { left: b.x + 'px', top: b.y + 'px', width: b.w + 'px', height: b.h + 'px', borderRadius: '0px', backgroundPosition: bpB }], S.hero),
        anim(bg, [{ opacity: 0 }, { opacity: 1 }], fadeSp(260)),
        anim(prev.dim(), [{ opacity: 0 }, { opacity: 0.12 }], S.hero),
        stagger(kids, { delay: 120, dy: 22 })
      ]);
      kids.forEach(k => { k.style.opacity = ''; });
      tgt.style.visibility = ''; clone.remove(); bg.remove(); pg.el.style.background = ''; src.style.visibility = '';
      pg.heroBack = { src };
    },
    async pop(prev, pg) {
      const src = pg.heroBack.src, tgt = pg.el.querySelector('[data-hero]');
      if (!src || !src.isConnected || !tgt) { await fade(pg.el, 1, 0, 220); return; }
      const a = rectIn(tgt), b = rectIn(src);
      const clone = h(`<div class="pimg" style="position:absolute;z-index:58;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;border-radius:0;background-size:cover"></div>`);
      const bpA = getComputedStyle(tgt).backgroundPosition, bpB = getComputedStyle(src).backgroundPosition;
      clone.style.backgroundImage = getComputedStyle(tgt).backgroundImage; clone.style.backgroundPosition = bpA;
      app.appendChild(clone); src.style.visibility = 'hidden';
      await Promise.all([
        anim(clone, [{ left: a.x + 'px', top: a.y + 'px', width: a.w + 'px', height: a.h + 'px', borderRadius: '0px', backgroundPosition: bpA }, { left: b.x + 'px', top: b.y + 'px', width: b.w + 'px', height: b.h + 'px', borderRadius: '16px', backgroundPosition: bpB }], S.hero),
        fade(pg.el, 1, 0, 200), anim(prev.dim(), [{ opacity: 0.12 }, { opacity: 0 }], S.hero)
      ]);
      src.style.visibility = ''; clone.remove();
    }
  };

  /* ---------- presentacions modals: fulla (amb altures), pantalla completa i fulla fosca ---------- */
  const modals = [];
  const Modal = {
    present(id, params, o) {
      o = o || {}; if (window.MascotUI) MascotUI.closeAll();
      const kind = o.kind || 'sheet', layer = layers.modal;
      const wrap = h(`<div class="mwrap" style="position:absolute;inset:0;pointer-events:auto"><div class="backdrop"></div></div>`);
      layer.appendChild(wrap);
      const bd = wrap.firstElementChild;
      let box;
      if (kind === 'cover') box = h(`<div class="cover" role="dialog" aria-modal="true"></div>`);
      else {
        const hgt = H - (kind === 'dark' ? 0 : 59 + 10);
        box = h(`<div class="sheet ${kind === 'dark' ? 'dark' : ''}" role="dialog" aria-modal="true" style="height:${hgt}px">${kind === 'dark' ? '' : '<div class="grab" aria-hidden="true"></div>'}</div>`);
      }
      wrap.appendChild(box);
      const host = h('<div style="position:relative;flex:1;min-height:0"></div>');
      box.appendChild(host);
      const stack = new Stack(host, { modal: true, kind });
      const m = { wrap, bd, box, host, stack, kind, o, detent: o.detent || (o.detents ? o.detents[0] : 'large'), id };
      stack.onEmptyPop = () => Modal.dismiss(m);
      modals.push(m);
      stack.push(id, params, { instant: true });
      const top = stack.top; if (kind === 'sheet') top.el.classList.add('insheet');
      if (kind === 'sheet' || kind === 'dark') Detents.bind(m);
      Modal.fit(m, m.detent);
      return Modal.animateIn(m).then(() => m);
    },
    fit(m, d) { if (m.kind !== 'sheet') return; const full = m.box.offsetHeight || (H - 69), grab = 22; m.host.style.flex = 'none'; m.host.style.height = (full - grab - Modal.detentY(m, d)) + 'px'; },
    detentY(m, d) { if (m.kind !== 'sheet') return 0; const hh = m.box.offsetHeight || parseFloat(m.box.style.height) || (H - 69); return d === 'medium' ? Math.round(hh - (H * (m.o.mediumFrac || 0.52))) : 0; },
    async animateIn(m) {
      Busy.on();
      const y = Modal.detentY(m, m.detent), dimTo = m.kind === 'cover' ? 0 : (m.detent === 'medium' ? 0.18 : 0.38);
      if (rm()) { m.box.style.transform = `translateY(${y}px)`; await Promise.all([fade(m.box, 0, 1, 260), anim(m.bd, [{ opacity: 0 }, { opacity: dimTo }], fadeSp(260))]); }
      else await Promise.all([
        anim(m.box, [{ transform: 'translateY(100%)' }, { transform: `translateY(${y}px)` }], m.kind === 'cover' ? S.cover : S.sheet),
        anim(m.bd, [{ opacity: 0 }, { opacity: dimTo }], fadeSp(300)),
        Modal.stackBehind(m, true)
      ]);
      Busy.off(); App.onPage(m.stack.top);
    },
    stackBehind(m, on) {
      // amb la fulla gran, la pantalla de sota es fa petita i s'arrodoneix (com a iOS)
      if (m.kind !== 'sheet' || rm()) return Promise.resolve();
      const big = on && m.detent === 'large', sc = App.activeScene();
      const tr = big ? 'translateY(10px) scale(0.92)' : 'none';
      if (!sc) return Promise.resolve();
      sc.style.borderRadius = big ? '12px' : ''; sc.style.overflow = 'hidden';
      setStatusTone(big ? 'light' : null);
      return anim(sc, [{ transform: getComputedStyle(sc).transform === 'none' ? 'none' : getComputedStyle(sc).transform }, { transform: tr }], S.sheet);
    },
    async dismiss(m) {
      m = m || modals[modals.length - 1]; if (!m) return;
      const i = modals.indexOf(m); if (i >= 0) modals.splice(i, 1);
      Busy.on();
      if (rm()) await Promise.all([fade(m.box, 1, 0, 220), fade(m.bd, parseFloat(getComputedStyle(m.bd).opacity) || 0, 0, 220)]);
      else await Promise.all([
        anim(m.box, [{ transform: getComputedStyle(m.box).transform }, { transform: 'translateY(105%)' }], m.kind === 'cover' ? S.cover : S.sheet),
        anim(m.bd, [{ opacity: parseFloat(getComputedStyle(m.bd).opacity) || 0 }, { opacity: 0 }], fadeSp(240)),
        Modal.stackBehind(m, false)
      ]);
      m.stack.clear(); m.wrap.remove(); Busy.off();
      setStatusTone(null);
      m.o.onDismiss && m.o.onDismiss();
      App.onPage(App.topPage());
    },
    async dismissAll() { while (modals.length) await Modal.dismiss(modals[modals.length - 1]); },
    drop(m) { const i = modals.indexOf(m); if (i < 0) return; modals.splice(i, 1); m.stack.clear(); m.wrap.remove(); },
    clearAll() { modals.splice(0).forEach(m => { m.stack.clear(); m.wrap.remove(); }); const sc = App.activeScene(); if (sc) { sc.style.transform = ''; sc.style.borderRadius = ''; } setStatusTone(null); },
    get top() { return modals[modals.length - 1]; },
    list: modals,
    setDetent(m, d) { const grow = Modal.detentY(m, d) < Modal.detentY(m, m.detent); m.detent = d; const y = Modal.detentY(m, d); if (grow) Modal.fit(m, d); else setTimeout(() => Modal.fit(m, d), 320); const cur = getComputedStyle(m.box).transform; anim(m.box, [{ transform: cur }, { transform: `translateY(${y}px)` }], rm() ? fadeSp(200) : S.sheet); anim(m.bd, [{ opacity: parseFloat(getComputedStyle(m.bd).opacity) || 0 }, { opacity: d === 'medium' ? 0.18 : 0.38 }], fadeSp(240)); Modal.stackBehind(m, true); }
  };
  /* arrossegar la fulla per canviar d'altura o tancar-la */
  const Detents = {
    bind(m) {
      const handles = [m.box.querySelector('.grab'), ...m.box.querySelectorAll('.shead')].filter(Boolean);
      m.bd.addEventListener('click', () => { if (m.o.dismissable !== false) Modal.dismiss(m); });
      handles.forEach(hd => {
        let st = null;
        hd.addEventListener('pointerdown', e => { st = { y0: e.clientY, base: Modal.detentY(m, m.detent), v: 0, ly: e.clientY, lt: performance.now(), id: e.pointerId }; hd.setPointerCapture(e.pointerId); });
        hd.addEventListener('pointermove', e => { if (!st) return; const s = scaleOf(), dy = (e.clientY - st.y0) / s, now = performance.now(); st.v = ((e.clientY - st.ly) / s) / Math.max(1, now - st.lt); st.ly = e.clientY; st.lt = now; let y = st.base + dy; if (y < 0) y = y / 3; m.box.style.transform = `translateY(${y}px)`; st.y = y; });
        const end = () => {
          if (!st) return; const y = st.y == null ? st.base : st.y, v = st.v; st = null;
          const dets = m.o.detents || ['large'], ys = dets.map(d => [d, Modal.detentY(m, d)]);
          const proj = y + v * 180;
          if (m.o.dismissable !== false && (proj > Modal.detentY(m, dets[0]) + 120 || v > 1.1)) { Modal.dismiss(m); return; }
          let best = ys[0]; ys.forEach(p => { if (Math.abs(p[1] - proj) < Math.abs(best[1] - proj)) best = p; });
          Modal.setDetent(m, best[0]);
        };
        hd.addEventListener('pointerup', end); hd.addEventListener('pointercancel', end);
        hd.addEventListener('dblclick', () => { const dets = m.o.detents || ['large']; if (dets.length > 1) Modal.setDetent(m, m.detent === 'large' ? 'medium' : 'large'); });
      });
    }
  };

  /* ---------- alertes i full d'accions ---------- */
  const Alert = {
    show(o) {
      return new Promise(res => {
        const wrap = h(`<div style="position:absolute;inset:0;pointer-events:auto;z-index:2"><div class="backdrop" style="opacity:0"></div>
          <div class="alert ${o.vertical ? 'v' : ''}" role="alertdialog" aria-modal="true" aria-labelledby="al-t" ${o.msg ? 'aria-describedby="al-m"' : ''} tabindex="-1"><div class="am"><b id="al-t">${o.title}</b>${o.msg ? `<p id="al-m">${o.msg}</p>` : ''}</div><div class="ab">${o.buttons.map((b, i) => `<button type="button" class="${b.style || ''}" data-i="${i}">${b.t}</button>`).join('')}</div></div></div>`);
        layers.alert.appendChild(wrap);
        const al = wrap.querySelector('.alert'), bd = wrap.firstElementChild;
        if (rm()) { fade(al, 0, 1, 200); fade(bd, 0, 0.3, 200); }
        else { anim(al, [{ opacity: 0, transform: 'translateY(-50%) scale(1.15)' }, { opacity: 1, transform: 'translateY(-50%) scale(1)' }], S.alert); anim(bd, [{ opacity: 0 }, { opacity: 0.3 }], fadeSp(200)); }
        setTimeout(() => al.focus({ preventScroll: true }), 50);   // VoiceOver llegeix el títol i el missatge de l'alerta
        al.addEventListener('click', async e => {
          const b = e.target.closest('button'); if (!b) return;
          const i = +b.dataset.i; await Promise.all([fade(al, 1, 0, 160), fade(bd, 0.3, 0, 160)]); wrap.remove();
          o.buttons[i].on && o.buttons[i].on(); res(i);
        });
        App.vo();
      });
    },
    actions(o) {
      return new Promise(res => {
        const wrap = h(`<div style="position:absolute;inset:0;pointer-events:auto;z-index:2"><div class="backdrop" style="opacity:0"></div>
          <div class="asheet" role="dialog" aria-modal="true"><div class="grp">${o.title || o.msg ? `<div class="amsg">${o.title ? `<b>${o.title}</b>` : ''}${o.msg || ''}</div>` : ''}${o.actions.map((a, i) => `<button type="button" data-i="${i}" style="${a.red ? 'color:var(--red)' : ''}">${a.t}</button>`).join('')}</div><button type="button" class="cancel" data-i="-1">${o.cancel || 'Cancel·la'}</button></div></div>`);
        layers.alert.appendChild(wrap);
        const sh = wrap.querySelector('.asheet'), bd = wrap.firstElementChild;
        if (rm()) { fade(sh, 0, 1, 200); fade(bd, 0, 0.3, 200); } else { anim(sh, [{ transform: 'translateY(110%)' }, { transform: 'none' }], S.sheet); anim(bd, [{ opacity: 0 }, { opacity: 0.3 }], fadeSp(220)); }
        const close = async i => { if (rm()) await Promise.all([fade(sh, 1, 0, 160), fade(bd, 0.3, 0, 160)]); else await Promise.all([anim(sh, [{ transform: 'none' }, { transform: 'translateY(110%)' }], S.soft), fade(bd, 0.3, 0, 200)]); wrap.remove(); if (i >= 0 && o.actions[i].on) o.actions[i].on(); res(i); };
        sh.addEventListener('click', e => { const b = e.target.closest('button'); if (b) close(+b.dataset.i); });
        bd.addEventListener('click', () => close(-1));
        App.vo();
      });
    }
  };
  Alert.clear = () => { if (layers.alert) layers.alert.innerHTML = ''; };
  const Toast = {
    show(text, icon) {
      const t = h(`<div class="toast" role="status">${icon ? ICN(icon, 18, 'var(--tint-tx)') : ''}<span>${text}</span></div>`);
      layers.alert.appendChild(t);
      if (rm()) fade(t, 0, 1, 200); else anim(t, [{ opacity: 0, transform: 'translate(-50%,-20px) scale(.9)' }, { opacity: 1, transform: 'translate(-50%,0) scale(1)' }], S.micro);
      setTimeout(() => { fade(t, 1, 0, 240).then(() => t.remove()); }, 2200);
    }
  };

  /* ---------- teclat ---------- */
  const Keyboard = {
    el: null, input: null, open: false,
    show(input, o) {
      o = o || {}; this.input = input; this.o = o;
      if (!this.el) {
        const L = ['qwertyuiop', 'asdfghjklç', 'zxcvbnm'];
        const k = c => `<button type="button" data-k="${c}" aria-label="${c}">${c}</button>`;
        this.el = h(`<div class="kbd" role="group" aria-label="Teclat"><div class="kr">${[...L[0]].map(k).join('')}</div><div class="kr">${[...L[1]].map(k).join('')}</div><div class="kr"><button type="button" class="fn" data-k="shift" aria-label="Majúscules">⇧</button>${[...L[2]].map(k).join('')}<button type="button" class="fn" data-k="del" aria-label="Esborrar">⌫</button></div><div class="kr"><button type="button" class="fn" data-k="123" aria-label="Números">123</button><button type="button" class="fn" data-k="hide" aria-label="Amagar el teclat">⌄</button><button type="button" class="sp" data-k=" " aria-label="Espai">espai</button><button type="button" class="go" data-k="go">${o.go || 'retorn'}</button></div></div>`);
        this.el.addEventListener('pointerdown', e => e.preventDefault());
        this.el.addEventListener('click', e => {
          const b = e.target.closest('button'); if (!b || !this.input) return; const k = b.dataset.k, inp = this.input;
          if (k === 'del') inp.value = inp.value.slice(0, -1);
          else if (k === 'go') { this.o.onGo && this.o.onGo(); return; }
          else if (k === 'hide') { this.hide(); inp.blur(); return; }
          else if (k === 'shift' || k === '123') return;
          else inp.value += (inp.value === '' && k !== ' ' ? k.toUpperCase() : k);
          inp.dispatchEvent(new Event('input', { bubbles: true }));
        });
        layers.kbd.appendChild(this.el);
      }
      this.el.querySelector('.go').textContent = o.go || 'retorn';
      if (this.open) return Promise.resolve();
      this.open = true; this.el.style.display = '';
      o.onShow && o.onShow(this.height());
      return rm() ? fade(this.el, 0, 1, 200) : anim(this.el, [{ transform: 'translateY(100%)' }, { transform: 'none' }], S.sheet);
    },
    height() { return 291 + 34; },
    hide() {
      if (!this.open) return Promise.resolve(); this.open = false;
      this.o && this.o.onHide && this.o.onHide();
      const p = rm() ? fade(this.el, 1, 0, 180) : anim(this.el, [{ transform: 'none' }, { transform: 'translateY(100%)' }], S.soft);
      return p.then(() => { if (!this.open && this.el) this.el.style.display = 'none'; });
    }
  };

  /* ---------- microinteraccions ---------- */
  function bindPress(rootEl) {
    rootEl.addEventListener('pointerdown', e => { const b = e.target.closest('.press,.btn,.chip,.acard,.tile,.grow,.navbtn,.iconbtn'); if (!b || rm()) return; b.classList.add('down'); b.style.transition = 'transform .1s cubic-bezier(.2,.8,.2,1)'; b.style.transform = 'scale(.96)'; b._pressed = true; });
    const up = e => { $$('[style*="scale(0.96)"],[style*="scale(.96)"]', rootEl).forEach(b => { if (!b._pressed) return; b._pressed = false; b.style.transition = ''; anim(b, [{ transform: 'scale(.96)' }, { transform: 'scale(1)' }], S.micro).then(() => { b.style.transform = ''; }); }); };
    rootEl.addEventListener('pointerup', up); rootEl.addEventListener('pointercancel', up); rootEl.addEventListener('pointerleave', up);
  }
  function segmented(el, onChange) {
    const btns = $$('button', el), knob = h('<span class="knob" aria-hidden="true"></span>'); el.prepend(knob);
    const place = (i, animate) => { const b = btns[i], to = { left: (b.offsetLeft + 2) + 'px', width: (b.offsetWidth - 4) + 'px' }; if (animate && !rm()) { const from = { left: knob.style.left || to.left, width: knob.style.width || to.width }; anim(knob, [from, to], S.micro); } knob.style.left = to.left; knob.style.width = to.width; };
    const sel = Math.max(0, btns.findIndex(b => b.getAttribute('aria-selected') === 'true'));
    requestAnimationFrame(() => place(sel, false));
    btns.forEach((b, i) => b.addEventListener('click', () => { btns.forEach(x => x.setAttribute('aria-selected', x === b)); place(i, true); onChange && onChange(i, b); }));
    new ResizeObserver(() => { const i = btns.findIndex(b => b.getAttribute('aria-selected') === 'true'); place(Math.max(0, i), false); }).observe(el);
  }
  function switches(rootEl) {
    rootEl.addEventListener('click', e => { const row = e.target.closest('.swrow'); const s = e.target.closest('.sw') || (row && row.querySelector('.sw')); if (!s) return; const v = s.getAttribute('aria-checked') !== 'true'; s.setAttribute('aria-checked', v); s.dispatchEvent(new CustomEvent('toggle', { bubbles: true, detail: v })); });
  }

  /* ---------- barra d'estat ---------- */
  let toneOverride = null;
  function setStatusTone(t) { toneOverride = t; App.syncStatus(); }

  /* ---------- ajustos d'accessibilitat ---------- */
  function set(k, v) {
    settings[k] = v;
    if (k === 'rm') { app.classList.toggle('rm', !!v); Mascot.setReduced(!!v); }
    if (k === 'dt') { app.style.setProperty('--dt', v); app.classList.toggle('dt-ax', v >= 1.6); }
    if (k === 'vo') App.vo();
    listeners.forEach(f => f(k, v));
  }

  function init(el) {
    app = el;
    scenes = { main: $('#sc-main', el), onb: $('#sc-onb', el), load: $('#sc-load', el) };
    layers = { modal: $('#ly-modal', el), alert: $('#ly-alert', el), kbd: $('#ly-kbd', el), peek: $('#ly-peek', el), vo: $('#ly-vo', el) };
    statusEl = $('.statusbar', el); if (statusEl && !statusEl.firstChild && typeof SBAR !== 'undefined') statusEl.innerHTML = SBAR;
    bindPress(el); switches(el);
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) set('rm', true);
  }

  return { init, $, $$, h, anim, fade, fadeSp, stagger, rectIn, S, W, H, SCREENS, Page, Stack, Modal, Alert, Toast, Keyboard, Hero, segmented, settings, set, onSettings: f => listeners.push(f), rm, get app() { return app; }, get scenes() { return scenes; }, get layers() { return layers; }, get statusEl() { return statusEl; }, get toneOverride() { return toneOverride; }, setStatusTone, Busy };
})();
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
