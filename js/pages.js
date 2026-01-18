// js/stats-loader.js
// Carga diferida de stats.js (archivo grande) para evitar lag/calor en móvil.
// - NO bloquea el render inicial.
// - Se dispara al primer input/click (búsqueda/genes/sort), o cuando el navegador esté idle.
// - Cuando termina, emite: window.dispatchEvent(new Event('MGG_STATS_READY'))

(function () {
  // Soporta dos layouts:
  // 1) stats.js en la raíz (común en GitHub Pages simples)
  // 2) stats.js dentro de /js/
  const STATS_SOURCES = ['stats.js', 'js/stats.js'];
  let started = false;
  let done = false;

  function injectScript() {
    if (started || done) return;
    started = true;

    // Si ya existe (por cache o navegación), no hagas nada.
    if (window.MGG_STATS) {
      done = true;
      window.dispatchEvent(new Event('MGG_STATS_READY'));
      return;
    }

    // Intentamos cargar desde la primera ruta disponible.
    // Si falla, probamos la siguiente.
    const tryLoad = (i = 0) => {
      const src = STATS_SOURCES[i];
      if (!src) {
        // Silencioso: la página funciona sin stats.
        done = true;
        return;
      }

      const s = document.createElement('script');
      s.src = src;
      s.defer = true;
      s.onload = () => {
        done = true;
        window.dispatchEvent(new Event('MGG_STATS_READY'));
      };
      s.onerror = () => {
        // Si falla, intenta la siguiente ruta
        s.remove();
        tryLoad(i + 1);
      };
      document.head.appendChild(s);
    };

    tryLoad(0);
  }

  // 1) Primer uso real del buscador/genes/sort
  function onFirstInteraction() {
    injectScript();
    cleanup();
  }

  const events = ['input', 'change', 'click', 'pointerdown', 'touchstart', 'keydown'];
  function setupInteractions() {
    for (const ev of events) {
      window.addEventListener(ev, onFirstInteraction, { passive: true, once: true });
    }
  }
  function cleanup() {
    // Los listeners están en {once:true}, pero por compat dejamos esto.
    for (const ev of events) {
      window.removeEventListener(ev, onFirstInteraction);
    }
  }

  // 2) Si el usuario no toca nada, intentamos cargar en idle
  function setupIdleLoad() {
    const startIdle = () => {
      if (done || started) return;
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => injectScript(), { timeout: 2500 });
      } else {
        setTimeout(() => injectScript(), 1800);
      }
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      startIdle();
    } else {
      document.addEventListener('DOMContentLoaded', startIdle, { once: true });
    }
  }

  setupInteractions();
  setupIdleLoad();
})();
// js/mutants.js
(function () {
  const { decodeEntities, genesFromCode, GENE_META, showToast, copyTextUpper } = window.MGG_UTILS;

  // === EXCEPCIONES (a mano) ===
  // Clave: código EXACTO como en tu data (respeta mayúsculas) ej: "A_01", "AA_01"
  // Valor: URL exacta (respeta mayús/minús del link).
  const THUMB_OVERRIDES = {
    "CE_99": "https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png",
  };

  function thumbCandidates(code) {
    const original = String(code || "").trim();
    if (!original) return [];
    if (THUMB_OVERRIDES[original]) return [THUMB_OVERRIDES[original]];

    const c = original.toLowerCase();
    // Muchos mutantes NO tienen versión platinum. Probamos en cascada.
    return [
      `https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${c}_platinum.png`,
      `https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${c}.png`,
    ];
  }

  function buildThumbImg(code, name) {
    const img = document.createElement('img');
    img.className = 'mutant-thumb';
    img.alt = name || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';

    const candidates = thumbCandidates(code);
    img.dataset.candidates = JSON.stringify(candidates);
    img.dataset.ci = '0';
    img.src = candidates[0] || '';

    img.addEventListener('error', () => {
      let list = [];
      try { list = JSON.parse(img.dataset.candidates || '[]'); } catch { }
      const i = Number(img.dataset.ci || '0') + 1;
      img.dataset.ci = String(i);

      if (i < list.length) {
        img.src = list[i];
        return;
      }

      // Si no existe ninguna imagen, no rompemos el diseño
      img.remove();
      img.closest('.card')?.classList.add('no-thumb');
    });

    return img;
  }

  function parseRawList(raw) {
    const lines = (raw || '')
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(Boolean);

    const out = [];
    for (const line of lines) {
      const match = line.match(/([a-z]{1,3}_[0-9]{2}(?:_[a-z0-9]+)*)\s*$/i);
      if (!match) continue;

      const code = match[1].trim();
      let namePart = line.slice(0, match.index).trim();
      namePart = namePart.replace(/^\d+\.\s*/, '').trim();
      const name = decodeEntities(namePart);
      const genes = genesFromCode(code, 2);

      out.push({ name, code, genes });
    }
    return out;
  }

  // Parse once, then free the big raw string to help RAM
  const allMutants = parseRawList(window.RAW_LIST || '');

  // Precalcular minúsculas 1 sola vez (para que buscar/ordenar no recalculen miles de veces)
  for (const m of allMutants) {
    m.nameL = (m.name || '').toLowerCase();
    m.codeL = (m.code || '').toLowerCase();
  }

  try { window.RAW_LIST = null; } catch { }

  const els = {
    search: document.getElementById('searchInput'),
    grid: document.getElementById('grid'),
    empty: document.getElementById('emptyState'),
    countNow: document.getElementById('countNow'),
    countAll: document.getElementById('countAll'),
    sort: document.getElementById('sortSelect'),
    geneFilters: document.getElementById('geneFilters'),
    loadMoreWrap: document.getElementById('loadMoreWrap'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
  };

  const PAGE_SIZE = 60;           // equilibrio: buen rendimiento
  const MIN_CHARS_TO_RENDER = 2;  // solo renderiza cuando escribes (evita 1000 cards vacías)

  // gene selection: hasta 2 genes a la vez
  const state = { q: '', genes: [], sort: 'name-asc', limit: PAGE_SIZE };

  // ===== Render caching (para evitar recalcular filtro+sort en cada render) =====
  // Key cuando cambian filtros/sort/query
  let lastKey = '';
  let lastFiltered = null;     // array resultante ya filtrado+ordenado
  let lastRenderedCount = 0;   // cuántas cards ya dibujamos en grid

  function getKey() {
    // genes ordenados para que el key sea estable
    const genesKey = (state.genes || []).slice().sort().join(',');
    const qKey = (state.q || '').trim().toLowerCase();
    return `${qKey}||${genesKey}||${state.sort}`;
  }

  function buildGeneFilters() {
    if (!els.geneFilters) return;
    const order = ['ALL', 'CYBER', 'NECRO', 'SABER', 'ZOOMORPH', 'GALACTIC', 'MYTHIC'];
    els.geneFilters.innerHTML = '';
    for (const key of order) {
      const btn = document.createElement('button');
      const isActive = (key === 'ALL')
        ? state.genes.length === 0
        : state.genes.includes(key);
      btn.className = 'pill' + (isActive ? ' active' : '');
      btn.type = 'button';
      btn.dataset.gene = key;

      const meta = GENE_META[key] || { label: key, icon: '' };
      if (meta.icon) {
        const icon = document.createElement('img');
        icon.className = 'gene-icon';
        icon.alt = meta.label;
        icon.loading = 'lazy';
        icon.decoding = 'async';
        icon.src = meta.icon;
        btn.appendChild(icon);
      }
      const text = document.createElement('span');
      text.className = 'gene-label';
      text.textContent = meta.label;
      btn.appendChild(text);

      btn.addEventListener('click', () => {
        if (key === 'ALL') {
          state.genes = [];
        } else {
          if (state.genes.includes(key)) {
            state.genes = state.genes.filter(g => g !== key);
          } else {
            if (state.genes.length >= 2) state.genes = state.genes.slice(1);
            state.genes = [...state.genes, key];
          }
        }
        state.limit = PAGE_SIZE;

        for (const b of els.geneFilters.querySelectorAll('.pill')) {
          const g = b.dataset.gene;
          const activeNow = (g === 'ALL') ? state.genes.length === 0 : state.genes.includes(g);
          b.classList.toggle('active', activeNow);
        }

        invalidateCache();
        renderMutants({ append: false });
      });

      els.geneFilters.appendChild(btn);
    }
  }

  function invalidateCache() {
    lastKey = '';
    lastFiltered = null;
    lastRenderedCount = 0;
  }

  function applyMutantFiltersCached() {
    const key = getKey();
    if (key === lastKey && lastFiltered) return lastFiltered;

    // recalcular solo si cambió query/genes/sort
    const q = (state.q || '').trim().toLowerCase();
    let list = allMutants;

    if (q) {
      list = list.filter(m => m.nameL.includes(q) || m.codeL.includes(q));
    }

    if (state.genes.length) {
      list = list.filter(m => state.genes.every(g => (m.genes || []).includes(g)));
    }

    // Sort optimizado: usa nameL/codeL precalculados
    const [field, dir] = state.sort.split('-');
    const sign = dir === 'asc' ? 1 : -1;

    const sorted = list.slice().sort((a, b) => {
      const A = field === 'name' ? a.nameL : a.codeL;
      const B = field === 'name' ? b.nameL : b.codeL;
      if (A < B) return -1 * sign;
      if (A > B) return 1 * sign;

      // tie-breaker (estable)
      const A2 = field === 'name' ? a.codeL : a.nameL;
      const B2 = field === 'name' ? b.codeL : b.nameL;
      return A2.localeCompare(B2) * sign;
    });

    lastKey = key;
    lastFiltered = sorted;
    lastRenderedCount = 0; // porque el dataset cambió, hay que re-pintar desde 0
    return sorted;
  }

  function shouldRender() {
    const qlen = (state.q || '').trim().length;
    if (qlen >= MIN_CHARS_TO_RENDER) return true;
    if (state.genes.length) return true;
    return false;
  }

  function createCard(m) {
    const card = document.createElement('article');
    card.className = 'card';

    const stripe = document.createElement('div');
    stripe.className = 'stripe';
    const primaryGene = (m.genes && m.genes[0]) || 'UNKNOWN';
    stripe.style.background = `linear-gradient(180deg,
      color-mix(in srgb, ${(GENE_META[primaryGene]?.color || 'var(--unknown)')} 85%, rgba(0,240,255,.30)),
      rgba(157,0,255,.35)
    )`;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    // === THUMB DEL MUTANTE ===
    const thumb = buildThumbImg(m.code, m.name);

    const top = document.createElement('div');
    top.className = 'toprow';

    inner.appendChild(thumb);
    inner.appendChild(top);

    const name = document.createElement('h3');
    name.className = 'name';
    name.textContent = m.name;

    // ===== Genes =====
    const gene = document.createElement('div');
    gene.className = 'gene-badges';

    const geneList = (m.genes && m.genes.length) ? m.genes : ['UNKNOWN'];
    const counts = geneList.reduce((acc, g) => {
      acc[g] = (acc[g] || 0) + 1;
      return acc;
    }, {});

    for (const g of Object.keys(counts)) {
      const meta = GENE_META[g] || { label: 'Unknown', icon: '', color: 'var(--unknown)' };
      const b = document.createElement('span');
      b.className = 'gene-badge';
      b.style.borderColor = `color-mix(in srgb, ${meta.color || 'var(--unknown)'} 55%, rgba(255,255,255,.10))`;
      b.style.boxShadow = `0 0 16px color-mix(in srgb, ${meta.color || 'var(--unknown)'} 18%, transparent)`;

      if (meta.icon) {
        const reps = Math.min(2, counts[g] || 1);
        for (let i = 0; i < reps; i++) {
          const icon = document.createElement('img');
          icon.className = 'gene-mini-icon';
          icon.alt = meta.label;
          icon.loading = 'lazy';
          icon.decoding = 'async';
          icon.src = meta.icon;
          b.appendChild(icon);
        }
      }

      const label = document.createElement('span');
      label.className = 'gene-mini-label';
      label.textContent = meta.label;
      b.appendChild(label);

      gene.appendChild(b);
    }

    top.appendChild(name);

    const codeBox = document.createElement('div');
    codeBox.className = 'code';

    const codeText = document.createElement('strong');
    codeText.textContent = (m.code || '').toUpperCase();

    const copy = document.createElement('button');
    copy.className = 'copybtn';
    copy.type = 'button';
    copy.textContent = 'COPIAR';
    copy.addEventListener('click', async (e) => {
      e.stopPropagation();
      const copied = await copyTextUpper(m.code);
      showToast(`Copiado: ${copied}`);
    });

    codeBox.appendChild(codeText);
    codeBox.appendChild(copy);
    inner.appendChild(codeBox);

    const geneRow = document.createElement('div');
    geneRow.className = 'gene-row';
    geneRow.appendChild(gene);
    inner.appendChild(geneRow);

    // ===== STATS (MUTODEX) =====
    const STATS = window.MGG_STATS || {};
    const st = STATS[String(m.code || '').toUpperCase()];
    if (st) {
      const statsWrap = document.createElement('div');
      statsWrap.className = 'mutant-stats';

      const statItem = (icon, label, value) => {
        const it = document.createElement('div');
        it.className = 'stat';
        it.innerHTML = `
          <span class="sicon" aria-hidden="true">${icon}</span>
          <span class="slabel">${label}</span>
          <span class="sval">${value || '-'}</span>
        `;
        return it;
      };

      const svg = {
        hp: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9.2-8.6C.9 9 2.4 6 5.6 6c1.8 0 3.1 1 3.9 2 0 0 .9-2 3.8-2 3.2 0 4.7 3 2.8 6.4C19 16.5 12 21 12 21Z" stroke="currentColor" stroke-width="2"/></svg>',
        atk: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 4 20 10 10 20 4 14 14 4Z" stroke="currentColor" stroke-width="2"/><path d="M6.5 15.5 4 18l2 2 2.5-2.5" stroke="currentColor" stroke-width="2"/></svg>',
        spd: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" stroke="currentColor" stroke-width="2"/></svg>',
        def: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 20 6v6c0 6-8 10-8 10S4 18 4 12V6l8-4Z" stroke="currentColor" stroke-width="2"/></svg>',
      };

      statsWrap.appendChild(statItem(svg.hp, 'HP', st.hp));
      statsWrap.appendChild(statItem(svg.atk, 'ATK', st.atk));
      statsWrap.appendChild(statItem(svg.spd, 'SPD', st.speed));
      statsWrap.appendChild(statItem(svg.def, 'DEF', st.atk2));
      statsWrap.appendChild(statItem(svg.def, 'HAB', st.abilityVal));

      inner.appendChild(statsWrap);
    }

    card.appendChild(stripe);
    card.appendChild(inner);
    return card;
  }

  function updateLoadMoreUI(total) {
    if (!els.loadMoreWrap || !els.loadMoreBtn) return;
    if (state.limit < total) {
      els.loadMoreWrap.style.display = 'flex';
      els.loadMoreBtn.textContent = `Cargar más (${Math.min(PAGE_SIZE, total - state.limit)})`;
    } else {
      els.loadMoreWrap.style.display = 'none';
    }
  }

  function renderMutants({ append } = { append: false }) {
    if (!els.grid || !els.countAll || !els.countNow || !els.empty) return;

    els.countAll.textContent = allMutants.length;

    // Modo “no renderizar hasta buscar” (reduce RAM + trabajo del DOM)
    if (!shouldRender()) {
      els.countNow.textContent = '0';
      els.grid.innerHTML = '';
      els.empty.style.display = 'block';
      const p = els.empty.querySelector('p');
      if (p) {
        p.textContent = `Escribe al menos ${MIN_CHARS_TO_RENDER} letras para mostrar resultados, o filtra por genes (puedes elegir 2).`;
      }
      if (els.loadMoreWrap) els.loadMoreWrap.style.display = 'none';
      lastRenderedCount = 0;
      return;
    }

    const filtered = applyMutantFiltersCached();
    els.countNow.textContent = filtered.length;

    if (filtered.length === 0) {
      els.grid.innerHTML = '';
      els.empty.style.display = 'block';
      if (els.loadMoreWrap) els.loadMoreWrap.style.display = 'none';
      lastRenderedCount = 0;
      return;
    }

    els.empty.style.display = 'none';

    // Si cambió el key (dataset), applyMutantFiltersCached ya reseteó lastRenderedCount a 0
    // Si NO cambió el key y solo subió limit (load more), podemos APPENDEAR sin borrar todo.
    const maxToRender = Math.min(state.limit, filtered.length);

    if (!append || lastRenderedCount === 0) {
      // render completo
      els.grid.innerHTML = '';
      const frag = document.createDocumentFragment();
      for (let i = 0; i < maxToRender; i++) {
        frag.appendChild(createCard(filtered[i]));
      }
      els.grid.appendChild(frag);
      lastRenderedCount = maxToRender;
      updateLoadMoreUI(filtered.length);
      return;
    }

    // append incremental (solo agrega lo nuevo)
    if (lastRenderedCount < maxToRender) {
      const frag = document.createDocumentFragment();
      for (let i = lastRenderedCount; i < maxToRender; i++) {
        frag.appendChild(createCard(filtered[i]));
      }
      els.grid.appendChild(frag);
      lastRenderedCount = maxToRender;
    }

    updateLoadMoreUI(filtered.length);
  }

  // ===== Debounce + rAF =====
  function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  let rafId = 0;
  function scheduleRender(append = false) {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => renderMutants({ append }));
  }

  // ===== Listeners =====
  if (els.search) {
    const onSearch = debounce((value) => {
      state.q = value || '';
      state.limit = PAGE_SIZE;
      invalidateCache();
      scheduleRender(false);
    }, 120);

    els.search.addEventListener('input', (e) => onSearch(e.target.value));
  }

  if (els.sort) {
    els.sort.addEventListener('change', (e) => {
      state.sort = e.target.value;
      state.limit = PAGE_SIZE;
      invalidateCache();
      scheduleRender(false);
    });
  }

  if (els.loadMoreBtn) {
    els.loadMoreBtn.addEventListener('click', () => {
      state.limit += PAGE_SIZE;
      // no invalidamos cache: solo queremos agregar cards nuevas
      scheduleRender(true);
    });
  }

  buildGeneFilters();
  renderMutants({ append: false });

  window.MGG_MUTANTS = { allMutants };
})();
// js/other-codes.js
(function () {
  const { showToast, copyTextLower } = window.MGG_UTILS;

  const OTHER_DATASETS = {
    ORBES: {
      label: "Orbes",
      raw: `
Orbe de Ataque nivel 0	orb_basic_attack_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack.png
Orbe de Ataque nivel 1	orb_basic_attack_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_01.png
Orbe de Ataque nivel 2	orb_basic_attack_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_02.png
Orbe de Ataque nivel 3	orb_basic_attack_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_03.png
Orbe de Ataque nivel 4	orb_basic_attack_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_04.png
Orbe de Ataque nivel 5	orb_basic_attack_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_05.png
Orbe de Ataque nivel 6	orb_basic_attack_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_06.png
Orbe de Ataque nivel 7	orb_basic_attack_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_07.png

Orbe de Vida nivel 0	orb_basic_life_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life.png
Orbe de Vida nivel 1	orb_basic_life_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_01.png
Orbe de Vida nivel 2	orb_basic_life_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_02.png
Orbe de Vida nivel 3	orb_basic_life_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_03.png
Orbe de Vida nivel 4	orb_basic_life_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_04.png
Orbe de Vida nivel 5	orb_basic_life_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_05.png
Orbe de Vida nivel 6	orb_basic_life_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_06.png
Orbe de Vida nivel 7	orb_basic_life_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_07.png

Orbe de Critical nivel 0	orb_basic_critical_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical.png
Orbe de Critical nivel 1	orb_basic_critical_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_01.png
Orbe de Critical nivel 2	orb_basic_critical_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_02.png
Orbe de Critical nivel 3	orb_basic_critical_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_03.png
Orbe de Critical nivel 4	orb_basic_critical_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_04.png
Orbe de Critical nivel 5	orb_basic_critical_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_05.png
Orbe de Critical nivel 6	orb_basic_critical_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_06.png

Orbe de Experiencia nivel 0	orb_basic_xp_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp.png
Orbe de Experiencia nivel 1	orb_basic_xp_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_01.png
Orbe de Experiencia nivel 2	orb_basic_xp_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_02.png
Orbe de Experiencia nivel 3	orb_basic_xp_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_03.png
Orbe de Experiencia nivel 4	orb_basic_xp_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_04.png
Orbe de Experiencia nivel 5	orb_basic_xp_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_05.png
Orbe de Experiencia nivel 6	orb_basic_xp_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_06.png

Orbe de Fortalecimiento nivel 0	orb_basic_strengthen_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen.png
Orbe de Fortalecimiento nivel 1	orb_basic_strengthen_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_01.png
Orbe de Fortalecimiento nivel 2	orb_basic_strengthen_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_02.png
Orbe de Fortalecimiento nivel 3	orb_basic_strengthen_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_03.png
Orbe de Fortalecimiento nivel 4	orb_basic_strengthen_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_04.png
Orbe de Fortalecimiento nivel 5	orb_basic_strengthen_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_05.png
Orbe de Fortalecimiento nivel 6	orb_basic_strengthen_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_06.png

Orbe de Respuesta nivel 0	orb_basic_retaliate_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate.png
Orbe de Respuesta nivel 1	orb_basic_retaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_01.png
Orbe de Respuesta nivel 2	orb_basic_retaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_02.png
Orbe de Respuesta nivel 3	orb_basic_retaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_03.png
Orbe de Respuesta nivel 4	orb_basic_retaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_04.png
Orbe de Respuesta nivel 5	orb_basic_retaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_05.png
Orbe de Respuesta nivel 6	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png

Orbe de Escudo nivel 0	orb_basic_shield_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield.png
Orbe de Escudo nivel 1	orb_basic_shield_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_01.png
Orbe de Escudo nivel 2	orb_basic_shield_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_02.png
Orbe de Escudo nivel 3	orb_basic_shield_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_03.png
Orbe de Escudo nivel 4	orb_basic_shield_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_04.png
Orbe de Escudo nivel 5	orb_basic_shield_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_05.png
Orbe de Escudo nivel 6	orb_basic_shield_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_06.png

Orbe de Herida nivel 0	orb_basic_slash_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash.png
Orbe de Herida nivel 1	orb_basic_slash_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_01.png
Orbe de Herida nivel 2	orb_basic_slash_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_02.png
Orbe de Herida nivel 3	orb_basic_slash_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_03.png
Orbe de Herida nivel 4	orb_basic_slash_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_04.png
Orbe de Herida nivel 5	orb_basic_slash_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_05.png
Orbe de Herida nivel 6	orb_basic_slash_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_06.png

Orbe de Debilitamiento nivel 0	orb_basic_weaken_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken.png
Orbe de Debilitamiento nivel 1	orb_basic_weaken_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_01.png
Orbe de Debilitamiento nivel 2	orb_basic_weaken_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_02.png
Orbe de Debilitamiento nivel 3	orb_basic_weaken_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_03.png
Orbe de Debilitamiento nivel 4	orb_basic_weaken_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_04.png
Orbe de Debilitamiento nivel 5	orb_basic_weaken_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_05.png
Orbe de Debilitamiento nivel 6	orb_basic_weaken_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_06.png

Orbe Especial de Absorbsion nivel 0	orb_special_addregeneration_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate.png
Orbe Especial de Absorbsion nivel 1	orb_special_addregeneration_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_01.png
Orbe Especial de Absorbsion nivel 2	orb_special_addregeneration_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_02.png
Orbe Especial de Absorbsion nivel 3	orb_special_addregeneration_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_03.png
Orbe Especial de Absorbsion nivel 4	orb_special_addregeneration_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_04.png
Orbe Especial de Absorbsion nivel 5	orb_special_addregeneration_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_05.png

Orbe Especial de Respuesta nivel 0	orb_special_addretaliate_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate.png
Orbe Especial de Respuesta nivel 1	orb_special_addretaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_01.png
Orbe Especial de Respuesta nivel 2	orb_special_addretaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_02.png
Orbe Especial de Respuesta nivel 3	orb_special_addretaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_03.png
Orbe Especial de Respuesta nivel 4	orb_special_addretaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_04.png
Orbe Especial de Respuesta nivel 5	orb_special_addretaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_05.png

Orbe Especial de Herida nivel 0	orb_special_slash_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash.png
Orbe Especial de Herida nivel 1	orb_special_slash_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_01.png
Orbe Especial de Herida nivel 2	orb_special_slash_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_02.png
Orbe Especial de Herida nivel 3	orb_special_slash_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_03.png
Orbe Especial de Herida nivel 4	orb_special_slash_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_04.png
Orbe Especial de Herida nivel 5	orb_special_slash_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_05.png

Orbe Especial de Escudo nivel 0	orb_special_addshield_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield.png
Orbe Especial de Escudo nivel 1	orb_special_addshield_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_01.png
Orbe Especial de Escudo nivel 2	orb_special_addshield_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_02.png
Orbe Especial de Escudo nivel 3	orb_special_addshield_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_03.png
Orbe Especial de Escudo nivel 4	orb_special_addshield_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_04.png
Orbe Especial de Escudo nivel 5	orb_special_addshield_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_05.png

Orbe Especial de Fortalecimiento nivel 0	orb_special_addstrengthen_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen.png
Orbe Especial de Fortalecimiento nivel 1	orb_special_addstrengthen_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_01.png
Orbe Especial de Fortalecimiento nivel 2	orb_special_addstrengthen_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_02.png
Orbe Especial de Fortalecimiento nivel 3	orb_special_addstrengthen_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_03.png
Orbe Especial de Fortalecimiento nivel 4	orb_special_addstrengthen_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_04.png
Orbe Especial de Fortalecimiento nivel 5	orb_special_addstrengthen_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_05.png

Orbe Especial de Debilitamiento nivel 0	orb_special_addweaken_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken.png
Orbe Especial de Debilitamiento nivel 1	orb_special_addweaken_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_01.png
Orbe Especial de Debilitamiento nivel 2	orb_special_addweaken_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_02.png
Orbe Especial de Debilitamiento nivel 3	orb_special_addweaken_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_03.png
Orbe Especial de Debilitamiento nivel 4	orb_special_addweaken_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_04.png
Orbe Especial de Debilitamiento nivel 5	orb_special_addweaken_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_05.png

Orbe Especial de Velocidad nivel 0	orb_special_speed_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed.png
Orbe Especial de Velocidad nivel 1	orb_special_speed_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_01.png
Orbe Especial de Velocidad nivel 2	orb_special_speed_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_02.png
Orbe Especial de Velocidad nivel 3	orb_special_speed_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_03.png
Orbe Especial de Velocidad nivel 4	orb_special_speed_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_04.png
Orbe Especial de Velocidad nivel 5	orb_special_speed_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_05.png
`.trim()
    },

    CONSUMIBLES: {
      label: "Consumibles",
      raw: `
Ataque Crítico\tcharm_critical_7\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_7.png
Escudo Anticrítico\tcharm_anticritical_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_3.png
Tickets x25\tmaterial_energy25\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_energyx25.png
Fichas Jackpot\tmaterial_jackpot_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_jackpot_token.png
Doble Regeneración\tcharm_regenx2_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_3.png
Triple Experiencia\tcharm_xpx3_7\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_7.png
Cuádruple Regeneración\tcharm_regenx4_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx4_3.png
Ficha Reto\tmaterial_event_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_event_token.png
Tickets x5\tmaterial_energy5\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy5.png
Doble Experiencia\tcharm_xpx2_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx2_3.png
Fichas Reactor\tmaterial_gacha_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_gacha_token.png
Triple Experiencia\tcharm_xpx3_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_3.png
`.trim()
    },
    ESTRUCTURAS: {
      label: "Estructuras",
      raw: `
Torre Alfa\tSTR_TOWER_A
Base Central\tSTR_BASE_01
`.trim()
    },
    CAJAS: {
      label: "Cajas",
      raw: `
Caja Ciber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
Caja Necro	mystery_dead	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_undead.png
Caja Sable	mystery_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_saber.png
Caja Zoomorfo	mystery_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_zoo.png
Caja Galáctica	mystery_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_galactic.png
Caja Mítica	mystery_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_mystic.png

Caja Undead	mystery_undead	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_undead.png

Caja Elite Ciber	mystery_elite_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_cyber.png
Caja Elite Necro	mystery_elite_necro	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_necro.png
Caja Elite Sable	mystery_elite_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_saber.png
Caja Elite Zoomorfo	mystery_elite_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_zoo.png
Caja Elite Galáctica	mystery_elite_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_galactic.png
Caja Elite Mítica	mystery_elite_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_mystic.png

Caja Investigación 5	mystery_research_5	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_5.png
Caja Investigación 6	mystery_research_6	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_6.png
Caja Investigación 7	mystery_research_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_7.png
Caja Investigación IX	mystery_research_ix	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_ix.png

Caja (Fortalecer)	mystery_strengthen	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_strengthen.png
Caja (Corte)	mystery_slash	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_slash.png
Caja (Escudo)	mystery_shield	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_shield.png
Caja (Contraataque)	mystery_retaliate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_retaliate.png
Caja (Regeneración)	mystery_regenerate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_regenerate.png
`.trim()
    },
    OFERTAS: {
      label: "Ofertas",
      raw: `
Paquete Inicial\tOFFER_START
Promo VIP\tOFFER_VIP
`.trim()
    },
  };


  window.OTHER_DATASETS = OTHER_DATASETS;

  function parseOtherList(raw) {
    const lines = (raw || "")
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(Boolean);

    const out = [];
    for (const line of lines) {
      const parts = line.split(/\t+/).map(p => p.trim()).filter(Boolean);
      let name = "", code = "", img = "";
      if (parts.length >= 3) { name = parts[0]; code = parts[1]; img = parts[2]; }
      else if (parts.length === 2) { name = parts[0]; code = parts[1]; }
      else {
        const mm = line.match(/(.+)\s+([A-Za-z0-9_:-]+)\s*$/);
        if (!mm) continue;
        name = mm[1].trim(); code = mm[2].trim();
      }
      out.push({ name, code, img });
    }
    return out;
  }

  (function initOtherCodes() {
    const tabs = document.getElementById("otherTabs");
    const search = document.getElementById("otherSearch");
    const grid = document.getElementById("otherGrid");
    const empty = document.getElementById("otherEmpty");
    const loadMoreWrap = document.getElementById("otherLoadMoreWrap");
    const loadMoreBtn = document.getElementById("otherLoadMoreBtn");
    if (!tabs || !search || !grid || !empty) return;

    const PAGE_SIZE = 60;
    const MIN_CHARS_TO_RENDER = 2;

    const otherState = { key: Object.keys(OTHER_DATASETS)[0] || "ORBES", q: "", limit: PAGE_SIZE };
    const cache = new Map(); // cache por pestaña (ya parseado)

    function getListForKey(key) {
      if (cache.has(key)) return cache.get(key);
      const ds = OTHER_DATASETS[key];
      const list = parseOtherList(ds ? ds.raw : "");
      cache.set(key, list);

      // libera string grande para ayudar RAM (opcional)
      try { if (ds) ds.raw = ""; } catch { }
      return list;
    }

    function buildTabs() {
      tabs.innerHTML = "";
      Object.keys(OTHER_DATASETS).forEach((key) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "other-tab" + (otherState.key === key ? " active" : "");
        btn.textContent = OTHER_DATASETS[key].label;
        btn.addEventListener("click", () => {
          otherState.key = key;
          otherState.limit = PAGE_SIZE;
          [...tabs.querySelectorAll(".other-tab")].forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          renderOther();
        });
        tabs.appendChild(btn);
      });
    }

    function shouldRender() {
      // En "Otros códigos" no ocultamos nada: siempre renderiza
      return true;
    }


    function renderOther() {
      const list = getListForKey(otherState.key);
      const q = otherState.q.trim().toLowerCase();

      if (!shouldRender()) {
        grid.innerHTML = "";
        empty.style.display = "block";
        empty.textContent = `Escribe al menos ${MIN_CHARS_TO_RENDER} letras para mostrar resultados.`;
        if (loadMoreWrap) loadMoreWrap.style.display = "none";
        return;
      }

      const filtered = q
        ? list.filter(x => x.name.toLowerCase().includes(q) || x.code.toLowerCase().includes(q))
        : list;


      grid.innerHTML = "";
      if (filtered.length === 0) {
        empty.style.display = "block";
        if (loadMoreWrap) loadMoreWrap.style.display = "none";
        return;
      }
      empty.style.display = "none";

      const visible = filtered.slice(0, otherState.limit);

      const frag = document.createDocumentFragment();
      for (const item of visible) {
        const card = document.createElement("article");
        card.className = "other-card";

        if (item.img) {
          const im = document.createElement("img");
          im.className = "other-thumb";
          im.src = item.img;
          im.alt = item.name;
          im.loading = "lazy";
          im.decoding = "async";
          card.appendChild(im);
        }

        const title = document.createElement("h4");
        title.className = "other-name";
        title.textContent = item.name;

        const codeBox = document.createElement("div");
        codeBox.className = "other-code";

        const codeText = document.createElement("strong");
        codeText.textContent = String(item.code || "");

        const copy = document.createElement("button");
        copy.className = "other-copy";
        copy.type = "button";
        copy.textContent = "COPIAR";
        copy.addEventListener("click", async () => {
          const copied = await copyTextLower(item.code);
          showToast(`Copiado: ${copied}`);
        });

        codeBox.appendChild(codeText);
        codeBox.appendChild(copy);

        card.appendChild(title);
        card.appendChild(codeBox);
        frag.appendChild(card);
      }

      grid.appendChild(frag);

      if (loadMoreWrap && loadMoreBtn) {
        if (otherState.limit < filtered.length) {
          loadMoreWrap.style.display = "flex";
          loadMoreBtn.textContent = `Cargar más (${Math.min(PAGE_SIZE, filtered.length - otherState.limit)})`;
        } else {
          loadMoreWrap.style.display = "none";
        }
      }
    }

    search.addEventListener("input", (e) => {
      otherState.q = e.target.value || "";
      otherState.limit = PAGE_SIZE;
      renderOther();
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        otherState.limit += PAGE_SIZE;
        renderOther();
      });
    }

    buildTabs();
    renderOther();
  })();
})();
// js/evo-calc.js  (MATCH 1:1 con Calculator.js original)
(function(){
  // === Datos del original ===
  const creditsData = [0, 0, 0, 0, 0, 20000, 30000, 38700, 49000, 100000, 150000, 174000, 204000, 237000, 760000, 1100000, 1570000, 2350000, 2620000, 4030000, 4450000, 4880000, 5330000, 5810000, 8820000, 9540000, 10300000, 11100000, 11900000, 18100000, 19400000, 20600000, 22000000, 23300000, 37000000, 39200000, 41400000, 43700000, 46000000, 48400000, 50800000, 53300000, 55900000, 58500000, 61200000, 64000000, 66800000, 69700000, 72600000, 75600000, 78700000, 81800000, 84900000, 88200000, 91500000, 94800000, 98200000, 102000000, 105000000, 109000000, 113000000, 116000000, 120000000, 124000000, 128000000, 132000000, 136000000, 140000000, 144000000, 148000000, 152000000, 157000000, 161000000, 166000000, 170000000, 175000000, 179000000, 184000000, 189000000, 194000000, 198000000, 203000000, 208000000, 213000000, 218000000, 224000000, 229000000, 234000000, 240000000, 245000000, 250000000, 256000000, 262000000, 267000000, 273000000, 279000000, 285000000, 290000000, 296000000, 302000000, 308000000, 315000000, 321000000, 327000000, 333000000, 340000000, 346000000, 353000000, 359000000, 366000000, 373000000, 379000000, 386000000, 393000000, 400000000, 407000000, 414000000, 421000000, 428000000, 435000000, 443000000, 450000000, 458000000, 465000000, 473000000, 480000000, 488000000, 495000000, 503000000, 511000000, 519000000, 527000000, 535000000, 543000000, 551000000, 559000000, 568000000, 576000000, 584000000, 593000000, 601000000, 610000000, 618000000, 627000000, 636000000, 645000000, 653000000, 662000000, 671000000, 680000000, 690000000, 699000000, 708000000, 717000000, 727000000, 736000000, 745000000, 755000000, 764000000, 774000000, 779000000, 784000000, 789000000, 793000000, 798000000, 803000000, 808000000, 813000000, 818000000, 823000000, 827000000, 832000000, 837000000, 842000000, 847000000, 852000000, 856000000, 861000000, 866000000, 871000000, 876000000, 881000000, 885000000, 890000000, 895000000, 900000000, 905000000, 910000000, 914000000, 919000000, 924000000, 929000000, 934000000, 939000000, 943000000, 948000000, 953000000, 958000000, 963000000, 968000000, 973000000, 977000000, 982000000, 987000000, 992000000, 997000000, 1000000000, 1010000000, 1010000000, 1020000000, 1020000000, 1030000000, 1030000000, 1040000000, 1040000000, 1050000000, 1050000000, 1050000000, 1060000000, 1060000000, 1070000000, 1070000000, 1080000000, 1080000000, 1090000000, 1090000000, 1100000000, 1100000000, 1110000000, 1110000000, 1120000000, 1120000000, 1130000000, 1130000000, 1140000000, 1140000000, 1150000000, 1150000000, 1160000000, 1160000000, 1170000000, 1170000000, 1180000000, 1180000000, 1190000000, 1190000000, 1200000000, 1200000000, 1200000000, 1210000000, 1210000000, 1220000000, 1220000000, 1230000000, 1230000000, 1240000000, 1240000000, 1250000000, 1250000000, 1260000000, 1260000000, 1270000000, 1270000000, 1280000000, 1280000000, 1290000000, 1290000000, 1300000000, 1300000000, 1310000000, 1310000000, 1320000000, 1320000000, 1330000000, 1330000000, 1340000000, 1340000000, 1350000000, 1350000000, 1350000000, 1360000000, 1360000000, 1370000000, 1370000000, 1380000000, 1380000000, 1390000000, 1390000000, 1400000000, 1400000000, 1410000000, 1410000000, 1420000000, 1420000000, 1430000000, 1430000000, 1440000000, 1440000000, 1450000000, 1450000000, 1460000000, 1460000000, 1470000000, 1470000000, 1480000000, 1480000000, 1490000000, 1490000000, 1500000000, 1500000000, 1500000000, 1510000000, 1510000000, 1520000000, 1520000000, 1530000000, 1530000000, 1540000000, 1540000000, 1550000000, 1550000000, 1560000000, 1560000000, 1570000000, 1570000000, 1580000000, 1580000000, 159000000];

  const goldData = [0, 0, 0, 0, 0, 5, 8, 10, 12, 25, 38, 44, 51, 59, 190, 275, 393, 588, 655, 1008, 1113, 1220, 1333, 1453, 2205, 2385, 2575, 2775, 2975, 3000];

  const CREDIT_CAP_EVO = 328;
  const CREDIT_CAP_COST = 1590000000;
  const GOLD_CAP_EVO = 30;
  const GOLD_CAP_COST = 3000;

  const $ = (id) => document.getElementById(id);
  const elCurrent = $('evoCurrent');
  const elCredits = $('evoCredits');
  const elGold = $('evoGold');
  const elDiscount = $('evoDiscount');
  const elCalc = $('evoCalcBtn');
  const elReset = $('evoResetBtn');
  const elOut = $('evoResult');
  if(!elCurrent || !elCredits || !elGold || !elDiscount || !elCalc || !elOut) return;

  const toInt = (v, fallback=0) => {
    const n = parseInt(String(v ?? '').replace(/,/g,''), 10);
    return Number.isFinite(n) ? n : fallback;
  };
  const fmt = (n) => Math.round(n).toLocaleString('en-US');

  function multFromDiscount(d){
    const disc = Math.max(0, Math.min(90, toInt(d, 0)));
    return ((100 - disc) * 0.01);
  }

  function calculate(){
    let userCreds = Math.max(0, toInt(elCredits.value, 0));
    let userGold  = Math.max(0, toInt(elGold.value, 0));
    let userEVO   = Math.max(1, toInt(elCurrent.value, 1));
    const Discount = Math.max(0, Math.min(90, toInt(elDiscount.value, 0)));

    const startEvo = userEVO;
    const mult = multFromDiscount(Discount);

    const creditsStart = userCreds;
    const goldStart = userGold;

    // =======================
    // 1) CREDITS 
    // =======================
    let result = 0;

    if(userEVO >= CREDIT_CAP_EVO){
      const per = (CREDIT_CAP_COST * mult);
      const inc = Math.floor(userCreds / per);
      userCreds -= (inc * per);
      result = userEVO + inc;
    } else {
      while(true){
        if(userEVO >= CREDIT_CAP_EVO){
          const per = (CREDIT_CAP_COST * mult);
          const inc = Math.floor(userCreds / per);
          userCreds -= (inc * per);
          result = userEVO + inc;
          break;
        }

        const cost = Math.floor((creditsData[userEVO] ?? CREDIT_CAP_COST) * mult);

        // Para que coincida el EVO final, NO dejamos que se vaya a negativo
        if(userCreds - cost >= 0){
          userCreds -= cost;
          userEVO += 1;
        } else {
          result = userEVO;
          break;
        }
      }
    }

    // =======================
    // 2) GOLD (igual original, incluyendo el “reset” al llegar a 30)
    // =======================
    let increase = 0;

    if(result >= GOLD_CAP_EVO){
      const per = (GOLD_CAP_COST * mult);
      const inc = Math.floor(userGold / per);
      userGold -= (inc * per);
      increase = inc;
    } else {
      while(true){
        if((increase + result) >= GOLD_CAP_EVO){
          // 👇 ESTO ES lo que hace la original:
          // resetea increase y usa solo la fórmula fija con el oro restante
          const per = (GOLD_CAP_COST * mult);
          const inc = Math.floor(userGold / per);
          userGold -= (inc * per);
          increase = inc; // <-- reset
          break;
        }

        const base = goldData[result + increase] ?? GOLD_CAP_COST;
        const cost = Math.round(base * mult);

        if(userGold - cost >= 0){
          userGold -= cost;
          increase += 1;
        } else {
          break;
        }
      }
    }

    const finalEvo = result + increase;

    const spentCredits = Math.max(0, creditsStart - userCreds);
    const spentGold = Math.max(0, goldStart - userGold);

    elOut.innerHTML = `
      <div class="evoResult__big">
        <strong>Nuevo EVO:</strong> EVO ${finalEvo}<br>
        <strong>Incremento:</strong> +${finalEvo - startEvo}
      </div>
      <div class="evoResult__small">
        <strong>Gasto:</strong> ${fmt(spentCredits)} créditos · ${fmt(spentGold)} oro<br>
        <strong>Sobra:</strong> ${fmt(userCreds)} créditos · ${fmt(userGold)} oro<br>
        <strong>Descuento:</strong> ${Discount}%
      </div>
    `;
  }

  elCalc.addEventListener('click', calculate);
  elReset.addEventListener('click', () => {
    elCurrent.value = 1;
    elCredits.value = 0;
    elGold.value = 0;
    elDiscount.value = 0;
    elOut.innerHTML = `
      <div class="evoResult__big">Ingresa tus datos y presiona <strong>Calcular</strong>.</div>
      <div class="evoResult__small">Ahora el resultado coincide con la calculadora original.</div>
    `;
  });
})();
// ===========================
// Servicios (solo en servicios.html) — UI compacta + compra directa por WhatsApp
// ===========================
(function () {
  // Corre solo si estamos en la página de Servicios
  const offersMount = document.getElementById("offersGrid");
  const mainMount = document.getElementById("mainList");
  const specialMount = document.getElementById("specialGrid");
  if (!offersMount || !mainMount || !specialMount) return;

  // ===========================
  // Config WhatsApp (EDITA TU NÚMERO)
  // Formato: país + número, sin +, espacios ni guiones. Ej: 51999999999
  // ===========================
  const WHATSAPP_PHONE = "51906328464";
  const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_PHONE}`;

  function waLink(service) {
    // Si no configuraste número, no rompas la UI
    if (!WHATSAPP_PHONE || WHATSAPP_PHONE === "TU_NUMERO_AQUI") return "#";
    const priceText = (typeof service.price === 'string') ? service.price : `S/ ${service.price}`;
    const msg = `Hola! Quiero comprar: ${service.name} — ${priceText}`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  }



// ===========================
// Interacción: SOLO visual (no navegar)
// ===========================
function makeVisualOnly(root){
  root.querySelectorAll('.svc-tap').forEach((el) => {
    // Si por alguna razón quedara como <a>, bloquea navegación
    el.addEventListener('click', (e) => {
      if (el.tagName === 'A') e.preventDefault();
      // pulso visual
      el.classList.add('tap-pulse');
      setTimeout(() => el.classList.remove('tap-pulse'), 180);
    });
    // teclado (Enter/Espacio) solo efecto visual
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
}

  // ===========================
  // Data (convertido desde constants.ts)
  // ===========================
  const ServiceCategory = {
    OFFER: "OFFER",
    MAIN: "MAIN",
    OTHER: "OTHER",
  };

  // Nota: ajusté algunos textos para que sean publicables de forma segura.
  const SERVICES = [
    // OFERTAS
    {
      id: 101,
      name: "54 Hornos 1M de Oro",
      price: "S/ 50.00",
      category: ServiceCategory.OFFER,
      image: "../img/Oferta/1MdeOro.png",
      description:
        "Oferta relámpago: Pack de 54 hornos con 1 millón de oro directo. La mejor relación calidad-precio para empezar el día.",
      features: ["Entrega prioritaria", "Ahorro del 20%", "Soporte exclusivo"],
    },
    {
      id: 2,
      name: "54 Hornos 2M de Oro",
      price: 60,
      category: ServiceCategory.OFFER,
      image: "../img/Oferta/2MdeOro.png",
      description:
        "Pack industrial para jugadores de alto nivel que buscan dominar el ranking con 2 millones de oro.",
      features: ["Capacidad máxima", "Optimización de recursos", "Bonus de velocidad"],
    },
    {
      id: 102,
      name: "54 Hornos 3M de Oro",
      price: "S/ 75.00",
      category: ServiceCategory.OFFER,
      image: "../img/Oferta/3MdeOro.png",
      description:
        "¡OFERTA TOP! 3 Millones de oro con 54 hornos. La máxima potencia disponible en el mercado actual.",
      features: ["Máximo beneficio", "Inyección instantánea", "Certificado Elite"],
    },

    // MAIN
    {
      id: 1,
      name: "Horno de Oro",
      price: 7,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/Hornos de oro.png",
      description:
        "Aceleración masiva de producción de oro mediante mejora optimizada del flujo de recursos.",
      features: ["Entrega en menos de 10 min", "Soporte 24/7", "Proceso guiado"],
    },
    {
      id: 3,
      name: "Mutante",
      price: 2,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/mutante.png",
      description:
        "Obtención de mutantes raros según disponibilidad y opciones del usuario.",
      features: ["Selección a elegir", "Stats máximos", "Entrega rápida"],
    },
    {
      id: 4,
      name: "Orbes Basic 6 x 10",
      price: 1,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/orb-6-atk.png",
      description: "Pack de orbes básicos para fortalecer a tu equipo inicial.",
      features: ["Stock ilimitado", "Precio promocional", "Ideal para nuevos"],
    },
    {
      id: 5,
      name: "1M de Oro Directo",
      price: 35,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/1MOro.png",
      description: "Paquete de moneda premium gestionado con verificación y soporte.",
      features: ["Proceso guiado", "Entrega coordinada", "Soporte manual"],
    },
    {
      id: 6,
      name: "ORB Nivel 7 Elite",
      price: 6,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/obrNVL7.png",
      description: "Orbes de alto nivel para jugadores que buscan máximo rendimiento.",
      features: ["Efectos críticos", "Rareza extrema", "Compatibilidad total"],
    },
    {
      id: 7,
      name: "Mutante Bug Platino",
      price: 6,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/platino.png",
      description:
        "Mutante con estética platino y habilidades especiales dentro del ecosistema de juego.",
      features: ["Visual único", "Habilidades especiales", "Edición 2026"],
    },
    {
      id: 8,
      name: "100k Tarros XP",
      price: 15,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/TarrosXP.png",
      description: "Nivelación rápida para todo tu ejército de gladiadores.",
      features: ["Sube a nivel alto", "Ahorro de tiempo", "Fácil aplicación"],
    },
    {
      id: 9,
      name: "100k Fichas JackPot",
      price: 15,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/fichasjacpot.png",
      description: "Pack masivo de fichas para participar en eventos y ruletas.",
      features: ["Alta recompensa", "Giro automático", "Uso flexible"],
    },
    {
      id: 10,
      name: "Expansión Laboratorio",
      price: 4,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/laboratorio.png",
      description: "Desbloquea slots y mejoras del laboratorio de investigación.",
      features: ["Más slots", "Mejora visual", "Multi-breeding"],
    },
    {
      id: 11,
      name: "Orbe Velocidad Nivel 5",
      price: 2,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/orbeVLZ5.png",
      description: "Potenciador de velocidad para mejorar tus turnos.",
      features: ["Primer golpe", "Agilidad +50%", "Recarga rápida"],
    },
    {
      id: 12,
      name: "ORB Nivel ATK 6 x 10",
      price: 6,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/bsic-orb6.png",
      description: "Pack ofensivo para maximizar el DPS de tus ataques.",
      features: ["Daño puro", "Críticos frecuentes", "Efecto sangrado"],
    },
    {
      id: 13,
      name: "BIG BOSS Pack",
      price: 10,
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/bigboss.png",
      description: "Pack para preparar enfrentamientos contra jefes de evento.",
      features: ["Resistencia temporal", "Fuerza X2", "Drop mejorado"],
    },
    {
      id: 14,
      name: "Tutorial Hacks (Avanzado)",
      price: "Gratis",
      category: ServiceCategory.MAIN,
      image: "../img/Oferta/hacks.png",
      description:
        "Guía avanzada de optimización y estrategias para mejorar tu experiencia de juego.",
      features: ["Conceptos básicos", "Buenas prácticas", "Recursos abiertos"],
    },

    // OTHER
    {
      id: 15,
      name: "Doxeo para +51",
      price: 5,
      category: ServiceCategory.OTHER,
      image: "../img/Oferta/doxeo.png",
      description:
        "Revisión de huella digital y reporte de información pública disponible (enfoque Perú +51).",
      features: ["Fuentes públicas", "Reporte PDF", "Enfoque de privacidad"],
    },
    {
      id: 16,
      name: "Desarrollo Web Next-Gen",
      price: 40,
      category: ServiceCategory.OTHER,
      image: "../img/Oferta/programacion.png",
      description:
        "Creación de portafolios, tiendas o landing pages con estética futurista y alta conversión.",
      features: ["UI/UX único", "Optimización SEO", "Host incluido", "Entrega profesional"],
    },
    {
      id: 18,
      name: "Scripts Custom MGG",
      price: 15,
      category: ServiceCategory.OTHER,
      image: "../img/Oferta/script.png",
      description:
        "Automatizaciones personalizadas orientadas a productividad y calidad de vida dentro del juego.",
      features: ["Auto-farm", "Logs de actividades", "Configuración guiada", "Soporte"],
    },
  ];

  // ===========================
  // Helpers
  // ===========================
  const $ = (sel) => document.querySelector(sel);

  function pad3(n) {
    const s = String(n);
    return s.length >= 3 ? s : "0".repeat(3 - s.length) + s;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ===========================
  // Precio: mostrar en Soles + equivalente en USD
  // Nota: los precios numéricos del dataset están en SOLES.
  // ===========================
  const FX_PEN_PER_USD = 3.75;

  function parsePen(value) {
    if (typeof value === 'number' && isFinite(value)) return value;
    if (typeof value !== 'string') return null;

    const v = value.trim();
    if (!v) return null;
    if (/^gratis$/i.test(v)) return null;

    if (v.toLowerCase().includes('s/')) {
      const num = v.replace(/s\s*\/?\s*\.?/ig, '').replace(/,/g, '').trim();
      const n = Number.parseFloat(num);
      return Number.isFinite(n) ? n : null;
    }

    if (v.includes('$')) {
      const num = v.replace(/\$/g, '').replace(/,/g, '').trim();
      const usd = Number.parseFloat(num);
      if (!Number.isFinite(usd)) return null;
      return usd * FX_PEN_PER_USD;
    }

    return null;
  }

  function money2(n) {
    const x = Math.round((n + Number.EPSILON) * 100) / 100;
    return x.toFixed(2);
  }

  function formatPriceHTML(price) {
    if (typeof price === 'string' && /^gratis$/i.test(price.trim())) {
      return `<span class="price-main">Gratis</span>`;
    }

    const pen = parsePen(price);
    if (pen == null) {
      return `<span class="price-main">${escapeHtml(String(price ?? ''))}</span>`;
    }

    const usd = pen / FX_PEN_PER_USD;
    return `
      <span class="price-main">S/ ${money2(pen)}</span>
      <span class="price-sub">(~$${money2(usd)})</span>
    `;
  }

  // ===========================
  // Render (SIN modal / SIN flecha / SIN meta ruidosa)
  // ===========================
  function renderOffers(services) {
    const grid = offersMount;
    grid.innerHTML = services
      .map((s) => {
        const priceHtml = formatPriceHTML(s.price);

        return `
          <article class="svc-offer svc-tap" role="button" tabindex="0">
            <img class="svc-offer__img" src="${s.image}" alt="${escapeHtml(s.name)}" loading="lazy" />
            <div class="svc-offer__shade" aria-hidden="true"></div>
            <div class="svc-offer__badge"><span style="animation:pulse 1.2s infinite;">🔥</span> OFERTA</div>

            <div class="svc-offer__content">
              <div>
                <div class="svc-offer__title">${escapeHtml(s.name)}</div>
              </div>
              <div class="svc-offer__meta">
                <span class="svc-offer__price">${priceHtml}</span>
                
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderMainList(services) {
    const list = mainMount;
    list.innerHTML = services
      .map((s) => {
        const isFree = typeof s.price === 'string' && /^gratis$/i.test(s.price.trim());
        const priceHtml = isFree ? `<span class="price-main">Gratis</span>` : formatPriceHTML(s.price);

        return `
          <div class="svc-row svc-tap" role="button" tabindex="0" aria-label="Servicio" data-id="${s.id}">
            <div class="svc-row__img">
              <img src="${s.image}" alt="" loading="lazy" />
            </div>

            <div class="svc-row__main">
              <div class="svc-row__title">${escapeHtml(s.name)}</div>
            </div>

            <div class="svc-row__right">
              <div class="svc-row__btnWrap">
                <div class="svc-row__price ${isFree ? "svc-row__price--free" : ""}">${priceHtml}</div>
                
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderSpecial(services) {
    const grid = specialMount;
    grid.innerHTML = services
      .map((s) => {
        const priceHtml = formatPriceHTML(s.price);

        return `
          <article class="svc-special svc-tap" role="button" tabindex="0" aria-label="Premium">
            <div class="svc-special__glow" aria-hidden="true"></div>

            <div class="svc-special__imgWrap">
              <img src="${s.image}" alt="${escapeHtml(s.name)}" loading="lazy" />
              <div class="svc-special__grad" aria-hidden="true"></div>
              <div class="svc-special__badge">Premium Ops</div>
            </div>

            <div class="svc-special__body">
              <div class="svc-special__top">
                <div class="svc-special__title">${escapeHtml(s.name)}</div>
                <div class="svc-special__price">${priceHtml}</div>
              </div>
              
            </div>
          </article>
        `;
      })
      .join("");
  }

  
  // ===========================
  // Tap feedback (sin navegar)
  // ===========================
  function attachTapFeedback(root){
    if(!root) return;
    root.addEventListener("click", (e)=>{
      const card = e.target.closest(".svc-tap");
      if(!card) return;
      card.classList.remove("tap-pulse");
      // force reflow
      void card.offsetWidth;
      card.classList.add("tap-pulse");
      setTimeout(()=>card.classList.remove("tap-pulse"), 220);
    }, {passive:true});

    // Enter/Space accessibility
    root.addEventListener("keydown", (e)=>{
      if(e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".svc-tap");
      if(!card) return;
      e.preventDefault();
      card.click();
    });
  }

// ===========================
  // Init
  // ===========================
  const offers = SERVICES.filter((s) => s.category === ServiceCategory.OFFER);
  const main = SERVICES.filter((s) => s.category === ServiceCategory.MAIN);
  const other = SERVICES.filter((s) => s.category === ServiceCategory.OTHER);

  renderOffers(offers);
  attachTapFeedback(offersMount);
  renderMainList(main);
  attachTapFeedback(mainMount);
  renderSpecial(other);

  // simple pulse animation (small helper)
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse { 0%{transform:scale(1)} 50%{transform:scale(1.15)} 100%{transform:scale(1)} }
  `;
  document.head.appendChild(style);
})();
// js/mascota.js
(function () {
  // ====== 1) Asegura que exista la mascota (auto-inject si falta) ======
  function ensureMascota() {
    let box = document.getElementById("mascota");
    if (box) return box;

    box = document.createElement("div");
    box.id = "mascota";
    box.className = "mascota";
    box.innerHTML = `
      <img id="mascotaImg" class="mascota-img" alt="Mascota" />
      <div id="mascotaBubble" class="mascota-bubble"></div>
    `;
    document.body.appendChild(box);
    return box;
  }

  const box = ensureMascota();
  const img = document.getElementById("mascotaImg");
  const bubble = document.getElementById("mascotaBubble");
  if (!box || !img || !bubble) return;

  // ====== 2) Calcula la ruta base correcta (root vs /html/) ======
  // Si estamos dentro de /html/, las imágenes están en ../img/
  const IN_HTML_FOLDER = /\/html\//i.test(location.pathname.replace(/\\/g, "/"));
  const IMG_BASE = IN_HTML_FOLDER ? "../img/" : "img/";

  // ====== 3) Detecta página actual para skin (multipágina) ======
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const SKINS = {
    inicio: IMG_BASE + "Trono.png",
    evo: IMG_BASE + "urgan.png",
    otros: IMG_BASE + "agresivo.png",
    guia: IMG_BASE + "bigbos.png",
    descargas: IMG_BASE + "urgan.png",
    servicios: IMG_BASE + "whatsapp_mascota.png",
  };

  function skinForPage() {
    if (page === "evo.html") return { src: SKINS.evo, text: "Modo EVO ⚙️" };
    if (page === "otros.html") return { src: SKINS.otros, text: "Modo Otros códigos ⚡" };
    if (page === "guia.html") return { src: SKINS.guia, text: "Modo Guía 📘" };
    if (page === "descargas.html") return { src: SKINS.descargas, text: "Modo Descargas 📦" };
    if (page === "servicios.html") return { src: SKINS.servicios, text: "Tócame para escribirme 💬" };
    return { src: SKINS.inicio, text: "Modo Inicio ✨" };
  }

  // ====== 4) Animaciones / bubble ======
  box.classList.add("idle");

  const tips = [
    "¿Buscas un mutante? Usa el buscador 😼",
    "Tip: COPIAR = listo ✅",
    "Los códigos cambian el destino…",
    "¿Cyber o Mítico?",
    "Abre “Guía” si eres nuevo 📘",
  ];

  let bubbleTimer = null;
  let evolveTimers = [];

  function say(text, ms = 1500) {
    bubble.textContent = text;
    bubble.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("show"), ms);
  }

  function react(cls, text) {
    box.classList.remove("react-bounce", "react-shake", "react-pop");
    void box.offsetWidth;
    box.classList.add(cls);
    if (text) say(text);
    setTimeout(() => box.classList.remove(cls), 700);
  }

  function evolveTo(src, text) {
    if (!src) return;

    evolveTimers.forEach(t => clearTimeout(t));
    evolveTimers = [];

    if (img.getAttribute("src") === src) {
      if (text) say(text);
      return;
    }

    box.classList.remove("evolve");
    img.classList.remove("evolve-img");
    void box.offsetWidth;

    box.classList.add("evolve");
    img.classList.add("evolve-img");

    // Cambia sprite en el “flash”
    evolveTimers.push(setTimeout(() => { img.src = src; }, 360));

    if (text) say(text, 1400);

    evolveTimers.push(setTimeout(() => {
      box.classList.remove("evolve");
      img.classList.remove("evolve-img");
    }, 900));
  }

  // ====== 5) Aplica skin por página (y también por hash si algún día lo usas) ======
  function applyMascota() {
    const { src, text } = skinForPage();
    evolveTo(src, text);
  }

  applyMascota();

  // ====== Servicios: la mascota abre WhatsApp (solo aquí) ======
  const WA_PHONE = "TU_NUMERO_AQUI";
  const WA_BASE = `https://wa.me/${WA_PHONE}`;
  function waHref() {
    if (!WA_PHONE || WA_PHONE === "TU_NUMERO_AQUI") return "#";
    const msg = "Hola! Te escribo desde la página de Servicios.";
    return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
  }

  if (page === "servicios.html") {
    // Mantén el mensaje visible
    bubble.textContent = "Tócame para escribirme";
    bubble.classList.add("show");

    // Si en HTML ya es un <a>, actualiza href. Si no, usa click.
    try {
      if (box.tagName === "A") {
        box.href = waHref();
        box.target = "_blank";
        box.rel = "noopener";
      }
    } catch {}

    box.addEventListener("click", (e) => {
      const href = waHref();
      if (!href || href === "#") {
        // Sin número configurado: no navegar
        e.preventDefault();
        say("Configura tu número en pages.js ✅", 1600);
        return;
      }
      // Si no es <a> o el navegador no sigue el href por alguna razón
      if (box.tagName !== "A") {
        window.open(href, "_blank", "noopener");
      }
    }, { passive: false });
  }

  // Si en algún momento vuelves a usar hash en alguna página, no molesta:
  window.addEventListener("hashchange", applyMascota);

  // ====== 6) Reacciones (igual que antes) ======
  const search1 = document.getElementById("searchInput");
  const search2 = document.getElementById("otherSearch");

  [search1, search2].filter(Boolean).forEach(inp => {
    let t = null;
    inp.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => react("react-pop", "Buscando..."), 220);
    });
  });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const txt = (b.textContent || "").toUpperCase();
    if (!txt.includes("COPIAR")) return;
    react("react-pop", "¡Copiado!");
  });

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScroll < 900) return;
    lastScroll = now;
    react("react-shake", "");
  }, { passive: true });

  let tipIndex = 0;
  box.addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    react("react-bounce", tips[tipIndex]);
  });

  setTimeout(() => say("¡Listo para ayudarte!"), 700);
})();
// js/app.js
// Descargas compatibles con TODOS los navegadores (incluido iOS)

document.addEventListener("click", async (e) => {
  const link = e.target.closest("a.download-btn");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  // solo archivos de descargas
  if (!href.includes("downloads/")) return;

  e.preventDefault();

  const url = new URL(href, location.href).href;
  const filename =
    link.getAttribute("download") ||
    href.split("/").pop() ||
    "archivo";

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + response.status);

    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);

    const temp = document.createElement("a");
    temp.href = blobURL;
    temp.download = filename;
    document.body.appendChild(temp);
    temp.click();
    temp.remove();

    setTimeout(() => URL.revokeObjectURL(blobURL), 2000);
  } catch (err) {
    // fallback móvil (iPhone, navegadores in-app)
    window.open(url, "_blank", "noopener,noreferrer");
    alert("Tu navegador no permite descarga directa. Guarda el archivo manualmente.");
  }
});
