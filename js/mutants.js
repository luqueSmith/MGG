// js/mutants.js
(function () {
  const { decodeEntities, geneFromCode, GENE_META, showToast, copyTextUpper } = window.MGG_UTILS;

  // === EXCEPCIONES (a mano) ===
// Clave: código EXACTO como en tu data (respeta mayúsculas) ej: "A_01", "AA_01"
// Valor: URL exacta (respeta mayús/minús del link).
const THUMB_OVERRIDES = {
  "CE_99": "https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png",
};

function mutantThumbUrl(code){
  const original = String(code || "").trim();
  if (!original) return "";

  // 1) Si está en excepciones, usar esa
  if (THUMB_OVERRIDES[original]) return THUMB_OVERRIDES[original];

  // 2) Default: platinum (código en minúsculas)
  const c = original.toLowerCase();
  return `https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${c}_platinum.png`;
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
      const gene = geneFromCode(code);
      out.push({ name, code, gene });
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

  const state = { q: '', gene: 'ALL', sort: 'name-asc', limit: PAGE_SIZE };

  function buildGeneFilters() {
    if (!els.geneFilters) return;
    const order = ['ALL', 'CYBER', 'NECRO', 'SABER', 'ZOOMORPH', 'GALACTIC', 'MYTHIC', 'UNKNOWN'];
    els.geneFilters.innerHTML = '';
    for (const key of order) {
      const btn = document.createElement('button');
      btn.className = 'pill' + (state.gene === key ? ' active' : '');
      btn.type = 'button';
      btn.dataset.gene = key;
      btn.textContent = GENE_META[key].label;
      btn.addEventListener('click', () => {
        state.gene = key;
        state.limit = PAGE_SIZE;
        for (const b of els.geneFilters.querySelectorAll('.pill')) b.classList.remove('active');
        btn.classList.add('active');
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
    if (state.gene !== 'ALL') {
      list = list.filter(m => m.gene === state.gene);
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
    if (state.gene !== 'ALL') return true;
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
        `Escribe al menos ${MIN_CHARS_TO_RENDER} letras para mostrar resultados, o filtra por gen.`);
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
      stripe.style.background = `linear-gradient(180deg,
        color-mix(in srgb, ${(GENE_META[m.gene]?.color || 'var(--unknown)')} 85%, rgba(0,240,255,.30)),
        rgba(157,0,255,.35)
      )`;

      const inner = document.createElement('div');
      inner.className = 'card-inner';

      // === THUMB DEL MUTANTE ===
      const thumb = document.createElement('img');
      thumb.className = 'mutant-thumb';
      thumb.src = mutantThumbUrl(m.code);
      thumb.alt = m.name;
      thumb.loading = 'lazy';
      thumb.decoding = 'async';
      thumb.referrerPolicy = 'no-referrer';
      thumb.addEventListener('error', () => {
        // Si no existe la imagen, no rompemos el diseño
        thumb.remove();
        card.classList.add('no-thumb');
      });

      const top = document.createElement('div');
      top.className = 'toprow';

      // Inserta thumb + top
      inner.appendChild(thumb);
      inner.appendChild(top);


      const name = document.createElement('h3');
      name.className = 'name';
      name.textContent = m.name;

      const gene = document.createElement('div');
      gene.className = 'gene-badge';
      gene.textContent = (GENE_META[m.gene] ? GENE_META[m.gene].label : 'Unknown');

      top.appendChild(name);
      top.appendChild(gene);

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
