// js/app.js
// Descargas compatibles con TODOS los navegadores (incluido iOS)

document.addEventListener("click", async (e) => {
  const link = e.target.closest("a.download-btn");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  // solo archivos de descargas
  if (!href.includes("downloads/")) return;

  e.preventDefault();

  const url = new URL(href, location.href).href;
  const filename =
    link.getAttribute("download") ||
    href.split("/").pop() ||
    "archivo";

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + response.status);

    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);

    const temp = document.createElement("a");
    temp.href = blobURL;
    temp.download = filename;
    document.body.appendChild(temp);
    temp.click();
    temp.remove();

    setTimeout(() => URL.revokeObjectURL(blobURL), 2000);
  } catch (err) {
    // fallback móvil (iPhone, navegadores in-app)
    window.open(url, "_blank", "noopener,noreferrer");
    alert("Tu navegador no permite descarga directa. Guarda el archivo manualmente.");
  }
});
