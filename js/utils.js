(function () {
  function decodeEntities(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
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
    // icon: ruta local (la web ya incluye estos png en /img)
    ALL: { label: 'Todos', color: 'var(--accent)', icon: '' },
    CYBER: { label: 'Cyber', color: 'var(--cyber)', icon: 'img/cyber.png' },
    NECRO: { label: 'Necro', color: 'var(--necro)', icon: 'img/necro.png' },
    SABER: { label: 'Saber', color: 'var(--saber)', icon: 'img/sable.png' },
    ZOOMORPH: { label: 'Zoomorph', color: 'var(--zoomorph)', icon: 'img/zomorfo.png' },
    GALACTIC: { label: 'Galactic', color: 'var(--galactic)', icon: 'img/galactico.png' },
    MYTHIC: { label: 'Mythic', color: 'var(--mythic)', icon: 'img/mitico.png' },
    UNKNOWN: { label: 'Unknown', color: 'var(--unknown)', icon: '' },
  };

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 1100);
  }

  // === COPIAR EN MINÚSCULAS (otros códigos, orbes, etc) ===
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

  // === COPIAR EN MAYÚSCULAS (MUTANTES) ===
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

  // === EXPORTAR TODO (CLAVE DEL ARREGLO) ===
  window.MGG_UTILS = {
    decodeEntities,
    geneFromCode,
    genesFromCode,
    GENE_META,
    showToast,
    copyTextLower,
    copyTextUpper
  };
})();
