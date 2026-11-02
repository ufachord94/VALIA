/* ===================== Pantalles · recompenses i punts (31, 32, 33, 34) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const RW = [
    { id: 'bus', t: 'Recàrrega de transport públic', p: 500, i: 'bus', cat: 'Mobilitat sostenible' },
    { id: 'bici', t: '15 min de bicicleta compartida', p: 300, i: 'bike', cat: 'Mobilitat sostenible' },
    { id: 'amz', t: 'Targeta regal Amazon 10 €', p: 2000, i: 'card', cat: 'Targetes regal' },
    { id: 'gp', t: 'Targeta regal Google Play 10 €', p: 2000, i: 'card', cat: 'Targetes regal' }
  ];
  const tile = r => `<button type="button" class="tile cc" data-rw="${r.id}" aria-label="${esc(r.t)}: ${fmt(r.p)} punts"><span class="rwi">${ICN(r.i, 24)}</span><span class="hd" style="display:block;margin-top:12px;line-height:1.25">${r.t}</span><span class="row fn" style="gap:4px;margin-top:8px;font-weight:600">${ICN('bolt', 14, 'var(--tint-tx)')}${fmt(r.p)} punts</span></button>`;
  const HIST = [['walk', 'Itinerari termal de Caldes', '20 de setembre', '+120', 1], ['walk', 'Sortida en família', '19 de setembre', '+95', 1], ['bus', 'Recàrrega de transport públic', '18 de setembre', '−500', 0], ['bike', 'Ruta en bicicleta per Gallecs', '16 de setembre', '+140', 1]];

  /* 31 · Botiga */
  SC[31] = {
    title: 'Recompenses', short: 'Botiga', tabbar: true, navCls: 'on-photo', sb: 'light', scrollThreshold: 200, cls: 'rewards',
    navRight: () => `<button type="button" class="navbtn" data-hist aria-label="Historial de punts"><span class="gl">${ICN('clock', 20)}</span></button>`,
    render: () => `<div class="phead"><div class="pimg bg-gallecs" style="position:absolute;inset:0;background-position:50% 40%"></div><div class="phead-sc"></div>
        <div class="phead-in"><h1 class="lt" style="color:#fff">Recompenses</h1>
        <div class="glass pcard" style="margin-top:18px"><p class="fn mut" style="margin:0">Els teus punts d'energia</p><div class="row" style="gap:8px;margin-top:2px">${ICN('bolt', 28, '#1FD08A')}<b class="num" style="font-size:var(--t-t1)" data-bal>${fmt(App.st.points)}</b></div>
          <div class="row fn" style="justify-content:space-between;margin-top:8px"><span style="font-weight:600">Objectiu: targeta regal Amazon 10 €</span><span class="mut" data-gp>62 %</span></div><div class="bar" style="margin-top:8px"><i data-gb style="width:62%"></i></div><p class="fn mut" style="margin:8px 0 0" data-gl>Et falten 760 punts, unes 5 rutes.</p></div></div></div>
      <div class="px"><div class="chips scrollx" style="margin-top:10px">${['Tot', 'Mobilitat', 'Targetes regal', 'Comerç local'].map((t, i) => chip(t, i === 0, `data-cat="${t}"`)).join('')}</div>
        <h2 class="t3" style="margin:22px 0 10px" data-sec="Mobilitat">Mobilitat sostenible</h2><div class="tiles" data-sec="Mobilitat">${tile(RW[0])}${tile(RW[1])}</div>
        <h2 class="t3" style="margin:26px 0 10px" data-sec="Targetes regal">Targetes regal</h2><div class="tiles" data-sec="Targetes regal">${tile(RW[2])}${tile(RW[3])}</div>
        <p class="fn mut" style="margin-top:14px">Dades il·lustratives. Nom de la moneda, regles i acords amb marques: <span class="pend">Pendent de confirmar</span></p></div>`,
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        if (e.target.closest('[data-hist]')) pg.stack.push(34);
        const t = e.target.closest('[data-rw]'); if (t) pg.stack.push(32, { id: t.dataset.rw });
        const c = e.target.closest('[data-cat]'); if (c) { el.querySelectorAll('.chip[data-cat]').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.dataset.cat; });
          const k = c.dataset.cat; el.querySelectorAll('[data-sec]').forEach(s => { s.hidden = !(k === 'Tot' || s.dataset.sec === k); }); if (k === 'Comerç local') IOS.Toast.show('Comerç local: pendent d\'acords', 'shop'); IOS.stagger(el.querySelectorAll('.tile:not([hidden])')); }
      });
    },
    reappear(el) { sync(el); }
  };
  function sync(el) {
    const b = el.querySelector('[data-bal]'); if (!b) return; b.textContent = fmt(App.st.points);
    const pct = Math.min(100, Math.round(App.st.points / 2000 * 100)), left = Math.max(0, 2000 - App.st.points);
    el.querySelector('[data-gp]').textContent = pct + ' %'; el.querySelector('[data-gb]').style.width = pct + '%'; el.querySelector('[data-gl]').textContent = `Et falten ${fmt(left)} punts, unes ${Math.max(1, Math.round(left / 150))} rutes.`;
  }
  /* 32 · Detall de recompensa */
  SC[32] = {
    title: 'Recompensa', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 220, cls: 'detail',
    navRight: () => `<button type="button" class="navbtn" aria-label="M'agrada"><span class="gl">${ICN('heart', 20)}</span></button>`,
    render: p => { const r = RW.find(x => x.id === (p.id || 'bus')) || RW[0];
      return `<div class="pimg dhero bg-gallecs" style="height:290px;background-position:50% 55%"><span class="glass row" style="position:absolute;left:16px;bottom:30px;padding:8px 14px;border-radius:999px;gap:8px;font-size:var(--t-fn);font-weight:600">${ICN(r.i, 16, '#fff')} ${r.cat}</span></div>
      <div class="dbody"><h1 class="t1">${r.t}</h1>
        <div class="row" style="gap:8px;margin-top:10px">${ICN('bolt', 24, 'var(--tint)')}<b class="t2" style="margin:0">${fmt(r.p)}</b><span class="fn mut">punts d'energia</span></div>
        <p class="fn mut" style="margin:4px 0 0" data-after>Tens ${fmt(App.st.points)} punts. Et quedaran ${fmt(App.st.points - r.p)}.</p>
        <p class="co" style="margin:16px 0 0">Carrega saldo a la teva targeta de transport públic amb els punts que has guanyat movent-te de forma activa.</p>
        <div class="glist" style="margin:16px 0 0"><div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Marcar com a objectiu</span><span class="fn mut">Veuràs el progrés al teu perfil</span></span>${sw(false, 'Marcar com a objectiu')}</div></div>
        <h2 class="hd" style="margin:16px 0 4px">Condicions</h2><p class="fn mut" style="margin:0">Vàlid a les xarxes de transport participants. Els detalls els confirmarà cada acord.</p></div>`; },
    overlay: p => { const r = RW.find(x => x.id === (p.id || 'bus')) || RW[0]; return `<div class="bbar"><button type="button" class="btn" data-redeem ${App.st.points < r.p ? 'disabled style="opacity:.4"' : ''}>Canviar per ${fmt(r.p)} punts</button></div>`; },
    mount(el, p, pg) {
      const r = RW.find(x => x.id === (p.id || 'bus')) || RW[0];
      el.querySelector('[data-redeem]').addEventListener('click', () => {
        if (App.st.points < r.p) return;
        IOS.Alert.actions({ title: `Canviar ${fmt(r.p)} punts?`, msg: `Rebràs «${r.t}». Et quedaran ${fmt(App.st.points - r.p)} punts.`, actions: [{ t: `Canviar per ${fmt(r.p)} punts`, on: () => {
          App.st.points -= r.p; App.st.redeemed++; HIST.unshift([r.i, r.t, 'Avui', '−' + fmt(r.p), 0]);
          IOS.Modal.present(33, { id: r.id }, { kind: 'cover' });
        } }] });
      });
    }
  };
  /* 33 · Canvi completat: la mascota ho celebra (una vegada per sessió) */
  SC[33] = {
    title: 'Canvi fet', nav: false, tabbar: false,
    render: p => { const r = RW.find(x => x.id === (p.id || 'bus')) || RW[0];
      return `<div class="px col" style="align-items:center;text-align:center;padding-top:70px">
        <div class="row" style="align-items:flex-end;justify-content:center;gap:2px;min-height:140px"><div class="okring" aria-hidden="true">${ICN('check', 44, '#0B0D0C')}</div><div data-cel></div></div>
        <h1 class="t1" style="margin-top:10px">Canvi fet!</h1><p class="co mut" style="margin:6px 0 0;max-width:30ch">Has canviat ${fmt(r.p)} punts. Ara en tens ${fmt(App.st.points)}.</p>
        <div class="coupon cc"><div class="hd">${r.t}</div>${qrSVG()}<div class="t3" style="letter-spacing:.06em">ECO-4F7K-92QD</div><div class="fn mut">Codi d'exemple</div></div>
        <button type="button" class="btn" data-done style="margin-top:14px">Fet</button><button type="button" class="tbtn" data-shop style="width:100%">Tornar a la botiga</button></div>`; },
    mount(el, p, pg) {
      const first = MascotUI.canShow('botiga');
      if (first) {
        MascotUI.mark('botiga');
        const m = Mascot.create(el.querySelector('[data-cel]'), { size: 136, state: 'repos', label: 'Assistent' });
        setTimeout(() => m.set('celebrant', { restart: true }), IOS.rm() ? 0 : 380);
        MascotUI.announce('Canvi fet. Assistent: Fet! Ja tens la recompensa.');
        MascotUI.dismissible(el.querySelector('[data-cel]'), m, { label: "Assistent celebrant el canvi. Tancar l'animació." });
      } else el.querySelector('[data-cel]').remove();
      const okr = el.querySelector('.okring'); if (!IOS.rm()) IOS.anim(okr, [{ transform: 'scale(.4)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], Spring.spring(0.42, 0.55), { delay: 120 });
      const back = async root => { await IOS.Modal.dismiss(); const st = App.stack('recompenses'); if (root) await st.popTo(1); const top = st.top; if (top.d.reappear) top.d.reappear(top.el, top.params, top); const a = top.el.querySelector('[data-after]'); if (a) a.textContent = `Tens ${fmt(App.st.points)} punts.`; };
      el.querySelector('[data-done]').addEventListener('click', () => back(true));
      el.querySelector('[data-shop]').addEventListener('click', () => back(true));
    }
  };
  /* 34 · Historial de punts d'energia */
  SC[34] = {
    title: "Punts d'energia", short: 'Punts', tabbar: true,
    render: () => `<div class="px"><div class="row" style="gap:8px">${ICN('bolt', 32, 'var(--tint)')}<b class="num" style="font-size:var(--t-t1)">${fmt(App.st.points)}</b></div><p class="fn mut" style="margin:2px 0 14px">Saldo actual</p>
      ${seg(['Tot', 'Guanyats', 'Canviats'], 0)}<h2 class="gtitle" style="padding-left:0">Aquest mes</h2>
      <div class="col" data-hl>${HIST.map(r => `<div class="row" style="padding:10px 0"><span class="ctc" style="background:var(--bg2)">${ICN(r[0], 18)}</span><div class="f1"><div class="hd">${r[1]}</div><div class="fn mut">${r[2]}</div></div><b class="hd" style="color:${r[4] ? 'var(--tint-tx)' : 'var(--label)'}">${r[3]}</b></div>`).join('')}</div>
      <div class="info" style="margin-top:14px">${ICN('info', 20, 'var(--tint-tx)')}<span>Guanyes punts amb cada check-in i quan acabes una ruta. Com més et mous de forma activa, més en sumes.</span></div>
      <p class="fn mut" style="margin-top:10px">Moviments i imports il·lustratius. Fórmula, límits i caducitat: <span class="pend">Pendent de confirmar</span></p></div>`,
    mount(el) { IOS.segmented(el.querySelector('.segc'), i => { el.querySelectorAll('[data-hl] > .row').forEach((r, j) => { const pos = HIST[j][4]; r.hidden = i === 1 ? !pos : i === 2 ? !!pos : false; }); }); }
  };
})();
