/* ===================== GreenVallès · ajudes de dibuix, estat de l'app i mascota a la interfície ===================== */
(function () {
  const css = Object.keys(PH).map(k => `.ios .bg-${k},.bg-${k}{background-image:url("${PH[k]}")}`).join('');
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
})();
/* icones (Lucide, ISC): traç 2 fins a 20 px i 1,75 a partir de 22 px */
function ICN(n, s, c) { s = s || 22; if (!LUCIDE[n]) console.warn('Icona inexistent: ' + n); return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c || 'currentColor'}" stroke-width="${s <= 20 ? 2 : 1.75}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LUCIDE[n] || ''}</svg>`; }
const photo = (k, st, pos, extra) => `<div class="pimg cc bg-${k}" style="${st || ''};background-position:${pos || '50% 50%'}" ${extra || 'aria-hidden="true"'}></div>`;
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const SBAR = '<span class="sb-t">9:41</span><span class="sb-i"><svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg><svg width="17" height="12" viewBox="0 0 17 12" aria-hidden="true"><path d="M8.5 2.3c2.3 0 4.4.9 6 2.4l1-1.1A10.4 10.4 0 0 0 8.5.8 10.4 10.4 0 0 0 1.5 3.6l1 1.1a8.8 8.8 0 0 1 6-2.4zm0 3.6c1.3 0 2.5.5 3.4 1.3l1-1.1a7.2 7.2 0 0 0-8.8 0l1 1.1c.9-.8 2.1-1.3 3.4-1.3zm0 3.5c.6 0 1.1.2 1.5.6L8.5 11.5 7 10c.4-.4.9-.6 1.5-.6z" fill="currentColor"/></svg><svg width="27" height="13" viewBox="0 0 27 13" aria-hidden="true"><rect x=".5" y=".5" width="22" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="19" height="9" rx="2.2" fill="currentColor"/><path d="M24 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2z" fill="currentColor" opacity=".5"/></svg></span>';

/* ---------- mapa estilitzat (il·lustratiu, el de la v4) ---------- */
const smp = pts => { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 1; i < pts.length - 1; i++) { const [x, y] = pts[i], [x2, y2] = pts[i + 1]; d += ` Q${x} ${y} ${(x + x2) / 2} ${(y + y2) / 2}`; } const l = pts[pts.length - 1]; return d + ` L${l[0]} ${l[1]}`; };
const ROUTES = { caldes: [[.14, .86], [.22, .72], [.17, .56], [.3, .47], [.42, .52], [.5, .38], [.62, .3], [.74, .36], [.82, .2]], vall: [[.2, .85], [.3, .7], [.25, .55], [.4, .45], [.55, .5], [.62, .35], [.78, .3]] };
function mapSVG(w, h, o) {
  o = o || {};
  const s = o.seed || 1, tx = -((s * 41) % 70), ty = -((s * 67) % 70), rt = o.route ? ROUTES[o.route] : null;
  const P = (rt || []).map(([x, y]) => [+(x * w).toFixed(1), +(y * h).toFixed(1)]);
  const pins = (o.pins || []).map(p => {
    const x = p[0] * w, y = p[1] * h, t = p[2], lab = p[3] ? ` data-pin="${p[3]}"` : '';
    if (t === 'poi') return `<g${lab}><circle cx="${x}" cy="${y}" r="13" fill="#0B0D0C" stroke="#fff" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/></g>`;
    if (t === 'nat') return `<g${lab}><circle cx="${x}" cy="${y}" r="13" fill="#00A86B" stroke="#fff" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/></g>`;
    if (t === 'start') return `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#0B0D0C" stroke-width="3"/>`;
    if (t === 'end') return `<circle cx="${x}" cy="${y}" r="10" fill="#0B0D0C" stroke="#fff" stroke-width="3"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/>`;
    if (t === 'sel') return `<g${lab}><circle cx="${x}" cy="${y}" r="16" fill="#00A86B" stroke="#fff" stroke-width="3.5"/><circle cx="${x}" cy="${y}" r="4.5" fill="#fff"/></g>`;
    if (t === 'chk') return `<circle cx="${x}" cy="${y}" r="11" fill="#fff" stroke="#00A86B" stroke-width="3"/><path d="M${x - 4.5} ${y}l3 3 6-6" fill="none" stroke="#00754A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (t === 'off') return `<circle cx="${x}" cy="${y}" r="22" fill="rgba(215,0,21,.16)"/><circle cx="${x}" cy="${y}" r="8" fill="#0B0D0C" stroke="#fff" stroke-width="3.5"/>`;
    return `<circle cx="${x}" cy="${y}" r="20" fill="rgba(0,168,107,.25)"/><circle cx="${x}" cy="${y}" r="8" fill="#00A86B" stroke="#fff" stroke-width="3.5"/>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="${w}" height="${h}" fill="#EEF0F1"/>
  <g transform="translate(${tx} ${ty}) scale(1.3)"><g fill="#DDEBE2"><path d="M-20 ${h * .1}Q${w * .25} -10 ${w * .4} ${h * .14}T${w * .3} ${h * .4}Q${w * .1} ${h * .44} -20 ${h * .36}Z"/><path d="M${w * .6} ${h * .66}Q${w * .8} ${h * .5} ${w + 20} ${h * .6}V${h + 20}H${w * .5}Q${w * .5} ${h * .78} ${w * .6} ${h * .66}Z"/></g>
  <g fill="none" stroke="#D9DEDD" stroke-width="1.2"><ellipse cx="${w * .28}" cy="${h * .26}" rx="${w * .2}" ry="${h * .14}"/><ellipse cx="${w * .28}" cy="${h * .26}" rx="${w * .13}" ry="${h * .09}"/><ellipse cx="${w * .75}" cy="${h * .7}" rx="${w * .18}" ry="${h * .12}"/></g>
  <ellipse cx="${w * .74}" cy="${h * .24}" rx="${w * .12}" ry="${h * .06}" fill="#CFE3EC"/><path d="M${w * .9} -20C${w * .72} ${h * .3} ${w * .92} ${h * .5} ${w * .62} ${h + 20}" fill="none" stroke="#CFE3EC" stroke-width="6" stroke-linecap="round"/>
  <path d="M-20 ${h * .72}C${w * .3} ${h * .55} ${w * .5} ${h * .82} ${w + 20} ${h * .6}" fill="none" stroke="#E1E4E2" stroke-width="7.5"/><path d="M-20 ${h * .72}C${w * .3} ${h * .55} ${w * .5} ${h * .82} ${w + 20} ${h * .6}" fill="none" stroke="#fff" stroke-width="5"/>
  <path d="M${w * .2} -20C${w * .32} ${h * .3} ${w * .14} ${h * .6} ${w * .36} ${h + 20}" fill="none" stroke="#E1E4E2" stroke-width="6.5"/><path d="M${w * .2} -20C${w * .32} ${h * .3} ${w * .14} ${h * .6} ${w * .36} ${h + 20}" fill="none" stroke="#fff" stroke-width="4"/></g>
  ${o.label ? `<text x="${w * .08}" y="${h * .13}" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#5A615D">${o.label}</text>` : ''}
  ${P.length ? `<path d="${smp(P)}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${smp(P)}" fill="none" stroke="#00A86B" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}${o.extra || ''}${pins}</svg>`;
}
let _g = 0;
const elev = (hgt) => {
  hgt = hgt || 72; const y = [.72, .66, .5, .58, .38, .46, .26, .34, .24, .42, .36, .54, .6, .7], Wd = 360, Hh = hgt, g = 'eg' + (++_g);
  const pts = y.map((v, i) => [+(i * Wd / (y.length - 1)).toFixed(1), +(v * Hh).toFixed(1)]); const d = 'M' + pts.map(p => p.join(' ')).join(' L');
  return `<svg viewBox="0 0 ${Wd} ${Hh + 18}" width="100%" height="${Hh + 18}" role="img" aria-label="Perfil d'alçada: de 0 a 5,4 km, desnivell positiu de 82 m"><defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00A86B" stop-opacity=".28"/><stop offset="1" stop-color="#00A86B" stop-opacity=".04"/></linearGradient></defs><path d="${d} L${Wd} ${Hh} L0 ${Hh}Z" fill="url(#${g})"/><path d="${d}" fill="none" stroke="#00A86B" stroke-width="2.4" stroke-linejoin="round"/><g font-family="Inter,system-ui,sans-serif" font-size="13" fill="#636366"><text x="0" y="${Hh + 15}">0 km</text><text x="${Wd}" y="${Hh + 15}" text-anchor="end">5,4 km</text></g></svg>`;
};
const qrSVG = () => { let x = 12345; const r = () => { x = (x * 1103515245 + 12345) & 0x7fffffff; return x / 0x7fffffff; }; let o = ''; const n = 21, c = 6;
  const fin = (a, b) => `<rect x="${a * c}" y="${b * c}" width="${7 * c}" height="${7 * c}" fill="#0B0D0C"/><rect x="${(a + 1) * c}" y="${(b + 1) * c}" width="${5 * c}" height="${5 * c}" fill="#fff"/><rect x="${(a + 2) * c}" y="${(b + 2) * c}" width="${3 * c}" height="${3 * c}" fill="#0B0D0C"/>`;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const inF = (i < 8 && j < 8) || (i > 12 && j < 8) || (i < 8 && j > 12); if (!inF && r() > .5) o += `<rect x="${i * c}" y="${j * c}" width="${c}" height="${c}" fill="#0B0D0C"/>`; }
  return `<svg viewBox="0 0 ${n * c} ${n * c}" width="132" height="132" role="img" aria-label="Codi QR del cupó (exemple)">${o}${fin(0, 0)}${fin(14, 0)}${fin(0, 14)}</svg>`; };

/* ---------- peces d'interfície ---------- */
const chip = (t, on, attrs) => `<button type="button" class="chip" aria-pressed="${on ? 'true' : 'false'}" ${attrs || ''}><span>${on ? ICN('check', 16) : ''}${t}</span></button>`;
const sw = (on, label) => `<button type="button" class="sw" role="switch" aria-checked="${on ? 'true' : 'false'}" aria-label="${esc(label)}"></button>`;
const seg = (items, sel, id) => `<div class="segc" role="tablist" ${id ? `data-seg="${id}"` : ''}>${items.map((t, i) => `<button type="button" role="tab" aria-selected="${i === sel ? 'true' : 'false'}">${t}</button>`).join('')}</div>`;
const navIcon = (n, label, act, o) => `<button type="button" class="navbtn press" ${act ? `data-act="${act}"` : ''} aria-label="${esc(label)}">${o && o.glass ? `<span class="gl">${ICN(n, 20)}</span>` : ICN(n, 24)}</button>`;
/* fila de llista agrupada: botó amb fletxa o, si porta interruptor, fila no interactiva (no es poden niar botons) */
const grow = (ic, cls, t, v, o) => { const isSw = !!(o && o.sw != null), tg = isSw ? 'div' : 'button'; return `<${tg} ${isSw ? '' : 'type="button"'} class="grow ic ${isSw ? 'swrow' : ''}" ${o && o.act ? `data-act="${o.act}"` : ''}><span class="gic ${cls || ''}">${ICN(ic, 18, '#fff')}</span><span class="f1 bd">${t}${o && o.nou ? ' <span class="tag eco" style="margin-left:4px">Nou</span>' : ''}</span>${v ? `<span class="gv">${v}</span>` : ''}${isSw ? sw(o.sw, t) : `<span class="chev">${ICN('chevR', 18)}</span>`}</${tg}>`; };
const metaLine = a => `<div class="meta">${a.join(' · ')}</div>`;

/* ---------- la mascota a la interfície: aparicions, regles i indicadors de càrrega ---------- */
const MascotUI = {
  seen: new Set(),            // pantalles on ja ha aparegut en aquesta sessió (fora del xat)
  log: [],
  canShow(key) { return !this.seen.has(key); },
  mark(key) { this.seen.add(key); this.log.push(key); },
  reset() { this.seen.clear(); this.log = []; },
  active: [],
  closeAll() { this.active.splice(0).forEach(a => a.close(true)); },
  announce(text) { const l = IOS.$('#ios-live', IOS.app); if (l) { l.textContent = ''; setTimeout(() => { l.textContent = text; }, 30); } },
  /* treu el cap per un lateral; només en una franja lliure (sense botons ni text) */
  peek(o) {
    if (!this.canShow(o.key)) return null;
    const lay = IOS.layers.peek, rm = IOS.rm();
    const wrap = IOS.h(`<div class="peek" style="right:0;top:${o.top}px;visibility:hidden" role="group" aria-label="Missatge de l'assistent">
      <button type="button" class="bubble cc pk-b ${o.dark ? 'dk' : ''}" style="margin-bottom:${o.bubbleLift || 38}px;text-align:left" aria-label="${esc('Assistent: ' + o.text + ' Tancar el missatge.')}"><span>${o.text}</span><i class="pk-xi" aria-hidden="true">${ICN('x', 12)}</i></button>
      <div class="pk-m" style="margin-right:-18px"></div></div>`);
    lay.appendChild(wrap);
    const m = Mascot.create(wrap.querySelector('.pk-m'), { size: o.size || 96, state: o.state || 'saludant', cls: o.white ? 'white' : '', label: 'Assistent' });
    if (o.white) m.el.style.color = '#fff';
    const mel = wrap.querySelector('.pk-m'), bub = wrap.querySelector('.pk-b');
    mel.style.transform = 'rotate(-8deg)';
    // ha de cabre sencera dins la franja lliure (o.fit); si no hi cap, no surt
    if (o.fit) {
      const f = o.fit; let r = IOS.rectIn(wrap), br = IOS.rectIn(bub);
      if (f.left != null && br.x < f.left) { bub.style.maxWidth = Math.max(150, br.w - (f.left - br.x)) + 'px'; r = IOS.rectIn(wrap); br = IOS.rectIn(bub); }
      const bandH = f.bottom - f.top;
      if (r.h > bandH || (f.left != null && br.x < f.left - 1)) { m.destroy(); wrap.remove(); return null; }
      wrap.style.top = Math.round(f.top + (bandH - r.h) / 2) + 'px';
    }
    wrap.style.visibility = '';
    this.mark(o.key); this.announce('Assistent: ' + o.text);
    if (rm) { IOS.fade(wrap, 0, 1, 260); }
    else {
      IOS.anim(mel, [{ transform: 'translateX(120%) rotate(-18deg)' }, { transform: 'translateX(0) rotate(-8deg)' }], Spring.spring(0.5, 0.62));
      IOS.anim(bub, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '100% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '100% 100%' }], Spring.spring(0.42, 0.66), { delay: 220 });
    }
    let gone = false, timer = setTimeout(() => close(), o.duration || 6500);
    const close = (fast) => {
      if (gone) return; gone = true; clearTimeout(timer); const ix = MascotUI.active.indexOf(api); if (ix >= 0) MascotUI.active.splice(ix, 1);
      if (fast) { m.destroy(); wrap.remove(); return; }
      const p = IOS.rm() ? IOS.fade(wrap, 1, 0, 200) : Promise.all([IOS.anim(mel, [{ transform: 'translateX(0) rotate(-8deg)' }, { transform: 'translateX(130%) rotate(-18deg)' }], Spring.spring(0.36, 0.95)), IOS.fade(bub, 1, 0, 160)]);
      p.then(() => { m.destroy(); wrap.remove(); o.onClose && o.onClose(); });
    };
    wrap.addEventListener('click', e => { if (e.target.closest('.pk-b,.pk-m')) close(); });
    // lliscar cap a fora per tancar
    let sx = null;
    wrap.addEventListener('pointerdown', e => { sx = e.clientX; wrap.setPointerCapture(e.pointerId); });
    wrap.addEventListener('pointermove', e => { if (sx == null) return; const dx = Math.max(0, e.clientX - sx); wrap.style.transform = `translateX(${dx}px)`; });
    wrap.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (dx > 40) close(); else wrap.style.transform = ''; });
    const api = { close, el: wrap, mascot: m }; MascotUI.active.push(api);
    return api;
  },
  /* aparicions dins del contingut (estat buit, celebració): també es poden tancar tocant o lliscant */
  dismissible(el, m, o) {
    o = o || {}; let sx = null, gone = false;
    el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0'); el.setAttribute('aria-label', o.label || "Tancar el missatge de l'assistent");
    el.style.cursor = 'pointer'; el.style.touchAction = 'pan-y';
    const go = () => {
      if (gone) return; gone = true;
      const p = IOS.rm() ? IOS.fade(el, 1, 0, 200) : IOS.anim(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(36px) scale(.92)' }], Spring.spring(0.34, 1));
      p.then(() => { if (m) m.destroy(); if (o.onGone) o.onGone(); else el.remove(); });
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    el.addEventListener('pointerdown', e => { sx = e.clientX; });
    el.addEventListener('pointerup', e => { if (sx != null && Math.abs(e.clientX - sx) > 40) go(); sx = null; });
    return { close: go };
  },
  /* indicador de càrrega: la mascota camina en lloc d'un spinner (sense límit: és un indicador, no un missatge) */
  loader(host, text, o) {
    o = o || {};
    const el = IOS.h(`<div class="loadrow" role="status" aria-live="polite"><span class="ml"></span><span>${text}</span></div>`);
    host.appendChild(el);
    const m = Mascot.create(el.querySelector('.ml'), { size: o.size || 56, state: 'buscant', label: 'Assistent' });
    return { el, done() { m.destroy(); el.remove(); } };
  }
};

/* ---------- l'app: escenes, pestanyes, estat i navegació directa ---------- */
const App = (function () {
  const st = { guest: false, offline: false, server: false, points: 1240, redeemed: 0, saved: {}, downloaded: false, filters: 4, chat: [], newUser: false };
  const TABS = [
    { k: 'xat', label: 'Xat', icon: 'sparkle', root: 'chat' },
    { k: 'explorar', label: 'Explorar', icon: 'compass', root: 14 },
    { k: 'recompenses', label: 'Recompenses', icon: 'gift', root: 31 },
    { k: 'perfil', label: 'Perfil', icon: 'user', root: 22 }
  ];
  const stacks = {}; let onb = null, cur = 'xat', scene = 'load', hooks = [];
  const $ = IOS.$;
  function buildMain(o) {
    o = o || {};
    const sc = IOS.scenes.main; sc.innerHTML = '';
    TABS.forEach(t => { const host = IOS.h(`<div class="stack" data-tab="${t.k}" ${t.k === cur ? '' : 'hidden'}></div>`); sc.appendChild(host); stacks[t.k] = new IOS.Stack(host, { tab: t.k }); });
    const tb = IOS.h(`<nav class="tabbar" role="tablist" aria-label="Navegació principal">${TABS.map(t => `<button type="button" role="tab" data-tab="${t.k}" aria-selected="${t.k === cur}" aria-label="${t.label}">${t.k === 'xat' ? `<span class="ti"><span class="tav" data-tabmasc></span></span>` : `<span class="ti">${ICN(t.icon, 26)}</span>`}<span>${t.label}</span></button>`).join('')}</nav>`);
    sc.appendChild(tb); tb._hidden = false;
    const tm = Mascot.create(tb.querySelector('[data-tabmasc]'), { size: 26, view: 'avatar', state: 'repos', still: true, label: 'Xat amb l\'assistent' });
    tm.el.style.color = '#fff'; tm.svg.setAttribute('aria-hidden', 'true');
    tb.addEventListener('click', e => { const b = e.target.closest('button[data-tab]'); if (b) switchTab(b.dataset.tab, { tap: true }); });
    TABS.forEach(t => stacks[t.k].push(t.root, Object.assign(t.k === 'xat' ? { noGreet: !!o.noGreet } : {}, (o.params && o.params[t.k]) || {}), { instant: true }));
  }
  function switchTab(k, o) {
    o = o || {};
    if (k === cur) { if (o.tap && stacks[k].pages.length > 1) stacks[k].popTo(1); else if (o.tap) { const sc = stacks[k].top.scroll; sc && sc.scrollTo({ top: 0, behavior: IOS.rm() ? 'auto' : 'smooth' }); } return; }
    const prev = cur; cur = k; MascotUI.closeAll();
    IOS.$$('.stack[data-tab]', IOS.scenes.main).forEach(s => { s.hidden = s.dataset.tab !== k; });
    IOS.$$('.tabbar button', IOS.scenes.main).forEach(b => b.setAttribute('aria-selected', b.dataset.tab === k));
    const b = IOS.$(`.tabbar button[data-tab="${k}"] .ti`, IOS.scenes.main);
    if (b && !IOS.rm()) IOS.anim(b, [{ transform: 'scale(.78)' }, { transform: 'scale(1)' }], IOS.S.micro);
    const top = stacks[k].top; if (top) { if (!IOS.rm()) IOS.fade(top.el, 0.6, 1, 160); top.d.reappear && top.d.reappear(top.el, top.params, top); onPage(top); }
  }
  function showScene(name) {
    scene = name;
    Object.entries(IOS.scenes).forEach(([k, el]) => { el.hidden = k !== name; });
    syncStatus();
  }
  function activeScene() { return IOS.scenes[scene]; }
  function topPage() { const m = IOS.Modal.top; if (m) return m.stack.top; if (scene === 'main') return stacks[cur] && stacks[cur].top; if (scene === 'onb') return onb && onb.top; return null; }
  function onPage(pg) { syncStatus(); syncTabbar(pg); syncOffline(); vo(); hooks.forEach(f => f(pg)); }
  function syncStatus() {
    const sb = IOS.statusEl; if (!sb) return;
    let tone = IOS.toneOverride;
    if (!tone) { const pg = topPage(); if (scene === 'load') tone = 'light'; else if (pg) { const scrolled = pg.nav && pg.nav.classList.contains('scrolled'); tone = pg.d.sb === 'light' && !scrolled ? 'light' : (pg.d.sb === 'light-always' ? 'light' : 'dark'); } else tone = 'dark'; }
    sb.style.color = tone === 'light' ? '#fff' : '#0B0D0C';
    const hi = IOS.app.querySelector('.homeind'); if (hi) hi.style.color = tone === 'light' ? '#fff' : '#0B0D0C';
  }
  function vo() { hooks.forEach(f => f(null, 'vo')); }
  /* arrencades */
  function startMain(o) {
    o = o || {}; IOS.Modal.clearAll(); IOS.Keyboard.hide(); MascotUI.closeAll();
    st.guest = !!o.guest; cur = o.tab || 'xat';
    buildMain(o); showScene('main'); syncOffline(); onPage(topPage());
  }
  function startOnboarding(first, params) {
    IOS.Modal.clearAll(); IOS.Keyboard.hide(); MascotUI.closeAll();
    const sc = IOS.scenes.onb; sc.innerHTML = '<div class="stack"></div>';
    onb = new IOS.Stack(sc.firstElementChild, { tab: 'onb' });
    onb.push(first || 2, params || {}, { instant: true }); showScene('onb'); syncOffline(); onPage(onb.top);
  }
  /* indicador «Sense connexió»: just a sota de la barra de navegació (al xat ja ho diu la capçalera) */
  function syncOffline() {
    let pill = IOS.app.querySelector('.offpill');
    const pg = topPage(), inChat = !!(pg && pg.chat && !IOS.Modal.top);
    if (st.offline && scene === 'main' && !inChat) {
      if (!pill) { pill = IOS.h(`<div class="offpill" role="status">${ICN('wifioff', 14, '#fff')} Sense connexió</div>`); IOS.app.appendChild(pill); }
      // a baix, per sobre de la barra de pestanyes o de la barra d'accions: no tapa títols ni botons
      const bb = pg && pg.el.querySelector(':scope > .bbar'), tb = IOS.app.querySelector('#sc-main > .tabbar');
      const above = bb ? IOS.H - IOS.rectIn(bb).y : (tb && !tb._hidden ? 83 : 34);
      pill.style.top = 'auto'; pill.style.bottom = (above + 10) + 'px';
    }
    else if (pill) pill.remove();
  }
  function setOffline(v) { st.offline = !!v; syncOffline(); const pg = stacks.xat && stacks.xat.top; if (pg && pg.chat) { ChatAPI.render(pg.chat, !st.chat.length); } }
  function syncTabbar(pg) {
    if (scene !== 'main') return; const tb = IOS.app.querySelector('#sc-main > .tabbar'); if (!tb) return;
    const top = stacks[cur] && stacks[cur].top, hide = !!(top && top.d.tabbar === false);
    if (tb._hidden === hide) return; tb._hidden = hide;
    if (IOS.rm()) { tb.style.transform = hide ? 'translateY(100%)' : ''; return; }
    IOS.anim(tb, [{ transform: hide ? 'translateY(0)' : 'translateY(100%)' }, { transform: hide ? 'translateY(100%)' : 'translateY(0)' }], IOS.S.push);
  }
  return {
    st, TABS, stacks, buildMain, switchTab, showScene, activeScene, topPage, onPage, syncStatus, vo, startMain, startOnboarding, setOffline, syncOffline,
    get onb() { return onb; }, get tab() { return cur; }, get scene() { return scene; }, hook: f => hooks.push(f),
    stack(k) { return stacks[k || cur]; }
  };
})();
