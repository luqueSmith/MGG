// js/mascota.js
(function () {
  const box = document.getElementById("mascota");
  const img = document.getElementById("mascotaImg");
  const bubble = document.getElementById("mascotaBubble");
  if (!box || !img || !bubble) return;

  box.classList.add("idle");

  const SKINS = {
    inicio: "img/Trono.png",
    evo: "img/urgan.png",
    otros: "img/agresivo.png",
    guia: "img/bigbos.png",
    descargas: "img/urgan.png",
  };

  const tips = [
    "¿Buscas un mutante? Usa el buscador 😼",
    "Tip: COPIAR = listo ✅",
    "Los códigos cambian el destino…",
    "¿Cyber o Mítico?",
    "Abre “Guía” si eres nuevo 📘",
  ];

  let bubbleTimer = null;
  let evolveTimers = [];

  function say(text, ms = 1500) {
    bubble.textContent = text;
    bubble.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("show"), ms);
  }

  function react(cls, text) {
    box.classList.remove("react-bounce", "react-shake", "react-pop");
    void box.offsetWidth; // reinicia animación
    box.classList.add(cls);
    if (text) say(text);
    setTimeout(() => box.classList.remove(cls), 700);
  }

  function evolveTo(src, text) {
    if (!src) return;

    // cancela timeouts previos (evita efectos raros)
    evolveTimers.forEach(t => clearTimeout(t));
    evolveTimers = [];

    if (img.getAttribute("src") === src) {
      if (text) say(text);
      return;
    }

    box.classList.remove("evolve");
    img.classList.remove("evolve-img");
    void box.offsetWidth;

    box.classList.add("evolve");
    img.classList.add("evolve-img");

    // cambia sprite en el “flash”
    evolveTimers.push(setTimeout(() => { img.src = src; }, 360));

    if (text) say(text, 1400);

    evolveTimers.push(setTimeout(() => {
      box.classList.remove("evolve");
      img.classList.remove("evolve-img");
    }, 900));
  }

  // ====== CAMBIO POR NAV: SOLO POR HASH (sin doble listeners) ======
  function applyByHash() {
    const h = (location.hash || "#top").toLowerCase();

    if (h === "#evo") evolveTo(SKINS.evo, "Modo EVO ⚙️");
    else if (h === "#otros-codigos") evolveTo(SKINS.otros, "Modo Otros códigos ⚡");
    else if (h === "#guia-codigos") evolveTo(SKINS.guia, "Modo Guía 📘");
    else if (h === "#descargas") evolveTo(SKINS.descargas, "Modo Descargas 📦");
    else evolveTo(SKINS.inicio, "Modo Inicio ✨");
  }



  window.addEventListener("hashchange", applyByHash);
  applyByHash();

  // ====== REACCIONES ======
  const search1 = document.getElementById("searchInput");
  const search2 = document.getElementById("otherSearch");

  [search1, search2].filter(Boolean).forEach(inp => {
    let t = null;
    inp.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => react("react-pop", "Buscando..."), 220);
    });
  });

  // Copiar (botones COPIAR)
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const txt = (b.textContent || "").toUpperCase();
    if (!txt.includes("COPIAR")) return;
    react("react-pop", "¡Copiado!");
  });

  // Scroll suave
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScroll < 900) return;
    lastScroll = now;
    react("react-shake", "");
  }, { passive: true });

  // Click en mascota = tip
  let tipIndex = 0;
  box.addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    react("react-bounce", tips[tipIndex]);
  });

  setTimeout(() => say("¡Listo para ayudarte!"), 700);
})();
