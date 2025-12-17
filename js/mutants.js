// js/mutants.js
(function(){
  const { decodeEntities, geneFromCode, GENE_META, showToast, copyTextUpper } = window.MGG_UTILS;

  function parseRawList(raw){
    const lines = (raw || '')
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(Boolean);

    const out = [];
    for(const line of lines){
      const match = line.match(/([a-z]{1,3}_[0-9]{2}(?:_[a-z0-9]+)*)\s*$/i);
      if(!match) continue;

      const code = match[1].trim();
      let namePart = line.slice(0, match.index).trim();
      namePart = namePart.replace(/^\d+\.\s*/, '').trim();
      const name = decodeEntities(namePart);
      const gene = geneFromCode(code);
      out.push({ name, code, gene });
    }
    return out;
  }

  const allMutants = parseRawList(window.RAW_LIST || '');

  const els = {
    search: document.getElementById('searchInput'),
    grid: document.getElementById('grid'),
    empty: document.getElementById('emptyState'),
    countNow: document.getElementById('countNow'),
    countAll: document.getElementById('countAll'),
    sort: document.getElementById('sortSelect'),
    geneFilters: document.getElementById('geneFilters'),
  };

  const state = { q:'', gene:'ALL', sort:'name-asc' };

  function buildGeneFilters(){
    if(!els.geneFilters) return;
    const order = ['ALL','CYBER','NECRO','SABER','ZOOMORPH','GALACTIC','MYTHIC','UNKNOWN'];
    els.geneFilters.innerHTML = '';
    for(const key of order){
      const btn = document.createElement('button');
      btn.className = 'pill' + (state.gene === key ? ' active' : '');
      btn.type = 'button';
      btn.dataset.gene = key;
      btn.textContent = GENE_META[key].label;
      btn.addEventListener('click', () => {
        state.gene = key;
        for(const b of els.geneFilters.querySelectorAll('.pill')) b.classList.remove('active');
        btn.classList.add('active');
        renderMutants();
      });
      els.geneFilters.appendChild(btn);
    }
  }

  function applyMutantFilters(){
    const q = state.q.trim().toLowerCase();
    let list = allMutants;

    if(q){
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.code.toLowerCase().includes(q)
      );
    }
    if(state.gene !== 'ALL'){
      list = list.filter(m => m.gene === state.gene);
    }

    const [field, dir] = state.sort.split('-');
    const sign = dir === 'asc' ? 1 : -1;

    list = [...list].sort((a,b)=>{
      const A = (a[field]||'').toLowerCase();
      const B = (b[field]||'').toLowerCase();
      if(A < B) return -1 * sign;
      if(A > B) return  1 * sign;

      const A2 = (a[field==='name'?'code':'name']||'').toLowerCase();
      const B2 = (b[field==='name'?'code':'name']||'').toLowerCase();
      return A2.localeCompare(B2) * sign;
    });

    return list;
  }

  function geneBadgeStyle(gene){
    const color = (GENE_META[gene] || GENE_META.UNKNOWN).color;
    return `
      border-color: color-mix(in srgb, ${color} 55%, rgba(255,255,255,.18));
      box-shadow: 0 0 18px color-mix(in srgb, ${color} 22%, transparent);
    `;
  }

  function codeColorStyle(gene){
    const color = (GENE_META[gene] || GENE_META.UNKNOWN).color;
    return `
      border-color: color-mix(in srgb, ${color} 45%, rgba(0,240,255,.18));
      box-shadow: 0 0 18px color-mix(in srgb, ${color} 18%, transparent);
    `;
  }

  function renderMutants(){
    if(!els.grid || !els.countAll || !els.countNow || !els.empty) return;
    const filtered = applyMutantFilters();

    els.countAll.textContent = allMutants.length;
    els.countNow.textContent = filtered.length;
    els.grid.innerHTML = '';

    if(filtered.length === 0){
      els.empty.style.display = 'block';
      return;
    }
    els.empty.style.display = 'none';

    const frag = document.createDocumentFragment();
    for(const m of filtered){
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

      const top = document.createElement('div');
      top.className = 'toprow';

      const name = document.createElement('h3');
      name.className = 'name';
      name.textContent = m.name;

      const gene = document.createElement('div');
      gene.className = 'gene-badge';
      gene.textContent = (GENE_META[m.gene] ? GENE_META[m.gene].label : 'Unknown');
      gene.style.cssText = geneBadgeStyle(m.gene);

      top.appendChild(name);
      top.appendChild(gene);

      const codeBox = document.createElement('div');
      codeBox.className = 'code';
      codeBox.style.cssText = codeColorStyle(m.gene);

      const codeText = document.createElement('strong');
      codeText.textContent = m.code.toUpperCase();

      const copy = document.createElement('button');
      copy.className = 'copybtn';
      copy.type = 'button';
      copy.textContent = 'COPIAR';
      copy.addEventListener('click', async (e)=>{
        e.stopPropagation();
        const copied = await copyTextUpper(m.code);
        showToast(`Copiado: ${copied}`);
      });

      codeBox.appendChild(codeText);
      codeBox.appendChild(copy);

      inner.appendChild(top);
      inner.appendChild(codeBox);

      card.appendChild(stripe);
      card.appendChild(inner);
      frag.appendChild(card);
    }

    els.grid.appendChild(frag);
  }

  // events
  if(els.search){
    els.search.addEventListener('input', (e)=>{
      state.q = e.target.value || '';
      renderMutants();
    });
  }
  if(els.sort){
    els.sort.addEventListener('change', (e)=>{
      state.sort = e.target.value;
      renderMutants();
    });
  }

  buildGeneFilters();
  renderMutants();

  // expose (optional)
  window.MGG_MUTANTS = { allMutants };
})();
