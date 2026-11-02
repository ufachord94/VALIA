/* ===================== Arrencada i navegació directa a cada pantalla ===================== */
const Router = (function () {
  const reset = () => { Flow.cancel(); IOS.scenes.load.hidden = true; IOS.scenes.load.style.opacity = 1; IOS.Modal.clearAll(); IOS.Alert.clear(); IOS.Keyboard.hide(); MascotUI.closeAll(); App.st.server = false; };
  const main = (tab, params) => App.startMain({ tab, params });
  const push = async (tab, ids) => { for (const [id, p] of ids) await App.stack(tab).push(id, p || {}, { instant: true }); };
  /* totes les pantalles de la v3 (1–35), les de la v4 (36–43) i els estats nous de la mascota */
  const LIST = [
    ['Primera vegada', [['1', 'Pantalla de càrrega (usuari habitual → xat)'], ['1n', 'Pantalla de càrrega (primera vegada → accés)'], ['2', 'Accés al compte'], ['3', 'Registre'], ['4', 'Registre amb teclat'], ['5', 'Avís del sistema (Google o Apple)'], ['6', 'Inici de sessió'], ['7', 'Verificació del correu'], ['36', 'Els teus interessos (opcional)']]],
    ['Permisos i privacitat', [['8', "Permís d'ubicació"], ['9', 'Permís de notificacions'], ['10', 'Privacitat i consentiment']]],
    ["Xat amb l'assistent", [['11', 'Xat en mode convidat'], ['12', 'Xat: salutació de la mascota'], ['escoltant', 'Xat: escoltant (mentre escrius)', 1], ['pensant', 'Xat: pensant', 1], ['responent', 'Xat: responent', 1], ['13', "Xat: conversa amb targeta d'activitat"], ['xaterr', 'Xat: error en enviar (sense connexió)', 1]]],
    ['Explorar', [['14', "Catàleg d'activitats"], ['27', 'Carregant resultats (mascota caminant)'], ['buit', 'Sense resultats (la mascota proposa)', 1], ['28', "Error del servidor"], ['15', 'Filtres (fulla amb dues altures)'], ['16', 'Mapa'], ['17', "Detall d'activitat"], ['37', 'Condicions, afluència i punts destacats'], ['38', 'Punts destacats de la comunitat'], ['18', "Punt d'interès (patrimoni)"]]],
    ['Ruta guiada', [['19', 'Ruta guiada amb check-ins'], ['40', "Avís: t'has desviat del camí"], ['41', 'Seguretat: ubicació en directe i 112'], ['20', 'Ruta en pausa'], ['21', 'Resum de la ruta']]],
    ['Recompenses', [['31', 'Botiga'], ['32', 'Detall de recompensa'], ['33', 'Canvi completat (la mascota ho celebra)'], ['34', "Historial de punts d'energia"]]],
    ['Perfil i ajustos', [['22', 'Perfil: panell i estadístiques'], ['peek', 'Perfil: la mascota treu el cap', 1], ['30', 'Perfil: impacte sostenible i comunitat'], ['35', 'Perfil: rutes amb les teves fotos'], ['26', 'Estat buit: cap element desat'], ['42', 'Reptes de grup'], ['43', 'El teu any amb GreenVallès'], ['23', 'Ajustos'], ['39', 'Mapes sense connexió'], ['24', 'Accessibilitat'], ['25', 'Ajuda i suport']]],
    ['Estats del sistema', [['29', 'Sense connexió']]]
  ];
  let current = '1';
  async function go(k) {
    k = String(k); current = k; reset();
    if (k !== '29' && k !== 'xaterr') { App.st.offline = false; }
    switch (k) {
      case '1': return Flow.boot({});
      case '1n': return Flow.boot({ first: true });
      case '2': return App.startOnboarding(2);
      case '3': App.startOnboarding(2); return IOS.Modal.present(3, {}, { kind: 'dark' });
      case '4': App.startOnboarding(2); return IOS.Modal.present(3, { focus: true }, { kind: 'dark' });
      case '5': App.startOnboarding(2); return IOS.Modal.present(3, { alert: true }, { kind: 'dark' });
      case '6': App.startOnboarding(2); return IOS.Modal.present(6, {}, { kind: 'dark' });
      case '7': { App.startOnboarding(2); const m = await IOS.Modal.present(3, {}, { kind: 'dark' }); return m.stack.push(7, { mail: 'nom@exemple.cat' }); }
      case '36': return App.startOnboarding(36);
      case '8': return App.startOnboarding(8, { alert: true });
      case '9': return App.startOnboarding(9, { alert: true });
      case '10': return App.startOnboarding(10);
      case '11': App.st.chat = []; return App.startMain({ guest: true });
      case '12': App.st.chat = []; return main('xat');
      case '13': return main('xat', { xat: { preset: 13 } });
      case 'escoltant': case 'pensant': case 'responent': return main('xat', { xat: { preset: k, noGreet: true } });
      case 'xaterr': App.st.offline = true; main('xat', { xat: { preset: 'error', noGreet: true } }); return App.syncOffline();
      case '29': App.st.chat = []; App.st.offline = true; main('xat'); return App.syncOffline();
      case '14': return main('explorar');
      case '27': return main('explorar', { explorar: { state: 'loading' } });
      case '28': return main('explorar', { explorar: { state: 'error' } });
      case 'buit': MascotUI.seen.delete('explorar-buit'); return main('explorar', { explorar: { state: 'empty' } });
      case '15': main('explorar'); return IOS.Modal.present(15, {}, { detents: ['medium', 'large'], detent: 'large' });
      case '16': main('explorar'); return push('explorar', [[16]]);
      case '17': main('explorar'); return push('explorar', [[17, { id: 'caldes' }]]);
      case '37': main('explorar'); return push('explorar', [[17, { id: 'caldes' }], [37]]);
      case '38': main('explorar'); return push('explorar', [[17, { id: 'caldes' }], [37], [38]]);
      case '18': main('explorar'); return push('explorar', [[17, { id: 'caldes' }], [18]]);
      case '19': main('explorar'); await push('explorar', [[17, { id: 'caldes' }]]); return Route.start();
      case '40': main('explorar'); await push('explorar', [[17, { id: 'caldes' }]]); return Route.start({ deviate: true });
      case '41': main('explorar'); await push('explorar', [[17, { id: 'caldes' }]]); await Route.start(); return IOS.Modal.present(41, {}, { detents: ['large'] });
      case '20': main('explorar'); await push('explorar', [[17, { id: 'caldes' }]]); await Route.start(); return Route.page.el.querySelector('[data-pause]').click();
      case '21': main('explorar'); return IOS.Modal.present(21, {}, { kind: 'cover' });
      case '22': return main('perfil');
      case 'peek': MascotUI.seen.delete('perfil'); return main('perfil');
      case '30': MascotUI.mark('perfil'); return main('perfil', { perfil: { scrollTo: '#p-impact' } });
      case '35': MascotUI.mark('perfil'); return main('perfil', { perfil: { scrollTo: '#p-routes' } });
      case '26': MascotUI.mark('perfil'); App.st.saved = {}; return main('perfil', { perfil: { saved: true, scrollTo: '#p-routes' } });
      case '42': main('perfil'); return push('perfil', [[42]]);
      case '43': main('perfil'); return IOS.Modal.present(43, {}, { kind: 'cover' });
      case '23': main('perfil'); return push('perfil', [[23]]);
      case '39': main('perfil'); return push('perfil', [[23], [39]]);
      case '24': main('perfil'); return push('perfil', [[23], [24]]);
      case '25': main('perfil'); return push('perfil', [[23], [25]]);
      case '31': return main('recompenses');
      case '32': main('recompenses'); return push('recompenses', [[32, { id: 'bus' }]]);
      case '33': main('recompenses'); await push('recompenses', [[32, { id: 'bus' }]]); if (App.st.points >= 500) App.st.points -= 500; MascotUI.seen.delete('botiga'); return IOS.Modal.present(33, { id: 'bus' }, { kind: 'cover' });
      case '34': main('recompenses'); return push('recompenses', [[34]]);
    }
  }
  return { go, LIST, get current() { return current; } };
})();

(function boot() {
  IOS.init(document.getElementById('app'));
  if (window.matchMedia) { const mq = matchMedia('(prefers-reduced-motion: reduce)'); if (mq.matches) IOS.set('rm', true); }
  const phone = document.getElementById('app');
  let started = false;
  const start = () => { if (started) return; started = true; Router.go('1'); };
  if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) start(); }), { threshold: 0.3 }).observe(phone);
  else start();
  setTimeout(start, 1200);
})();
