if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("./sw.js", {
        updateViaCache: "none",
      });
      reg.update(); // intenta buscar SW nuevo al cargar
    } catch {}
  });
}
