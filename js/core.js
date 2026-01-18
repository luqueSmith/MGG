/* core.js — utilidades + PWA + menú móvil (hamburger)
   Objetivo: 1 solo JS base para todas las páginas.
*/

(function () {
  'use strict';

  // =====================
  // PWA: Service Worker
  // =====================
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const inHtml = /\/html\//i.test(location.pathname.replace(/\\/g, '/'));
        const swPath = inHtml ? '../sw.js' : './sw.js';
        const reg = await navigator.serviceWorker.register(swPath, { updateViaCache: 'none' });
        // intenta buscar SW nuevo al cargar
        reg.update?.();
      } catch {
        // silencioso
      }
    });
  }

  // Base paths (root vs /html/)
  const IN_HTML_FOLDER = /\/html\//i.test(location.pathname.replace(/\\/g, '/'));
  const IMG_BASE = IN_HTML_FOLDER ? '../img/' : 'img/';

  // =====================
  // Utilidades compartidas (antes: utils.js)
  // =====================
  function decodeEntities(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = String(str ?? '');
    return txt.value;
  }

  function geneFromCode(code) {
    const first = (code || '').trim().toLowerCase()[0] || '';
    switch (first) {
      case 'a': return 'CYBER';
      case 'b': return 'NECRO';
      case 'c': return 'SABER';
      case 'd': return 'ZOOMORPH';
      case 'e': return 'GALACTIC';
      case 'f': return 'MYTHIC';
      default: return 'UNKNOWN';
    }
  }

  // Devuelve hasta N genes (por defecto 2) leyendo el prefijo del código:
  // - "ab_14" => [CYBER, NECRO]
  // - "ff_02" => [MYTHIC]
  // - "a_01"  => [CYBER]
  function genesFromCode(code, maxGenes = 2) {
    const c = String(code || '').trim().toLowerCase();
    if (!c) return ['UNKNOWN'];

    const prefix = (c.split('_')[0] || '').replace(/[^a-z]/g, '');
    const out = [];
    for (const ch of prefix) {
      const g = geneFromCode(ch);
      if (g && g !== 'UNKNOWN') out.push(g);
      if (out.length >= maxGenes) break;
    }
    return out.length ? out : ['UNKNOWN'];
  }

  const GENE_META = {
    ALL: { label: 'NINGUNO', color: 'var(--accent)', icon: '' },
    CYBER: { label: 'Cyber', color: 'var(--cyber)', icon: IMG_BASE + 'cyber.png' },
    NECRO: { label: 'Necro', color: 'var(--necro)', icon: IMG_BASE + 'necro.png' },
    SABER: { label: 'Saber', color: 'var(--saber)', icon: IMG_BASE + 'sable.png' },
    ZOOMORPH: { label: 'Zoomorph', color: 'var(--zoomorph)', icon: IMG_BASE + 'zomorfo.png' },
    GALACTIC: { label: 'Galactic', color: 'var(--galactic)', icon: IMG_BASE + 'galactico.png' },
    MYTHIC: { label: 'Mythic', color: 'var(--mythic)', icon: IMG_BASE + 'mitico.png' },
    UNKNOWN: { label: 'Unknown', color: 'var(--unknown)', icon: '' },
  };

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = String(msg ?? '');
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 1100);
  }

  async function copyTextLower(text) {
    const lower = String(text || '').toLowerCase();
    try {
      await navigator.clipboard.writeText(lower);
    } catch {
      const tmp = document.createElement('input');
      tmp.value = lower;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      tmp.remove();
    }
    return lower;
  }

  async function copyTextUpper(text) {
    const upper = String(text || '').toUpperCase();
    try {
      await navigator.clipboard.writeText(upper);
    } catch {
      const tmp = document.createElement('input');
      tmp.value = upper;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      tmp.remove();
    }
    return upper;
  }

  // =====================
  // Rendimiento: clases en <body>
  // =====================
  (function setupPerformanceClasses() {
    function apply() {
      const b = document.body;
      if (!b) return false;

      const isSmall = window.matchMedia && window.matchMedia('(max-width: 720px)').matches;
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const saveData = !!(navigator.connection && navigator.connection.saveData);
      const lowMem = (typeof navigator.deviceMemory === 'number') ? navigator.deviceMemory <= 4 : false;

      b.classList.toggle('perf-lite', isSmall || reduceMotion || saveData || lowMem);
      b.classList.toggle('reduced-motion', reduceMotion);
      b.classList.toggle('perf-paused', document.hidden === true);
      return true;
    }

    let idleT = null;
    const IDLE_MS = 12000;
    function setIdle(on) {
      const b = document.body;
      if (!b) return;
      b.classList.toggle('perf-idle', !!on);
    }
    function bumpIdle() {
      setIdle(false);
      clearTimeout(idleT);
      idleT = setTimeout(() => setIdle(true), IDLE_MS);
    }

    if (!apply()) {
      document.addEventListener('DOMContentLoaded', () => { apply(); bumpIdle(); }, { once: true });
    } else {
      bumpIdle();
    }

    window.addEventListener('resize', apply, { passive: true });
    window.addEventListener('orientationchange', apply, { passive: true });
    document.addEventListener('visibilitychange', apply);

    ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'].forEach(evt => {
      window.addEventListener(evt, bumpIdle, { passive: true });
    });
  })();

  // Export
  window.MGG_UTILS = {
    decodeEntities,
    geneFromCode,
    genesFromCode,
    GENE_META,
    showToast,
    copyTextLower,
    copyTextUpper,
  };

  // =====================
  // Menú hamburger (móvil)
  // - requiere: button.nav-toggle, .nav-backdrop, nav.menu#navMenu
  // =====================
  (function setupMobileNav() {
    const b = document.body;
    if (!b) return;

    const btn = document.querySelector('.nav-toggle');
    const menu = document.getElementById('navMenu') || document.querySelector('nav.menu');

    // Crear drawer/backdrop si no existe en el HTML (para evitar tener que duplicar markup)
    let drawer = document.querySelector('.nav-drawer');
    let panel = drawer?.querySelector('.nav-panel');
    let _backdrop;
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'nav-drawer';
      drawer.innerHTML = `
        <div class="nav-backdrop" aria-hidden="true"></div>
        <div class="nav-panel" role="dialog" aria-modal="true" aria-label="Menú">
          <div class="nav-panel-head">
            <div class="nav-panel-title">Menú</div>
            <button class="nav-close" type="button" aria-label="Cerrar menú">✕</button>
          </div>
          <div class="nav-panel-body"></div>
        </div>`;
      document.body.appendChild(drawer);
    }
    panel = drawer.querySelector('.nav-panel');
    _backdrop = drawer.querySelector('.nav-backdrop');
    const closeBtn = drawer.querySelector('.nav-close');
    const bodyBox = drawer.querySelector('.nav-panel-body');
    // Insertar links del <nav class="menu"> dentro del panel (sin heredar estilos móviles del nav original)
    if (bodyBox && menu && !bodyBox.querySelector('.nav-panel-links')) {
      const linksWrap = document.createElement('div');
      linksWrap.className = 'nav-panel-links';

      const links = Array.from(menu.querySelectorAll('a'));
      for (const a of links) {
        const c = a.cloneNode(true);

        // Marca activo si coincide con la página
        try {
          const href = c.getAttribute('href') || '';
          const path = location.pathname.replace(/\\/g, '/');
          if (!href.startsWith('#') && href && path.endsWith(href.replace(/^\.\//, ''))) {
            c.classList.add('active');
          }
        } catch {}

        linksWrap.appendChild(c);
      }
      bodyBox.appendChild(linksWrap);
    }

    // Si el HTML viejo no tiene botón / backdrop, no hacemos nada
    if (!btn || !menu) return;

    function close() {
      b.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    function open() {
      b.classList.add('nav-open');
      btn.setAttribute('aria-expanded', 'true');
    }

    btn.addEventListener('click', () => {
      if (b.classList.contains('nav-open')) close();
      else open();
    });

    _backdrop?.addEventListener('click', close);

    closeBtn?.addEventListener('click', close);

    // cerrar al navegar
    drawer.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      close();
    });

    // cerrar con ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // si pasa a desktop, cerramos
    const mq = window.matchMedia('(min-width: 861px)');
    mq.addEventListener?.('change', () => { if (mq.matches) close(); });

    // estado inicial
    btn.setAttribute('aria-expanded', 'false');
  })();
})();