/* sw.js — Service Worker PWA (GitHub Pages friendly)
   - Precaches core assets
   - Cache-first for static assets (CSS/JS/images/icons)
   - Network-first for HTML pages (keeps content fresh)
*/

const VERSION = 'pwa-v4';
const STATIC_CACHE = `static-${VERSION}`;
const PAGES_CACHE = `pages-${VERSION}`;

// Files to precache. Paths are relative to the site root.
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/site.css',
  './js/core.js',
  './js/pages.js',
  './js/data-mutants.js',
  './js/stats.js',
  './HTML/servicios.html',
  './HTML/evo.html',
  './HTML/otros.html',
  './HTML/guia.html',
  './HTML/descargas.html',
  './HTML/tutoriales.html',
  './icons/icon-192.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './img/mutants_gg.jpg',
  './img/mgg.png',
  './img/logo-2.png',
  './img/perfil.png',
  './img/Trono.png',
  './img/whatsapp_mascota.png',
  './img/cyber.png',
  './img/necro.png',
  './img/sable.png',
  './img/zomorfo.png',
  './img/galactico.png',
  './img/mitico.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => {
      if (key !== STATIC_CACHE && key !== PAGES_CACHE) return caches.delete(key);
    }));
    await self.clients.claim();
  })());
});

function isHTML(request) {
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only handle same-origin.
  if (url.origin !== self.location.origin) return;

  // Network-first for pages (HTML).
  if (isHTML(req)) {
    event.respondWith((async () => {
      const pageCache = await caches.open(PAGES_CACHE);
      try {
        const fresh = await fetch(req);
        // Cache a copy for offline.
        pageCache.put(req, fresh.clone());
        return fresh;
      } catch {
        const cached = await pageCache.match(req);
        return cached || caches.match('./index.html');
      }
    })());
    return;
  }

  // Cache-first for assets.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;

    try {
      const fresh = await fetch(req);
      const cache = await caches.open(STATIC_CACHE);
      cache.put(req, fresh.clone());
      return fresh;
    } catch {
      return cached;
    }
  })());
});
