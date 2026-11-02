/* ===================== Pantalles · perfil, estadístiques, impacte i ajustos (22, 30, 35, 26, 42, 43, 23, 39, 24, 25) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const ugc = (img, pos, t, d, m, pts) => `<article class="ugc cc">${photo(img, 'position:absolute;inset:0', pos)}<div class="ugc-sc"></div><span class="tag ugc-own">${ICN('camera', 14, '#fff')} Foto teva</span>
    <div class="glass ugc-g"><div class="hd">${t}</div><div class="fn mut">${d}</div><div class="row" style="justify-content:space-between;margin-top:6px"><span class="fn">${m.join(' · ')}</span><span class="fn" style="font-weight:600">${pts}</span></div></div></article>`;
  const days = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'], vals = [28, 4, 42, 18, 4, 100, 66];
  const PEEK_MSGS = ['Enhorabona! Has estalviat 5 kg de CO₂.', 'Repetim la ruta de dissabte?'];
  let peekTurn = 0;

  /* 22 · Perfil (inclou 30 i 35 en el mateix desplaçament, com a la v4) */
  SC[22] = {
    title: 'Perfil', tabbar: true, navCls: 'on-photo', sb: 'light', scrollThreshold: 250, cls: 'profile',
    navRight: () => `<button type="button" class="navbtn" data-set aria-label="Ajustos"><span class="gl">${ICN('cog', 20)}</span></button>`,
    render: () => `<div class="phead"><div class="pimg bg-fageda" style="position:absolute;inset:0;background-position:50% 55%"></div><div class="phead-sc"></div>
        <div class="phead-in"><h1 class="lt" data-ptitle style="color:#fff;align-self:flex-start">Perfil</h1>
        <div class="row" data-pname><span class="pav">M</span><div class="f1"><div class="t3" style="color:#fff">Marc</div><div class="fn" style="color:rgba(255,255,255,.9)">Membre des de setembre de 2026</div></div></div>
        <div class="glass pcard" data-pcard><div class="row" style="justify-content:space-between;gap:8px"><span class="row" style="gap:6px">${ICN('bolt', 20, '#1FD08A')}<b class="t3" data-pts>${fmt(App.st.points)}</b><span class="fn mut">punts d'energia</span></span><button type="button" class="tbtn" data-shop style="color:#fff;min-height:44px;padding:0 4px">Botiga ›</button></div>
          <div class="row fn" style="justify-content:space-between;margin-top:6px"><span style="font-weight:600">Objectiu: targeta regal Amazon 10 €</span><span class="mut" data-ppct>62 %</span></div><div class="bar" style="margin-top:8px"><i data-pbar style="width:62%"></i></div><p class="fn mut" style="margin:8px 0 0" data-pleft>Et falten unes 5 rutes per desbloquejar-la.</p></div></div></div>
      <section class="px" id="p-stats"><h2 class="t2" style="margin:20px 0 10px">Estadístiques</h2>${seg(['Dia', 'Setmana', 'Mes', 'Total'], 1)}
        <div class="chips" style="margin-top:6px">${chip('Distància', 1)}${chip('Temps')}${chip('Desnivell')}</div>
        <div class="row" style="justify-content:space-between;margin-top:8px"><div><b class="num" style="font-size:var(--t-t1)">21,4 km</b><div class="fn mut">Aquesta setmana</div></div><span class="tag eco">+18 %</span></div>
        <div class="chart" role="img" aria-label="Distància per dies d'aquesta setmana: dissabte és el dia amb més quilòmetres">${days.map((d, i) => `<div class="b ${i === 5 ? 'on' : ''}"><i style="height:${vals[i]}%"></i><span>${d}</span></div>`).join('')}</div></section>
      <section class="px" id="p-impact"><h2 class="t2" style="margin:30px 0 10px">Impacte sostenible</h2>
        <div class="impact cc">${photo('smfai', 'position:absolute;inset:0', '50% 55%')}<div class="ugc-sc"></div><div class="glass" style="position:absolute;left:10px;right:10px;bottom:10px;padding:14px 16px"><div class="row fn" style="gap:6px;font-weight:600">${ICN('leaf', 16, '#1FD08A')} Aquest mes</div><div style="margin-top:6px"><b class="num" style="font-size:var(--t-t1)">25 kg</b> <span class="hd">de CO₂e evitat (estimat)</span></div><div class="row fn" style="gap:8px;margin-top:8px">${ICN('tree', 22, '#1FD08A')}<span>L'equivalent al que absorbeix un arbre durant un any.</span></div></div></div>
        <div class="surf row" style="margin-top:10px;padding:14px 16px;align-items:flex-start">${ICN('bike', 26, 'var(--tint-tx)')}<p class="fn f1" style="margin:0">Les teves rutes en bicicleta d'aquesta setmana han evitat les emissions d'un viatge en cotxe de <b>50 km</b>.</p></div>
        <div class="row" style="justify-content:space-between;margin:28px 0 8px"><h2 class="t2">Comunitat</h2><button type="button" class="tbtn" data-chal>Reptes de grup ›</button></div>
        <div class="surf" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="row" style="gap:8px">${ICN('users', 22)}<b class="hd">Entre tots</b></span><span class="tag eco">12.480 kg</span></div><p class="fn mut" style="margin:8px 0 10px">Objectiu del mes: 15.000 kg de CO₂e. Tu hi has aportat 25 kg, un 0,2 % del total.</p><div class="bar lt"><i style="width:83%"></i></div></div></section>
      <section class="px" id="p-routes"><button type="button" class="yearban cc press" data-year><span>${ICN('sparkle', 22, '#1FD08A')}</span><span class="f1" style="text-align:left"><span class="hd" style="display:block;color:#fff">El teu any amb GreenVallès ja és aquí</span><span class="fn" style="color:rgba(255,255,255,.8)">342 km sense cotxe · comparteix-ho</span></span>${ICN('chevR', 18, '#fff')}</button>
        <h2 class="t2" style="margin:26px 0 10px">Les teves rutes</h2>${seg(['Rutes', 'Desades'], 0, 'rt')}<div data-rlist style="margin-top:12px"></div>
        <p class="fn mut" style="margin-top:12px">Dades il·lustratives. Les fotos de llocs són composicions fetes per programa.</p></section>`,
    mount(el, p, pg) {
      const segs = el.querySelectorAll('.segc');
      IOS.segmented(segs[0]);
      IOS.segmented(segs[1], i => routes(el, i, true));
      el.addEventListener('click', e => {
        if (e.target.closest('[data-set]')) pg.stack.push(23);
        if (e.target.closest('[data-shop]')) App.switchTab('recompenses');
        if (e.target.closest('[data-chal]')) pg.stack.push(42);
        if (e.target.closest('[data-year]')) IOS.Modal.present(43, {}, { kind: 'cover' });
        if (e.target.closest('[data-explore]')) App.switchTab('explorar');
        const c = e.target.closest('#p-stats .chip'); if (c) { el.querySelectorAll('#p-stats .chip').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.textContent; }); }
      });
      routes(el, p.saved ? 1 : 0, false);
      if (p.saved) { const b = segs[1].querySelectorAll('button')[1]; setTimeout(() => b.click(), 60); }
      if (p.scrollTo) setTimeout(() => { const t = el.querySelector(p.scrollTo); if (t) pg.scroll.scrollTop = t.offsetTop - 104; }, 60);
    },
    appear(el, p, pg) { goal(el); peek(pg); },
    reappear(el, p, pg) { goal(el); peek(pg); }
  };
  /* mateix objectiu que a la botiga (2.000 punts; unes 150 per ruta, il·lustratiu) */
  function goal(el) {
    const pct = Math.min(100, Math.round(App.st.points / 2000 * 100)), left = Math.max(0, 2000 - App.st.points);
    el.querySelector('[data-pts]').textContent = fmt(App.st.points); el.querySelector('[data-ppct]').textContent = pct + ' %'; el.querySelector('[data-pbar]').style.width = pct + '%';
    el.querySelector('[data-pleft]').textContent = left ? `Et falten unes ${Math.max(1, Math.round(left / 150))} rutes per desbloquejar-la.` : 'Ja la pots desbloquejar a la botiga.';
  }
  function routes(el, i, animate) {
    const L = el.querySelector('[data-rlist]');
    const saved = Object.keys(App.st.saved).filter(k => App.st.saved[k]);
    if (i === 0) L.innerHTML = `<div class="col gap12">${ugc('termes', '50% 58%', 'Itinerari termal de Caldes', 'Diumenge, 20 de setembre', ['5,4 km', '1:32', '+82 m'], '+120 punts')}${ugc('gallecs', '50% 42%', 'Sortida en família', 'Dissabte, 19 de setembre', ['4,2 km', '1:20', '+110 m'], '+95 punts')}</div>`;
    else if (!saved.length) L.innerHTML = `<div class="empty-x" style="padding:18px 0 6px"><div class="ring-s" style="width:96px;height:96px;border-radius:48px">${ICN('bookmark', 44, 'var(--tint-tx)')}</div><h3 class="t3" style="margin-top:8px">Encara no tens res desat</h3><p class="co mut" style="margin:2px 0 0;max-width:28ch">Desa rutes i llocs per trobar-los aquí quan els vulguis.</p><button type="button" class="btn auto" data-explore style="margin-top:12px;padding:12px 28px">Explorar rutes</button></div>`;
    else L.innerHTML = `<div class="col gap12">${saved.map(k => { const a = ACTS.find(x => x.id === k); return a ? `<div class="surf row" style="padding:10px">${photo(a.img, 'width:64px;height:64px;border-radius:10px;flex:none', a.pos)}<div class="f1"><div class="hd">${a.t}</div>${metaLine(a.m)}</div></div>` : ''; }).join('')}</div>`;
    if (animate) IOS.stagger(L.querySelectorAll('.ugc,.surf,.empty-x > *'));
  }
  /* la mascota treu el cap pel lateral dret, en la franja buida de la foto (si no hi cap, no surt) */
  function peek(pg) {
    if (App.tab !== 'perfil' || App.stack('perfil').top !== pg || IOS.Modal.top) return;
    if (!MascotUI.canShow('perfil')) return;
    if (pg.scroll.scrollTop > 40) return;
    setTimeout(() => {
      if (App.tab !== 'perfil' || App.stack('perfil').top !== pg || IOS.Modal.top || !MascotUI.canShow('perfil')) return;
      const el = pg.el, nav = IOS.rectIn(pg.nav), ti = IOS.rectIn(el.querySelector('[data-ptitle]')), nm = IOS.rectIn(el.querySelector('[data-pname]'));
      // franja lliure: entre la barra de navegació (botó d'ajustos) i el nom, a la dreta del títol
      const top = nav.y + nav.h + 4, bottom = nm.y - 6, size = Math.min(92, (bottom - top) / 1.14);
      if (size < 60) return;                    // amb text molt gran no hi ha lloc: no apareix
      const text = PEEK_MSGS[peekTurn % 2];
      const pk = MascotUI.peek({ key: 'perfil', text, top, size, white: true, dark: true, state: 'saludant', bubbleLift: size * 0.22, fit: { top, bottom, left: ti.x + ti.w + 10 } });
      if (pk) peekTurn++;
    }, IOS.rm() ? 200 : 650);
  }
  window.ProfileAPI = { peek, routes };

  /* 42 · Reptes de grup */
  const chal = (img, pos, title, who, val, goal, pct, left, mem, me) => `<article class="chal cc">${photo(img, 'position:absolute;inset:0', pos)}<div class="ugc-sc"></div>
    <div class="glass" style="position:absolute;left:10px;right:10px;bottom:10px;padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="fn" style="font-weight:600">${who}</span><span class="mem" aria-hidden="true">${mem.map(m => `<span>${m}</span>`).join('')}</span></div><div class="hd" style="margin-top:2px">${title}</div>
    <div class="row" style="justify-content:space-between;margin-top:6px"><span class="hd">${val} <span class="fn mut">de ${goal}</span></span><span class="fn mut">${pct} % · ${left}</span></div><div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div><p class="fn mut" style="margin:8px 0 0">${me}</p></div></article>`;
  SC[42] = {
    title: 'Reptes de grup', short: 'Reptes', tabbar: true,
    render: () => `<div class="px col gap16">${seg(['Els meus reptes', 'Descobrir'], 0)}
      ${chal('gallecs', '50% 38%', '100 km a peu en família', 'Família Puig · 4 membres', '64 km', '100 km', 64, 'queden 12 dies', ['A', 'M', 'J', 'L'], 'La teva aportació: 18 km (28 %)')}
      ${chal('smfai', '50% 42%', '500 check-ins al Vallès', 'Classe de 1r de Batxillerat · 26 membres', '312', '500', 62, 'queden 20 dies', ['N', 'E', 'O', '+'], 'La teva aportació: 14 check-ins')}
      <button type="button" class="btn">${ICN('plus', 20)} Crea un repte</button><p class="fn mut" style="margin:0">Grups, xifres i persones: il·lustratius. Reptes amb escoles o menors de 14 anys: <span class="pend">Pendent de confirmar</span></p></div>`,
    mount(el) { IOS.segmented(el.querySelector('.segc')); }
  };
  /* 43 · El teu any amb GreenVallès (pantalla completa, format història) */
  SC[43] = {
    title: 'El teu any amb GreenVallès', nav: false, tabbar: false, cls: 'dark story', sb: 'light-always',
    render: () => `<div class="pimg bg-gallecs" style="position:absolute;inset:0;background-position:50% 30%"></div><div class="story-sc"></div>
      <div class="row" style="position:absolute;left:12px;right:12px;top:58px;gap:4px" aria-hidden="true">${[1, 1, 0, 0, 0].map(v => `<i style="flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,${v ? '.95' : '.35'})"></i>`).join('')}</div>
      <div class="row" style="position:absolute;left:12px;right:4px;top:66px;justify-content:space-between"><span class="row" style="gap:8px;color:#fff">${ValiaAnim.logoSVG({ variant: 'mono', size: 24, small: true })}<b class="hd">GreenVallès</b></span><button type="button" class="iconbtn dk" data-close aria-label="Tancar"><span class="gl">${ICN('x', 20, '#fff')}</span></button></div>
      <div class="px" style="position:absolute;left:0;right:0;top:230px;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,.45)"><p class="fn" style="font-weight:600;color:rgba(255,255,255,.9);margin:0">El teu any amb GreenVallès · 2026</p><h1 class="t1" style="margin-top:8px">342 km sense cotxe</h1><p class="co" style="margin:8px 0 0;color:rgba(255,255,255,.9)">Has descobert el Vallès a peu i en bici.</p></div>
      <div class="story-bot" style="position:absolute;left:16px;right:16px;bottom:calc(var(--safe-b) + 8px);display:flex;flex-direction:column;gap:16px"><div class="glass yr" style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px"><div><b>61 kg</b><span>CO₂e evitat (estimat)</span></div><div><b>18</b><span>llocs de patrimoni</span></div><div><b>9</b><span>comerços Km0</span></div><div><b>Maig</b><span>el teu mes més actiu</span></div></div>
      <div class="row acts2" style="gap:8px"><button type="button" class="btn f1">${ICN('share2', 20)} Compartir</button><button type="button" class="btn f1" style="background:rgba(255,255,255,.16);color:#fff">${ICN('download', 20, '#fff')} Desar</button></div></div>`,
    mount(el) { el.querySelector('[data-close]').addEventListener('click', () => IOS.Modal.dismiss()); }
  };

  /* 23 · Ajustos */
  SC[23] = {
    title: 'Ajustos', large: true, tabbar: true, cls: 'grouped',
    render: () => `<h2 class="gtitle">Compte</h2><div class="glist">${grow('user', '', 'Dades personals')}${grow('mail', 'b', 'Correu i contrasenya')}</div>
      <h2 class="gtitle">Mapes i seguretat</h2><div class="glist">${grow('download', '', 'Mapes sense connexió', '2 rutes', { act: 'go39', nou: 1 })}${grow('shield', 'r', 'Seguretat i contactes', '2', { act: 'go41', nou: 1 })}</div>
      <h2 class="gtitle">Preferències</h2><div class="glist">${grow('globe', 'b', 'Idioma', 'Català')}${grow('route', 'g', 'Unitats', 'Quilòmetres')}${grow('layers', 'k', 'Aparença', 'Automàtica')}</div>
      <h2 class="gtitle">Avisos i privacitat</h2><div class="glist">${grow('bell', 'r', 'Notificacions')}${grow('lock', 'g', 'Privacitat i dades')}${grow('pin', 'b', 'Ubicació', "Mentre s'usa")}</div>
      <h2 class="gtitle">Suport</h2><div class="glist">${grow('text', 'b', 'Accessibilitat', '', { act: 'go24' })}${grow('help', 'o', 'Ajuda i suport', '', { act: 'go25' })}</div>
      <div class="glist" style="margin-top:28px"><button type="button" class="grow" data-act="logout" style="justify-content:center"><span class="redx bd row" style="gap:8px">${ICN('out', 18)} Tancar la sessió</span></button></div><p class="gfoot" style="text-align:center">Versió 0.6 (prototip)</p>`,
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        const a = e.target.closest('[data-act]'); if (!a) return; const k = a.dataset.act;
        if (k === 'go39') pg.stack.push(39); if (k === 'go24') pg.stack.push(24); if (k === 'go25') pg.stack.push(25);
        if (k === 'go41') IOS.Modal.present(41, {}, { detents: ['large'] });
        if (k === 'logout') IOS.Alert.show({ title: 'Vols tancar la sessió?', buttons: [{ t: 'Cancel·la' }, { t: 'Tancar la sessió', style: 'red pref', on: () => App.startOnboarding(2) }] });
      });
    }
  };
  /* 39 · Mapes sense connexió */
  const dl = (img, pos, t, mb, stt, ok) => `<div class="row" style="padding:8px 0">${photo(img, 'width:56px;height:56px;border-radius:10px;flex:none', pos)}<div class="f1"><div class="hd">${t}</div><div class="fn mut">${mb} · <span style="color:${ok ? 'var(--tint-tx)' : 'var(--label)'};font-weight:600">${stt}</span></div></div><button type="button" class="iconbtn fill" aria-label="${ok ? 'Esborrar la descàrrega' : 'Actualitzar la descàrrega'}"><span class="gl">${ICN(ok ? 'trash' : 'refresh', 20)}</span></button></div>`;
  SC[39] = {
    title: 'Mapes sense connexió', short: 'Mapes', tabbar: true,
    render: () => `<div class="px"><div class="surf" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="hd">Espai al mòbil</span><span class="fn mut">24 MB de 2 GB</span></div><div class="bar lt" style="margin-top:10px"><i style="width:4%"></i></div><p class="fn mut" style="margin:8px 0 0">2 de 20 rutes descarregades (límit proposat).</p></div>
      <div class="glist" style="margin:14px 0 0"><div class="grow swrow"><span class="f1 bd">Descarregar només amb Wi-Fi</span>${sw(true, 'Descarregar només amb Wi-Fi')}</div><div class="grow swrow"><span class="f1 bd">Actualitzar automàticament</span>${sw(true, 'Actualitzar automàticament')}</div></div>
      <h2 class="t3" style="margin:24px 0 6px">Rutes descarregades</h2>${dl('termes', '50% 60%', 'Itinerari termal de Caldes', '12 MB', 'Actualitzada', 1)}${dl('smfai', '50% 50%', 'Sant Miquel del Fai', '12 MB', 'Hi ha canvis', 0)}
      <div class="info" style="margin-top:14px">${ICN('info', 20, 'var(--tint-tx)')}<span>Cada descàrrega inclou el mapa, el traçat, els check-ins i les fitxes de patrimoni. Els check-ins fets sense cobertura s'envien quan tornes a tenir connexió.</span></div></div>`
  };
  /* 24 · Accessibilitat (connectada als ajustos reals del prototip) */
  const DT = [[1, 'Predeterminat'], [1.12, 'Gran'], [1.35, 'Molt gran'], [1.94, 'Accessibilitat (AX2)']];
  SC[24] = {
    title: 'Accessibilitat', tabbar: true, cls: 'grouped',
    render: () => `<h2 class="gtitle">Mida del text</h2><div class="glist" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span style="font-size:13px;font-weight:600">A</span><span class="fn mut" data-dtl>Predeterminat</span><span style="font-size:22px;font-weight:600">A</span></div>
        <div class="dtsteps" role="radiogroup" aria-label="Mida del text">${DT.map((d, i) => `<button type="button" role="radio" aria-checked="false" aria-label="${d[1]}" data-dt="${d[0]}"><i></i></button>`).join('')}</div>
        <p class="co" style="margin:12px 0 0">Descobreix el Vallès que tens a tocar.</p></div>
      <p class="gfoot">L'app segueix la mida de text del sistema (text dinàmic).</p>
      <h2 class="gtitle">Aparença</h2><div class="px">${seg(['Clar', 'Fosc', 'Automàtic'], 2)}</div><p class="gfoot">Mode fosc: <span class="pend">Pendent de confirmar</span></p>
      <h2 class="gtitle">Visualització</h2><div class="glist"><div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Contrast alt</span><span class="fn mut">Reforça colors i vores</span></span>${sw(false, 'Contrast alt')}</div>
        <div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Reduir moviment</span><span class="fn mut">Fosos suaus en lloc de moviments; la mascota queda quieta</span></span><button type="button" class="sw" role="switch" aria-checked="${IOS.settings.rm}" aria-label="Reduir moviment" data-rm></button></div></div>
      <p class="gfoot">Si «Reduir moviment» està activat al sistema, l'app el segueix automàticament.</p>`,
    mount(el) {
      IOS.segmented(el.querySelector('.segc'));
      const paint = () => { el.querySelectorAll('[data-dt]').forEach(b => b.setAttribute('aria-checked', +b.dataset.dt === IOS.settings.dt)); const d = DT.find(x => x[0] === IOS.settings.dt); el.querySelector('[data-dtl]').textContent = d ? d[1] : ''; };
      el.addEventListener('click', e => { const b = e.target.closest('[data-dt]'); if (b) { IOS.set('dt', +b.dataset.dt); paint(); } });
      el.querySelector('[data-rm]').addEventListener('toggle', e => IOS.set('rm', e.detail));
      paint();
    }
  };
  /* 25 · Ajuda i suport */
  const FAQ = [["Puc fer servir l'app sense compte?", 'Sí, però amb menys funcions disponibles. Pots crear un compte quan vulguis.'], ['Com funcionen els check-ins?', "Quan arribes a un punt de la ruta, l'app el marca com a fet. No es grava el recorregut."], ['Puc fer una ruta sense cobertura?', 'Sí, si l\'has descarregada abans des del detall de la ruta.'], ["Com informo d'un error en una ruta?", 'Des del botó «Informar d\'un problema en una ruta», més avall.']];
  SC[25] = {
    title: 'Ajuda i suport', short: 'Ajuda', tabbar: true,
    render: () => `<div class="px"><label class="search">${ICN('search', 18)}<span class="sr">Cerca a l'ajuda</span><input type="search" placeholder="Cerca a l'ajuda"></label>
      <div class="glist" style="margin:14px 0 0">${FAQ.map((f, i) => `<div class="faq"><button type="button" class="grow" aria-expanded="${i === 0}" data-faq><span class="f1 hd">${f[0]}</span><span class="chev">${ICN(i === 0 ? 'chevU' : 'chevD', 20)}</span></button><div class="faq-a co mut" ${i === 0 ? '' : 'hidden'}>${f[1]}</div></div>`).join('')}</div>
      <div class="surf" style="margin-top:16px;padding:16px"><h3 class="hd">No trobes la resposta?</h3><p class="fn mut" style="margin:4px 0 12px">Escriu-nos i et respondrem.</p><div class="col gap8"><button type="button" class="btn sm" style="width:100%">${ICN('msg', 18)} Escriure al suport</button><button type="button" class="btn out sm" style="width:100%">Informar d'un problema en una ruta</button></div></div>
      <p class="fn mut" style="margin-top:10px">Respostes del prototip. Preguntes i canal de suport reals: <span class="pend">Pendent de confirmar</span></p></div>`,
    mount(el) {
      el.addEventListener('click', e => { const b = e.target.closest('[data-faq]'); if (!b) return; const a = b.nextElementSibling, open = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', open); b.querySelector('.chev').innerHTML = ICN(open ? 'chevU' : 'chevD', 20); a.hidden = !open;
        if (open && !IOS.rm()) IOS.anim(a, [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }], IOS.S.micro); });
    }
  };
})();
