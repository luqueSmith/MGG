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
