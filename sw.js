const CACHE_VERSION = "v3";                 // súbelo cuando publiques cambios
const CACHE_STATIC = `static-${CACHE_VERSION}`;
const CACHE_PAGES  = `pages-${CACHE_VERSION}`;

const PRECACHE = [
  "./",
  "./index.html",
  "./css/base.css",
  "./css/layout.css",
  "./css/components.css",
  "./css/legacy.css",
  "./css/mascota.css",
  "./js/sw-register.js",
  "./js/utils.js",
  "./js/data-mutants.js",
  "./js/mutants.js",
  "./js/other-codes.js",
  "./js/mascota.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./img/mgg.png",
  "./img/mutants_gg.jpg",
  "./img/logo-2.png",
  "./img/Trono.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => ![CACHE_STATIC, CACHE_PAGES].includes(k))
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Solo GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // No cachear descargas (siempre traer lo último)
  if (
    url.origin === self.location.origin &&
    url.pathname.includes("/downloads/")
  ) {
    event.respondWith(fetch(req, { cache: "no-store" }));
    return;
  }


  // Solo mismo origen
  if (url.origin !== self.location.origin) return;

  // Navegación/HTML => network-first
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(networkFirst(req, CACHE_PAGES));
    return;
  }

  // Assets => stale-while-revalidate
  if (["script", "style", "image", "font"].includes(req.destination)) {
    event.respondWith(staleWhileRevalidate(req, CACHE_STATIC));
    return;
  }

  // Default
  event.respondWith(cacheFirst(req, CACHE_STATIC));
});


async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req, { cache: "no-store" });
    cache.put(req, fresh.clone());
    return fresh;
  } catch {
    return (await cache.match(req)) || caches.match("./index.html");
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req).then((res) => {
    cache.put(req, res.clone());
    return res;
  }).catch(() => null);

  return cached || (await fetchPromise);
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  cache.put(req, res.clone());
  return res;
}
