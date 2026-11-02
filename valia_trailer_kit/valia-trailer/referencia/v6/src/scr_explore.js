/* ===================== Pantalles · explorar (14–18, 37, 38 i estats 27, 28 i «sense resultats») ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const eco = `<span class="tag eco">${ICN('leaf', 14)} Baix impacte</span>`;
  const ACTS = [
    { id: 'caldes', img: 'termes', pos: '50% 60%', t: 'Itinerari termal de Caldes', sub: 'Caldes de Montbui · Cultural', m: ['1 h 30', '5,4 km', '+82 m'], tags: ['<span class="tag">Fàcil</span>', eco], kw: 'caldes montbui termal termes cultural història aigua', ty: ['Cultural', 'Història'] },
    { id: 'fai', img: 'smfai', pos: '50% 55%', t: 'Sant Miquel del Fai', sub: 'Bigues i Riells del Fai · Natura i història', m: ['2 h', '4,1 km', '+190 m'], tags: ['<span class="tag hard">Difícil</span>'], kw: 'sant miquel del fai natura història', ty: ['Natura', 'Història'] },
    { id: 'gallecs', img: 'gallecs', pos: '50% 40%', t: 'Gallecs en bicicleta', sub: 'Espai rural de Gallecs · Natura', m: ['1 h 10', '12 km', '+40 m'], tags: ['<span class="tag">Fàcil</span>', eco], kw: 'gallecs bicicleta natura camps', ty: ['Natura'] }
  ];
  window.ACTS = ACTS;
  const card = a => `<article class="acard" data-act-id="${a.id}"><div style="position:relative"><button type="button" class="acard-hit" data-open aria-label="${esc(a.t)}: ${a.m.join(', ')}. Obrir el detall"><div class="pimg cc bg-${a.img}" data-hsrc style="height:210px;border-radius:12px;background-position:${a.pos}"></div></button>
      <button type="button" class="iconbtn fav" data-fav="${a.id}" aria-label="Desar ${esc(a.t)}" aria-pressed="${App.st.saved[a.id] ? 'true' : 'false'}" style="position:absolute;top:6px;right:6px"><span class="gl">${ICN('heart', 20, App.st.saved[a.id] ? '#D70015' : 'currentColor')}</span></button></div>
      <div style="padding:10px 2px 0"><h3 class="t3">${a.t}</h3><p class="fn mut" style="margin:2px 0 6px">${a.sub}</p><div class="row wrap" style="gap:6px 10px;justify-content:space-between">${metaLine(a.m)}<span class="row" style="gap:4px">${a.tags.join('')}</span></div></div></article>`;
  const skel = () => [0, 1].map(() => `<div aria-hidden="true"><div class="sk" style="height:210px;border-radius:12px"></div><div style="padding:12px 2px"><div class="sk" style="height:20px;width:70%"></div><div class="sk" style="height:13px;width:45%;margin:8px 0 10px"></div><div class="row gap8"><div class="sk" style="height:24px;width:70px;border-radius:12px"></div><div class="sk" style="height:24px;width:56px;border-radius:12px"></div></div></div></div>`).join('');

  /* 14 · Explorar */
  SC[14] = {
    title: 'Explorar', large: true, tabbar: true,
    navRight: () => `<button type="button" class="navbtn press" data-map aria-label="Veure al mapa">${ICN('map', 24)}</button>`,
    render: () => `<div class="px">
      <div class="row gap8"><label class="search f1">${ICN('search', 18)}<span class="sr">Cerca</span><input type="search" placeholder="Cerca activitats i llocs" data-q enterkeyhint="search" autocomplete="off"></label><button type="button" class="btn dark sm press" data-filt aria-label="Filtres: 4 actius">${ICN('sliders', 18, '#fff')}Filtres<span class="cnt" data-fc>4</span></button></div>
      <div class="chips scrollx" style="margin-top:8px;margin-bottom:8px" data-qf>${['Tot', 'Cultural', 'Natura', 'Gastronomia', 'Història'].map((t, i) => chip(t, i === 0, `data-qf="${t}"`)).join('')}</div>
      <div class="col" style="gap:24px" data-res></div></div>`,
    mount(el, p, pg) {
      const res = el.querySelector('[data-res]'), q = el.querySelector('[data-q]'); let typ = 0, filt = 'Tot';
      pg.ex = { el, res, q };
      const show = (list, animate) => {
        if (App.st.server) return errorState(pg);
        if (!list.length) return noResults(pg, q.value.trim());
        res.innerHTML = list.map(card).join(''); if (animate) IOS.stagger(res.children);
      };
      pg.ex.run = (animate, o) => {
        o = o || {};
        const term = q.value.trim().toLowerCase();
        const list = ACTS.filter(a => (filt === 'Tot' || a.ty.includes(filt)) && (!term || a.kw.includes(term) || a.t.toLowerCase().includes(term)));
        if (o.instant) return show(list, false);
        loading(pg, () => show(list, true), o.ms);
      };
      q.addEventListener('input', () => { clearTimeout(typ); typ = setTimeout(() => pg.ex.run(true), 450); });
      q.addEventListener('keydown', e => { if (e.key === 'Enter') { clearTimeout(typ); q.blur(); pg.ex.run(true); } });
      el.addEventListener('click', e => {
        const c = e.target.closest('[data-qf]'); if (c && c.classList.contains('chip')) { el.querySelectorAll('.chip[data-qf]').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.dataset.qf; }); filt = c.dataset.qf; pg.ex.run(true, { ms: 650 }); return; }
        if (e.target.closest('[data-filt]')) { IOS.Modal.present(15, {}, { detents: ['medium', 'large'], detent: 'large' }); return; }
        if (e.target.closest('[data-map]')) { pg.stack.push(16); return; }
        const f = e.target.closest('[data-fav]'); if (f) { toggleFav(f); return; }
        const o = e.target.closest('[data-open]'); if (o) { const id = o.closest('[data-act-id]').dataset.actId; pg.stack.push(17, { id }, { hero: { src: o.querySelector('[data-hsrc]'), target: '[data-hero]' } }); return; }
        const alt = e.target.closest('[data-alt]'); if (alt) { const k = alt.dataset.alt; if (k === 'clear') { q.value = ''; pg.ex.run(true); } if (k === 'near') { q.value = ''; pg.ex.run(true); } if (k === 'ask') { App.switchTab('xat'); const cp = App.stack('xat').top; setTimeout(() => { cp.chat.inp.value = 'Què puc fer avui a prop de casa?'; cp.chat.inp.dispatchEvent(new Event('input')); cp.chat.inp.focus(); }, 250); } return; }
        if (e.target.closest('[data-retry]')) { App.st.server = false; pg.ex.run(true); }
      });
      pg.ex.run(false, { instant: true });
      if (p.state === 'loading') setTimeout(() => loading(pg, () => {}, 1e9), 30);
      if (p.state === 'error') { App.st.server = true; setTimeout(() => pg.ex.run(true), 30); }
      if (p.state === 'empty') setTimeout(() => { q.value = 'esquí'; pg.ex.run(true); }, 30);
    },
    reappear(el, p, pg) { el.querySelectorAll('[data-fav]').forEach(f => { const on = !!App.st.saved[f.dataset.fav]; f.setAttribute('aria-pressed', on); f.querySelector('.gl').innerHTML = ICN('heart', 20, on ? '#D70015' : 'currentColor'); }); }
  };
  function toggleFav(f) {
    const id = f.dataset.fav, on = !App.st.saved[id]; App.st.saved[id] = on;
    f.setAttribute('aria-pressed', on); f.querySelector('.gl').innerHTML = ICN('heart', 20, on ? '#D70015' : 'currentColor');
    if (!IOS.rm()) IOS.anim(f.querySelector('.gl'), [{ transform: 'scale(.7)' }, { transform: 'scale(1)' }], Spring.spring(0.34, 0.5));
    IOS.Toast.show(on ? 'Desada a Perfil' : 'Treta de Perfil', on ? 'heart' : 'x');
  }
  window.toggleFav = toggleFav;
  /* 27 · càrrega: estructura grisa i la mascota caminant en lloc d'un spinner */
  function loading(pg, done, ms) {
    const res = pg.ex.res; res.innerHTML = `<div data-lh></div>${skel()}`;
    const L = MascotUI.loader(res.querySelector('[data-lh]'), 'Buscant rutes…');
    clearTimeout(pg.ex.lt); pg.ex.lt = setTimeout(() => { L.done(); done(); }, ms || 900);
  }
  /* sense resultats: la mascota proposa alternatives (una vegada per sessió; després, sense mascota) */
  function noResults(pg, term) {
    const first = MascotUI.canShow('explorar-buit');
    pg.ex.res.innerHTML = `<div class="empty-x">${first ? '<div class="row" style="align-items:flex-end;gap:4px"><div data-em></div><div class="bubble cc" style="margin-bottom:58px" role="status">No he trobat res: prova alguna d\'aquestes opcions.</div></div>' : `<div class="ring-s">${ICN('search', 30, 'var(--tint-tx)')}</div><p class="hd" style="margin:4px 0 0">No hi ha resultats${term ? ` per a «${esc(term)}»` : ''}</p><p class="fn mut" style="margin:2px 0 0">Prova alguna d'aquestes opcions.</p>`}
      <div class="col gap8" style="width:100%;margin-top:6px">
        <button type="button" class="sug press" data-alt="clear"><span class="f1">Treure la cerca i els filtres</span><i>${ICN('x', 16)}</i></button>
        <button type="button" class="sug press" data-alt="near"><span class="f1">Rutes a prop teu</span><i>${ICN('pin', 16)}</i></button>
        <button type="button" class="sug press" data-alt="ask"><span class="f1">Pregunta-ho a l'assistent</span><i>${ICN('sparkle', 16)}</i></button></div></div>`;
    if (first) { MascotUI.mark('explorar-buit'); const m = Mascot.create(pg.ex.res.querySelector('[data-em]'), { size: 118, state: 'proposant', label: 'Assistent' }); MascotUI.announce('Assistent: No he trobat res: prova alguna d\'aquestes opcions.'); const b = pg.ex.res.querySelector('.bubble'); if (!IOS.rm()) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'none', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 300 });
      const row = b.parentElement; MascotUI.dismissible(row, m, { label: "Assistent: No he trobat res: prova alguna d'aquestes opcions. Tancar el missatge.", onGone: () => { const r = h(`<div class="col" style="align-items:center"><div class="ring-s">${ICN('search', 30, 'var(--tint-tx)')}</div><p class="hd" style="margin:4px 0 0">No hi ha resultats${term ? ` per a «${esc(term)}»` : ''}</p><p class="fn mut" style="margin:2px 0 0">Prova alguna d'aquestes opcions.</p></div>`); row.replaceWith(r); if (!IOS.rm()) IOS.fade(r, 0, 1, 200); } }); }
    IOS.stagger(pg.ex.res.querySelectorAll('.sug'), { delay: first ? 420 : 0 });
  }
  /* 28 · error (proposta: mascota en estat d'error) */
  function errorState(pg) {
    pg.ex.res.innerHTML = `<div class="empty-x" style="padding-top:20px"><div data-erm></div><h2 class="t3" style="margin-top:6px">No hem pogut carregar les rutes</h2><p class="co mut" style="margin:4px 0 0;max-width:30ch">Hi ha hagut un problema amb el servidor. Torna-ho a provar d'aquí a uns instants.</p><button type="button" class="btn auto" data-retry style="margin-top:14px;padding:12px 28px">Tornar-ho a provar</button><button type="button" class="tbtn" data-alt="clear">Anar a l'inici</button></div>`;
    Mascot.create(pg.ex.res.querySelector('[data-erm]'), { size: 118, state: 'error', label: 'Assistent' });
  }

  /* 15 · Filtres (fulla amb dues altures) */
  SC[15] = {
    title: 'Filtres', nav: false, tabbar: false, cls: 'fsheet',
    render: () => `<div class="shead fhead"><button type="button" class="tbtn" data-clear>Netejar</button><h2 class="hd">Filtres</h2><button type="button" class="tbtn" data-apply style="font-weight:600">Aplicar</button></div>
      <div class="px">
        <h3 class="hd fsec">Tipus d'activitat</h3><div class="chips">${chip('Cultural', 1)}${chip('Natura', 1)}${chip('Història')}${chip('Gastronomia')}</div>
        <h3 class="hd fsec">Nivell de sostenibilitat</h3><div class="chips">${chip('Qualsevol')}${chip('Alt', 1)}${chip('Molt alt')}</div>
        <div class="row" style="justify-content:space-between;margin-top:22px"><h3 class="hd" style="margin:0">Durada</h3><span class="fn" style="font-weight:600">1 – 3 h</span></div>
        <div class="rng" aria-label="Durada entre 1 i 3 hores" role="group"><i style="left:0;right:0;background:#E5E5EA"></i><i style="left:12%;right:55%;background:var(--tint)"></i><span class="h" style="left:calc(12% - 14px)"></span><span class="h" style="left:calc(45% - 14px)"></span></div>
        <h3 class="hd fsec">Pressupost</h3><div class="chips">${chip('Qualsevol', 1)}${chip('Gratuït')}${chip('Fins a 20 €')}${chip('Fins a 50 €')}</div>
        <h3 class="hd fsec">Companyia</h3><div class="chips">${chip('Sol')}${chip('En parella')}${chip('Amb amics')}${chip('En família')}</div>
        <p class="fn mut" style="margin-top:14px">Valors i intervals: <span class="pend">Pendent de confirmar</span></p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-apply><span data-al>Aplicar 4 filtres</span></button></div>`,
    mount(el, p, pg) {
      const count = () => { const n = el.querySelectorAll('.chip[aria-pressed="true"]').length - (el.querySelector('.chips .chip[aria-pressed="true"]') ? 0 : 0); const k = Math.max(0, n - 1); el.querySelector('[data-al]').textContent = `Aplicar ${k} ${k === 1 ? 'filtre' : 'filtres'}`; return k; };
      el.addEventListener('click', e => {
        const c = e.target.closest('.chip'); if (c) { const on = c.getAttribute('aria-pressed') !== 'true'; c.setAttribute('aria-pressed', on); c.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + c.textContent; count(); return; }
        if (e.target.closest('[data-clear]')) { el.querySelectorAll('.chip').forEach(c => { c.setAttribute('aria-pressed', 'false'); c.querySelector('span').textContent = c.textContent; }); count(); return; }
        if (e.target.closest('[data-apply]')) { const n = count(); App.st.filters = n; IOS.Modal.dismiss().then(() => { const ex = App.stack('explorar').top; const fc = ex.el.querySelector('[data-fc]'); if (fc) { fc.textContent = n; fc.hidden = !n; } if (ex.ex) ex.ex.run(true, { ms: 1000 }); }); }
      });
      count();
    }
  };

  /* 16 · Mapa */
  SC[16] = {
    title: 'Mapa', tabbar: true, nav: true, navCls: 'floating', backGlass: true, cls: 'mappg nonav',
    navRight: () => `<button type="button" class="navbtn" data-filt aria-label="Filtres"><span class="gl">${ICN('sliders', 20)}</span></button>`,
    render: () => `<div class="map" role="img" aria-label="Mapa de Caldes de Montbui amb una ruta, dos punts d'interès i la teva posició">${mapSVG(393, 852, { route: 'caldes', pins: [[.3, .3, 'poi', 'poi'], [.62, .24, 'nat'], [.5, .55, 'sel'], [.22, .72, 'me']], seed: 3, label: 'Caldes de Montbui' })}</div>`,
    overlay: () => `<label class="search map-search"><span>${ICN('search', 18)}</span><span class="sr">Cerca en aquest mapa</span><input type="search" placeholder="Cerca en aquest mapa"></label>
      <div class="col" style="position:absolute;right:8px;top:160px;z-index:12"><button type="button" class="iconbtn" aria-label="Capes del mapa"><span class="gl">${ICN('layers', 20)}</span></button><button type="button" class="iconbtn" aria-label="La meva ubicació"><span class="gl">${ICN('locate', 20)}</span></button></div>
      <button type="button" class="poi-hit" data-poi aria-label="Termes romanes de Caldes: obrir la fitxa" style="position:absolute;left:96px;top:234px;width:44px;height:44px;z-index:11;border-radius:22px"></button>
      <button type="button" class="mapcard card cc" data-open style="position:absolute;left:12px;right:12px;bottom:95px;z-index:20;display:flex;gap:12px;padding:10px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.18);text-align:left" aria-label="Itinerari termal de Caldes. Obrir el detall">
        <div class="pimg cc bg-termes" data-hsrc style="width:84px;height:84px;border-radius:10px;flex:none;background-position:50% 60%"></div><div class="f1"><div class="hd">Itinerari termal de Caldes</div><div class="fn mut">Caldes de Montbui</div><div class="row" style="gap:8px;margin-top:6px">${metaLine(['1 h 30', '5,4 km', '+82 m'])}<span class="tag">Fàcil</span></div></div></button>`,
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        if (e.target.closest('[data-open]')) pg.stack.push(17, { id: 'caldes' }, { hero: { src: el.querySelector('[data-hsrc]'), target: '[data-hero]' } });
        if (e.target.closest('[data-poi]')) pg.stack.push(18);
        if (e.target.closest('[data-filt]')) IOS.Modal.present(15, {}, { detents: ['medium', 'large'], detent: 'medium' });
      });
    }
  };

  /* 17 · Detall d'activitat (destinació de la transició «heroi») */
  SC[17] = {
    title: 'Itinerari termal de Caldes', short: 'Detall', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 230, cls: 'detail',
    navRight: () => `<button type="button" class="navbtn" aria-label="Compartir"><span class="gl">${ICN('share', 20)}</span></button><button type="button" class="navbtn" data-save aria-label="Desar"><span class="gl">${ICN('bookmark', 20)}</span></button>`,
    render: p => { const a = ACTS.find(x => x.id === (p.id || 'caldes')) || ACTS[0];
      return `<div class="pimg dhero bg-${a.img}" data-hero style="height:320px;background-position:${a.pos}"></div>
      <div class="dbody">
        <h1 class="t1">${a.t}</h1>
        <div class="row wrap" style="gap:6px 10px;margin:8px 0 14px">${metaLine(a.m)}<span class="row" style="gap:4px"><span class="tag">Cultural</span><span class="tag">Circular</span></span></div>
        <div class="row stats3" style="gap:8px;align-items:stretch"><div class="stat"><b>Gratuït</b><span>Preu</span></div><div class="stat"><b>Alta</b><span>Sostenibilitat</span></div><div class="stat"><b>Baixa</b><span>Afluència ara</span></div></div>
        <button type="button" class="btn gray dl press" data-dl style="margin-top:12px;justify-content:flex-start;text-align:left;gap:12px">${ICN('download', 22)}<span class="f1"><span style="display:block">Descarregar per fer-la sense cobertura</span><span class="fn mut" style="font-weight:500" data-dls>12 MB · mapa, check-ins i fitxes</span></span></button>
        <div class="glist" style="margin:12px 0 0">
          <button type="button" class="grow ic" data-go="37"><span class="gic">${ICN('cloudSun', 18, '#fff')}</span><span class="f1"><span class="bd" style="display:block">Avui: 18° · pluja 10 % · aire bo</span><span class="fn mut">Condicions i afluència</span></span><span class="chev">${ICN('chevR', 18)}</span></button>
          <button type="button" class="grow ic" data-go="38"><span class="gic o">${ICN('star', 18, '#fff')}</span><span class="f1 bd">Punts destacats de la comunitat</span><span class="gv">8</span><span class="chev">${ICN('chevR', 18)}</span></button>
          <button type="button" class="grow ic" data-go="18"><span class="gic k">${ICN('landmark', 18, '#fff')}</span><span class="f1 bd">Termes romanes de Caldes</span><span class="chev">${ICN('chevR', 18)}</span></button></div>
        <h2 class="t3" style="margin:22px 0 8px">Recorregut</h2>
        <div class="cc" style="height:190px;border-radius:12px;overflow:hidden">${mapSVG(393, 190, { route: 'caldes', pins: [[.14, .86, 'start'], [.82, .2, 'end'], [.3, .47, 'poi'], [.62, .3, 'poi']], seed: 5 })}</div>
        <div style="margin-top:12px">${elev(64)}</div>
        <p class="fn mut" style="margin-top:6px">Preu, sostenibilitat, afluència i mida de la descàrrega: dades il·lustratives.</p></div>`; },
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-start>${ICN('nav', 20)} Iniciar ruta</button></div>`,
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        const g = e.target.closest('[data-go]'); if (g) { pg.stack.push(+g.dataset.go); return; }
        if (e.target.closest('[data-start]')) { Route.start(); return; }
        if (e.target.closest('[data-save]')) { const on = !App.st.saved.caldes; App.st.saved.caldes = on; IOS.Toast.show(on ? 'Desada a Perfil' : 'Treta de Perfil', on ? 'bookmark' : 'x'); return; }
        const d = e.target.closest('[data-dl]'); if (d && !d._busy) download(d);
      });
    }
  };
  /* descàrrega: la mascota camina dins del botó mentre es descarrega (sense spinner) */
  function download(btn) {
    if (App.st.downloaded) { IOS.Toast.show('Ja està descarregada', 'check'); return; }
    btn._busy = true; const ic = btn.firstElementChild, sub = btn.querySelector('[data-dls]');
    const holder = h('<span class="dlm" aria-hidden="true"></span>'); ic.replaceWith(holder);
    const m = Mascot.create(holder, { size: 34, state: 'buscant', label: 'Assistent' }); m.svg.setAttribute('aria-hidden', 'true');
    let pct = 0; const t = setInterval(() => { pct = Math.min(100, pct + 7 + Math.round(Math.random() * 6)); sub.textContent = `Descarregant… ${pct} %`; if (pct >= 100) { clearInterval(t); m.destroy(); holder.replaceWith(h(`<span style="display:grid;place-items:center;width:22px">${ICN('checkC', 22, 'var(--tint-tx)')}</span>`)); sub.textContent = 'Descarregada · 12 MB'; App.st.downloaded = true; btn._busy = false; MascotUI.announce('Ruta descarregada'); } }, 160);
  }

  /* 37 · Condicions, afluència i punts destacats */
  const hours = [2, 3, 4, 6, 9, 11, 10, 8, 7, 9, 12, 10, 6];
  SC[37] = {
    title: 'Itinerari termal de Caldes', short: 'Condicions', tabbar: false,
    render: () => `<div class="px">
      <div class="row" style="justify-content:space-between"><h2 class="t3">Condicions d'avui</h2><span class="fn mut">Actualitzat a les 9:00</span></div>
      <div class="cond" style="margin-top:10px">${[['sun', 'Sol', 'Cel'], ['thermo', '18°', 'Màx. 22°'], ['rain', '10 %', 'Pluja'], ['wind', 'Bona', 'Aire']].map(c => `<div>${ICN(c[0], 22)}<b>${c[1]}</b><span>${c[2]}</span></div>`).join('')}</div>
      <p class="fn mut" style="margin-top:8px">Font: Meteocat (temps) i XVPCA de la Generalitat (aire)</p>
      <div class="row" style="justify-content:space-between;margin-top:26px"><h2 class="t3">Afluència</h2><span class="tag">Ara: baixa</span></div>
      <div class="crowd" style="margin-top:10px" role="img" aria-label="Afluència baixa"><i class="on"></i><i></i><i></i></div><div class="row fn mut" style="justify-content:space-between;margin-top:4px"><span>Baixa</span><span>Normal</span><span>Alta</span></div>
      <div class="hours" style="margin-top:14px" role="img" aria-label="Afluència per hores: ara és baixa">${hours.map((v, i) => `<span class="${i === 2 ? 'now' : ''}" style="height:${v * 8}%"></span>`).join('')}</div><div class="row fn mut" style="justify-content:space-between;margin-top:4px"><span>8 h</span><span>14 h</span><span>20 h</span></div>
      <div class="info" style="margin-top:12px">${ICN('leaf', 20, 'var(--tint-tx)')}<span>Millor hora: abans de les 11 h. Anar-hi quan hi ha poca gent ajuda a no massificar l'entorn.</span></div>
      <div class="row" style="justify-content:space-between;margin:28px 0 10px"><h2 class="t3">Punts destacats</h2><button type="button" class="tbtn" data-all>Veure'ls tots (8)</button></div>
      <div class="hlrow">${hl('termes', '30% 55%', 'Termes romanes', 'Laia · fa 3 dies', 'Al migdia hi ha menys gent i el vapor es veu millor.', 12)}${hl('termes', '92% 28%', 'Font del Lleó', 'Jordi · fa 1 setmana', "L'aigua surt molt calenta: vigila amb els nens.", 9)}</div>
      <p class="fn mut" style="margin-top:10px">Consells, autors i comptadors: il·lustratius.</p></div>`,
    mount(el, p, pg) { el.querySelector('[data-all]').addEventListener('click', () => pg.stack.push(38)); }
  };
  function hl(img, pos, t, who, tip, n) { return `<div class="hl cc">${photo(img, 'height:116px', pos)}<div style="padding:10px 12px 12px"><div class="hd">${t}</div><p class="fn" style="margin:4px 0 8px">${tip}</p><div class="row fn mut" style="justify-content:space-between"><span>${who}</span><span class="row" style="gap:4px">${ICN('thumbs', 14)}${n}</span></div></div></div>`; }
  /* 38 · Punts destacats de la comunitat */
  SC[38] = {
    title: 'Punts destacats', tabbar: false,
    render: () => `<div class="px col gap16"><p class="fn mut" style="margin:0">Itinerari termal de Caldes · 8 punts, en ordre de la ruta</p>
      ${hlRow('termes', '50% 62%', '1 · Termes romanes', 'Laia · fa 3 dies', 'Al migdia hi ha menys gent i el vapor es veu millor des de la plaça.', 12, 4)}
      ${hlRow('termes', '92% 28%', '2 · Font del Lleó', 'Jordi · fa 1 setmana', "L'aigua surt molt calenta: vigila amb els nens.", 9, 2)}</div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn dark" data-add>${ICN('plus', 20, '#fff')} Afegeix un consell</button></div>`,
    mount(el) { el.querySelector('[data-add]').addEventListener('click', () => IOS.Toast.show('Pendent de confirmar: moderació', 'info')); el.addEventListener('click', e => { if (e.target.closest('[data-more]')) IOS.Alert.actions({ title: 'Punt destacat', actions: [{ t: 'Denunciar', red: true }, { t: 'Amagar' }] }); }); }
  };
  function hlRow(img, pos, t, who, tip, n, own) { return `<article class="surf cc" style="overflow:hidden">${photo(img, 'height:150px', pos)}<div style="padding:12px 14px 14px"><div class="row" style="justify-content:space-between"><h3 class="hd">${t}</h3><button type="button" class="iconbtn" data-more aria-label="Més opcions: denunciar o amagar">${ICN('dots', 20)}</button></div><p class="co" style="margin:2px 0 8px">${tip}</p><div class="row fn mut" style="justify-content:space-between"><span>${who}</span><span class="row" style="gap:10px"><span class="row" style="gap:4px">${ICN('thumbs', 14)}${n}</span><span class="row" style="gap:4px">${ICN('camera', 14)}${own}</span></span></div></div></article>`; }

  /* 18 · Punt d'interès (patrimoni) */
  SC[18] = {
    title: 'Termes romanes de Caldes de Montbui', short: 'Patrimoni', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 230, cls: 'detail',
    navRight: () => `<button type="button" class="navbtn" aria-label="Compartir"><span class="gl">${ICN('share', 20)}</span></button><button type="button" class="navbtn" aria-label="M'agrada"><span class="gl">${ICN('heart', 20)}</span></button>`,
    render: () => `<div class="pimg dhero bg-termes" style="height:300px;background-position:50% 32%"></div>
      <div class="dbody"><div class="row" style="gap:6px"><span class="tag">Patrimoni</span><span class="tag">BCIN</span></div>
        <h1 class="t1" style="margin-top:10px">Termes romanes de Caldes de Montbui</h1>
        <p class="fn mut row" style="gap:4px;margin:8px 0 14px">${ICN('pin', 16)} Plaça de la Font del Lleó, 3 · Caldes de Montbui</p>
        <div class="row stats3" style="gap:8px;align-items:stretch"><div class="stat"><b>s. II aC</b><span>Època</span></div><div class="stat"><b>BCIN</b><span>Protecció</span></div><div class="stat"><b>Fàcil</b><span>Accés</span></div></div>
        <p class="co" style="margin:14px 0 12px">Restes termals romanes al nucli antic de Caldes de Montbui, considerada la primera vila termal de Catalunya.</p>
        <h2 class="hd" style="margin-bottom:4px">Rutes que hi passen</h2>
        <button type="button" class="grow" data-route style="padding-left:0;padding-right:0"><span class="cc" style="width:52px;height:52px;border-radius:10px;overflow:hidden;flex:none">${mapSVG(120, 120, { route: 'caldes', seed: 6 })}</span><span class="f1"><span class="hd" style="display:block">Itinerari termal de Caldes</span>${metaLine(['1 h 30', '5,4 km', '+82 m'])}</span><span class="chev">${ICN('chevR', 18)}</span></button>
        <p class="fn mut" style="margin-top:8px">Font: Inventari del Patrimoni Cultural, Diputació de Barcelona.</p></div>`,
    overlay: () => `<div class="bbar row" style="gap:12px"><button type="button" class="btn f1" data-dir>Com arribar</button><button type="button" class="btn out" style="width:64px;flex:none" aria-label="Desar">${ICN('bookmark', 22)}</button></div>`,
    mount(el, p, pg) { el.querySelector('[data-route]').addEventListener('click', () => { const s = pg.stack; if (s.pages.length > 1 && s.pages[s.pages.length - 2].id === 17) s.pop(); else s.push(17, { id: 'caldes' }); }); el.querySelector('[data-dir]').addEventListener('click', () => IOS.Toast.show('Obriria l\'app de mapes', 'nav')); }
  };
})();
