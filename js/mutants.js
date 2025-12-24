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
  // Permite filtrar por 1 o 2 genes (ej: Cyber + Necro)
  const state = { q: '', genes: [], sort: 'name-asc', limit: PAGE_SIZE };

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

      // Icono + texto (como en tu referencia)
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
            // máximo 2
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
        renderMutants();
      });
      els.geneFilters.appendChild(btn);
    }
  }

  function applyMutantFilters() {
    const q = state.q.trim().toLowerCase();
    let list = allMutants;

    if (q) {
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.code.toLowerCase().includes(q)
      );
    }
    if (state.genes.length) {
      list = list.filter(m => state.genes.every(g => (m.genes || []).includes(g)));
    }

    const [field, dir] = state.sort.split('-');
    const sign = dir === 'asc' ? 1 : -1;

    list = [...list].sort((a, b) => {
      const A = (a[field] || '').toLowerCase();
      const B = (b[field] || '').toLowerCase();
      if (A < B) return -1 * sign;
      if (A > B) return 1 * sign;

      const A2 = (a[field === 'name' ? 'code' : 'name'] || '').toLowerCase();
      const B2 = (b[field === 'name' ? 'code' : 'name'] || '').toLowerCase();
      return A2.localeCompare(B2) * sign;
    });

    return list;
  }

  function shouldRender() {
    const qlen = state.q.trim().length;
    if (qlen >= MIN_CHARS_TO_RENDER) return true;
    if (state.genes.length) return true;
    return false;
  }

  function renderMutants() {
    if (!els.grid || !els.countAll || !els.countNow || !els.empty) return;

    els.countAll.textContent = allMutants.length;

    // Modo “no renderizar hasta buscar” (reduce RAM + trabajo del DOM)
    if (!shouldRender()) {
      els.countNow.textContent = '0';
      els.grid.innerHTML = '';
      els.empty.style.display = 'block';
      els.empty.querySelector('p') && (els.empty.querySelector('p').textContent =
        `Escribe al menos ${MIN_CHARS_TO_RENDER} letras para mostrar resultados, o filtra por genes (puedes elegir 2).`);
      if (els.loadMoreWrap) els.loadMoreWrap.style.display = 'none';
      return;
    }

    const filtered = applyMutantFilters();
    els.countNow.textContent = filtered.length;

    const visible = filtered.slice(0, state.limit);

    els.grid.innerHTML = '';
    if (filtered.length === 0) {
      els.empty.style.display = 'block';
      if (els.loadMoreWrap) els.loadMoreWrap.style.display = 'none';
      return;
    }
    els.empty.style.display = 'none';

    const frag = document.createDocumentFragment();

    for (const m of visible) {
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

      // Inserta thumb + top
      inner.appendChild(thumb);
      inner.appendChild(top);


      const name = document.createElement('h3');
      name.className = 'name';
      name.textContent = m.name;

      // ===== Genes (se renderizan ABAJO para que no deformen la fila superior) =====
      const gene = document.createElement('div');
      gene.className = 'gene-badges';

      // genes puede traer repetidos (ej: AA_99 => [CYBER, CYBER])
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

        // Si viene repetido (ej: CYBER x2) en vez de mostrar "x2" pintamos 2 iconos.
        // (máximo 2, porque el código solo puede traer 2 genes)
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

        // Ya no mostramos "x2" (lo reemplazamos por 2 iconos).

        gene.appendChild(b);
      }

      top.appendChild(name);

      const codeBox = document.createElement('div');
      codeBox.className = 'code';

      const codeText = document.createElement('strong');
      codeText.textContent = m.code.toUpperCase();

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

      // Genes debajo del código (más limpio en móvil + no distorsiona)
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
      frag.appendChild(card);
    }

    els.grid.appendChild(frag);

    // load more
    if (els.loadMoreWrap && els.loadMoreBtn) {
      if (state.limit < filtered.length) {
        els.loadMoreWrap.style.display = 'flex';
        els.loadMoreBtn.textContent = `Cargar más (${Math.min(PAGE_SIZE, filtered.length - state.limit)})`;
      } else {
        els.loadMoreWrap.style.display = 'none';
      }
    }
  }

  if (els.search) {
    els.search.addEventListener('input', (e) => {
      state.q = e.target.value || '';
      state.limit = PAGE_SIZE;
      renderMutants();
    });
  }
  if (els.sort) {
    els.sort.addEventListener('change', (e) => {
      state.sort = e.target.value;
      state.limit = PAGE_SIZE;
      renderMutants();
    });
  }
  if (els.loadMoreBtn) {
    els.loadMoreBtn.addEventListener('click', () => {
      state.limit += PAGE_SIZE;
      renderMutants();
    });
  }

  buildGeneFilters();
  renderMutants();

  window.MGG_MUTANTS = { allMutants };
})();
