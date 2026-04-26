const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Novedades', path: '/novedades' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Evo', path: '/evo' },
  { name: 'Otros códigos', path: '/otros' },
  { name: 'Guía', path: '/guia' },
  { name: 'Tutoriales', path: '/tutoriales' },
  { name: 'Descargas', path: '/descargas' },
];

const GENES = [
  { id: 'a', name: 'Cibernético', shortName: 'CYBER', icon: '', image: 'img/cyber.png' },
  { id: 'b', name: 'Zombi', shortName: 'ZOMBI', icon: '', image: 'img/necro.png' },
  { id: 'c', name: 'Guerrero', shortName: 'SABLE', icon: '', image: 'img/sable.png' },
  { id: 'd', name: 'Bestia', shortName: 'ZOOMORFO', icon: '', image: 'img/zomorfo.png' },
  { id: 'e', name: 'Galáctico', shortName: 'GALAXY', icon: '', image: 'img/galactico.png' },
  { id: 'f', name: 'Mítico', shortName: 'MYTHIC', icon: '', image: 'img/mitico.png' }
];

const GENE_COLORS = {
  a: ['#38bdf8', '#2563eb'],
  b: ['#a855f7', '#6d28d9'],
  c: ['#f59e0b', '#d97706'],
  d: ['#22c55e', '#15803d'],
  e: ['#06b6d4', '#0f766e'],
  f: ['#ec4899', '#be185d'],
  n: ['#64748b', '#334155']
};


const THUMB_OVERRIDES = {
  CE_99: 'https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png',
  AD_15: 'https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_15.png',
};

const NOVEDADES_CONFIG = {
  blogJsonpUrl: 'https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8',
  fallbackFile: 'novedades.json'
};

let novedadesCache = null;
let novedadesCachePromise = null;


const NAV_ICONS = {
  '/': 'home',
  '/novedades': 'newspaper',
  '/servicios': 'sell',
  '/evo': 'bolt',
  '/otros': 'inventory_2',
  '/guia': 'menu_book',
  '/tutoriales': 'smart_display',
  '/descargas': 'download'
};

function icon(name, extra = '') {
  return `<span class="mi ${extra}">${name}</span>`;
}

function thumbCandidates(code) {
  const normalized = normalizeCodeKey(code);
  if (!normalized) return [];
  if (THUMB_OVERRIDES[normalized]) return [THUMB_OVERRIDES[normalized]];
  const c = normalized.toLowerCase();
  return [
    `https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${c}_platinum.png`,
    `https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${c}.png`,
  ];
}

function attachSmartThumbs(scope = document) {
  scope.querySelectorAll('img[data-candidates]').forEach(img => {
    img.onerror = () => {
      let list = [];
      try { list = JSON.parse(img.dataset.candidates || '[]'); } catch { }
      let i = Number(img.dataset.ci || '0') + 1;
      img.dataset.ci = String(i);
      if (i < list.length) {
        img.src = list[i];
        return;
      }
      if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
        img.classList.add('thumb-fallback');
        img.onerror = null;
      }
    };
  });
}

function normalizeCodeKey(code) {
  return String(code || '').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_');
}

function parseNumberLike(value) {
  if (value == null) return null;
  const text = String(value).trim();
  if (!text) return null;
  const main = text.split('x')[0].trim().replace(/,/g, '');
  const num = Number(main);
  return Number.isFinite(num) ? num : null;
}

function genePaletteFromCode(code) {
  const genes = String(code || '').split('_')[0].toLowerCase().split('');
  const g1 = GENE_COLORS[genes[0]] || GENE_COLORS.n;
  const g2 = GENE_COLORS[genes[1]] || GENE_COLORS[genes[0]] || GENE_COLORS.n;
  return [g1[0], g2[1] || g2[0]];
}

function mutantThumbDataUri(name, code) {
  const [c1, c2] = genePaletteFromCode(code);
  const letters = String(name || code || '?')
    .replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase() || 'MG';
  const safeName = String(name || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="35%" r="55%">
        <stop offset="0%" stop-color="rgba(255,255,255,.65)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="600" height="600" rx="42" fill="#020617"/>
    <rect x="18" y="18" width="564" height="564" rx="34" fill="url(#g)" opacity="0.88"/>
    <circle cx="300" cy="190" r="210" fill="url(#glow)" opacity="0.25"/>
    <rect x="50" y="438" width="500" height="96" rx="24" fill="rgba(2,6,23,.44)" stroke="rgba(255,255,255,.18)"/>
    <text x="300" y="305" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="170">${letters}</text>
    <text x="300" y="495" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="28" opacity="0.92">${safeName.slice(0, 24)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function parseMutantLine(line) {
  const text = String(line || '').trim();
  if (!text) return null;

  // Soporta dos formatos:
  // 1) Nombre<TAB>codigo
  // 2) Nombre con espacios codigo_al_final
  let nombre = '';
  let codigo = '';

  if (text.includes('\t')) {
    const parts = text.split('\t').map(part => part.trim()).filter(Boolean);
    codigo = parts.pop() || '';
    nombre = parts.join(' ');
  } else {
    const match = text.match(/^(.*?)\s+([A-Za-z0-9]+(?:_[A-Za-z0-9]+)+)$/);
    if (!match) return null;
    nombre = match[1].trim();
    codigo = match[2].trim();
  }

  if (!nombre || !codigo || !codigo.includes('_')) return null;
  return { nombre, codigo };
}

function buildMutantsData() {
  const raw = (window.RAW_LIST || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const statsMap = window.MGG_STATS || {};
  return raw.map(parseMutantLine).filter(Boolean).map(({ nombre, codigo }) => {
    const key = normalizeCodeKey(codigo);
    const stat = statsMap[key] || {};
    const fallbackSeed = [...codigo].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const speed = parseNumberLike(stat.speed) || ((fallbackSeed % 65) / 20 + 2.6);
    return {
      nombre,
      codigo,
      imagen: thumbCandidates(codigo)[0] || mutantThumbDataUri(nombre, codigo),
      imagenes: thumbCandidates(codigo),
      fallbackImagen: mutantThumbDataUri(nombre, codigo),
      stats: {
        hp: parseNumberLike(stat.hp) || 9000 + (fallbackSeed % 9000),
        atk: parseNumberLike(stat.atk) || 3000 + (fallbackSeed % 9000),
        spd: Number(speed.toFixed(2)),
        def: parseNumberLike(stat.atk2) || parseNumberLike(stat.abilityVal) || 2500 + (fallbackSeed % 7000),
        hab: parseNumberLike(stat.abilityVal) || 0,
      }
    };
  });
}


function buildOtherCodesData() {
  const source = window.RAW_OTHER_CODES || {};
  const out = [];
  Object.entries(source).forEach(([categoria, raw]) => {
    String(raw || '')
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean)
      .forEach(line => {
        const parts = line.split('\t');
        out.push({
          nombre: (parts[0] || '').trim(),
          codigo: (parts[1] || '').trim(),
          categoria,
          imagen: (parts[2] || '').trim() || undefined,
        });
      });
  });
  return out;
}

let MUTANTS_DATA = [];
const OTHER_CODES_DATA = buildOtherCodesData();
const OTHER_CATEGORIES = [...new Set(OTHER_CODES_DATA.map(item => item.categoria))];

const SERVICES_DATA = [
  { id: 'offer_1', nombre: '54 Hornos 1M de Oro', precio: 37, imagen: 'img/Oferta/1MdeOro.png', descripcion: 'Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.', features: ['Entrega prioritaria', 'Ahorro del 20%', 'Soporte exclusivo'], categoria: 'OFFER' },
  { id: 'offer_2', nombre: '54 Hornos 2M de Oro', precio: 48, imagen: 'img/Oferta/2MdeOro.png', descripcion: 'Pack industrial para jugadores de alto nivel con 2 millones de oro.', features: ['Capacidad máxima', 'Optimización de recursos', 'Bonus de velocidad'], categoria: 'OFFER' },
  { id: 'offer_3', nombre: '54 Hornos 3M de Oro', precio: 59, imagen: 'img/Oferta/3MdeOro.png', descripcion: 'La máxima potencia disponible en el mercado actual.', features: ['Máximo beneficio', 'Inyección instantánea', 'Certificado Elite'], categoria: 'OFFER' },
  { id: 'main_1', nombre: 'Horno de Oro', precio: 7, imagen: 'img/Oferta/Hornos de oro.png', descripcion: 'Aceleración masiva de producción de oro.', features: ['Entrega en menos de 10 min', 'Soporte 24/7', 'Proceso guiado'], categoria: 'MAIN' },
  { id: 'main_2', nombre: 'Mutante', precio: 2, imagen: 'img/Oferta/mutante.png', descripcion: 'Obtención de mutantes raros según disponibilidad.', features: ['Selección a elegir', 'Stats máximos', 'Entrega rápida'], categoria: 'MAIN' },
  { id: 'main_3', nombre: 'Orbes Basic 6 x 10', precio: 1, imagen: 'img/Oferta/bsic-orb6.png', descripcion: 'Pack de orbes básicos para fortalecer a tu equipo.', features: ['Stock ilimitado', 'Precio promocional', 'Ideal para nuevos'], categoria: 'MAIN' },
  { id: 'main_4', nombre: '1M de Oro Directo', precio: 35, imagen: 'img/Oferta/1MOro.png', descripcion: 'Paquete de moneda premium gestionado con verificación.', features: ['Proceso guiado', 'Entrega coordinada', 'Soporte manual'], categoria: 'MAIN' },
  { id: 'main_5', nombre: 'ORB Nivel 7 Elite', precio: 6, imagen: 'img/Oferta/obrNVL7.png', descripcion: 'Orbes de alto nivel para máximo rendimiento.', features: ['Efectos críticos', 'Rareza extrema', 'Compatibilidad total'], categoria: 'MAIN' },
  { id: 'main_6', nombre: 'Mutante Bug Platino', precio: 6, imagen: 'img/Oferta/platino.png', descripcion: 'Mutante con estética platino y habilidades especiales.', features: ['Visual único', 'Habilidades especiales', 'Edición 2026'], categoria: 'MAIN' },
  { id: 'main_7', nombre: '100k Tarros XP', precio: 15, imagen: 'img/Oferta/TarrosXP.png', descripcion: 'Nivelación rápida para tu ejército de gladiadores.', features: ['Sube a nivel alto', 'Ahorro de tiempo', 'Fácil aplicación'], categoria: 'MAIN' },
  { id: 'main_8', nombre: '100k Fichas JackPot', precio: 15, imagen: 'img/Oferta/fichasjacpot.png', descripcion: 'Pack masivo de fichas para eventos y ruletas.', features: ['Alta recompensa', 'Giro automático', 'Uso flexible'], categoria: 'MAIN' },
  { id: 'main_9', nombre: 'Expansión Laboratorio', precio: 4, imagen: 'img/Oferta/laboratorio.png', descripcion: 'Desbloquea slots y mejoras del laboratorio.', features: ['Más slots', 'Mejora visual', 'Multi-breeding'], categoria: 'MAIN' },
  { id: 'main_10', nombre: 'Orbe Velocidad Nivel 5', precio: 2, imagen: 'img/Oferta/orbeVLZ5.png', descripcion: 'Potenciador de velocidad para mejorar turnos.', features: ['Primer golpe', 'Agilidad +50%', 'Recarga rápida'], categoria: 'MAIN' },
  { id: 'main_11', nombre: 'ORB Nivel ATK 6 x 10', precio: 6, imagen: 'img/Oferta/orb-6-atk.png', descripcion: 'Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete', features: ['Daño puro', 'Críticos frecuentes', 'Efecto sangrado'], categoria: 'MAIN' },
  { id: 'main_12', nombre: 'BIG BOSS', precio: 10, imagen: 'img/Oferta/bigboss.png', descripcion: 'Te consigo a BigBoss en tu cuenta.', features: ['Resistencia temporal', 'Fuerza X2', 'Drop mejorado'], categoria: 'MAIN' },
  { id: 'main_13', nombre: 'Tutorial Hacks ', precio: 10, imagen: 'img/Oferta/hacks.png', descripcion: 'Guía avanzada, Te enseño personalmente como se hacen los hacks.', features: ['Conceptos básicos', 'Buenas prácticas', 'Recursos abiertos'], categoria: 'MAIN' },
  { id: 'other_1', nombre: 'Doxeo para +51', precio: 5, imagen: 'img/Oferta/doxeo.png', descripcion: 'Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.', features: ['Fuentes públicas', 'Reporte PDF', 'Enfoque de privacidad'], categoria: 'OTHER' },
  {
    id: 'other_2',
    nombre: 'Desarrollo Web Next-Gen',
    precio: 40,
    imagen: 'img/Oferta/programacion.png',
    descripcion: 'Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..',
    features: ['UI/UX único', 'Optimización SEO', 'Host incluido', 'Entrega profesional'],
    categoria: 'OTHER',
    saberMas: 'https://webcraft-ux.github.io/webcraft/'
  },
  { id: 'other_3', nombre: 'Scripts Custom MGG', precio: 15, imagen: 'img/Oferta/script.png', descripcion: 'Automatizaciones personalizadas para productividad.', features: ['Auto-farm', 'Logs de actividades', 'Configuración guiada', 'Soporte'], categoria: 'OTHER' },
  { id: 'other_4', nombre: 'ChatGPT Premium', precio: 8, imagen: 'https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg', descripcion: 'Acceso premium para chatGPT barato y con descuento por cantidad.', features: ['Asistencia rápida', 'Uso personal', 'Configuración guiada', 'Soporte base'], categoria: 'OTHER' }
];

const TASA_USD = 3.75;
const WHATSAPP_NUMBER = '51906328464';
const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t';
const DESCUENTOS = [0, 50, 60, 65, 70, 75, 80, 85, 90];
const state = {
  home: { search: '', selectedGenes: [], sort: 'name-az', showResults: true },
  others: { search: '', category: OTHER_CATEGORIES[0] || '', visible: 12 },
  evo: { evoActual: 1, creditos: 0, oro: 0, descuento: 0, resultado: null },
};

const app = document.getElementById('app');
const mainNav = document.getElementById('mainNav');
const footerNav = document.getElementById('footerNav');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
window.addEventListener('hashchange', render);
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
bootstrap();


async function loadMutantsList() {
  const candidates = ['downloads/lista-codigos.txt', 'lista-codigos.txt'];
  let text = '';
  for (const url of candidates) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        text = await res.text();
        if (text.trim()) break;
      }
    } catch (_) {}
  }
  if (!text.trim()) {
    text = window.RAW_LIST || '';
  }
  window.RAW_LIST = text;
  MUTANTS_DATA = buildMutantsData();
}

async function bootstrap() {
  window.RAW_OTHER_CODES = window.RAW_OTHER_CODES || {};
  await loadMutantsList();
  updateOnlineStatus();
  setupNav();
  render();
}

function formatBlogDate(value) {
  if (!value) return 'Fecha no disponible';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('es-PE', { year: 'numeric', month: 'short', day: 'numeric' });
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFirstImage(html) {
  const match = String(html || '').match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : '';
}

function buildNovedadItem(entry) {
  const title = entry.title?.$t || entry.title || 'Sin título';
  const published = entry.published?.$t || entry.published || '';
  const content = entry.content?.$t || entry.content || entry.summary?.$t || entry.summary || '';
  const link = Array.isArray(entry.link)
    ? (entry.link.find(l => l.rel === 'alternate')?.href || entry.link[0]?.href || '#')
    : (entry.url || entry.href || '#');
  const image = extractFirstImage(content) || entry.image || '';
  const text = stripHtml(content);
  return {
    title,
    published,
    dateLabel: formatBlogDate(published),
    excerpt: text.slice(0, 220) + (text.length > 220 ? '…' : ''),
    excerptFull: text,
    rawText: text,
    link,
    image,
  };
}

function loadBloggerFeedJSONP() {
  if (novedadesCachePromise) return novedadesCachePromise;
  novedadesCachePromise = new Promise((resolve, reject) => {
    const callbackName = `mggFeedCallback_${Date.now()}`;
    const script = document.createElement('script');
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('Tiempo agotado al cargar novedades.'));
    }, 12000);
    function cleanup() {
      clearTimeout(timeout);
      if (script.parentNode) script.parentNode.removeChild(script);
      try { delete window[callbackName]; } catch (_) { window[callbackName] = undefined; }
    }
    window[callbackName] = (payload) => {
      cleanup();
      try {
        const entries = payload?.feed?.entry || [];
        const items = entries.map(buildNovedadItem);
        novedadesCache = items;
        resolve(items);
      } catch (err) {
        reject(err);
      }
    };
    script.src = `${NOVEDADES_CONFIG.blogJsonpUrl}&callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error('No se pudo cargar el feed de Blogger.'));
    };
    document.body.appendChild(script);
  }).catch(async () => {
    const res = await fetch(NOVEDADES_CONFIG.fallbackFile, { cache: 'no-store' });
    const raw = await res.json();
    const items = raw.map(buildNovedadItem);
    novedadesCache = items;
    return items;
  });
  return novedadesCachePromise;
}

async function hydrateHomeNovedades() {
  const feed = document.getElementById('newsFeed');
  if (!feed) return;
  try {
    const items = novedadesCache || await loadBloggerFeedJSONP();
    feed.innerHTML = items.length ? items.map(novedadCard).join('') : '<div class="panel empty">No se encontraron novedades.</div>';
  } catch (err) {
    feed.innerHTML = '<div class="panel empty">No se pudieron cargar las novedades en este momento.</div>';
  }
}

function novedadCard(item) {
  return `<article class="news-card">
    ${item.image ? `<img class="news-thumb" src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" referrerpolicy="no-referrer">` : ''}
    <div class="news-body">
      <div class="news-meta">${escapeHtml(item.dateLabel)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.excerpt || 'Sin descripción disponible.')}</p>
      <a class="btn" target="_blank" rel="noopener noreferrer" href="${item.link}">${icon('open_in_new')}<span>Ver publicación</span></a>
    </div>
  </article>`;
}

function updateOnlineStatus() {
  document.getElementById('onlineDot').style.background = navigator.onLine ? 'var(--green)' : 'var(--red)';
  document.getElementById('onlineText').textContent = navigator.onLine ? 'System Online' : 'Offline Mode';
}

function setupNav() {
  const navHtml = NAV_LINKS.map(link => `<a class="nav-link" data-path="${link.path}" href="#${link.path}">${icon(NAV_ICONS[link.path] || 'star')}<span>${link.name}</span></a>`).join('');
  mainNav.innerHTML = navHtml;
  footerNav.innerHTML = navHtml;
}

function currentPath() {
  const hash = location.hash.replace(/^#/, '');
  return hash || '/';
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function formatMoney(num) { return Number(num).toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }

function filteredMutants() {
  const { search, selectedGenes, sort } = state.home;
  const q = search.toLowerCase();
  const list = MUTANTS_DATA.filter(m => {
    const matchesSearch = m.nombre.toLowerCase().includes(q) || m.codigo.toLowerCase().includes(q);
    const genes = m.codigo.split('_')[0].split('');
    const matchesGenes = selectedGenes.every(g => genes.includes(g));
    return matchesSearch && matchesGenes;
  });
  list.sort((a, b) => {
    if (sort === 'name-az') return a.nombre.localeCompare(b.nombre);
    if (sort === 'name-za') return b.nombre.localeCompare(a.nombre);
    if (sort === 'code-az') return a.codigo.localeCompare(b.codigo);
    return b.codigo.localeCompare(a.codigo);
  });
  return list;
}

function copyText(value) {
  let finalValue = value;

  if (value === value.toUpperCase()) {
    finalValue = value.toUpperCase();
  } else {
    finalValue = value.toLowerCase();
  }

  navigator.clipboard.writeText(finalValue).catch(() => { });
}

function universalGroupCta() {
  if (!WHATSAPP_GROUP_URL) return '';
  return `
    <section class="panel" style="margin-top:18px">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px">
        <div>
          <h3 style="margin:0 0 6px">Grupo de WhatsApp</h3>
          <p class="muted" style="margin:0">Únete para ayuda, consejos y enseñanza dentro de la comunidad.</p>
        </div>
        <a class="btn primary" target="_blank" href="${WHATSAPP_GROUP_URL}">${icon('groups')}<span>Unirme al grupo</span></a>
      </div>
    </section>`;
}

function render() {
  mainNav.classList.remove('open');
  const path = currentPath();
  [...document.querySelectorAll('.nav-link')].forEach(el => el.classList.toggle('active', el.dataset.path === path));

  const routes = {
    '/': renderHome,
    '/novedades': renderNovedades,
    '/servicios': renderServices,
    '/evo': renderEvo,
    '/otros': renderOthers,
    '/guia': renderGuide,
    '/tutoriales': renderTutorials,
    '/descargas': renderDownloads,
  };
  (routes[path] || renderHome)();
  app.insertAdjacentHTML('beforeend', universalGroupCta());
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindCommonEvents() {
  app.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', () => {
    const value = btn.dataset.copy;

    if (btn.closest('.mutant-card')) {
      copyText(value.toUpperCase());
    } else if (btn.closest('.other-code-card')) {
      copyText(value.toLowerCase());
    } else {
      copyText(value);
    }
    const old = btn.innerHTML;
    btn.innerHTML = `${icon('check_circle')}<span>Copiado</span>`;
    setTimeout(() => btn.innerHTML = old, 1600);
  }));
  app.querySelectorAll('[data-wa]').forEach(btn => btn.addEventListener('click', () => {
    const msg = encodeURIComponent(`Hola! Quiero comprar: ${btn.dataset.wa}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }));
}

function renderHome() {
  const list = filteredMutants();
  const { search, selectedGenes, sort, showResults } = state.home;
  const destacados = ['El Glitchy Corazon', 'Spiraxia', 'Irradiancia', 'El Hambre', 'Dandy Cosmico', 'Kereon del Abismo']
    .map(name => MUTANTS_DATA.find(item => item.nombre.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);

  app.innerHTML = `
    <div class="stack">
      <section class="hero">
        <div class="eyebrow">${icon('science', 'eyebrow-icon')} Base principal</div>
        <h1>MUTANTS <span>GENETIC GLADIATORS</span></h1>
        <p>Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.</p>
      </section>

      <section class="panel stack">
        <div class="section-title"><h2>Mutantes nuevos agregados</h2></div>
        <p class="muted">Se añadieron los mutantes 547 al 552 y seguirán apareciendo automáticamente cuando actualices <code>lista-codigos.txt</code>.</p>
        <div class="mutant-grid">
          ${destacados.length ? destacados.map(mutantCard).join('') : `<div class="panel empty" style="grid-column:1/-1">No se encontraron los mutantes nuevos en la lista cargada.</div>`}
        </div>
      </section>

      <section class="panel stack">
        <div class="section-title"><h2>Lista de mutantes</h2></div>
        <div class="toolbar">
          <div class="search-wrap"><input id="homeSearch" value="${escapeHtml(search)}" placeholder="Buscar por nombre o código..." /></div>
          <select id="homeSort" class="select">
            <option value="name-az" ${sort === 'name-az' ? 'selected' : ''}>Nombre A→Z</option>
            <option value="name-za" ${sort === 'name-za' ? 'selected' : ''}>Nombre Z→A</option>
            <option value="code-az" ${sort === 'code-az' ? 'selected' : ''}>Código A→Z</option>
            <option value="code-za" ${sort === 'code-za' ? 'selected' : ''}>Código Z→A</option>
          </select>
          <button id="toggleResults" class="btn ${showResults ? '' : 'primary'}">${showResults ? 'Ocultar resultados' : 'Mostrar resultados'}</button>
        </div>
        <div>
          <div class="kv" style="margin-bottom:10px;"><span class="k">Filtrar por genes</span></div>
          <div class="chip-row">
            ${GENES.map(g => `<button class="chip gene-chip ${selectedGenes.includes(g.id) ? 'active' : ''}" data-gene="${g.id}"><img src="${g.image}" alt="${g.name}"><span>${g.name}</span>${icon(g.icon, 'gene-icon')}</button>`).join('')}
          </div>
        </div>
      </section>

      <section class="summary-bar">
        <div class="creator">
          <img src="img/perfil.png" alt="Smith Luque" referrerpolicy="no-referrer">
          <div>
            <h3 style="margin:0">Smith Luque</h3>
            <p class="muted" style="margin:4px 0 0">Catálogo MGG · Inicio sincronizado</p>
          </div>
        </div>
        <div class="counter"><div><span>Encontrados</span><strong>${list.length}</strong></div><div><span>Total base</span><strong style="color:#fff;opacity:.85">${MUTANTS_DATA.length}</strong></div></div>
      </section>

      <section class="mutant-grid">
        ${showResults ? (list.length ? list.map(mutantCard).join('') : `<div class="panel empty" style="grid-column:1/-1">No se encontraron mutantes con esos filtros.</div>`) : `<div class="panel empty" style="grid-column:1/-1">Resultados ocultos.</div>`}
      </section>
    </div>`;

  const input = document.getElementById('homeSearch');
  if (input) {
    input.addEventListener('input', e => {
      const value = e.target.value;
      const cursorPos = e.target.selectionStart ?? value.length;
      state.home.search = value;
      renderHome();
      const newInput = document.getElementById('homeSearch');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(cursorPos, cursorPos);
      }
    });
  }

  document.getElementById('homeSort').addEventListener('change', e => { state.home.sort = e.target.value; renderHome(); });
  document.getElementById('toggleResults').addEventListener('click', () => { state.home.showResults = !state.home.showResults; renderHome(); });
  app.querySelectorAll('[data-gene]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.gene;
    const idx = state.home.selectedGenes.indexOf(id);
    if (idx > -1) state.home.selectedGenes.splice(idx, 1);
    else if (state.home.selectedGenes.length < 2) state.home.selectedGenes.push(id);
    renderHome();
  }));
  bindCommonEvents();
  attachSmartThumbs(app);
}

function extractSectionsFromText(text) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  const markers = ['ANUNCIOS:', 'OFERTAS:', 'MINI EVENTO:', 'CRONOLOGIA:'];
  const sections = [];
  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    const start = clean.indexOf(marker);
    if (start === -1) continue;
    let end = clean.length;
    for (let j = i + 1; j < markers.length; j++) {
      const next = clean.indexOf(markers[j], start + marker.length);
      if (next !== -1) { end = next; break; }
    }
    const body = clean.slice(start + marker.length, end).trim();
    if (body) sections.push({ title: marker.replace(':',''), body: body.slice(0, 320) + (body.length > 320 ? '…' : '') });
  }
  if (!sections.length) {
    sections.push({ title: 'Resumen', body: clean.slice(0, 420) + (clean.length > 420 ? '…' : '') });
  }
  return sections.slice(0, 4);
}

function recentNovedadesList(items) {
  return items.slice(0, 8).map(item => `<a class="side-link" target="_blank" rel="noopener noreferrer" href="${item.link}">${escapeHtml(item.title)}</a>`).join('');
}

function renderNovedades() {
  app.innerHTML = `
    <div class="stack">
      <section class="hero hero-novedades">
        <div class="eyebrow">${icon('newspaper', 'eyebrow-icon')} Portal informativo</div>
        <h1>NOVEDADES <span>MUTODEX</span></h1>
        <p>Sección separada para noticias y actualizaciones, ordenada como un blog y sincronizada con Mutodex cuando el feed responde.</p>
      </section>

      <div class="news-layout">
        <section class="news-main">
          <div id="newsFeed" class="news-list">
            <div class="panel empty">Cargando publicaciones…</div>
          </div>
        </section>

        <aside class="news-sidebar">
          <section class="panel side-panel">
            <div class="kv"><span class="k">Páginas</span></div>
            <div class="side-links">
              <a class="side-link" target="_blank" rel="noopener noreferrer" href="https://mutodex.blogspot.com/p/lista-oficial-mutantes.html">Lista oficial: mutantes</a>
              <a class="side-link" target="_blank" rel="noopener noreferrer" href="https://mutodex.blogspot.com/p/hibridaciones-secretas.html">Hibridaciones secretas</a>
              <a class="side-link" target="_blank" rel="noopener noreferrer" href="https://mutodex.blogspot.com/p/orbes.html">Orbes</a>
              <a class="side-link" target="_blank" rel="noopener noreferrer" href="https://mutodex.blogspot.com/p/descuento-de-evo.html">Descuento de EVO</a>
              <a class="side-link" target="_blank" rel="noopener noreferrer" href="https://mutodex.blogspot.com/p/calculadora-de-stats.html">Calculadora de stats</a>
            </div>
          </section>

          <section class="panel side-panel">
            <div class="kv"><span class="k">Entradas recientes</span></div>
            <div id="recentNewsLinks" class="side-links">
              <div class="muted">Cargando lista…</div>
            </div>
          </section>

          <section class="panel side-panel">
            <div class="kv"><span class="k">Sincronización</span></div>
            <p class="muted" style="margin:0">Esta página intenta leer el feed público de Blogger y usa <code>novedades.json</code> como respaldo local si el navegador bloquea la carga.</p>
          </section>
        </aside>
      </div>
    </div>`;

  bindCommonEvents();
  hydrateNovedadesPage();
}

async function hydrateNovedadesPage() {
  const feed = document.getElementById('newsFeed');
  const side = document.getElementById('recentNewsLinks');
  if (!feed) return;
  try {
    const items = novedadesCache || await loadBloggerFeedJSONP();
    feed.innerHTML = items.length ? items.map(novedadPost).join('') : '<div class="panel empty">No se encontraron publicaciones.</div>';
    if (side) side.innerHTML = items.length ? recentNovedadesList(items) : '<div class="muted">Sin entradas.</div>';
  } catch (err) {
    feed.innerHTML = '<div class="panel empty">No se pudieron cargar las publicaciones en este momento.</div>';
    if (side) side.innerHTML = '<div class="muted">No disponible.</div>';
  }
}

function novedadPost(item) {
  const sections = extractSectionsFromText(item.excerptFull || item.rawText || item.excerpt || '');
  return `<article class="panel blog-post">
    <div class="blog-post-head">
      <div class="blog-date">${escapeHtml(item.dateLabel)}</div>
      <h2><a target="_blank" rel="noopener noreferrer" href="${item.link}">${escapeHtml(item.title)}</a></h2>
    </div>
    ${item.image ? `<div class="blog-post-media"><img class="blog-post-image" src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" referrerpolicy="no-referrer"></div>` : ''}
    <div class="blog-post-content">
      ${sections.map(section => `<section class="blog-section"><h3>${escapeHtml(section.title)}</h3><p class="muted">${escapeHtml(section.body)}</p></section>`).join('')}
    </div>
    <div class="blog-post-actions">
      <a class="btn" target="_blank" rel="noopener noreferrer" href="${item.link}">${icon('open_in_new')}<span>Ver publicación completa</span></a>
    </div>
  </article>`;
}

function mutantCard(m) {
  const geneIds = m.codigo.split('_')[0].split('');
  const geneBadges = geneIds.map(id => GENES.find(g => g.id === id)).filter(Boolean);
  return `<article class="card mutant-card">
      <div class="thumb-wrap">
        <img class="thumb mutant-thumb" src="${m.imagen}" alt="${escapeHtml(m.nombre)}" referrerpolicy="no-referrer" loading="lazy" decoding="async" data-candidates='${escapeHtml(JSON.stringify(m.imagenes || []))}' data-ci="0" data-fallback="${escapeHtml(m.fallbackImagen || '')}">
      </div>
      <div class="card-body">
        <h3>${escapeHtml(m.nombre)}</h3>
        <div class="code">${escapeHtml(m.codigo)}</div>
        <div class="gene-badges" style="margin:12px 0">${geneBadges.map(g => `<span class="badge">${icon(g.icon)}<span>${g.shortName}</span></span>`).join('')}</div>
        <div class="mini-stats">
          <div><span>HP</span><strong>${formatMoney(m.stats.hp)}</strong></div>
          <div><span>ATK</span><strong>${formatMoney(m.stats.atk)}</strong></div>
          <div><span>SPD</span><strong>${formatMoney(m.stats.spd)}</strong></div>
          <div><span>DEF</span><strong>${formatMoney(m.stats.def)}</strong></div>
        </div>
        <button class="btn full" data-copy="${escapeHtml(m.codigo)}">${icon('content_copy')}<span>Copiar código</span></button>
      </div>
    </article>`;
}

function renderServices() {
  const offers = SERVICES_DATA.filter(s => s.categoria === 'OFFER');
  const mains = SERVICES_DATA.filter(s => s.categoria === 'MAIN');
  const others = SERVICES_DATA.filter(s => s.categoria === 'OTHER');
  const groupButton = WHATSAPP_GROUP_URL && !WHATSAPP_GROUP_URL.includes('REEMPLAZA_ESTE_LINK')
    ? `<a class="btn full" target="_blank" href="${WHATSAPP_GROUP_URL}">${icon('groups')}<span>Entrar al grupo</span></a>`
    : `<a class="btn full" target="_blank" href="${WHATSAPP_GROUP_URL}">${icon('groups')}<span>Grupo de ayuda</span></a>`;

  app.innerHTML = `
    <div class="stack">
      <section class="hero"><div class="eyebrow">${icon('sell', 'eyebrow-icon')} Packs / Pedidos</div><h1>SERVICIOS</h1><p>Opciones rápidas y directas para avanzar en el juego.</p></section>
      <section class="cta-banner">
        <div>
          <h3 style="margin:0 0 8px">¿Tienes dudas?</h3>
          <p class="muted" style="margin:0">Escríbeme directamente por WhatsApp o entra al grupo de ayuda.</p>
        </div>
        <div style="display:grid;gap:10px;min-width:min(280px,100%);">
          <a class="btn primary full" target="_blank" href="https://wa.me/${WHATSAPP_NUMBER}">${icon('chat')}<span>Contactar ahora</span></a>
          ${groupButton}
        </div>
      </section>
      <section><div class="section-title"><h2>Ofertas limitadas</h2></div><div class="service-grid">${offers.map(s => serviceCard(s, true)).join('')}</div></section>
      <section><div class="section-title"><h2>Servicios principales</h2></div><div class="service-grid services-main-grid">${mains.map(s => serviceCard(s)).join('')}</div></section>
      <section><div class="section-title"><h2>Otros</h2></div><div class="service-grid">${others.map(s => serviceCard(s, false, true)).join('')}</div></section>
    </div>`;
  bindCommonEvents();
  attachSmartThumbs(app);
}

function serviceCard(s, offer = false, other = false) {
  const usd = (s.precio / TASA_USD).toFixed(2);
  return `<article class="card ${offer ? 'offer' : ''}">
    ${s.imagen ? `<img class="service-thumb" src="${s.imagen}" alt="${escapeHtml(s.nombre)}" style="width:100%;aspect-ratio:16/10;object-fit:cover;display:block;">` : ''}
    <div class="card-body">
      <h3>${escapeHtml(s.nombre)}</h3>
      <p class="muted">${escapeHtml(s.descripcion)}</p>
      <div class="features" style="margin:14px 0 18px">
        ${s.features.map(f => `<span class="tag">${escapeHtml(f)}</span>`).join('')}
      </div>
      <div class="service-price">
        ${s.precio === 0 ? 'GRATIS' : `S/ ${Number(s.precio).toFixed(2)}`}
        ${Number(s.precio) > 0 ? `<small>≈ $${usd} USD</small>` : ''}
      </div>

      <div style="display:grid; gap:10px; margin-top:14px;">
        <button class="btn full ${offer ? 'primary' : ''} ${other ? 'green' : ''}" data-wa="${escapeHtml(`${s.nombre} — ${Number(s.precio) > 0 ? `S/ ${Number(s.precio).toFixed(2)}` : 'GRATIS'}`)}">
          ${Number(s.precio) === 0 ? `${icon('visibility')}<span>Ver ahora</span>` : `${icon('shopping_bag')}<span>Comprar pack</span>`}
        </button>

        ${s.saberMas ? `
          <a href="${s.saberMas}" target="_blank" class="btn full">
            ${icon('open_in_new')}<span>Saber más</span>
          </a>
        ` : ''}
      </div>
    </div>
  </article>`;
}

function renderEvo() {
  const { evoActual, creditos, oro, descuento, resultado } = state.evo;

  app.innerHTML = `
  <div class="stack">
    <section class="hero"><div class="eyebrow">🧮 Herramienta de cálculo</div><h1>EVO <span>CALCULADORA</span></h1><p>Calcula hasta qué EVO puedes subir según tus recursos y el descuento.</p></section>
    <div class="dual-grid responsive-grid">
      <section class="panel">
        <div class="form-grid">
          <label class="kv"><span class="k">EVO actual</span><input id="evoActual" class="input" type="number" value="${evoActual}"></label>
          <label class="kv"><span class="k">Créditos disponibles</span><input id="creditos" class="input" type="number" value="${creditos}"></label>
          <label class="kv"><span class="k">Oro disponible</span><input id="oro" class="input" type="number" value="${oro}"></label>
          <div><div class="kv" style="margin-bottom:10px"><span class="k">Descuento aplicable</span></div><div class="discount-grid">${DESCUENTOS.map(d => `<button class="chip ${descuento === d ? 'active' : ''}" data-discount="${d}">${d}%</button>`).join('')}</div></div>
          <div style="display:flex;gap:12px"><button id="calcBtn" class="btn primary full">Calcular</button><button id="resetBtn" class="btn">Reset</button></div>
        </div>
      </section>
      <section>${resultado ? evoResultHtml(resultado) : `<div class="panel empty" style="height:100%">Ingresa tus recursos y presiona <b>Calcular</b>.</div>`}</section>
    </div>
    <section class="panel note"><div>ℹ️</div><div><strong>Nota del desarrollador</strong><p class="muted">Cálculo basado en reglas del script original: cap de oro 30 y cap de créditos 328.</p></div></section>
  </div>`;

  document.getElementById('evoActual').addEventListener('input', e => {
    state.evo.evoActual = Number(e.target.value || 1);
  });

  document.getElementById('creditos').addEventListener('input', e => {
    state.evo.creditos = Number(e.target.value || 0);
  });

  document.getElementById('oro').addEventListener('input', e => {
    state.evo.oro = Number(e.target.value || 0);
  });

  app.querySelectorAll('[data-discount]').forEach(btn => btn.addEventListener('click', () => {
    state.evo.descuento = Number(btn.dataset.discount);
    renderEvo();
  }));

  document.getElementById('calcBtn').addEventListener('click', () => {
    const creditsData = [0,0,0,0,0,20000,30000,38700,49000,100000,150000,174000,204000,237000,760000,1100000,1570000,2350000,2620000,4030000,4450000,4880000,5330000,5810000,8820000,9540000,10300000,11100000,11900000,18100000,19400000,20600000,22000000,23300000,37000000,39200000,41400000,43700000,46000000,48400000,50800000,53300000,55900000,58500000,61200000,64000000,66800000,69700000,72600000,75600000,78700000,81800000,84900000,88200000,91500000,94800000,98200000,102000000,105000000,109000000,113000000,116000000,120000000,124000000,128000000,132000000,136000000,140000000,144000000,148000000,152000000,157000000,161000000,166000000,170000000,175000000,179000000,184000000,189000000,194000000,198000000,203000000,208000000,213000000,218000000,224000000,229000000,234000000,240000000,245000000,250000000,256000000,262000000,267000000,273000000,279000000,285000000,290000000,296000000,302000000,308000000,315000000,321000000,327000000,333000000,340000000,346000000,353000000,359000000,366000000,373000000,379000000,386000000,393000000,400000000,407000000,414000000,421000000,428000000,435000000,443000000,450000000,458000000,465000000,473000000,480000000,488000000,495000000,503000000,511000000,519000000,527000000,535000000,543000000,551000000,559000000,568000000,576000000,584000000,593000000,601000000,610000000,618000000,627000000,636000000,645000000,653000000,662000000,671000000,680000000,690000000,699000000,708000000,717000000,727000000,736000000,745000000,755000000,764000000,774000000,779000000,784000000,789000000,793000000,798000000,803000000,808000000,813000000,818000000,823000000,827000000,832000000,837000000,842000000,847000000,852000000,856000000,861000000,866000000,871000000,876000000,881000000,885000000,890000000,895000000,900000000,905000000,910000000,914000000,919000000,924000000,929000000,934000000,939000000,943000000,948000000,953000000,958000000,963000000,968000000,973000000,977000000,982000000,987000000,992000000,997000000,1000000000,1010000000,1010000000,1020000000,1020000000,1030000000,1030000000,1040000000,1040000000,1050000000,1050000000,1050000000,1060000000,1060000000,1070000000,1070000000,1080000000,1080000000,1090000000,1090000000,1100000000,1100000000,1110000000,1110000000,1120000000,1120000000,1130000000,1130000000,1140000000,1140000000,1150000000,1150000000,1160000000,1160000000,1170000000,1170000000,1180000000,1180000000,1190000000,1190000000,1200000000,1200000000,1200000000,1210000000,1210000000,1220000000,1220000000,1230000000,1230000000,1240000000,1240000000,1250000000,1250000000,1260000000,1260000000,1270000000,1270000000,1280000000,1280000000,1290000000,1290000000,1300000000,1300000000,1310000000,1310000000,1320000000,1320000000,1330000000,1330000000,1340000000,1340000000,1350000000,1350000000,1350000000,1360000000,1360000000,1370000000,1370000000,1380000000,1380000000,1390000000,1390000000,1400000000,1400000000,1410000000,1410000000,1420000000,1420000000,1430000000,1430000000,1440000000,1440000000,1450000000,1450000000,1460000000,1460000000,1470000000,1470000000,1480000000,1480000000,1490000000,1490000000,1500000000,1500000000,1500000000,1510000000,1510000000,1520000000,1520000000,1530000000,1530000000,1540000000,1540000000,1550000000,1550000000,1560000000,1560000000,1570000000,1570000000,1580000000,1580000000,159000000];
    const goldData = [0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3000];
    const CREDIT_CAP_EVO = 328;
    const CREDIT_CAP_COST = 1590000000;
    const GOLD_CAP_EVO = 30;
    const GOLD_CAP_COST = 3000;
    const toInt = (v, fallback = 0) => {
      const n = parseInt(String(v ?? '').replace(/,/g, ''), 10);
      return Number.isFinite(n) ? n : fallback;
    };

    let userCreds = Math.max(0, toInt(state.evo.creditos, 0));
    let userGold = Math.max(0, toInt(state.evo.oro, 0));
    let userEVO = Math.max(1, toInt(state.evo.evoActual, 1));
    const Discount = Math.max(0, Math.min(90, toInt(state.evo.descuento, 0)));

    const startEvo = userEVO;
    const mult = ((100 - Discount) * 0.01);
    const creditsStart = userCreds;
    const goldStart = userGold;
    let result = 0;

    if (userEVO >= CREDIT_CAP_EVO) {
      const per = (CREDIT_CAP_COST * mult);
      const inc = Math.floor(userCreds / per);
      userCreds -= (inc * per);
      result = userEVO + inc;
    } else {
      while (true) {
        if (userEVO >= CREDIT_CAP_EVO) {
          const per = (CREDIT_CAP_COST * mult);
          const inc = Math.floor(userCreds / per);
          userCreds -= (inc * per);
          result = userEVO + inc;
          break;
        }
        const cost = Math.floor((creditsData[userEVO] ?? CREDIT_CAP_COST) * mult);
        if (userCreds - cost >= 0) {
          userCreds -= cost;
          userEVO += 1;
        } else {
          result = userEVO;
          break;
        }
      }
    }

    let increase = 0;
    if (result >= GOLD_CAP_EVO) {
      const per = (GOLD_CAP_COST * mult);
      const inc = Math.floor(userGold / per);
      userGold -= (inc * per);
      increase = inc;
    } else {
      while (true) {
        if ((increase + result) >= GOLD_CAP_EVO) {
          const per = (GOLD_CAP_COST * mult);
          const inc = Math.floor(userGold / per);
          userGold -= (inc * per);
          increase = inc;
          break;
        }
        const base = goldData[result + increase] ?? GOLD_CAP_COST;
        const cost = Math.round(base * mult);
        if (userGold - cost >= 0) {
          userGold -= cost;
          increase += 1;
        } else {
          break;
        }
      }
    }

    const finalEvo = result + increase;
    state.evo.resultado = {
      nuevoEvo: finalEvo,
      incremento: finalEvo - startEvo,
      gastoCreditos: Math.max(0, creditsStart - userCreds),
      gastoOro: Math.max(0, goldStart - userGold),
      sobraCreditos: userCreds,
      sobraOro: userGold,
      descuentoAplicado: Discount,
    };

    renderEvo();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    state.evo = { evoActual: 1, creditos: 0, oro: 0, descuento: 0, resultado: null };
    renderEvo();
  });
}

function evoResultHtml(r) {
  return `<div class="result-box"><div class="kv"><span class="k" style="color:#dbeafe">Resultado</span></div><div class="result-big">${formatMoney(r.nuevoEvo)}</div><p>+${formatMoney(r.incremento)} niveles de progreso · ${r.descuentoAplicado}% desc</p><div class="stats-grid"><div><span>Gasto créditos</span><strong>${formatMoney(r.gastoCreditos)}</strong></div><div><span>Gasto oro</span><strong>${formatMoney(r.gastoOro)}</strong></div><div><span>Sobra créditos</span><strong>${formatMoney(r.sobraCreditos)}</strong></div><div><span>Sobra oro</span><strong>${formatMoney(r.sobraOro)}</strong></div></div></div>`;
}

function renderOthers() {
  const { search, category, visible } = state.others;
  const q = search.toLowerCase();
  const list = OTHER_CODES_DATA.filter(c => c.categoria === category && (c.nombre.toLowerCase().includes(q) || c.codigo.toLowerCase().includes(q)));
  app.innerHTML = `
  <div class="stack">
    <section class="hero"><div class="eyebrow">${icon('inventory_2', 'eyebrow-icon')} Catálogo secundario</div><h1>OTROS <span>CÓDIGOS</span></h1><p>Lista completa importada desde la web antigua: orbes, consumibles, estructuras, cajas y ofertas.</p></section>
    <section class="panel stack">
      <div class="tab-row">${OTHER_CATEGORIES.map(cat => `<button class="tab ${cat === category ? 'active' : ''}" data-category="${cat}">${cat}</button>`).join('')}</div>
      <div class="search-wrap"><input id="otherSearch" value="${escapeHtml(search)}" placeholder="Buscar en ${escapeHtml(category)}..."></div>
    </section>
    <section class="other-grid">${list.length ? list.slice(0, visible).map(otherCodeCard).join('') : `<div class="panel empty" style="grid-column:1/-1">No se encontraron códigos.</div>`}</section>
    ${list.length > visible ? `<div><button id="loadMoreOthers" class="btn">Cargar más códigos</button></div>` : ''}
  </div>`;

  document.getElementById('otherSearch').addEventListener('input', e => { state.others.search = e.target.value; renderOthers(); });
  app.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', () => { state.others.category = btn.dataset.category; state.others.visible = 12; renderOthers(); }));
  const more = document.getElementById('loadMoreOthers');
  if (more) more.addEventListener('click', () => { state.others.visible += 12; renderOthers(); });
  bindCommonEvents();
  attachSmartThumbs(app);
}

function otherCodeCard(item) {
  return `<article class="tile other-code-card">${item.imagen ? `<div class="other-thumb-wrap"><img class="other-thumb" src="${item.imagen}" alt="${escapeHtml(item.nombre)}" loading="lazy" referrerpolicy="no-referrer"></div>` : ''}<div class="tile-body"><h3>${escapeHtml(item.nombre)}</h3><div class="code">${escapeHtml(item.codigo)}</div><p class="muted">Categoría: ${item.categoria}</p><button class="btn full" data-copy="${escapeHtml(item.codigo)}">${icon('content_copy')}<span>Copiar código</span></button></div></article>`;
}

function renderGuide() {
  const sections = [
    ['1) Buscar por nombre o por código', ['Escribe parte del nombre o el código en el buscador.', 'El listado se filtra en tiempo real.']],
    ['2) Filtros por genes (máximo 2)', ['Puedes activar hasta 2 genes a la vez.', 'El filtro exige que el mutante tenga ambos genes seleccionados.']],
    ['3) Copiar códigos sin errores', ['Pulsa el botón “Copiar código”.', 'El texto se envía al portapapeles automáticamente.']],
    ['4) Qué hay en cada página', ['Inicio: base de mutantes.', 'Servicios: packs y pedidos.', 'Evo: calculadora.', 'Otros códigos: orbes y extras.', 'Descargas y tutoriales: recursos y videos.']],
    ['5) Rendimiento (menos lag)', ['La versión vanilla carga una sola página con hash routing.', 'Si algo se ve raro, recarga o limpia caché.']]
  ];
  app.innerHTML = `<div class="stack"><section class="hero"><div class="eyebrow">${icon('menu_book', 'eyebrow-icon')} Manual rápido</div><h1>GUÍA <span>DE USO</span></h1><p>Todo lo básico para usar el catálogo sin perderte.</p></section><section class="guide-grid">${sections.map(([t, items]) => `<article class="tile"><div class="icon-box">${icon('push_pin')}</div><h3>${t}</h3>${items.map(i => `<p class="muted">${i}</p>`).join('')}</article>`).join('')}</section></div>`;
}

function renderTutorials() {
  app.innerHTML = `<div class="stack"><section class="hero"><div class="eyebrow">${icon('smart_display', 'eyebrow-icon')} Contenido multimedia</div><h1>TUTORIALES <span>YOUTUBE</span></h1><p>Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.</p></section><div class="tutorial-grid dual-grid"><section class="panel tutorial-card"><div class="icon-box">${icon('smart_display')}</div><h3>Canal de YouTube</h3><p class="muted">Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.</p><div class="tutorial-actions"><a class="btn primary" target="_blank" href="https://www.youtube.com/@spieler_Lc">${icon('open_in_new')}<span>Ir a @spieler_Lc</span></a><a class="btn" target="_blank" href="https://www.youtube.com/@spieler_Lc/videos">${icon('play_circle')}<span>Ver videos</span></a></div></section><section class="panel tutorial-card"><div class="icon-box">${icon('tips_and_updates')}</div><h3>¿Qué vas a encontrar?</h3><ul class="tutorial-list muted"><li>Cómo buscar mutantes y copiar códigos sin errores.</li><li>Cómo usar filtros por genes.</li><li>Consejos para usar emuladores y reducir el lag.</li></ul></section></div></div>`;
}

function renderDownloads() {
  const essentials = [
    {
      title: 'Script LUA',
      desc: 'Script definitivo para GameGuardian. Compatible con TodoCS.',
      iconName: 'code_blocks',
      href: 'downloads/DEFINITIVA-CS-v2.lua',
      download: 'SCIRPT-NUEVA.V2.lua'
    },
    {
      title: 'Lista TXT',
      desc: 'Todos los códigos en formato de texto plano.',
      iconName: 'description',
      href: 'downloads/lista-codigos.txt',
      download: 'lista-codigos.txt'
    },
    {
      title: 'Lista Excel',
      desc: 'Base de datos completa en .xlsx para filtrado avanzado.',
      iconName: 'table_view',
      href: 'downloads/lista-codigos.xlsx',
      download: 'lista-codigos.xlsx'
    }
  ];
  const mobile = [
    ['VPhoneOS', 'Mejor opción para root virtual y compatibilidad con GG.', 'https://vphoneos.com/'],
    ['VMOS', 'Mucha comunidad. El root y la compatibilidad cambian por versión.', ''],
    ['Virtual Master', 'Muy buena para separar apps, con root limitado.', '']
  ];
  const pc = [
    ['LDPlayer', 'Equilibrio entre rendimiento y estabilidad.', 'https://www.ldplayer.net/'],
    ['BlueStacks', 'Alta compatibilidad para juegos.', ''],
    ['NoxPlayer', 'Ideal para multi-instancia y control avanzado.', '']
  ];

  app.innerHTML = `<div class="stack"><section class="hero"><div class="eyebrow">${icon('download', 'eyebrow-icon')} Centro de descargas</div><h1>DESCARGAS <span>MÓVIL / PC</span></h1><p>Herramientas y recomendaciones según tu caso.</p></section><section><div class="section-title"><h2>Recursos esenciales</h2></div><div class="download-grid">${essentials.map(item => `<article class="tile"><div class="icon-box">${icon(item.iconName)}</div><h3>${item.title}</h3><p class="muted">${item.desc}</p><a class="btn primary full download-btn" href="${item.href}" download="${item.download}"><span>DESCARGAR</span><span class="download-shine" aria-hidden="true"></span></a></article>`).join('')}</div></section><section class="panel"><div class="icon-box">${icon('verified_user')}</div><h3>GameGuardian (fuente oficial)</h3><p class="muted">Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.</p><div class="tags"><span class="tag">Root real</span><span class="tag">Root virtual</span></div></section><div class="dual-grid responsive-grid"><section class="panel"><h3>Móvil: máquinas virtuales</h3>${mobile.map(([title, desc, url]) => downloadItem(title, desc, url)).join('')}</section><section class="panel"><h3>PC: emuladores Android</h3>${pc.map(([title, desc, url]) => downloadItem(title, desc, url)).join('')}</section></div><section class="panel note"><div>${icon('warning')}</div><div><strong>Usa bajo tu responsabilidad</strong><p class="muted">Esta conversión conserva la sección informativa del proyecto original.</p></div></section></div>`;
}

function downloadItem(title, desc, url) {
  return `<div class="tile" style="margin-top:14px"><div class="tile-body"><h3>${title}</h3><p class="muted">${desc}</p>${url ? `<a class="btn" target="_blank" href="${url}">${icon('open_in_new')}<span>Sitio oficial</span></a>` : `<button class="btn">${icon('open_in_new')}<span>Sitio oficial</span></button>`}</div></div>`;
}
// Descargas compatibles con móvil y PC
document.addEventListener('click', async (e) => {
  const link = e.target.closest('a.download-btn');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // solo manejar archivos de tu carpeta downloads
  if (!href.includes('downloads/')) return;

  e.preventDefault();

  const url = new URL(href, location.href).href;
  const filename =
    link.getAttribute('download') ||
    href.split('/').pop() ||
    'archivo';

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('HTTP ' + response.status);

    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);

    const temp = document.createElement('a');
    temp.href = blobURL;
    temp.download = filename;
    document.body.appendChild(temp);
    temp.click();
    temp.remove();

    setTimeout(() => URL.revokeObjectURL(blobURL), 2000);
  } catch (err) {
    // fallback para móviles que no permiten descarga directa
    window.open(url, '_blank', 'noopener,noreferrer');
    alert('Tu navegador no permite descarga directa. Guarda el archivo manualmente.');
  }
});
