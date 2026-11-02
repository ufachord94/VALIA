/* ===================== Pantalles · ruta guiada amb check-ins (19, 20, 40, 41 i 21) ===================== */
const Route = (function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const live = o => `<div class="map" role="img" aria-label="Mapa de la ruta amb la teva posició i 2 check-ins fets">${mapSVG(393, 852, Object.assign({ route: 'caldes', pins: [[.14, .86, 'start'], [.22, .72, 'chk'], [.3, .47, 'chk'], [.5, .38, 'me']], seed: 7 }, o || {}))}</div>`;
  let timer = 0, secs = 42 * 60 + 18;
  const fmtT = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  /* 19 · Ruta guiada (pantalla completa) */
  SC[19] = {
    title: 'Ruta en curs', nav: false, tabbar: false, cls: 'routepg',
    render: () => `<div data-map>${live()}</div>`,
    overlay: () => `<div class="pill cc" role="status" style="top:66px"><span class="dot" data-dot></span><span data-pill>Ruta en curs · a peu</span></div>
      <div class="nextc card cc" data-next><span class="gic k" style="width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:var(--bg2);color:var(--label)">${ICN('landmark', 18)}</span><div class="f1"><div class="fn mut" data-nd>Proper check-in · a 200 m</div><div class="hd">Pont romànic</div></div><button type="button" class="tbtn" data-poi>Veure fitxa</button></div>
      <div class="col" style="position:absolute;right:8px;top:206px;z-index:12"><button type="button" class="iconbtn" aria-label="Capes del mapa"><span class="gl">${ICN('layers', 20)}</span></button><button type="button" class="iconbtn" aria-label="Centrar en la meva ubicació"><span class="gl">${ICN('locate', 20)}</span></button></div>
      <div class="rpanel cc" data-panel><div class="grab" aria-hidden="true"></div>
        <div class="col" style="align-items:center"><div class="num" style="font-size:calc(40px*var(--dtL))" data-time role="timer" aria-label="Temps de la ruta">42:18</div><div class="fn mut">Temps</div></div>
        <div class="row stats3" style="margin-top:12px;text-align:center"><div class="f1"><b class="t3">2,3 km</b><div class="fn mut">Falten</div></div><div class="f1"><b class="t3">2 de 4</b><div class="fn mut">Check-ins</div></div><div class="f1"><b class="t3">+64 m</b><div class="fn mut">Desnivell</div></div></div>
        <div class="row" style="justify-content:space-between;margin-top:12px;padding:0 26px"><button type="button" class="iconbtn fill" data-lock aria-label="Bloquejar la pantalla"><span class="gl" style="width:52px;height:52px;border-radius:26px">${ICN('lock', 22)}</span></button><button type="button" class="bigbtn press" data-pause aria-label="Posar en pausa">${ICN('pause', 32, '#0B0D0C')}</button><button type="button" class="iconbtn fill" data-shield aria-label="Seguretat: ubicació en directe i 112"><span class="gl" style="width:52px;height:52px;border-radius:26px">${ICN('shield', 22)}</span></button></div>
        <p class="fn mut row" style="justify-content:center;gap:4px;margin:10px 0 0">${ICN('eyeOff', 14)} No gravem el teu recorregut</p></div>
      <div data-alertk></div>`,
    mount(el, p, pg) {
      clearInterval(timer); secs = 42 * 60 + 18;
      timer = setInterval(() => { if (pg.paused) return; secs++; const t = el.querySelector('[data-time]'); if (t) t.textContent = fmtT(secs); }, 1000);
      pg.cleanups.push(() => clearInterval(timer));
      el.addEventListener('click', e => {
        if (e.target.closest('[data-poi]')) pg.stack.push(18);
        if (e.target.closest('[data-lock]')) IOS.Toast.show('Pantalla bloquejada', 'lock');
        if (e.target.closest('[data-pause]')) { pg.paused = true; el.querySelector('[data-pill]').textContent = 'En pausa'; el.querySelector('[data-dot]').style.background = '#636366'; IOS.Modal.present(20, {}, { detents: ['medium', 'large'], detent: IOS.settings.dt >= 1.3 ? 'large' : 'medium', mediumFrac: 0.5, dismissable: false }); }
        if (e.target.closest('[data-shield]')) IOS.Modal.present(41, {}, { detents: ['large'] });
        if (e.target.closest('[data-back]')) { Route.deviate(false); }
        if (e.target.closest('[data-ign]')) { Route.deviate(false); }
      });
      if (p.deviate) setTimeout(() => Route.deviate(true), 400);
      Route.page = pg;
    }
  };
  /* 40 · Avís: t'has desviat del camí */
  function deviate(on) {
    const pg = Route.page; if (!pg) return; const el = pg.el, host = el.querySelector('[data-alertk]');
    el.querySelector('[data-map]').innerHTML = live(on ? { pins: [[.14, .86, 'start'], [.22, .72, 'chk'], [.3, .47, 'chk'], [.36, .62, 'off']], extra: '<path d="M141 528 L118 402" stroke="#0B0D0C" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>' } : {});
    el.querySelector('[data-next]').style.visibility = on ? 'hidden' : '';
    if (!on) { const a = host.firstElementChild; if (a) IOS.fade(a, 1, 0, 180).then(() => { host.innerHTML = ''; }); el.querySelector('[data-nd]').textContent = 'Proper check-in · a 200 m'; return; }
    host.innerHTML = `<div class="alertk cc" role="alert"><div class="row" style="align-items:flex-start"><span style="width:40px;height:40px;border-radius:10px;background:#D70015;display:grid;place-items:center;flex:none">${ICN('alert', 22, '#fff')}</span><div class="f1"><div class="hd">T'has desviat del camí</div><p class="fn" style="margin:2px 0 0;color:rgba(255,255,255,.86)">Ets a 60 m de la ruta. Torna enrere uns 40 m i agafa el camí de la dreta.</p></div></div>
      <div class="row acts2" style="gap:8px;margin-top:12px"><button type="button" class="btn sm f1" data-back style="width:auto">${ICN('nav', 18)} Com hi torno</button><button type="button" class="btn sm f1" data-ign style="width:auto;background:rgba(255,255,255,.14);color:#fff">Ignora</button></div>
      <p class="c1 row" style="gap:4px;margin:10px 0 0;color:rgba(255,255,255,.8)">${ICN('vibrate', 14)} Vibració i so en sortir de la ruta · sense gravar</p></div>`;
    const a = host.firstElementChild;
    if (IOS.rm()) IOS.fade(a, 0, 1, 220); else IOS.anim(a, [{ transform: 'translateY(-130%)' }, { transform: 'none' }], Spring.spring(0.42, 0.78));
    el.querySelector('[data-nd]').textContent = 'Proper check-in · Pont romànic · 350 m';
  }

  /* 20 · Ruta en pausa (fulla mitjana) */
  SC[20] = {
    title: 'Ruta en pausa', nav: false, tabbar: false,
    render: () => `<div class="px" style="padding-top:4px"><h2 class="t2" style="text-align:center">Ruta en pausa</h2>
      <div class="row stats3" style="margin:14px 0 18px;text-align:center"><div class="f1"><b class="t3" data-pt>42:18</b><div class="fn mut">Temps</div></div><div class="f1"><b class="t3">2 de 4</b><div class="fn mut">Check-ins</div></div><div class="f1"><b class="t3">+64 m</b><div class="fn mut">Desnivell</div></div></div>
      <div class="col gap8"><button type="button" class="btn" data-resume>Reprendre</button><button type="button" class="btn out" data-finish>Finalitzar</button><button type="button" class="tbtn red" data-quit style="width:100%">Abandonar la ruta</button></div></div>`,
    mount(el) {
      el.querySelector('[data-pt]').textContent = fmtT(secs);
      el.querySelector('[data-resume]').addEventListener('click', () => { IOS.Modal.dismiss().then(() => { const pg = Route.page; if (pg) { pg.paused = false; pg.el.querySelector('[data-pill]').textContent = 'Ruta en curs · a peu'; pg.el.querySelector('[data-dot]').style.background = ''; } }); });
      // el resum puja per sobre de la ruta; quan ja és a dalt, la ruta es tanca per sota (sense passar pel detall)
      el.querySelector('[data-finish]').addEventListener('click', async () => { clearInterval(timer); await IOS.Modal.dismiss(); const under = IOS.Modal.list.slice(); await IOS.Modal.present(21, {}, { kind: 'cover' }); under.forEach(m => IOS.Modal.drop(m)); });
      el.querySelector('[data-quit]').addEventListener('click', () => IOS.Alert.show({ title: 'Vols abandonar la ruta?', msg: 'Conservaràs els punts dels check-ins que ja has fet.', buttons: [{ t: 'Cancel·la' }, { t: 'Abandonar', style: 'red pref', on: () => IOS.Modal.dismissAll() }] }));
    }
  };
  /* 41 · Seguretat: ubicació en directe i 112 */
  SC[41] = {
    title: 'Seguretat', nav: false, tabbar: false,
    render: () => `<div class="shead"><h2 class="t2">Seguretat</h2><button type="button" class="iconbtn fill" data-close aria-label="Tancar"><span class="gl">${ICN('x', 18)}</span></button></div>
      <div class="px"><div class="surf row" style="padding:14px 16px;align-items:flex-start"><div class="f1"><div class="hd">Comparteix la teva ubicació en directe</div><p class="fn mut" style="margin:2px 0 0">Fins a 3 contactes veuran on ets mentre dura la ruta. S'atura sola quan l'acabes.</p></div>${sw(true, 'Comparteix la teva ubicació en directe')}</div>
      <h3 class="gtitle" style="padding-left:4px">Contactes (2 de 3)</h3>
      <div class="col gap8">${[['A', 'Anna', 'Veu la teva ubicació'], ['P', 'Pau', 'Enllaç enviat']].map(c => `<div class="row"><span class="ctc">${c[0]}</span><div class="f1"><div class="hd">${c[1]}</div><div class="fn mut">${c[2]}</div></div>${ICN('checkC', 20, 'var(--tint-tx)')}</div>`).join('')}<button type="button" class="row grow" style="padding-left:0"><span class="ctc" style="background:var(--bg2)">${ICN('userPlus', 20)}</span><span class="f1 hd">Afegeix un contacte</span></button></div>
      <button type="button" class="btn gray sm" style="width:100%;margin-top:12px">${ICN('link', 18)} Enviar l'enllaç de nou</button>
      <button type="button" class="btn red" data-112 style="margin-top:26px">${ICN('phone', 20, '#fff')} Trucar al 112</button>
      <div class="row fn mut" style="justify-content:space-between;margin-top:10px"><span>Les teves coordenades: 41,6323 N · 2,1667 E</span><button type="button" class="tbtn" data-copy>Copiar</button></div>
      <p class="fn mut" style="margin-top:8px">Contactes i coordenades: il·lustratius. <span class="pend">Pendent de confirmar</span></p></div>`,
    mount(el) {
      el.querySelector('[data-close]').addEventListener('click', () => IOS.Modal.dismiss());
      el.querySelector('[data-112]').addEventListener('click', () => IOS.Alert.show({ title: 'Trucar al 112?', msg: 'En el prototip no es fa cap trucada.', buttons: [{ t: 'Cancel·la' }, { t: 'Trucar', style: 'pref red' }] }));
      el.querySelector('[data-copy]').addEventListener('click', () => IOS.Toast.show('Coordenades copiades', 'copy'));
    }
  };
  /* 21 · Resum de la ruta (pantalla completa) */
  SC[21] = {
    title: 'Resum', tabbar: false, back: false, cls: 'notab',
    navLeft: () => `<button type="button" class="navbtn press" data-close aria-label="Tancar">${ICN('x', 24)}</button>`,
    render: () => `<div style="height:200px" class="cc">${mapSVG(393, 200, { route: 'caldes', pins: [[.14, .86, 'start'], [.82, .2, 'end'], [.3, .47, 'chk'], [.62, .3, 'chk']], seed: 5 })}</div>
      <div class="px" style="padding-top:14px"><div class="row"><h1 class="t2 f1">Itinerari termal de Caldes</h1><button type="button" class="iconbtn" aria-label="Editar el títol">${ICN('pencil', 20)}</button></div><p class="fn mut" style="margin:2px 0 12px">Diumenge, 20 de setembre · 10:12</p>
        <div class="row stats3" style="gap:8px;align-items:stretch"><div class="stat"><b>5,4 km</b><span>Distància</span></div><div class="stat"><b>1:32:10</b><span>Temps</span></div></div>
        <div class="row stats3" style="gap:8px;align-items:stretch;margin-top:8px"><div class="stat"><b>+82 m</b><span>Desnivell</span></div><div class="stat"><b>4 de 4</b><span>Check-ins</span></div></div>
        <div class="surf row" style="margin-top:12px;padding:14px 16px">${ICN('bolt', 24, 'var(--tint-tx)')}<div class="f1"><b class="hd">+120 punts d'energia</b><div class="fn mut">Per aquesta ruta</div></div></div>
        <h2 class="hd" style="margin:16px 0 8px">Fotos de la sortida</h2><div class="row gap8">${photo('termes', 'width:84px;height:84px;border-radius:12px;flex:none', '20% 60%')}${photo('termes', 'width:84px;height:84px;border-radius:12px;flex:none', '80% 45%')}<button type="button" class="cc" aria-label="Afegir una foto" style="width:84px;height:84px;border-radius:12px;background:var(--bg2);display:grid;place-items:center">${ICN('plus', 26)}</button></div>
        <div class="glist" style="margin:16px 0 0"><button type="button" class="grow ic"><span class="gic g">${ICN('eye', 18, '#fff')}</span><span class="f1 bd">Visible per a</span><span class="gv">Només jo</span><span class="chev">${ICN('chevR', 18)}</span></button></div>
        <p class="fn mut" style="margin-top:10px">Dades il·lustratives.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-save>Desar la ruta</button></div>`,
    mount(el) {
      el.querySelector('[data-close]').addEventListener('click', () => IOS.Modal.dismissAll());
      el.querySelector('[data-save]').addEventListener('click', async () => { await IOS.Modal.dismissAll(); App.st.points += 120; IOS.Toast.show('Ruta desada · +120 punts', 'checkC'); });
    }
  };
  return { start(o) { return IOS.Modal.present(19, o || {}, { kind: 'cover' }); }, deviate, page: null };
})();
