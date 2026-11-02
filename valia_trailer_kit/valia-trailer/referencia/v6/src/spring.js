/* Molles (springs) com les de SwiftUI: resposta (s) i fracció d'esmorteïment.
   - spring(r, d) → { easing: 'linear(...)', duration } per a la Web Animations API i CSS
   - runSpring({...}) → animació controlada per JS amb velocitat inicial (gestos) */
(function (root) {
  'use strict';
  function fn(response, damping, v0) {
    const w0 = 2 * Math.PI / response, z = damping;
    // x(t) = desplaçament normalitzat que va d'1 a 0, amb velocitat inicial v0 (unitats/s)
    if (z < 1) {
      const wd = w0 * Math.sqrt(1 - z * z);
      return t => Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0 - (v0 || 0)) / wd) * Math.sin(wd * t));
    }
    return t => Math.exp(-w0 * t) * (1 + (w0 - (v0 || 0)) * t);
  }
  function settle(x, eps) {
    let last = 0;
    for (let t = 0; t < 4; t += 0.004) if (Math.abs(x(t)) > eps) last = t;
    return Math.min(4, last + 0.004);
  }
  const cache = {};
  function spring(response, damping) {
    response = response || 0.4; damping = damping == null ? 0.86 : damping;
    const k = response + '|' + damping;
    if (cache[k]) return cache[k];
    const x = fn(response, damping, 0), D = settle(x, 0.0015), N = 48, pts = [];
    for (let i = 0; i <= N; i++) { const t = D * i / N; pts.push((i === N ? 1 : 1 - x(t)).toFixed(4) + ' ' + (100 * i / N).toFixed(2) + '%'); }
    return (cache[k] = { easing: 'linear(' + pts.join(', ') + ')', duration: Math.round(D * 1000), response, damping });
  }
  /* animació per JS: from → to amb velocitat inicial (unitats/s) */
  function runSpring(o) {
    const from = o.from, to = o.to, d0 = from - to;
    const v0n = d0 !== 0 ? -(o.velocity || 0) / d0 : 0;
    const x = fn(o.response || 0.4, o.damping == null ? 0.86 : o.damping, v0n);
    const D = settle(t => (d0 === 0 ? 0 : x(t) * Math.abs(d0)), 0.3);
    let raf = 0, t0 = performance.now(), stopped = false;
    function step(now) {
      if (stopped) return;
      const t = (now - t0) / 1000;
      if (t >= D) { o.onUpdate && o.onUpdate(to); o.onDone && o.onDone(); return; }
      o.onUpdate && o.onUpdate(to + d0 * x(t));
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return { stop() { stopped = true; cancelAnimationFrame(raf); } };
  }
  root.Spring = { spring, runSpring, fn };
})(typeof window !== 'undefined' ? window : globalThis);
