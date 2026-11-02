/* ===================== Pantalles · xat amb l'assistent (11, 12, 13, 29 i estats de la mascota) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const SUGG = ["Recomana'm una ruta per aquesta tarda", 'Pla de baix impacte ambiental', 'Què hi ha per fer avui?'];
  const STATUS = { repos: 'en línia', escoltant: "t'escolta…", pensant: 'pensant…', responent: 'escrivint…', error: 'sense connexió' };
  const actCard = () => `<button type="button" class="acard chatcard" data-open="17" aria-label="Itinerari termal de Caldes: 1 h 30, 5,4 km, +82 m. Obrir el detall">
      <div class="pimg cc bg-termes" data-hsrc style="height:130px;border-radius:12px;background-position:50% 62%"><span class="tag" style="position:absolute;left:8px;bottom:8px;background:rgba(18,20,19,.55);color:#fff;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)">${ICN('leaf', 14, '#1FD08A')} Baix impacte</span></div>
      <div style="padding:10px 2px 2px"><div class="row" style="gap:8px"><div class="f1"><div class="hd">Itinerari termal de Caldes</div><div class="fn mut">Caldes de Montbui · Circular</div></div><span class="mav" style="background:var(--label)">${ICN('arrow', 16, '#fff')}</span></div>${metaLine(['1 h 30', '5,4 km', '+82 m'])}</div></button>`;

  SC.chat = {
    title: 'Assistent', cls: 'chat', tabbar: true, sb: 'dark', scrollThreshold: 2,
    navCenter: () => `<span class="row" style="gap:8px;justify-content:center"><span class="mav" data-hav style="width:30px;height:30px;opacity:0" aria-hidden="true"></span><span class="col" style="align-items:flex-start;line-height:1.1"><span class="hd" style="font-size:var(--t-hd)">Assistent</span><span class="c1 mut" data-status>en línia</span></span></span>`,
    navRight: () => `<button type="button" class="navbtn press" data-new aria-label="Conversa nova">${ICN('pencil', 22)}</button>`,
    render: () => `<div class="chatbox" data-box></div>`,
    overlay: () => `<div class="composer" data-comp><label class="field"><span class="sr">Missatge per a l'assistent</span><input type="text" placeholder="Escriu un missatge…" enterkeyhint="send" data-in autocomplete="off"><button type="button" class="iconbtn" aria-label="Dictar" style="color:var(--label2)">${ICN('mic', 22)}</button></label><button type="button" class="send press" data-send aria-label="Enviar" disabled>${ICN('send', 20)}</button></div>`,
    mount(el, p, pg) {
      const C = pg.chat = { el, pg, box: el.querySelector('[data-box]'), inp: el.querySelector('[data-in]'), send: el.querySelector('[data-send]'), comp: el.querySelector('[data-comp]'), status: el.querySelector('[data-status]'), hav: el.querySelector('[data-hav]'), busy: false };
      C.havM = Mascot.create(C.hav, { size: 30, view: 'avatar', state: 'repos', label: 'Assistent' }); C.havM.el.style.color = '#fff';
      C.setState = s => { C.status.textContent = STATUS[s] || STATUS.repos; C.havM.set(s === 'repos' ? 'repos' : s); C.active().set(s === 'repos' ? 'repos' : s); };
      C.active = () => (C.gm && C.gm.el.isConnected ? C.gm : C.havM);
      render(C, true);
      C.inp.addEventListener('focus', () => openKbd(C));
      C.inp.addEventListener('input', () => { const v = C.inp.value.trim(); C.send.disabled = !v; if (C.busy) return; if (v) { if (C.active().state !== 'escoltant') C.setState('escoltant'); C.active().pulse(); } else C.setState('repos'); });
      C.inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(C); } });
      C.send.addEventListener('click', () => submit(C));
      el.querySelector('[data-new]').addEventListener('click', () => { App.st.chat = []; IOS.Keyboard.hide(); C.inp.value = ''; C.send.disabled = true; render(C, true); greet(C); });
      el.addEventListener('click', e => {
        const s = e.target.closest('[data-say]'); if (s) { C.inp.value = s.dataset.say; submit(C); return; }
        const o = e.target.closest('[data-open]'); if (o) { IOS.Keyboard.hide(); pg.stack.push(17, {}, { hero: { src: o.querySelector('[data-hsrc]'), target: '[data-hero]' } }); return; }
        if (e.target.closest('[data-retry]')) { const last = [...App.st.chat].reverse().find(m => m.me); if (App.st.offline) { IOS.Toast.show('Encara no hi ha connexió', 'wifioff'); return; } App.st.chat = App.st.chat.filter(m => !m.err); render(C); reply(C, last ? last.t : SUGG[0]); }
        if (e.target.closest('[data-retry-off]')) { if (App.st.offline) IOS.Toast.show('Encara no hi ha connexió', 'wifioff'); else render(C, true); }
        if (e.target.closest('[data-signup]')) Flow.toOnboarding();
      });
    },
    appear(el, p, pg) { const C = pg.chat; if (!App.st.chat.length && !p.noGreet) greet(C); if (p.preset) preset(C, p.preset); },
    reappear(el, p, pg) { const C = pg.chat; render(C, !App.st.chat.length); if (!App.st.chat.length) greet(C); },
    unmount(el, p, pg) { IOS.Keyboard.hide(); }
  };

  function render(C, fresh) {
    const box = C.box, msgs = App.st.chat;
    C.gm = null;
    if (!msgs.length) {
      if (App.st.offline) {
        box.innerHTML = `<div class="greet px" style="text-align:center;align-items:center"><div data-gm style="margin-top:12px"></div><h2 class="t2" style="margin-top:8px">No tens connexió</h2><p class="co mut" style="margin:6px 0 0;max-width:30ch">Comprova la Wi-Fi o les dades mòbils i torna-ho a provar.</p><button type="button" class="btn auto" data-retry-off style="margin-top:16px;padding:12px 28px">Reintentar</button>
          <div class="info" style="margin-top:22px;text-align:left">${ICN('info', 20, 'var(--tint-tx)')}<span>Si fas una ruta descarregada, segueix funcionant. Els check-ins es desen al mòbil i s'envien quan tornis a tenir cobertura.</span></div></div>`;
        C.gm = Mascot.create(box.querySelector('[data-gm]'), { size: 132, state: 'error', label: 'Assistent' });
        C.status.textContent = STATUS.error; C.hav.style.opacity = 0; return;
      }
      box.innerHTML = `${App.st.guest ? `<div class="px" style="padding-top:4px"><div class="info" style="align-items:center;flex-wrap:wrap">${ICN('lock', 18)}<span style="flex:1 1 170px">Estàs navegant com a convidat. Algunes funcions no estan disponibles.</span><button type="button" class="btn sm" data-signup style="width:auto">Crear compte</button></div></div>` : ''}
        <div class="greet px"><span class="tag" style="align-self:center;margin-bottom:6px">${ICN('sparkle', 14)} Estàs parlant amb una IA</span>
          <div class="gm-row"><div class="gm" data-gm></div><div class="bubble gm-b cc" data-gb role="status">Què et ve de gust fer avui?</div></div>
          <p class="co mut" style="margin:10px 0 0">Pregunta'm per rutes, patrimoni i activitats. Et responc amb el que ofereix l'app.</p>
          <div class="col gap8" style="margin-top:16px">${SUGG.map(t => `<button type="button" class="sug press" data-say="${esc(t)}"><span class="f1">${t}</span><i>${ICN('arrow', 16)}</i></button>`).join('')}</div></div>`;
      C.gm = Mascot.create(box.querySelector('[data-gm]'), { size: 128, state: 'repos', label: 'Assistent' });
      C.hav.style.opacity = 0; C.status.textContent = STATUS.repos;
      return;
    }
    C.hav.style.opacity = 1;
    box.innerHTML = `<div class="msgs" data-msgs aria-live="polite"><span class="tag" style="align-self:center;margin:4px 0 6px">${ICN('sparkle', 14)} Estàs parlant amb una IA</span>${msgs.map(rowHTML).join('')}</div><p class="fn mut" style="text-align:center;padding:4px 24px 0" data-disc>L'assistent pot cometre errors. Comprova horaris i condicions abans de sortir.</p>`;
    C.box.querySelectorAll('[data-av]').forEach(a => { const m = Mascot.create(a, { size: 30, view: 'avatar', state: 'repos', label: 'Assistent', still: true }); m.el.style.color = '#fff'; });
    C.box.querySelectorAll('[data-errm]').forEach(a => Mascot.create(a, { size: 84, state: 'error', label: 'Assistent' }));
  }
  function rowHTML(m) {
    if (m.me) return `<div class="mrow me"><div class="mb">${esc(m.t)}</div></div>`;
    if (m.err) return `<div class="mrow ai err"><div data-errm style="margin:0 2px 0 -6px"></div><div class="col gap8" style="align-items:flex-start"><div class="mb">${m.t}</div><button type="button" class="btn sm" data-retry style="width:auto">${ICN('refresh', 18)} Tornar-ho a provar</button></div></div>`;
    return `<div class="mrow ai"><span class="mav" data-av aria-hidden="true"></span><div class="mb ${m.card ? 'wide' : ''}">${m.t}${m.card ? actCard() : ''}${m.t2 ? `<div style="margin-top:10px">${m.t2}</div>` : ''}</div></div>${m.chips ? `<div class="mrow ai"><span class="spacer"></span><div class="chips">${m.chips.map(c => chip(c, false, `data-say="${esc(c)}"`)).join('')}</div></div>` : ''}`;
  }
  function greet(C) {
    if (!C.gm || App.st.offline) return;
    const b = C.box.querySelector('[data-gb]');
    if (IOS.rm()) { C.gm.set('saludant'); return; }
    C.gm.set('saludant', { restart: true });
    if (b) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 380 });
    IOS.stagger(C.box.querySelectorAll('.sug'), { delay: 520 });
  }
  function openKbd(C) {
    if (IOS.Keyboard.open) return;
    const kh = IOS.Keyboard.height(), dy = kh - 83;
    IOS.Keyboard.show(C.inp, { go: 'Envia', onGo: () => submit(C), onHide: () => { slide(C, 0); } });
    slide(C, dy);
  }
  function slide(C, dy) {
    const from = C.comp.style.transform || 'translateY(0)';
    C.comp.style.transform = `translateY(${-dy}px)`;
    C.pg.scroll.style.paddingBottom = `${83 + 70 + dy}px`;
    if (!IOS.rm()) IOS.anim(C.comp, [{ transform: from }, { transform: `translateY(${-dy}px)` }], IOS.S.sheet);
    // amb la conversa buida, la mascota que escolta es queda a la vista; amb missatges, es mostra l'últim
    if (dy) setTimeout(() => { if (App.st.chat.length) toBottom(C); else C.pg.scroll.scrollTo({ top: 0, behavior: IOS.rm() ? 'auto' : 'smooth' }); }, 60);
  }
  function toBottom(C) { const sc = C.pg.scroll; sc.scrollTo({ top: sc.scrollHeight, behavior: IOS.rm() ? 'auto' : 'smooth' }); }
  async function submit(C, o) {
    const t = C.inp.value.trim(); if (!t || C.busy) return;
    C.inp.value = ''; C.send.disabled = true; IOS.Keyboard.hide(); C.inp.blur();
    C.status.textContent = STATUS.pensant;
    const first = !App.st.chat.length;
    App.st.chat.push({ me: true, t });
    if (first && C.gm) await heroToHeader(C);
    render(C); toBottom(C);
    const rows = C.box.querySelectorAll('.mrow.me'); const last = rows[rows.length - 1];
    if (last && !IOS.rm()) IOS.anim(last, [{ opacity: 0, transform: 'translateY(30px) scale(.94)', transformOrigin: '100% 100%' }, { opacity: 1, transform: 'none', transformOrigin: '100% 100%' }], IOS.S.micro);
    reply(C, t, o);
  }
  /* la mascota gran passa a ser l'avatar de la capçalera (transició compartida) */
  async function heroToHeader(C) {
    const gm = C.gm; if (!gm) return;
    if (IOS.rm()) { C.hav.style.opacity = 1; return; }
    const a = IOS.rectIn(gm.svg), b = IOS.rectIn(C.hav);
    const ghost = h(`<div style="position:absolute;z-index:57;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;color:var(--mascot);pointer-events:none"></div>`);
    ghost.innerHTML = gm.svg.outerHTML; ghost.firstElementChild.style.height = '100%';
    IOS.app.appendChild(ghost); gm.el.style.visibility = 'hidden';
    const bub = C.box.querySelector('[data-gb]'); if (bub) IOS.fade(bub, 1, 0, 160);
    const s = b.h / a.h * 1.6, tx = b.x + b.w / 2 - (a.x + a.w / 2), ty = b.y + b.h / 2 - (a.y + a.h * 0.62);
    await IOS.anim(ghost, [{ transform: 'none', opacity: 1 }, { transform: `translate(${tx}px,${ty}px) scale(${s})`, opacity: 0.2 }], Spring.spring(0.46, 0.86));
    ghost.remove(); C.hav.style.opacity = 1;
    IOS.anim(C.hav, [{ transform: 'scale(.6)' }, { transform: 'scale(1)' }], IOS.S.micro);
  }
  async function reply(C, t, o) {
    o = o || {};
    C.busy = true; C.setState('pensant');
    const msgs = C.box.querySelector('[data-msgs]');
    const typ = h(`<div class="mrow ai" data-typing aria-label="L'assistent està pensant"><div data-tm style="margin-left:-8px"></div></div>`);
    msgs.appendChild(typ); const tm = Mascot.create(typ.querySelector('[data-tm]'), { size: 84, state: 'pensant', label: 'Assistent' });
    if (!IOS.rm()) IOS.anim(typ, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], IOS.S.micro);
    toBottom(C);
    await wait(o.think || (App.st.offline ? 900 : 1300));
    tm.destroy(); typ.remove();
    if (App.st.offline) {
      App.st.chat.push({ err: true, t: 'Ara no tinc connexió: ho tornem a provar?' });
      render(C); C.setState('error'); C.busy = false; toBottom(C); MascotUI.announce('Assistent: Ara no tinc connexió: ho tornem a provar?'); return;
    }
    const firstAI = !App.st.chat.some(m => !m.me && !m.err);
    const lo = t.toLowerCase();
    const msg = firstAI ? { t: 'Per aquesta tarda et proposo una sortida suau i de poc impacte:', card: true, t2: 'Vols que et proposi alguna cosa amb gastronomia local?', chips: ['Sí, amb gastronomia', 'Més curta', 'Amb nens'] }
      : lo.includes('gastronomia') ? { t: "D'acord. Et marcaré els comerços i restaurants Km0 que hi ha a prop de la ruta.", chips: ['Més curta', 'Amb nens'] }
      : lo.includes('curta') ? { t: 'Entesos: et busco una versió de menys d\'una hora.', chips: ['Sí, amb gastronomia', 'Amb nens'] }
      : lo.includes('nens') ? { t: 'Perfecte: prioritzaré camins planers i amb llocs per descansar.', chips: ['Sí, amb gastronomia', 'Més curta'] }
      : { t: 'Ho miro i et proposo opcions al Vallès Oriental.', chips: ['Més curta', 'Amb nens'] };
    App.st.chat.push(Object.assign({}, msg, { t: '', _full: msg.t }));
    render(C); C.setState('responent');
    const rows = C.box.querySelectorAll('.mrow.ai:not(.err)'); const row = [...rows].filter(r => !r.querySelector('.chips')).pop();
    const av = row.querySelector('[data-av]'); av.innerHTML = ''; const am = Mascot.create(av, { size: 30, view: 'avatar', state: 'responent', label: 'Assistent' }); am.el.style.color = '#fff';
    const mb = row.querySelector('.mb'); const card = mb.querySelector('.chatcard'); const extra = mb.lastElementChild && msg.t2 ? mb.lastElementChild : null;
    if (card) card.style.display = 'none'; if (extra) extra.style.display = 'none';
    const chipsRow = row.nextElementSibling && row.nextElementSibling.querySelector('.chips') ? row.nextElementSibling : null; if (chipsRow) chipsRow.style.display = 'none';
    const tnode = document.createTextNode(''); mb.prepend(tnode);
    const words = msg.t.split(' ');
    for (let i = 0; i < words.length; i++) { tnode.textContent = words.slice(0, i + 1).join(' '); await wait(IOS.rm() ? (o.wordMs ? 60 : 0) : (o.wordMs || 45)); }
    const last = App.st.chat[App.st.chat.length - 1]; last.t = msg.t; delete last._full;
    if (card) { card.style.display = ''; if (!IOS.rm()) await IOS.anim(card, [{ opacity: 0, transform: 'translateY(10px) scale(.97)' }, { opacity: 1, transform: 'none' }], IOS.S.micro); }
    if (extra) { extra.style.display = ''; if (!IOS.rm()) IOS.fade(extra, 0, 1, 220); }
    if (chipsRow) { chipsRow.style.display = ''; IOS.stagger(chipsRow.querySelectorAll('.chip'), { dy: 8 }); }
    toBottom(C); await wait(300);
    am.set('repos'); C.setState('repos'); C.busy = false;
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  /* estats predefinits per a l'índex (12, 13, escoltant, pensant, responent, error) */
  function preset(C, k) {
    if (k === 13) { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }, { t: 'Per aquesta tarda et proposo una sortida suau i de poc impacte:', card: true, t2: 'Vols que et proposi alguna cosa amb gastronomia local?', chips: ['Sí, amb gastronomia', 'Més curta', 'Amb nens'] }]; render(C); C.setState('repos'); setTimeout(() => toBottom(C), 50); }
    if (k === 'escoltant') { App.st.chat = []; render(C); C.inp.focus(); setTimeout(() => { C.inp.value = 'Una ruta amb'; C.inp.dispatchEvent(new Event('input')); }, 400); }
    if (k === 'pensant') { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }]; render(C); C.busy = true; C.setState('pensant'); const msgs = C.box.querySelector('[data-msgs]'); const typ = h(`<div class="mrow ai" data-typing><div data-tm style="margin-left:-8px"></div></div>`); msgs.appendChild(typ); Mascot.create(typ.querySelector('[data-tm]'), { size: 84, state: 'pensant', label: 'Assistent' }); }
    if (k === 'responent') { App.st.chat = []; render(C); C.inp.value = "Recomana'm una ruta per aquesta tarda"; submit(C, { think: 300, wordMs: 260 }); }
    if (k === 'error') { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }, { err: true, t: 'Ara no tinc connexió: ho tornem a provar?' }]; render(C); C.setState('error'); }
  }
  window.ChatAPI = { render, greet, preset };
})();
