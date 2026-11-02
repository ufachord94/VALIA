/* ===================== Pantalles · primera vegada (2–10 i 36) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const SLIDES = [
    { img: 'family_raw', h: 'Descobreix el Vallès que tens a tocar.', p: "Natura, cultura i història d'un territori que potser encara no coneixes." },
    { img: 'hikers_raw', h: "Mou-te a l'aire lliure, amb seny.", p: "Activitat física i turisme sostenible per gaudir del territori sense malmetre'l." },
    { img: 'sea_raw', h: 'Una IA pròpia que coneix el territori.', p: "T'ajuda a descobrir què fer a prop de casa, a la teva manera." }
  ];
  /* indicadors com a forats al panell (v4/v5) */
  function maskFor(idx, Hh) {
    const w = [0, 1, 2].map(i => (i === idx ? 22 : 8)), gap = 10; let x = 196.5 - (w.reduce((a, b) => a + b) + gap * 2) / 2, sh = '';
    w.forEach((wi, i) => { sh += `<rect x="${x}" y="22" width="${wi}" height="8" rx="4" fill="#000" fill-opacity="${i === idx ? 1 : 0.55}"/>`; x += wi + gap; });
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='393' height='${Hh}' viewBox='0 0 393 ${Hh}'><defs><mask id='m'><rect width='393' height='${Hh}' fill='#fff'/>${sh}</mask></defs><rect width='393' height='${Hh}' fill='#000' mask='url(#m)'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
  window.ACCESS_MASK = maskFor;

  /* 2 · Accés (versió corregida v5: fotos de l'equip, nom gran en Fraunces, radis menors) */
  SC[2] = {
    title: 'Accés', nav: false, cls: 'dark acc', sb: 'light-always', tabbar: false,
    render: () => `<div class="acc-car" data-car role="region" aria-label="Presentació: 3 diapositives">${SLIDES.map((s, i) => `<section class="acc-sl" aria-label="Diapositiva ${i + 1} de 3"><div class="pimg bg-${s.img}" style="position:absolute;left:0;right:0;top:0;height:620px"></div><div class="acc-scrim"></div><div class="acc-dot"></div><div class="acc-tx"><h2>${s.h}</h2><p>${s.p}</p></div></section>`).join('')}</div>
      <div class="acc-top"><span class="acc-logo">${ValiaAnim.logoSVG({ variant: 'mono', size: 32, label: 'GreenVallès' })}</span><span class="acc-wm">GreenVallès</span></div>
      <div class="acc-pan"><div class="acc-in"><button type="button" class="btn" data-go="reg">Començar ara</button><button type="button" class="btn out acc-md" data-go="login">Iniciar sessió</button><button type="button" class="tbtn mut" data-go="guest">Continuar sense compte</button></div></div>
      <div class="sr" aria-live="polite" data-pos>Diapositiva 1 de 3</div>`,
    mount(el, p, pg) {
      const car = el.querySelector('[data-car]'), pan = el.querySelector('.acc-pan'), pos = el.querySelector('[data-pos]'); let last = -1;
      let ph = 281;
      const paint = i => { const m = maskFor(i, ph); pan.style.webkitMaskImage = m; pan.style.maskImage = m; };
      const upd = () => { const i = Math.max(0, Math.min(2, Math.round(car.scrollLeft / 393))); if (i === last) return; last = i; paint(i); pos.textContent = 'Diapositiva ' + (i + 1) + ' de 3'; };
      car.addEventListener('scroll', upd, { passive: true }); upd();
      // amb text gran el panell creix: els forats dels indicadors i el text de la foto el segueixen
      const fitPan = () => { ph = Math.max(281, Math.round(pan.offsetHeight)); el.style.setProperty('--panh', ph + 'px'); paint(Math.max(0, last)); };
      const ro = new ResizeObserver(fitPan); ro.observe(pan); fitPan(); pg.cleanups.push(() => ro.disconnect());
      el.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (!b) return; const g = b.dataset.go;
        if (g === 'reg') IOS.Modal.present(3, {}, { kind: 'dark' });
        if (g === 'login') IOS.Modal.present(6, {}, { kind: 'dark' });
        if (g === 'guest') Flow.toMain({ guest: true }); });
    }
  };

  /* fulles fosques del registre (v3): creu, títol, botons socials, separador i camp */
  const GOOG = '<svg viewBox="0 0 18 18" width="22" height="22" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2045c0-.638-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.3441 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"/><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"/></svg>';
  const APPL = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#000" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>';
  const xBtn = (lbl, left) => `<button type="button" class="iconbtn dkx" data-x style="position:absolute;top:63px;${left ? 'left:12px' : 'right:12px'};z-index:5" aria-label="${lbl}"><span class="gl" style="background:#2A2A2A;box-shadow:none;color:#fff">${ICN(left ? 'chevL' : 'x', 20, '#fff')}</span></button>`;
  const soc = (logo, t, g) => `<button type="button" class="btn soc" data-soc="${g}">${logo}<span>${t}</span></button>`;
  const dark = (inner, back) => `${xBtn(back ? 'Enrere' : 'Tancar', back)}<div class="dk-body">${inner}</div>`;

  SC[3] = {
    title: "Uneix-te gratis", nav: false, cls: 'dark', sb: 'light-always', tabbar: false,
    render: () => dark(`<h2 class="t1">Uneix-te gratis</h2><p class="co dk-desc">Accedeix a les funcions especials i descobreix el Vallès Oriental a la teva manera.</p>
      ${soc(GOOG, "Registra't amb Google", 'g')}${soc(APPL, "Registra't amb Apple", 'a')}
      <div class="dk-sep"><i></i><span>o</span><i></i></div>
      <label class="dk-inp"><span class="sr">Correu electrònic</span><input type="email" inputmode="email" autocomplete="email" placeholder="Correu electrònic" data-mail></label>
      <p class="fn dk-hint" data-hint hidden>Escriu el correu i prem «Continua».</p>`),
    mount(el, p, pg) {
      const inp = el.querySelector('[data-mail]');
      el.querySelector('[data-x]').addEventListener('click', () => { IOS.Keyboard.hide(); IOS.Modal.dismiss(); });
      const go = () => { if (!/.+@.+\..+/.test(inp.value)) { inp.value = inp.value || 'nom@exemple.cat'; } IOS.Keyboard.hide(); inp.blur(); pg.stack.push(7, { mail: inp.value }); };
      const open = () => { el.classList.add('kb'); el.querySelector('[data-hint]').hidden = false; IOS.Keyboard.show(inp, { go: 'Continua', onGo: go, onHide: () => el.classList.remove('kb') }); };
      inp.addEventListener('focus', open); inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
      el.addEventListener('click', e => { const b = e.target.closest('[data-soc]'); if (!b) return;
        IOS.Alert.show({ title: `«GreenVallès» vol utilitzar «${b.dataset.soc === 'g' ? 'google.com' : 'apple.com'}» per iniciar la sessió`, msg: 'Això permet que l\'aplicació i el lloc web comparteixin informació sobre tu.', buttons: [{ t: 'Cancel·la' }, { t: 'Continua', style: 'pref', on: () => Flow.afterSignup() }] }); });
      if (p.focus) setTimeout(() => inp.focus(), 80);
      if (p.alert) setTimeout(() => el.querySelector('[data-soc="g"]').click(), 120);
    },
    unmount() { IOS.Keyboard.hide(); }
  };
  SC[6] = {
    title: 'Inici de sessió', nav: false, cls: 'dark', sb: 'light-always', tabbar: false,
    render: () => dark(`<h2 class="t1">Et donem la benvinguda</h2><p class="co dk-desc">Inicia la sessió per continuar.</p>
      ${soc(GOOG, 'Inicia la sessió amb Google', 'g')}${soc(APPL, 'Inicia la sessió amb Apple', 'a')}
      <div class="dk-sep"><i></i><span>o</span><i></i></div>
      <label class="dk-inp"><span class="sr">Correu electrònic</span><input type="email" placeholder="Correu electrònic" autocomplete="username"></label>
      <label class="dk-inp"><span class="sr">Contrasenya</span><input type="password" placeholder="Contrasenya" autocomplete="current-password" data-pw><button type="button" class="iconbtn" data-eye aria-label="Mostrar la contrasenya" style="color:#6C6C70">${ICN('eye', 22)}</button></label>
      <button type="button" class="btn" data-login style="margin-top:8px">Iniciar sessió</button>
      <button type="button" class="tbtn" style="color:#A3A8A5;width:100%;margin-top:8px">Has oblidat la contrasenya?</button>`),
    mount(el) {
      el.querySelector('[data-x]').addEventListener('click', () => IOS.Modal.dismiss());
      el.querySelector('[data-eye]').addEventListener('click', e => { const i = el.querySelector('[data-pw]'); i.type = i.type === 'password' ? 'text' : 'password'; e.currentTarget.setAttribute('aria-label', i.type === 'password' ? 'Mostrar la contrasenya' : 'Amagar la contrasenya'); });
      el.querySelector('[data-login]').addEventListener('click', () => Flow.toMain({}));
      el.addEventListener('click', e => { if (e.target.closest('[data-soc]')) Flow.toMain({}); });
    }
  };
  SC[7] = {
    title: 'Verificació del correu', nav: false, cls: 'dark', sb: 'light-always', tabbar: false,
    render: p => dark(`<div class="dk-ring">${ICN('mail', 40, '#1FD08A')}</div><h2 class="t1">Revisa el teu correu</h2><p class="co dk-desc">Hem enviat un codi de 6 xifres a ${esc(p.mail || 'nom@exemple.cat')}.</p>
      <label class="otp" aria-label="Codi de verificació de 6 xifres"><input inputmode="numeric" maxlength="6" value="482" data-otp aria-label="Codi de verificació">${[0, 1, 2, 3, 4, 5].map(i => `<span data-o="${i}"></span>`).join('')}</label>
      <button type="button" class="btn" data-ver>Verificar</button><button type="button" class="tbtn" style="color:#A3A8A5;width:100%;margin-top:8px" data-again>Reenviar el codi d'aquí a 0:24</button>`, true),
    mount(el, p, pg) {
      el.querySelector('[data-x]').addEventListener('click', () => pg.stack.pop());
      const inp = el.querySelector('[data-otp]'), cells = [...el.querySelectorAll('[data-o]')];
      const paint = () => { const v = inp.value.replace(/\D/g, '').slice(0, 6); inp.value = v; cells.forEach((c, i) => { c.textContent = v[i] || ''; c.classList.toggle('f', i === v.length); }); };
      inp.addEventListener('input', paint); paint();
      el.querySelector('[data-ver]').addEventListener('click', () => Flow.afterSignup());
      let n = 24; const again = el.querySelector('[data-again]'); const t = setInterval(() => { n--; again.textContent = n > 0 ? `Reenviar el codi d'aquí a 0:${String(n).padStart(2, '0')}` : 'Reenviar el codi'; if (n <= 0) clearInterval(t); }, 1000); pg.cleanups.push(() => clearInterval(t));
    }
  };

  /* 36 · Interessos (opcional) */
  SC[36] = {
    title: "Els teus interessos", short: 'Interessos', back: false, tabbar: false, cls: 'onbpg',
    navLeft: () => `<span class="fn mut" style="padding-left:12px;font-weight:600">Pas opcional</span>`,
    navRight: () => `<button type="button" class="tbtn" data-act="skip">Omet</button>`,
    render: () => `<div class="px" style="padding-top:8px"><h1 class="t1">Què t'agrada fer?</h1><p class="co mut" style="margin:8px 0 0">Tria-ho en 10 segons. Ho pots canviar quan vulguis a Ajustos.</p>
      <h2 class="hd" style="margin:28px 0 6px">Activitats</h2><div class="chips" data-cnt>${chip('Caminar', 1)}${chip('Bicicleta')}${chip('Córrer')}${chip('Patrimoni', 1)}${chip('Gastronomia Km0', 1)}${chip('Natura')}</div>
      <h2 class="hd" style="margin:24px 0 6px">Nivell</h2>${seg(['Tranquil', 'Mitjà', 'Exigent'], 1)}
      <h2 class="hd" style="margin:24px 0 6px">Amb qui vas?</h2><div class="chips" data-cnt>${chip('Sol')}${chip('En parella')}${chip('Amb amics')}${chip('En família', 1)}</div></div>`,
    overlay: () => `<div class="bbar"><p class="fn mut" style="text-align:center;margin:0 0 8px" data-n>4 seleccions · ho farem servir per triar rutes</p><button type="button" class="btn" data-next>Continuar</button></div>`,
    mount(el, p, pg) {
      IOS.segmented(el.querySelector('.segc'));
      const cnt = () => { const n = el.querySelectorAll('[data-cnt] .chip[aria-pressed="true"]').length; el.querySelector('[data-n]').textContent = `${n} ${n === 1 ? 'selecció' : 'seleccions'} · ho farem servir per triar rutes`; };
      el.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) { const on = c.getAttribute('aria-pressed') !== 'true'; c.setAttribute('aria-pressed', on); c.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + c.textContent; cnt(); }
        if (e.target.closest('[data-next],[data-act="skip"]')) pg.stack.push(8); });
    }
  };
  /* 8 · Permís d'ubicació */
  SC[8] = {
    title: "Permís d'ubicació", short: 'Ubicació', back: false, nav: false, tabbar: false,
    render: () => `<div class="perm-map cc">${mapSVG(393, 340, { route: 'caldes', pins: [[.5, .6, 'me'], [.3, .3, 'poi'], [.72, .34, 'nat']], seed: 2 })}</div>
      <div class="px" style="padding-top:22px"><span class="tag" style="margin-bottom:10px">Pas 1 de 2</span><h1 class="t1" style="margin-top:10px">Troba rutes a prop teu</h1><p class="co mut" style="margin:8px 0 0">Fem servir la teva ubicació per mostrar rutes a prop, guiar-te durant la ruta i fer els check-ins. No gravem el recorregut.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Permetre ubicació</button><button type="button" class="tbtn" style="width:100%" data-no>Ara no</button></div>`,
    mount(el, p, pg) {
      const ask = () => IOS.Alert.show({ vertical: true, title: 'Permet que «GreenVallès» utilitzi la teva ubicació?', msg: 'La teva ubicació es fa servir per mostrar rutes a prop teu i fer els check-ins.', buttons: [{ t: 'Permet mentre s\'usa l\'app' }, { t: 'Permet només aquesta vegada' }, { t: 'No permetis' }] }).then(() => pg.stack.push(9));
      el.querySelector('[data-ok]').addEventListener('click', ask); el.querySelector('[data-no]').addEventListener('click', () => pg.stack.push(9));
      if (p.alert) setTimeout(ask, 350);
    }
  };
  SC[9] = {
    title: 'Permís de notificacions', short: 'Avisos', back: false, nav: false, tabbar: false,
    render: () => `<div class="px col" style="align-items:center;text-align:center;padding-top:190px"><div class="ring cc" style="width:120px;height:120px;border-radius:60px;background:var(--bg2);display:grid;place-items:center">${ICN('bell', 52, 'var(--tint-tx)')}</div><span class="tag" style="margin-top:22px">Pas 2 de 2</span><h1 class="t1" style="margin-top:10px">Vols rebre avisos?</h1><p class="co mut" style="margin:8px 0 0;max-width:30ch">Et podem avisar si et desvies del camí i quan hi hagi novetats.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Activar notificacions</button><button type="button" class="tbtn" style="width:100%" data-no>Ara no</button></div>`,
    mount(el, p, pg) {
      const ask = () => IOS.Alert.show({ title: '«GreenVallès» vol enviar-te notificacions', msg: 'Les notificacions poden incloure alertes, sons i icones. Es poden configurar a Configuració.', buttons: [{ t: 'No permetis' }, { t: 'Permet', style: 'pref' }] }).then(() => pg.stack.push(10));
      el.querySelector('[data-ok]').addEventListener('click', ask); el.querySelector('[data-no]').addEventListener('click', () => pg.stack.push(10));
      if (p.alert) setTimeout(ask, 350);
    }
  };
  SC[10] = {
    title: 'Privacitat', large: false, back: false, tabbar: false, cls: 'grouped',
    render: () => `<div class="px" style="padding-top:4px"><h1 class="t1">La teva privacitat</h1><p class="co mut" style="margin:8px 0 0">Tria què vols compartir. Ho pots canviar quan vulguis a Ajustos.</p></div>
      <div class="glist" style="margin-top:20px">${grow('pin', '', 'Ubicació durant la ruta', '', { sw: true })}${grow('shield', 'g', "Estadístiques d'ús anònimes", '', { sw: false })}${grow('mail', 'b', 'Novetats per correu', '', { sw: false })}</div>
      <p class="gfoot">La ubicació serveix per guiar-te i fer els check-ins. Les estadístiques ajuden a millorar l'app. Les novetats són opcionals.</p>
      <div class="px row" style="margin-top:20px;align-items:flex-start"><button type="button" class="chk" role="checkbox" aria-checked="true" aria-label="He llegit i accepto les condicions" data-chk>${ICN('check', 16)}</button><p class="fn" style="margin:12px 0 0">He llegit i accepto les <a class="lnk" href="#">Condicions d'ús</a> i la <a class="lnk" href="#">Política de privacitat</a>.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Acceptar i continuar</button></div>`,
    mount(el) {
      const c = el.querySelector('[data-chk]'), ok = el.querySelector('[data-ok]');
      c.addEventListener('click', () => { const v = c.getAttribute('aria-checked') !== 'true'; c.setAttribute('aria-checked', v); ok.disabled = !v; ok.style.opacity = v ? 1 : 0.4; });
      el.querySelectorAll('.lnk').forEach(a => a.addEventListener('click', e => { e.preventDefault(); IOS.Toast.show('Pendent de confirmar: textos legals', 'info'); }));
      ok.addEventListener('click', () => Flow.toMain({}));
    }
  };
})();
