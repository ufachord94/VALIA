/* ===================== Pantalla de càrrega (1) i fluxos d'entrada =====================
   Mateixa animació que la versió corregida (v5): la fulla vola, la persona camina i neix el globus.
   En acabar, la figura vola fins al xat i esdevé la mascota que saluda (transició compartida). */
const Flow = (function () {
  const CFG = { rig: ValiaRig.make({ N_REV: 7 }), K: 1.25, OY: 314, OX: 196.5, name: 'GreenVallès', font: "'GV Fraunces', Georgia, serif", size: 44, weight: 600, ls: -0.3, nameGap: 76, label: 'GreenVallès s\'està carregant' };
  const LOAD_AT = 3.8, MAX_T = 5.0;
  let scene = null, raf = 0, t0 = 0, exitAt = 0, exiting = false, dest = 'main', seekT = null, gen = 0;
  const $ = IOS.$;

  function boot(o) {
    o = o || {}; dest = o.first ? 'onb' : 'main'; exiting = false; gen++; seekT = null;
    cancelAnimationFrame(raf); IOS.Modal.clearAll(); IOS.Keyboard.hide();
    const sc = IOS.scenes.load;
    sc.innerHTML = `<div class="ld-bg bg-load"></div><div class="ld-veil"></div><div class="ld-mist"></div><svg class="ld-svg" viewBox="0 0 393 852" width="393" height="852" role="img" aria-label="${CFG.label}"></svg><button type="button" class="ld-skip" aria-label="Ometre l'animació">Omet</button>`;
    scene = new ValiaAnim.Scene(sc.querySelector('svg'), CFG);
    sc.querySelector('.ld-skip').addEventListener('click', () => { if (!exiting) exit(); });
    // la destinació es prepara a sota
    if (dest === 'main') { App.st.chat = []; App.startMain({ noGreet: true }); }
    else App.startOnboarding(2);
    IOS.scenes.main.hidden = true; IOS.scenes.onb.hidden = true; sc.hidden = false; sc.style.opacity = 1; sc.style.background = '';
    App.syncStatus();
    exitAt = computeExit();
    t0 = performance.now(); raf = requestAnimationFrame(frame);
  }
  function computeExit() {
    if (IOS.rm()) return 1.4;
    const R = CFG.rig, p0 = Math.floor(R.state(LOAD_AT).ph); let t = LOAD_AT;
    while (Math.floor(R.state(t).ph) === p0 && t < MAX_T) t += 0.002;
    return Math.min(t, MAX_T - 0.3);
  }
  /* si es navega a una altra pantalla mentre carrega, l'animació s'atura del tot */
  function cancel() { gen++; cancelAnimationFrame(raf); exiting = true; }
  function frame(now) {
    const t = seekT != null ? seekT : (now - t0) / 1000;
    if (!exiting) scene.render(t, IOS.rm());
    if (!exiting && t >= exitAt) exit();
    if (!exiting) raf = requestAnimationFrame(frame);
  }
  /* sortida */
  async function exit() {
    exiting = true; cancelAnimationFrame(raf);
    const my = gen, sc = IOS.scenes.load, target = IOS.scenes[dest];
    target.hidden = false; target.style.opacity = 0;
    if (dest === 'onb' || IOS.rm()) {
      await Promise.all([IOS.fade(target, 0, 1, 300), IOS.fade(sc, 1, 0, 300)]);
      if (my !== gen) return;
      sc.hidden = true; target.style.opacity = ''; App.showScene(dest);
      if (dest === 'main') { const pg = App.stack('xat').top; ChatAPI.greet(pg.chat); }
      return;
    }
    // vol de la figura fins a la mascota del xat
    const pg = App.stack('xat').top, C = pg.chat, gm = C.gm;
    const svg = sc.querySelector('svg'), fl = svg.querySelector('#vFlight'), fig = svg.querySelector('#vFig');
    const g = scene.g, tExit = (performance.now() - t0) / 1000, p = scene.pose(tExit), Xh = p.st.X;
    const P = [g.X0 + Xh * g.K, g.GROUND];
    gm.el.style.visibility = 'hidden';
    // el xat apareix per sota mentre el fons del bosc s'esvaeix; la bombolla i els suggeriments esperen la salutació
    sc.style.background = 'transparent';
    const gb = C.box.querySelector('[data-gb]'), sugs = [...C.box.querySelectorAll('.sug')];
    [gb, ...sugs].forEach(e => { if (e) e.style.opacity = 0; });
    const r = IOS.rectIn(gm.svg), ppu = r.h / 110, T = [r.x + (34 / 96) * r.w, r.y + (104 / 110) * r.h];
    const s1 = ppu / g.K;
    fig.removeAttribute('filter'); fig.style.transition = 'color .45s ease'; fig.style.color = '#0E8257';
    ['.ld-bg', '.ld-veil', '.ld-mist'].forEach(s => IOS.fade(sc.querySelector(s), 1, 0, 380));
    ['#vGlobe', '#vHalo', '#vWord'].forEach(s => { const e = svg.querySelector(s); if (e) IOS.fade(e, parseFloat(e.getAttribute('opacity') || 1), 0, 300); });
    sc.querySelector('.ld-skip').style.display = 'none';
    IOS.fade(target, 0, 1, 380);
    const tStart = performance.now(), sp = Spring.fn(0.62, 0.82, 0), D = 0.45;
    let wt = 0, lt = 0;
    await new Promise(res => {
      const step = now => {
        const tt = (now - tStart) / 1000, u = tt >= D ? 1 : 1 - sp(tt);
        wt += (tt - lt) * 0.9 * Math.max(0, 1 - u * 1.15); lt = tt;   // continua caminant i s'atura en arribar
        scene.pose(tExit + wt);
        const s = 1 + (s1 - 1) * u, x = P[0] + (T[0] - P[0]) * u, y = P[1] + (T[1] - P[1]) * u;
        fl.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${s.toFixed(4)}) translate(${-P[0]} ${-P[1]})`);
        if (my !== gen) res(); else if (tt < D) requestAnimationFrame(step); else res();
      };
      requestAnimationFrame(step);
    });
    if (my !== gen) return;
    // la mascota del xat pren el relleu des de la mateixa postura
    const last = scene.pose(tExit + wt), fromPose = shiftPose(last, -last.st.X);
    sc.hidden = true; sc.style.opacity = 1; target.style.opacity = ''; gm.el.style.visibility = '';
    App.showScene('main');
    gm.set('repos', { instant: true }); gm.set('saludant', { restart: true, fromPose, blend: 0.3 });
    const b = gb;
    if (b) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 300 });
    IOS.stagger(C.box.querySelectorAll('.sug'), { delay: 450 });
    MascotUI.announce('Assistent: Què et ve de gust fer avui?');
  }
  function shiftPose(p, dx) {
    const o = Mascot.mix(p, p, 0); const sx = a => { a[0] += dx; };
    [o.H, o.lF.K, o.lF.P, o.lN.K, o.lN.P, o.SN, o.SF, o.armN.E, o.armN.P, o.armF.E, o.armF.P, o.tip, o.top].forEach(sx); o.head = 0; o.fx = {}; return o;
  }
  /* altres transicions d'entrada */
  async function toMain(o) {
    o = o || {}; IOS.Keyboard.hide();
    const from = IOS.scenes[App.scene];
    await IOS.Modal.dismissAll();
    App.st.chat = [];
    App.startMain({ guest: !!o.guest, keep: true });
    const main = IOS.scenes.main; main.hidden = false;
    if (from && from !== main) { from.hidden = false; from.style.zIndex = 3; }
    if (IOS.rm()) await Promise.all([IOS.fade(main, 0, 1, 260), from ? IOS.fade(from, 1, 0, 260) : 0]);
    else await Promise.all([IOS.anim(main, [{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'none' }], Spring.spring(0.5, 0.9)), from ? IOS.anim(from, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(1.04)' }], Spring.spring(0.4, 1)) : 0]);
    if (from && from !== main) { from.hidden = true; from.style.zIndex = ''; from.style.opacity = ''; from.style.transform = ''; }
    main.style.opacity = ''; main.style.transform = '';
    App.showScene('main');
  }
  async function afterSignup() { IOS.Keyboard.hide(); await IOS.Modal.dismissAll(); App.onb.push(36); }
  function toOnboarding() { App.startOnboarding(2); setTimeout(() => IOS.Modal.present(3, {}, { kind: 'dark' }), 120); }
  function seek(t) { seekT = t; if (scene) { if (!exiting) scene.render(t, IOS.rm()); } }
  return { boot, cancel, toMain, afterSignup, toOnboarding, exit, seek, get scene() { return scene; }, cfg: CFG };
})();
