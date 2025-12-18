// js/other-codes.js
(function () {
  const { showToast, copyTextLower } = window.MGG_UTILS;

  const OTHER_DATASETS = {
    ORBES: {
      label: "Orbes",
      raw: `
Orbe de Ataque nivel 0	orb_basic_attack_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack.png
Orbe de Ataque nivel 1	orb_basic_attack_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_01.png
Orbe de Ataque nivel 2	orb_basic_attack_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_02.png
Orbe de Ataque nivel 3	orb_basic_attack_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_03.png
Orbe de Ataque nivel 4	orb_basic_attack_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_04.png
Orbe de Ataque nivel 5	orb_basic_attack_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_05.png
Orbe de Ataque nivel 6	orb_basic_attack_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_06.png
Orbe de Ataque nivel 7	orb_basic_attack_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_07.png

Orbe de Vida nivel 0	orb_basic_life_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life.png
Orbe de Vida nivel 1	orb_basic_life_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_01.png
Orbe de Vida nivel 2	orb_basic_life_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_02.png
Orbe de Vida nivel 3	orb_basic_life_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_03.png
Orbe de Vida nivel 4	orb_basic_life_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_04.png
Orbe de Vida nivel 5	orb_basic_life_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_05.png
Orbe de Vida nivel 6	orb_basic_life_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_06.png
Orbe de Vida nivel 7	orb_basic_life_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_07.png

Orbe de Critical nivel 0	orb_basic_critical_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical.png
Orbe de Critical nivel 1	orb_basic_critical_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_01.png
Orbe de Critical nivel 2	orb_basic_critical_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_02.png
Orbe de Critical nivel 3	orb_basic_critical_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_03.png
Orbe de Critical nivel 4	orb_basic_critical_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_04.png
Orbe de Critical nivel 5	orb_basic_critical_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_05.png
Orbe de Critical nivel 6	orb_basic_critical_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_06.png

Orbe de Experiencia nivel 0	orb_basic_xp_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp.png
Orbe de Experiencia nivel 1	orb_basic_xp_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_01.png
Orbe de Experiencia nivel 2	orb_basic_xp_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_02.png
Orbe de Experiencia nivel 3	orb_basic_xp_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_03.png
Orbe de Experiencia nivel 4	orb_basic_xp_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_04.png
Orbe de Experiencia nivel 5	orb_basic_xp_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_05.png
Orbe de Experiencia nivel 6	orb_basic_xp_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_06.png

Orbe de Fortalecimiento nivel 0	orb_basic_strengthen_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen.png
Orbe de Fortalecimiento nivel 1	orb_basic_strengthen_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_01.png
Orbe de Fortalecimiento nivel 2	orb_basic_strengthen_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_02.png
Orbe de Fortalecimiento nivel 3	orb_basic_strengthen_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_03.png
Orbe de Fortalecimiento nivel 4	orb_basic_strengthen_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_04.png
Orbe de Fortalecimiento nivel 5	orb_basic_strengthen_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_05.png
Orbe de Fortalecimiento nivel 6	orb_basic_strengthen_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_strengthen_06.png

Orbe de Respuesta nivel 0	orb_basic_retaliate_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate.png
Orbe de Respuesta nivel 1	orb_basic_retaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_01.png
Orbe de Respuesta nivel 2	orb_basic_retaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_02.png
Orbe de Respuesta nivel 3	orb_basic_retaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_03.png
Orbe de Respuesta nivel 4	orb_basic_retaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_04.png
Orbe de Respuesta nivel 5	orb_basic_retaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_05.png
Orbe de Respuesta nivel 6	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png

Orbe de Escudo nivel 0	orb_basic_shield_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield.png
Orbe de Escudo nivel 1	orb_basic_shield_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_01.png
Orbe de Escudo nivel 2	orb_basic_shield_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_02.png
Orbe de Escudo nivel 3	orb_basic_shield_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_03.png
Orbe de Escudo nivel 4	orb_basic_shield_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_04.png
Orbe de Escudo nivel 5	orb_basic_shield_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_05.png
Orbe de Escudo nivel 6	orb_basic_shield_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_shield_06.png

Orbe de Herida nivel 0	orb_basic_slash_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash.png
Orbe de Herida nivel 1	orb_basic_slash_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_01.png
Orbe de Herida nivel 2	orb_basic_slash_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_02.png
Orbe de Herida nivel 3	orb_basic_slash_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_03.png
Orbe de Herida nivel 4	orb_basic_slash_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_04.png
Orbe de Herida nivel 5	orb_basic_slash_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_05.png
Orbe de Herida nivel 6	orb_basic_slash_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_slash_06.png

Orbe de Debilitamiento nivel 0	orb_basic_weaken_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken.png
Orbe de Debilitamiento nivel 1	orb_basic_weaken_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_01.png
Orbe de Debilitamiento nivel 2	orb_basic_weaken_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_02.png
Orbe de Debilitamiento nivel 3	orb_basic_weaken_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_03.png
Orbe de Debilitamiento nivel 4	orb_basic_weaken_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_04.png
Orbe de Debilitamiento nivel 5	orb_basic_weaken_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_05.png
Orbe de Debilitamiento nivel 6	orb_basic_weaken_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_weaken_06.png

Orbe Especial de Absorbsion nivel 0	orb_special_addregeneration_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate.png
Orbe Especial de Absorbsion nivel 1	orb_special_addregeneration_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_01.png
Orbe Especial de Absorbsion nivel 2	orb_special_addregeneration_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_02.png
Orbe Especial de Absorbsion nivel 3	orb_special_addregeneration_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_03.png
Orbe Especial de Absorbsion nivel 4	orb_special_addregeneration_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_04.png
Orbe Especial de Absorbsion nivel 5	orb_special_addregeneration_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addregenerate_05.png

Orbe Especial de Respuesta nivel 0	orb_special_addretaliate_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate.png
Orbe Especial de Respuesta nivel 1	orb_special_addretaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_01.png
Orbe Especial de Respuesta nivel 2	orb_special_addretaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_02.png
Orbe Especial de Respuesta nivel 3	orb_special_addretaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_03.png
Orbe Especial de Respuesta nivel 4	orb_special_addretaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_04.png
Orbe Especial de Respuesta nivel 5	orb_special_addretaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addretaliate_05.png

Orbe Especial de Herida nivel 0	orb_special_slash_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash.png
Orbe Especial de Herida nivel 1	orb_special_slash_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_01.png
Orbe Especial de Herida nivel 2	orb_special_slash_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_02.png
Orbe Especial de Herida nivel 3	orb_special_slash_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_03.png
Orbe Especial de Herida nivel 4	orb_special_slash_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_04.png
Orbe Especial de Herida nivel 5	orb_special_slash_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addslash_05.png

Orbe Especial de Escudo nivel 0	orb_special_addshield_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield.png
Orbe Especial de Escudo nivel 1	orb_special_addshield_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_01.png
Orbe Especial de Escudo nivel 2	orb_special_addshield_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_02.png
Orbe Especial de Escudo nivel 3	orb_special_addshield_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_03.png
Orbe Especial de Escudo nivel 4	orb_special_addshield_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_04.png
Orbe Especial de Escudo nivel 5	orb_special_addshield_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addshield_05.png

Orbe Especial de Fortalecimiento nivel 0	orb_special_addstrengthen_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen.png
Orbe Especial de Fortalecimiento nivel 1	orb_special_addstrengthen_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_01.png
Orbe Especial de Fortalecimiento nivel 2	orb_special_addstrengthen_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_02.png
Orbe Especial de Fortalecimiento nivel 3	orb_special_addstrengthen_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_03.png
Orbe Especial de Fortalecimiento nivel 4	orb_special_addstrengthen_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_04.png
Orbe Especial de Fortalecimiento nivel 5	orb_special_addstrengthen_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addstrengthen_05.png

Orbe Especial de Debilitamiento nivel 0	orb_special_addweaken_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken.png
Orbe Especial de Debilitamiento nivel 1	orb_special_addweaken_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_01.png
Orbe Especial de Debilitamiento nivel 2	orb_special_addweaken_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_02.png
Orbe Especial de Debilitamiento nivel 3	orb_special_addweaken_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_03.png
Orbe Especial de Debilitamiento nivel 4	orb_special_addweaken_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_04.png
Orbe Especial de Debilitamiento nivel 5	orb_special_addweaken_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_addweaken_05.png

Orbe Especial de Velocidad nivel 0	orb_special_speed_00	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed.png
Orbe Especial de Velocidad nivel 1	orb_special_speed_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_01.png
Orbe Especial de Velocidad nivel 2	orb_special_speed_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_02.png
Orbe Especial de Velocidad nivel 3	orb_special_speed_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_03.png
Orbe Especial de Velocidad nivel 4	orb_special_speed_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_04.png
Orbe Especial de Velocidad nivel 5	orb_special_speed_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_special_speed_05.png
`.trim()
    },

    CONSUMIBLES: {
      label: "Consumibles",
      raw: `
Ataque Crítico\tcharm_critical_7\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_7.png
Escudo Anticrítico\tcharm_anticritical_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_3.png
Tickets x25\tmaterial_energy25\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_energyx25.png
Fichas Jackpot\tmaterial_jackpot_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_jackpot_token.png
Doble Regeneración\tcharm_regenx2_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_3.png
Triple Experiencia\tcharm_xpx3_7\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_7.png
Cuádruple Regeneración\tcharm_regenx4_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx4_3.png
Ficha Reto\tmaterial_event_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_event_token.png
Tickets x5\tmaterial_energy5\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy5.png
Doble Experiencia\tcharm_xpx2_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx2_3.png
Fichas Reactor\tmaterial_gacha_token\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/material_gacha_token.png
Triple Experiencia\tcharm_xpx3_3\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_3.png
`.trim()
    },
    ESTRUCTURAS: {
      label: "Estructuras",
      raw: `
Torre Alfa\tSTR_TOWER_A
Base Central\tSTR_BASE_01
`.trim()
    },
    CAJAS: {
      label: "Cajas",
      raw: `
Caja Ciber\tmystery_cyber\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
Caja Necro\tmystery_dead\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_undead.png
Caja Sable\tmystery_saber\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_saber.png
Caja Zoomorfo\tmystery_zoo\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_zoo.png
Caja Galáctica\tmystery_galactic\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_galactic.png
Caja Mítica\tmystery_mystic\thttps://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_mystic.png
`.trim()
    },
    OFERTAS: {
      label: "Ofertas",
      raw: `
Paquete Inicial\tOFFER_START
Promo VIP\tOFFER_VIP
`.trim()
    },
  };


  window.OTHER_DATASETS = OTHER_DATASETS;

  function parseOtherList(raw) {
    const lines = (raw || "")
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(Boolean);

    const out = [];
    for (const line of lines) {
      const parts = line.split(/\t+/).map(p => p.trim()).filter(Boolean);
      let name = "", code = "", img = "";
      if (parts.length >= 3) { name = parts[0]; code = parts[1]; img = parts[2]; }
      else if (parts.length === 2) { name = parts[0]; code = parts[1]; }
      else {
        const mm = line.match(/(.+)\s+([A-Za-z0-9_:-]+)\s*$/);
        if (!mm) continue;
        name = mm[1].trim(); code = mm[2].trim();
      }
      out.push({ name, code, img });
    }
    return out;
  }

  (function initOtherCodes() {
    const tabs = document.getElementById("otherTabs");
    const search = document.getElementById("otherSearch");
    const grid = document.getElementById("otherGrid");
    const empty = document.getElementById("otherEmpty");
    const loadMoreWrap = document.getElementById("otherLoadMoreWrap");
    const loadMoreBtn = document.getElementById("otherLoadMoreBtn");
    if (!tabs || !search || !grid || !empty) return;

    const PAGE_SIZE = 60;
    const MIN_CHARS_TO_RENDER = 2;

    const otherState = { key: Object.keys(OTHER_DATASETS)[0] || "ORBES", q: "", limit: PAGE_SIZE };
    const cache = new Map(); // cache por pestaña (ya parseado)

    function getListForKey(key) {
      if (cache.has(key)) return cache.get(key);
      const ds = OTHER_DATASETS[key];
      const list = parseOtherList(ds ? ds.raw : "");
      cache.set(key, list);

      // libera string grande para ayudar RAM (opcional)
      try { if (ds) ds.raw = ""; } catch { }
      return list;
    }

    function buildTabs() {
      tabs.innerHTML = "";
      Object.keys(OTHER_DATASETS).forEach((key) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "other-tab" + (otherState.key === key ? " active" : "");
        btn.textContent = OTHER_DATASETS[key].label;
        btn.addEventListener("click", () => {
          otherState.key = key;
          otherState.limit = PAGE_SIZE;
          [...tabs.querySelectorAll(".other-tab")].forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          renderOther();
        });
        tabs.appendChild(btn);
      });
    }

    function shouldRender() {
      // En "Otros códigos" no ocultamos nada: siempre renderiza
      return true;
    }


    function renderOther() {
      const list = getListForKey(otherState.key);
      const q = otherState.q.trim().toLowerCase();

      if (!shouldRender()) {
        grid.innerHTML = "";
        empty.style.display = "block";
        empty.textContent = `Escribe al menos ${MIN_CHARS_TO_RENDER} letras para mostrar resultados.`;
        if (loadMoreWrap) loadMoreWrap.style.display = "none";
        return;
      }

      const filtered = q
        ? list.filter(x => x.name.toLowerCase().includes(q) || x.code.toLowerCase().includes(q))
        : list;


      grid.innerHTML = "";
      if (filtered.length === 0) {
        empty.style.display = "block";
        if (loadMoreWrap) loadMoreWrap.style.display = "none";
        return;
      }
      empty.style.display = "none";

      const visible = filtered.slice(0, otherState.limit);

      const frag = document.createDocumentFragment();
      for (const item of visible) {
        const card = document.createElement("article");
        card.className = "other-card";

        if (item.img) {
          const im = document.createElement("img");
          im.className = "other-thumb";
          im.src = item.img;
          im.alt = item.name;
          im.loading = "lazy";
          im.decoding = "async";
          card.appendChild(im);
        }

        const title = document.createElement("h4");
        title.className = "other-name";
        title.textContent = item.name;

        const codeBox = document.createElement("div");
        codeBox.className = "other-code";

        const codeText = document.createElement("strong");
        codeText.textContent = String(item.code || "");

        const copy = document.createElement("button");
        copy.className = "other-copy";
        copy.type = "button";
        copy.textContent = "COPIAR";
        copy.addEventListener("click", async () => {
          const copied = await copyTextLower(item.code);
          showToast(`Copiado: ${copied}`);
        });

        codeBox.appendChild(codeText);
        codeBox.appendChild(copy);

        card.appendChild(title);
        card.appendChild(codeBox);
        frag.appendChild(card);
      }

      grid.appendChild(frag);

      if (loadMoreWrap && loadMoreBtn) {
        if (otherState.limit < filtered.length) {
          loadMoreWrap.style.display = "flex";
          loadMoreBtn.textContent = `Cargar más (${Math.min(PAGE_SIZE, filtered.length - otherState.limit)})`;
        } else {
          loadMoreWrap.style.display = "none";
        }
      }
    }

    search.addEventListener("input", (e) => {
      otherState.q = e.target.value || "";
      otherState.limit = PAGE_SIZE;
      renderOther();
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        otherState.limit += PAGE_SIZE;
        renderOther();
      });
    }

    buildTabs();
    renderOther();
  })();
})();
