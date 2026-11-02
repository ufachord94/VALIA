/* ===================== Pàgina: controls, índex, galeria de la mascota, taules i capa de VoiceOver ===================== */
(function () {
  const $ = s => document.querySelector(s);
  /* escala del mòbil segons l'amplada disponible */
  function fit() {
    const wide = window.innerWidth > 900, avail = wide ? Math.min(window.innerWidth * 0.48, 470) : document.documentElement.clientWidth - 32;
    const byH = wide ? (window.innerHeight - 70) / 872 : 9;
    const s = Math.min(1, avail / 413, Math.max(0.62, byH));
    document.documentElement.style.setProperty('--s', s.toFixed(3));
  }
  fit(); addEventListener('resize', fit);

  /* índex */
  const idx = $('#index');
  idx.innerHTML = Router.LIST.map(([g, items]) => `<div><h3>${g}</h3><div class="ilist">${items.map(([k, t, nw]) => `<button type="button" data-go="${k}"><b>${/^\d+$/.test(k) ? k : k === '1n' ? '1' : '★'}</b><span>${t}${nw ? ' <span class="tag new">Nou</span>' : ''}</span></button>`).join('')}</div></div>`).join('');
  idx.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (!b) return; Router.go(b.dataset.go); mark(); if (window.innerWidth <= 900) document.getElementById('app').scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  function mark() { idx.querySelectorAll('[data-go]').forEach(b => b.setAttribute('aria-current', b.dataset.go === Router.current)); }
  mark();

  /* controls */
  const tog = (id, fn) => { const b = $(id); b.addEventListener('click', () => { const v = b.getAttribute('aria-checked') !== 'true'; b.setAttribute('aria-checked', v); fn(v); }); return b; };
  const rmB = tog('#c-rm', v => IOS.set('rm', v));
  IOS.onSettings((k, v) => { if (k === 'rm') rmB.setAttribute('aria-checked', !!v); if (k === 'dt') document.querySelectorAll('#c-dt button').forEach(b => b.setAttribute('aria-checked', +b.dataset.dt === v)); });
  if (IOS.settings.rm) rmB.setAttribute('aria-checked', 'true');
  $('#c-dt').addEventListener('click', e => { const b = e.target.closest('[data-dt]'); if (!b) return; IOS.set('dt', +b.dataset.dt); setTimeout(drawVO, 60); });
  tog('#c-vo', v => { IOS.settings.vo = v; drawVO(); });
  tog('#c-off', v => { App.setOffline(v); });
  tog('#c-ph', v => { document.getElementById('app').classList.toggle('marks', v); });
  $('#b-dev').addEventListener('click', async () => { if (Route.page && Route.page.el.isConnected && IOS.Modal.list.some(m => m.id === 19)) Route.deviate(true); else { await Router.go('40'); mark(); } });
  $('#b-err').addEventListener('click', async () => { await Router.go('14'); mark(); App.st.server = true; const pg = App.stack('explorar').top; pg.ex.run(true); });
  $('#b-ses').addEventListener('click', () => { MascotUI.reset(); IOS.Toast.show('Sessió de la mascota reiniciada', 'refresh'); });
  $('#b-re').addEventListener('click', () => { Router.go('1'); mark(); });

  /* què es veu ara */
  const now = $('#nowshowing');
  App.hook((pg, kind) => { if (kind === 'vo') { drawVO(); return; } if (pg) now.textContent = 'Ara: ' + (pg.d.title || ''); setTimeout(drawVO, 420); });

  /* capa de VoiceOver: etiqueta accessible i àrea de toc de cada element interactiu visible */
  let voT = 0;
  function drawVO() {
    const lay = document.getElementById('ly-vo'); if (!lay) return; lay.innerHTML = '';
    clearInterval(voT);
    if (!IOS.settings.vo) return;
    const app = IOS.app, ar = app.getBoundingClientRect(), s = ar.width / 393;
    const sel = 'button,a[href],input,[role="switch"],[role="tab"],[role="img"]';
    const els = [...app.querySelectorAll(sel)].filter(el => {
      if (el.closest('#ly-vo') || el.closest('[inert]') || el.closest('[hidden]')) return false;
      const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return false;
      if (r.right < ar.left || r.left > ar.right || r.bottom < ar.top || r.top > ar.bottom) return false;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) return false;
      const x = Math.min(ar.right - 1, Math.max(ar.left + 1, r.left + r.width / 2)), y = Math.min(ar.bottom - 1, Math.max(ar.top + 1, r.top + r.height / 2));
      const hit = document.elementFromPoint(x, y); return hit && (el.contains(hit) || hit.contains(el) || hit.closest('#ly-vo'));
    });
    els.forEach(el => {
      const r = el.getBoundingClientRect(), name = (el.getAttribute('aria-label') || el.getAttribute('placeholder') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 48);
      const interactive = !el.matches('[role="img"]'), small = interactive && (r.height / s < 43.5 || r.width / s < 43.5) && !el.closest('.kbd');
      const b = document.createElement('div'); b.className = 'vo-box' + (small ? ' small' : '');
      Object.assign(b.style, { left: (r.left - ar.left) / s + 'px', top: (r.top - ar.top) / s + 'px', width: r.width / s + 'px', height: r.height / s + 'px' });
      b.innerHTML = `<span class="vo-tag">${esc(name || '(sense nom)')}</span>`; lay.appendChild(b);
    });
    voT = setInterval(() => { if (IOS.settings.vo) drawVO(); }, 1600);
  }
  window.drawVO = drawVO;

  /* galeria d'estats de la mascota */
  const G = [
    ['repos', 'Repòs', 'La postura del logotip: respira i de tant en tant pica amb el bastó. Avatar del xat i estat de pas.'],
    ['saludant', 'Saludant', "Fa un saltet i aixeca el bastó dues vegades. En obrir el xat i quan treu el cap al perfil."],
    ['escoltant', 'Escoltant', "S'inclina cap al camp de text amb la mà a l'orella. Les ones bateguen a cada tecla."],
    ['pensant', 'Pensant', 'Mà a la barbeta, mira amunt i surten tres punts. Des que envies fins a la resposta.'],
    ['responent', 'Responent', 'Assenyala el text amb el bastó, com un guia, i fa que sí amb el cap.'],
    ['error', 'Sense connexió', "S'asseu en una pedra amb el cap cot i un núvol ratllat. Error d'enviament i sense xarxa."],
    ['buscant', 'Buscant', 'Camina sobre una línia de punts. Substitueix el spinner mentre es carreguen rutes o filtres.'],
    ['proposant', 'Proposant', 'Assenyala amb el bastó les alternatives quan una cerca no troba res.'],
    ['celebrant', 'Celebrant', "S'ajup, salta amb els braços amunt i deixa anar fulles. En confirmar un canvi a la botiga."],
    ['peek', 'Treient el cap', 'Entra pel lateral girada −8° i saluda. Al perfil, una vegada per sessió.'],
    ['walk', 'Caminant (càrrega)', 'La marxa de la pantalla de càrrega, sobre el globus del Vallès. En acabar vola fins al xat.']
  ];
  const gal = $('#gallery');
  gal.innerHTML = G.map(([k, n, d]) => `<article class="gal"><div class="gv ${k === 'peek' || k === 'walk' ? 'dk' : ''}" data-g="${k}"><span class="rmtag">Normal · Reduir moviment</span></div><div class="gt"><b>${n}</b><p>${d}</p><button type="button" data-play="${k}">▶ Reproduir</button></div></article>`).join('');
  const LIVE = {};
  G.forEach(([k]) => {
    const host = gal.querySelector(`[data-g="${k}"]`), st = k === 'peek' ? 'saludant' : k === 'walk' ? 'buscant' : k;
    const a = Mascot.create(host, { size: 132, state: st, label: 'Mascota' });
    const b = Mascot.create(host, { size: 132, state: st, still: true, label: 'Mascota quieta' });
    if (k === 'peek') { a.el.style.transform = 'rotate(-8deg)'; b.el.style.transform = 'rotate(-8deg)'; }
    LIVE[k] = a;
  });
  gal.addEventListener('click', e => { const b = e.target.closest('[data-play]'); if (!b) return; const k = b.dataset.play, m = LIVE[k]; const st = k === 'peek' ? 'saludant' : k === 'walk' ? 'buscant' : k; m.set(st, { restart: true }); });

  /* taules */
  const T = (id, head, rows) => { document.getElementById(id).innerHTML = `<thead><tr>${head.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`; };
  T('t-where', ['Pantalla', 'Quan apareix', 'Animació', 'Text (català)'], [
    ['1 · Càrrega', "Mentre l'app carrega (3–5 s) i en acabar", 'Caminant sobre el globus; en acabar vola fins al xat, passa de blanc a verd i saluda', '— (VoiceOver: «GreenVallès s\'està carregant»)'],
    ['12 · Xat', 'En obrir el xat amb la conversa buida', 'Saludant', '«Què et ve de gust fer avui?»'],
    ['12 i 13 · Xat', 'Mentre escrius', 'Escoltant (ones a cada tecla)', 'Estat a la capçalera: «t\'escolta…»'],
    ['13 · Xat', 'Des que envies fins a la primera paraula', 'Pensant (tres punts)', 'Estat: «pensant…»'],
    ['13 · Xat', 'Mentre arriba la resposta', 'Responent (al costat de la bombolla i a la capçalera)', 'Estat: «escrivint…»'],
    ['Xat · error', "Si l'enviament falla per manca de connexió", 'Sense connexió', '«Ara no tinc connexió: ho tornem a provar?»'],
    ['14 i 27 · Explorar', 'Mentre es carreguen resultats o s\'apliquen filtres', 'Buscant (substitueix el spinner)', '«Buscant rutes…»'],
    ['17 · Detall', 'Mentre es descarrega la ruta', 'Buscant, en petit dins del botó', '«Descarregant… 45 %»'],
    ['14 · Sense resultats', 'Quan una cerca no troba res (una vegada per sessió)', 'Proposant (assenyala les alternatives)', '«No he trobat res: prova alguna d\'aquestes opcions.»'],
    ['22 · Perfil', 'En obrir el perfil (una vegada per sessió)', 'Treient el cap pel lateral dret + saludant', '«Enhorabona! Has estalviat 5 kg de CO₂.» o «Repetim la ruta de dissabte?» (alternen)'],
    ['33 · Botiga', 'En confirmar un canvi (una vegada per sessió)', 'Celebrant (salt i fulles)', '— (el títol diu «Canvi fet!»)'],
    ['28 i 29 · Error i sense connexió', 'Error del servidor o sense xarxa', 'Sense connexió <span class="tag pend">Proposta</span>', 'Textos de la v3'],
    ['Barra de pestanyes', 'Sempre', 'Icona quieta de la pestanya Xat', '—']
  ]);
  T('t-anim', ['Estat', 'Durada i bucle', 'Moviment (postures clau)', 'Efectes', 'Reduir moviment'], [
    ['Repòs', 'Bucle de 3,4 s', 'Postura del logotip; maluc ±0,35 u, inclinació ±0,7°; cop de bastó al segon 2,6', '—', 'Postura del logotip, quieta'],
    ['Saludant', '1,5 s, un sol cop → repòs', 'Ajupir-se (0–0,12 s), salt de 3,4 u (0,17–0,47 s), bastó amunt i vaivé de ±16° a 2,2 Hz', '—', 'Bastó amunt, quieta'],
    ['Escoltant', 'Bucle de 2,4 s + pols de 0,38 s a cada tecla', 'Inclinació 12°, cap 12° endavant, mà a l\'orella', '3 ones davant del cap', 'Postura quieta amb les ones'],
    ['Pensant', 'Bucle de 2,8 s; punts cada 1,2 s', 'Mà a la barbeta, cap −16°, balanceig ±1,2°', '3 punts que pugen en cascada', 'Postura quieta amb 3 punts'],
    ['Responent', 'Bucle de 0,67 s mentre surt el text', 'Bastó endavant (128° ± 9°), cap ±3° a 3 Hz', '2 traços vora la punta del bastó', 'Gest quiet'],
    ['Sense connexió', 'Entrada de 0,28 s + bucle de 4,2 s', 'Asseguda en una pedra, tronc 16°, cap 24° avall, sospir ±2°', 'Pedra, núvol amb ratlla vermella', 'Postura quieta'],
    ['Buscant', 'Cicle de 1,05 s (114 passos/min)', 'Marxa amb cinemàtica inversa sobre terra pla, bastó clavat', 'Punts del terra que es desplacen', 'Postura de pas, quieta'],
    ['Proposant', '0,9 s → bucle de 1,1 s', 'Assenyala endavant i avall amb el bastó (240° ± 3,5°), cap 10°', '—', 'Postura quieta'],
    ['Treient el cap', 'Entrada de 0,5 s (molla 0,5/0,62) + saludant; sortida de 0,36 s', 'Gira −8° des del lateral i saluda', 'Globus de text', 'Fos de 0,26 s, quieta'],
    ['Celebrant', '1,7 s → bucle de 1,25 s', 'Ajupir-se (0,16 s), salt de 14 u (0,4 s), aterratge, braços amunt', '12 fulles en 4 colors, en arc', 'Braços amunt + 3 espurnes, fos'],
    ['Caminant (càrrega)', 'Cicle de 1,05 s; 7 passes per volta del globus', 'Marxa existent de la pantalla 1', 'Globus amb 7 llocs del Vallès', 'Logotip quiet i fos'],
    ['Vol fins al xat', '0,45 s (molla 0,62/0,82)', 'Trasllat i escala fins a la mascota del xat; color blanc → verd; les passes s\'aturen en arribar', 'El fons, el globus i el nom s\'esvaeixen', 'Fos encadenat de 0,3 s']
  ]);
  const sp = [['Navegació endavant (push)', 0.42, 0.98], ['Tornar enrere (pop)', 0.38, 1], ['Fulles amb altures', 0.44, 0.84], ['Pantalla completa', 0.46, 0.96], ['Targeta → detall (heroi)', 0.48, 0.84], ['Botons, interruptors i pestanyes', 0.32, 0.6], ['Alertes', 0.3, 0.78], ['Aparició escalonada de llistes', 0.42, 0.9]];
  T('t-spring', ['Transició', 'Resposta', 'Esmorteïment', 'Fins que s\'atura'], sp.map(([n, r, d]) => [n, r.toFixed(2).replace('.', ',') + ' s', String(d).replace('.', ','), (Spring.spring(r, d).duration / 1000).toFixed(2).replace('.', ',') + ' s']));
  document.getElementById('a11y').innerHTML = [
    '<b>Àrees de toc de 44 × 44 pt com a mínim</b> (Apple): botons, xips (44 d\'alt amb píndola visual de 34), interruptors (51 × 44), controls segmentats (44) i pestanyes (98 × 49). La capa «Etiquetes de VoiceOver i àrees de toc» marca en vermell qualsevol element més petit.',
    '<b>Contrast AA:</b> text #0B0D0C sobre blanc 19,6:1; text secundari #636366 6,0:1 (5,4:1 sobre gris); verd de text #00754A 5,8:1; text negre sobre el botó verd 6,3:1; vermell #D70015 5,4:1; mascota #0E8257 4,8:1 (objecte gràfic, mínim 3:1).',
    '<b>Text dinàmic:</b> 11 estils d\'iOS (de Large Title 34 pt a Caption 11 pt) que escalen amb un sol factor. Provat a Gran (+12 %), Molt gran (+35 %) i AX2 (+94 %): les files de xifres passen a columna i res queda tallat. Els títols grans pugen fins a +30 %, com a iOS.',
    '<b>VoiceOver:</b> totes les icones tenen etiqueta; la mascota és una imatge amb nom i estat («Assistent: pensant»); els seus missatges s\'anuncien amb una regió viva i es poden tancar amb un botó de 44 pt.',
    '<b>Reduir moviment:</b> segueix el sistema i l\'ajust de l\'app (pantalla 24). Les transicions passen a fosos de 0,2–0,26 s i la mascota mostra la postura clau de cada estat, sense confeti ni ones.',
    '<b>Focus visible:</b> anell blau de 3 px en tots els controls.'
  ].map(t => `<li>${t}</li>`).join('');
})();
