// sw.js
// Cambia la versión cuando hagas cambios importantes
const CACHE = "code-mgg-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  // Si tienes íconos o imágenes críticas, agrégalas aquí:
  // "./img/mutants_gg.jpg",
  // "./img/mgg.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Solo controla tu mismo sitio
  if (url.origin !== self.location.origin) return;

  // ✅ Para HTML (index / navegación): NETWORK FIRST
  // Así siempre trae lo nuevo; si no hay internet, usa caché.
  const isHTML =
    req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Para lo demás: STALE-WHILE-REVALIDATE (rápido y se actualiza solo)
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
