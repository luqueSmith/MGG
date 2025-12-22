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

  const GENE_META = {
    ALL: { label: 'Todos', color: 'var(--accent)' },
    CYBER: { label: 'Cyber', color: 'var(--cyber)' },
    NECRO: { label: 'Necro', color: 'var(--necro)' },
    SABER: { label: 'Saber', color: 'var(--saber)' },
    ZOOMORPH: { label: 'Zoomorph', color: 'var(--zoomorph)' },
    GALACTIC: { label: 'Galactic', color: 'var(--galactic)' },
    MYTHIC: { label: 'Mythic', color: 'var(--mythic)' },
    UNKNOWN: { label: 'Unknown', color: 'var(--unknown)' },
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
    GENE_META,
    showToast,
    copyTextLower,
    copyTextUpper
  };
})();
