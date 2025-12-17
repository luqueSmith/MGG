// js/mascota.js
(function initMascota() {
  const mascota = document.querySelector(".mascota");
if(!mascota) return;

const mensajes = [
  "¿Buscas un mutante?",
  "Haz clic en copiar 😉",
  "Los códigos cambian el destino",
  "¿Cyber o Mítico?",
  "Puedo ayudarte 👁️"
];

let estado = 0;

mascota.addEventListener("click", () => {
  estado++;

  // animación simple
  mascota.classList.toggle("activa");

  // mensaje flotante
  const msg = document.createElement("div");
  msg.className = "mascota-msg";
  msg.textContent = mensajes[estado % mensajes.length];
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 2000);
});

  const el = document.getElementById("mascota");
  const bubble = document.getElementById("mascotaBubble");
  if (!el || !bubble) return;

  // Arranca idle
  el.classList.add("idle");

  let bubbleTimer = null;
  function say(text, ms = 1100) {
    bubble.textContent = text;
    bubble.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("show"), ms);
  }

  function react(cls, text) {
    el.classList.remove("react-bounce", "react-shake", "react-pop");
    // reflow para reiniciar animación
    void el.offsetWidth;
    el.classList.add(cls);
    if (text) say(text);
    setTimeout(() => el.classList.remove(cls), 700);
  }

  // Reacciones por acciones comunes de tu web
  // 1) Buscar (mutantes + otros códigos)
  const search1 = document.getElementById("searchInput");
  const search2 = document.getElementById("otherSearch");

  [search1, search2].filter(Boolean).forEach(inp => {
    let t = null;
    inp.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => react("react-pop", "Buscando..."), 220);
    });
  });

  // 2) Cambiar pestañas de "otros códigos"
  const tabs = document.getElementById("otherTabs");
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      react("react-bounce", "¡Cambiando categoría!");
    });
  }

  // 3) Copiar (capturamos clicks en botones COPIAR)
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("button");
    if (!b) return;

    const txt = (b.textContent || "").toUpperCase();
    if (!txt.includes("COPIAR")) return;

    // Buscar el código real dentro de la misma tarjeta
    const card = b.closest(".other-card, .card");
    if (!card) return;

    const strong = card.querySelector(".other-code strong, .code strong");
    if (!strong) return;

    const code = strong.textContent.trim();

    // Copiar SIEMPRE en minúsculas
    await copyTextLower(code);

    // Animación/feedback
    react("react-pop", "¡Copiado!");
  });


  // 4) Scroll (una reacción suave)
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScroll < 900) return;
    lastScroll = now;
    react("react-shake", "");
  }, { passive: true });

  // Mensaje inicial
  setTimeout(() => say("¡Listo para ayudarte!"), 700);
})();
(function initMascotaEvolucion() {
  const box = document.getElementById("mascota");
  const img = document.getElementById("mascotaImg");
  const bubble = document.getElementById("mascotaBubble"); // si existe
  if (!box || !img) return;

  // Mapea cada botón del menú -> imagen
  const SKINS = {
    inicio: "img/Trono.png",
    otros: "img/agresivo.png",
    guia: "img/bigbos.png",
    descargas: "img/urgan.png",
  };

  function say(t, ms = 1100) {
    if (!bubble) return;
    bubble.textContent = t;
    bubble.classList.add("show");
    clearTimeout(say._t);
    say._t = setTimeout(() => bubble.classList.remove("show"), ms);
  }

  function evolveTo(src, text) {
    if (!src) return;

    // Evita repetir si ya está
    if (img.getAttribute("src") === src) {
      if (text) say(text);
      return;
    }

    // Animación épica
    box.classList.remove("evolve");
    img.classList.remove("evolve-img");
    void box.offsetWidth; // reflow para reiniciar
    box.classList.add("evolve");
    img.classList.add("evolve-img");

    // Cambiamos el sprite en el “flash”
    setTimeout(() => { img.src = src; }, 360);

    if (text) say(text, 1400);

    // Limpieza
    setTimeout(() => {
      box.classList.remove("evolve");
      img.classList.remove("evolve-img");
    }, 900);
  }

  // Detecta clicks en el menú superior
  // IMPORTANTE: ajusta los textos si tus botones dicen diferente
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("a,button");
    if (!btn) return;

    const label = (btn.textContent || "").trim().toLowerCase();

    if (label.includes("inicio")) {
      evolveTo(SKINS.inicio, "Modo Inicio ✨");
    } else if (label.includes("otros")) {
      evolveTo(SKINS.otros, "Códigos activados ⚡");
    } else if (label.includes("guía") || label.includes("guia")) {
      evolveTo(SKINS.guia, "Modo Guía 📘");
    } else if (label.includes("descargas")) {
      evolveTo(SKINS.descargas, "Modo Descargas 📦");
    }
  });

  // Si quieres: al cargar, fija la skin según hash
  function applyByHash() {
    const h = (location.hash || "").toLowerCase();
    if (h.includes("otros")) evolveTo(SKINS.otros);
    else if (h.includes("guia")) evolveTo(SKINS.guia);
    else if (h.includes("descargas")) evolveTo(SKINS.descargas);
    else evolveTo(SKINS.inicio);
  }
  window.addEventListener("hashchange", applyByHash);
  applyByHash();
})();
