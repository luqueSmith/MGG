// js/mascota.js
(function () {
  // ====== 1) Asegura que exista la mascota (auto-inject si falta) ======
  function ensureMascota() {
    let box = document.getElementById("mascota");
    if (box) return box;

    box = document.createElement("div");
    box.id = "mascota";
    box.className = "mascota";
    box.innerHTML = `
      <img id="mascotaImg" class="mascota-img" alt="Mascota" />
      <div id="mascotaBubble" class="mascota-bubble"></div>
    `;
    document.body.appendChild(box);
    return box;
  }

  const box = ensureMascota();
  const img = document.getElementById("mascotaImg");
  const bubble = document.getElementById("mascotaBubble");
  if (!box || !img || !bubble) return;

  // ====== 2) Calcula la ruta base correcta (root vs /html/) ======
  // Si estamos dentro de /html/, las imágenes están en ../img/
  const IN_HTML_FOLDER = /\/html\//i.test(location.pathname.replace(/\\/g, "/"));
  const IMG_BASE = IN_HTML_FOLDER ? "../img/" : "img/";

  // ====== 3) Detecta página actual para skin (multipágina) ======
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const SKINS = {
    inicio: IMG_BASE + "Trono.png",
    evo: IMG_BASE + "urgan.png",
    otros: IMG_BASE + "agresivo.png",
    guia: IMG_BASE + "bigbos.png",
    descargas: IMG_BASE + "urgan.png",
  };

  function skinForPage() {
    if (page === "evo.html") return { src: SKINS.evo, text: "Modo EVO ⚙️" };
    if (page === "otros.html") return { src: SKINS.otros, text: "Modo Otros códigos ⚡" };
    if (page === "guia.html") return { src: SKINS.guia, text: "Modo Guía 📘" };
    if (page === "descargas.html") return { src: SKINS.descargas, text: "Modo Descargas 📦" };
    return { src: SKINS.inicio, text: "Modo Inicio ✨" };
  }

  // ====== 4) Animaciones / bubble ======
  box.classList.add("idle");

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
    void box.offsetWidth;
    box.classList.add(cls);
    if (text) say(text);
    setTimeout(() => box.classList.remove(cls), 700);
  }

  function evolveTo(src, text) {
    if (!src) return;

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

    // Cambia sprite en el “flash”
    evolveTimers.push(setTimeout(() => { img.src = src; }, 360));

    if (text) say(text, 1400);

    evolveTimers.push(setTimeout(() => {
      box.classList.remove("evolve");
      img.classList.remove("evolve-img");
    }, 900));
  }

  // ====== 5) Aplica skin por página (y también por hash si algún día lo usas) ======
  function applyMascota() {
    const { src, text } = skinForPage();
    evolveTo(src, text);
  }

  applyMascota();

  // Si en algún momento vuelves a usar hash en alguna página, no molesta:
  window.addEventListener("hashchange", applyMascota);

  // ====== 6) Reacciones (igual que antes) ======
  const search1 = document.getElementById("searchInput");
  const search2 = document.getElementById("otherSearch");

  [search1, search2].filter(Boolean).forEach(inp => {
    let t = null;
    inp.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => react("react-pop", "Buscando..."), 220);
    });
  });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const txt = (b.textContent || "").toUpperCase();
    if (!txt.includes("COPIAR")) return;
    react("react-pop", "¡Copiado!");
  });

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScroll < 900) return;
    lastScroll = now;
    react("react-shake", "");
  }, { passive: true });

  let tipIndex = 0;
  box.addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    react("react-bounce", tips[tipIndex]);
  });

  setTimeout(() => say("¡Listo para ayudarte!"), 700);
})();
