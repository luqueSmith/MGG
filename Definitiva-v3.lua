-- =========================================================
-- MGG SCRIPT FUSIONADO (Original + Cambiador Individual)
-- =========================================================

gg.alert([[MGG - ScriptV2 Smith Luque (Fusionado)

GUÍA DE USO:

1. CAMBIADOR INDIVIDUAL:
   - Usa esta opción si buscas un mutante específico.
   - Busca por NOMBRE en la lista o escribe el CÓDIGO manual (ej: AA_01).
   - El script cambiará solo ese mutante por el que tú quieras.

2. REACTORES:
   - Primero ve a "Cambiar el Reactor" para preparar el cambio (Elige Nuevo -> Original).
   - Luego ve a "Hackear el Reactor" para aplicar la magia.

3. OTROS:
   - Funciones extra para orbes, cajas, etc.

Estas son las funciones por ahora]])
gg.showUiButton()

-- ---------------------------------------------------------
-- [NUEVO] 1. ESPACIO PARA TU LISTA
-- ---------------------------------------------------------
local raw_db = [[
A00-C0R3-C0NTR0L 	aa_99
A027441 af_99
Abraham Lincoln af_05
Absolem df_03
Acarius ed_05
Achernar 	ef_13
Akai-Bot 	ae_10
Alfie 	ae_07
Altaris ca_10
Altísimo Candelabro fb_13
Amalgalmas 	bf_13
Amarok 	fc_07
Amistad Sin Limites cc_13
Ammonia Atlantica 	ed_12
Amo de las Llaves 	cf_09
An0malie 	da_11
Androide 	aa_01
Andromeda 	ae_08
Angry Pork 	ed_10
Animus de Irrealidad 	ee_99
Aniquilador ea_01
Anteros ca_13
Antropobot Soñador 	da_13
Anubis 	fb_03
Aplastador 	ab_07
Apofis 	be_06
Aquapunzel 	ef_03_silver
Aqueronte 	bf_11
Aracno 	da_02
Aran 	ce_07
Arcangel 	fa_99
Archivista Eterno 	ff_12
Arelvam cf_10
Armadizo 	de_03
Artemisa 	cb_06
Artista Siniestro 	fd_05
Asaylan da_08
Asimov 	a_13
Asteroide Gestalt 	ee_11
Astro Gummy ee_07
Astrobservador 	e_13
Astromago 	fe_03
Astrosurfista 	ee_01
Atlas 	ce_13
Aubraea Mutantula 	eb_11
Aullosaurio d_12
Automata 	a_14
Autonoraptor 	af_04
Avispa Diesel 	ad_07
Azaronimo 	ae_99
Azog 	cf_04
Azuria 	fe_02
B.U.N. Genio 	da_14
Bahamut fe_10
Ballesto 	cb_12
Banker 	fa_04
Banshee Guerrera 	cb_01
Barbaro c_05
Barbaroca 	af_03
Baron Lundi bf_01
Basilisco y Esdragon 	df_12_vegetal
Battle Toad cd_04
Bazzinger 	fa_03
Bearsikk Sikleast 	cd_13
Behemoth 	ec_02
Bestia 	d_01
Big Bo$$ 	ca_09
Bioerizo 	ad_06
Black I.C.E. 	af_14
Blender ac_08
Borrasca 	fc_06
Bounda 	af_07
Brawler db_05
Breakmaster ca_14_olympics
Bregbeam 	ff_10
Brick McGole 	ea_04
Bricodron LLK-215 	ea_12
Britany bf_05
Bruja de la Peste 	bb_08
Bruja Malvada 	fb_04
Buck Maurice 	cc_02
Buffalor 	db_10
Bulldozer 	bd_05
Buranka fd_04
Bushi 	cb_02
C'thlig fe_01
Caballero Nordico 	cc_01
Cabloide 	aa_12
Calaca 	bf_09
Caliburn EX cf_11
Cancernia 	bd_02_silver
Capitan Achabe 	ce_10
Capitan aguila 	cd_12
Capitan Barbanegra 	cb_14
Capitan Gluglu 	de_07
Capitan Gorn 	ea_09
Capitan Mecano 	ac_02
Capitan Osamenta 	bc_02
Capitan Patriota 	ea_07
Capitan Paz fc_02
Capitan Perla Negra be_04
Caprika be_02_silver
Capsuladora MTZ-004 ac_13
Carcinus Gigas 	ad_09
Carlingger 	da_07
Carnero Vengador 	bf_03_silver
Caronte bb_05
Caronte (Halloween) bc_12
Castigo ff_02
Casto 	db_06
Caudillo Steam 	af_09
Cazador Espacial 	ec_05
Cazarrecompensas 	a_05
Centaurus 	ae_09
Centinela R0B-H4N 	aa_08
Cerbero db_01
Ceres 	e_03
Cernunnos 	dd_04
Cezanne dc_04
Challengeer ca_05
Chaman Sombra 	fa_05
Champicorteza 	bf_07
Chantecler 	df_08
Chocolem 	df_11
Chun-Lei 	ce_11
Ciberbabosa ae_05
Cibercroc 	ad_05
Cibermantico Etereo fa_12
Ciberpunk 	ac_05
Clerigo Oscuro 	bf_12
Cobrakai 	db_03
Colmillo Rabioso 	bc_11
Coloso 	ae_01
Comeabuelas dc_06
Commander Ender ab_04
Cooktouille bd_11
Cosmo Kong 	de_02
Cosmopandas de_08
Cr€$u$ 	ba_12
Cuervo 	b_04
Cupido 	cb_05
D'Arathomis c_13
D.A.B. 	ea_14
Dama del Crepusculo fb_12
Dama Harpia bd_04
Dandi oscar bc_06
Darwin 	de_06
Despota Negro 	bc_01
Deus Machina 	af_01
Devorador 	eb_03
Dezinger 	ac_03
Diablesa 	f_01
Diablo 	eb_99
Dimentio 	ef_11
Disension 	cb_11
Disfuncidroide 	ab_12
Divastator 	ef_10
Doctor Blaw ba_05
Doctor del Farol 	bb_12
Doctor Desollador 	bc_13
Dollbyte 	fe_06
Don Gamberetti 	cd_14
Dr. Frost 	fa_07
Dr. Nucleus eb_08
Dracomago 	fd_09
Dracus Nobilis 	df_01
Drall 	cd_08
Dreadnought ea_11
Drei, Space Corgi 	de_11
Drudge Zombie 	b_05
Drusella 	ab_06
Dug Dario 	be_08
Duplicado de Eva 	af_06
E.T.-Liot 	ee_10
ED-404 	aa_10
Ejecutor 	ca_01
El Arquitecto 	ab_13
El Coleccionista 	bc_09
El Descolorido 	db_13
El Enterrador 	bf_10_western
El Experimento 	ba_04
El Fontanero 	ac_04
El Fosforescente 	bb_13
El Gringo 	cc_06
El Motin 	cb_13
El Original bd_07_soldiers
El Presentador 	ab_14
El Rey de Mimphys 	bf_06
El Rey sin Nombre 	ce_08
El Veneno 	af_10
Emperador Galactico bf_04_starwars
Emperador Helado 	df_13
Enano y Cerebro bd_08
Enviro 3.0 	ab_11
ERR-ADI-K-Bot 	ca_06
Escarabot 	ad_01
Escuadron Rhino da_04
Espectra 	ec_08
Espectro de la Cripta 	bb_02
Espectroplasma 	b_14
Excaliduro 	ec_09
Excavalipsis 	ba_09
Exo Cookie 	de_05
Exoceleste algido 	fe_12
Exopez 	ea_03_silver
Explorador Sideral 	e_12
Extraterrestre 	e_01
Falcon 	ec_07
Fantasmonauta 	be_01
Faucesnegras 	bd_09
Fenec Plus Ultra 	da_05
Fenix 	fd_07
Flying Jordson 	ee_04
FootBot fa_08
Frankendwarf 	cb_10
Frankenhuahua 	bb_09
Freyja, Reina de los Vanir 	fd_14
Frostmass 	c_03
Gakarian 	eb_10
Gamallia 	ec_10
Gandolphus 	fc_01
GAR, Zombi Soberano b_13
Gargantus 	dc_03_gothic
Garlog 	eb_06_elements
Garuda 	a_03
Gelatina Purulenta 	be_12
Geminium 	ce_02_silver
General Caos 	ca_03
General Terracota 	ca_12
Generalisimo Chocoleon IV 	fc_12
Genimal df_99
Genshiryoku de_04
Geomega ff_07
George Washington 	bc_04
Gerard Steelgarden 	ff_11
Giganto-Moai 	ae_14
Gladiadog 	cd_06
Gladiador 	c_14
Globomono 	dd_07
Gloton 	bb_06
Glubber ff_05
Golem de Epocas af_13
Golemagnus 	ee_08
Goliat 	aa_02
Gorthaur el Cruel 	fc_09_fantasy
Gozer 	fb_08
Gran Gusano de los Tuneles 	db_12
Gran Señor de las Tumbas 	ab_08
Grumpy Claus 	ab_09
Guardia Men'ki 	cd_10
Guardian Galactico 	ce_03
Guerrero 	c_01
Guerrero Debil 	c_02
Gwenn 	df_10
H.U.M.A.N. 	aa_03
H.U.N.T.3.R aa_09
H0ud1n1 af_08
Hada Machete 	cf_03
Hadeath fb_09
Haggis 	cd_03
Hardcorius 	fb_05
Hawkeye da_10
Hechicera 	fb_06
Hefesto fc_10
Heimdall 	af_11
Hekantocheiros 	ec_13
Helicoide Boreal 	fa_13
Helidron KxT-271 	ae_13
Hellsaw ba_10
Hercules 	aa_06
Heredero de los 5 anillos 	cf_12
Hidrira ed_14
Hielo Patinadora Yria 	cf_14
Hijo de la Tormenta cf_13
Hipopotanque 	ad_10
Hog the Ripper 	cd_05
Honey Bunny cd_01
Horax 	db_09
Horus 	fd_02
Huesamblaje b_12
Humanoide Perfido 	ac_01
Hypnos 	ab_02
Infinito Supermasivo 	de_14
Ingeniero 	fe_99
Interceptrix 	ca_02
Invadron 	ae_03
Invocador 	f_12
Ishi no Ōkami 	fd_11
Ivory Hanzo fd_03_japan
Jack O'Lantern 	b_03
Jane Saw 	cb_09
Jhingal ee_05
Juan Hielo 	cd_07
K'yu T'ypaï ef_14
Kaiju Kitty dd_01
Kal Wayne 	ef_07
Kameo 	dd_10
King Lulu 	bc_10
Kitty Ranger 	ad_08
Kolossus 	ce_99
Kraken 	ef_05
Krampus dc_10
Krunk 	ea_06
Kudamono 	fc_08
Kung Chow 	fd_06
La Anárquica 	ba_13
La Locura Reptante 	db_14
La Olvidada bb_11
La Parca 	fb_01
Lady Libertad 	ea_08
Lampyrion Solar dd_12
Lancelot 	cc_09
Lapin Zombie 	bd_14
Lara 	cc_04
Las Moiras 	fb_07
Leohart dc_02_silver
Leonidas 	cb_04
Lepidoptech ad_12
Leprechaun 	f_04
Leviatan 	de_12
Libraro ae_02_silver
Lily 	fa_06_movies
Liquidador 	ff_09
Litominero Stellariano 	ec_12
Llama Sensei 	dd_13
Loco de la Motosierra 	bc_05
Lord Blood 	bb_01
Louis XVI 	db_04
Mad Mike 	de_10
Madre de los Dragones 	df_05
Maestro Oida 	ee_03
Maestro Shinzo 	dc_09
Maestro Splitter 	dd_02
Mago 	f_14
Mago de la Singularidad ef_99
Mago de las Nieves 	f_03
Mago Ryzafredd 	ef_09
Mago Tetrico 	bf_02
Majin Zam 	fe_08
Makino 	ca_08
Malvatron 	ad_04
Mama Kangu 	dd_06
Mandor 	ef_06
Mandragora 	ff_03
Mantidroide da_03
Mapach Wik 	ed_04
Marciano Errante 	ce_01
Marine Muerto 	eb_05
Marv 	ae_06
Mascarada Emocional ff_99
Master Paw 	fd_10
Matafantasmas 	eb_04
Mau-Jack 	ed_06
Mecaovoide Aracneo 	ad_11
Mecargola 	ba_14
Medico Astral 	eb_12
Medinosaurio 	ed_13
Medusa 	fd_01
Mega Claus 	cf_07
Megastral 	ee_09
Mekali 	fa_02
Mephisto 	ef_04
Mexihcatl 	fc_04
Micky Krueger 	bc_03
Midas 	fc_11
Mimi Cronocurva fa_10
Miroku 	df_04
Missy Despierta ca_99
Mister T-Ger 	dd_09
Mix0-Logo 	ae_11
Mon-Key Crew 	cd_09
Monje Akuso cf_05
Monocerus 	ad_02
Monolith 	ff_04
Motero Maldito 	bb_03
Mr Marvelous 	ef_02_heroes
Muñeca Diabolica 	ba_02
Myrmidus.exe 	ad_13
Namaste ff_06
Naraxis ba_08
Nebulon ef_01
Nebulus fe_05_silver
Necrobot 	ab_01
Necrodragon bd_01
Necroparasito 	bb_07
Neo Urban XIII 	ab_05_gachaboss
Nexo Orbital 	ee_13
Nezarim be_07
Nimrod 	fc_99
Noren 	dc_07
Nyrlatoth 	be_05
Núcleo seráfico fe_14
Octopia ed_99
Oculus 	aa_04
Oculys 	be_11
Omikami fd_08
Optimus Zord 	ac_09
Oriax 	fc_03
Orion 	fa_11
Oryctolagus Exobioicus 	de_13
Oso Espantoso 	bd_03
Overkill 	be_10
Owlock 	ed_11
Paramic ed_07
Pejelagarto dd_05
Peregrino Espacial 	ea_13
Pesadilla Viviente 	fb_11
Phileas Derocas ac_12
Pierrot fe_11
Pikabu 	ba_07
Pirotropo 	be_09
Piwisher 	db_11
Polaris ee_12
Principe Escorpion 	fb_02_silver
Professor Cronomantico 	ac_14
Profeta del Crepúsculo 	ff_14
Project X27 ca_04
Protector de los Sueños af_12
Proyecto 3V3 	aa_07
Psicojabali dd_03
Quebrantacuellos 	be_03
Quetzalcoatl 	df_09
Quimera df_07
Ragnar 	cb_03
Rakshasa 	dc_01
Rambit 	d_03
Reed, El Verdadero Heroe 	cf_99
Regulo&Juzya 	ce_12
Reina Parasita 	de_01
Reina Rakkti 	ee_06
Reina Sylvidra 	eb_09
Reptoide 	da_01
Rey Azul 	cc_14_chess
Rey De Avalon 	fc_13
Rey de los Insectos fe_07
Rey Esqueleto 	cb_07
Rey Mono 	dc_05
Rey Steven 	ea_05
Rinotauro 	dd_08
Roadmaster 	ba_11
Robofuerte 	ac_07_lucha
Robot 	a_01
Robot Debil a_02
Rocageno 	ed_02
Rocky Botboa 	ca_07
Rox McRain 	ed_09
S-K-Venger 	ab_10
Sable 	df_06
Sacamantecas 	bb_04
Sagitauro 	cd_02_silver
Sakuraboshi ff_13
Sangresquito 	bd_13
Sanik 	dc_08
Santactopus ec_04
Santagonista 	cc_11
Sargento Dusk 	ac_10
Sasquatch 	d_13
Satiro Hechicero 	df_02
Scaramouche cc_12
Seiyatsu 	ef_08
Sentry 	ea_02
Señor Bestial 	dd_14
Señor del Abismo 	ff_01
Señor Dragon 	db_07
Sgt. Pandamonium 	ed_08
Shin Hakuho cc_05
Sierrametrodon 	dc_13
Simulacro de Combate 	ab_99
Simurgh fd_12
Sir Bannog 	cd_11
Sirenia eb_02
Sound Killah 	da_09_music
Space Princess 	fe_04
Spada 	dc_11
Spartac cc_07
Spin Fury 	ac_11
Star Trooper 	ec_03
Starminator eb_07
Sun-Duke 	ce_05_villains
Sundance Bug 	ec_01
Supernovus 	ee_02
Supraman X 	ae_04
Surfista del Espacio 	ea_10
T-3rr0r bb_10
Tauridus 	ad_03_silver
TCB-8566 Trafficroid 	aa_13
Tecno Tao 	fa_01
Tecnocaracol 	da_12
Tecnoforzer aa_05
Tenacity 	ae_12
Tengu 	bd_99
Termodroide Celsius ea_99
Terror Abisal 	dd_11
Terror Jurasico dc_14
Tezcatlipoca 	fd_13
Thanaconda 	bd_12
The Reef 	ca_11_beach
Thor 	cf_02
Thran 	bc_08
Tio Sam cf_06
Tiranozomb 	db_08
Tomahawk 	ce_06
Tormenta de Fuego 	ff_08
Traiciobaza bc_14
TriAD 	aa_11
Triceratanque 	da_06
Triple-B 	ba_03
Turbacieno 	bc_07
Tutti Viscosi 	eb_01
Tyrtiduron 	bd_06
Urgan 	cc_10
Valkiria 	cf_01
Van Helsing bf_08
Veren Kaeesu 	ec_11
Viajero de Vortice 	be_13
Viper 	ac_06
Virgon 	af_02_silver
Vivaldi fe_13
Väinämöinen f_13
Wampara ed_03
Waryena bd_10
Wrath 	cb_08
Wynn 	cf_08
X'astuth 	ef_12
Xeleroth 	fe_09
Xenarach 	ab_03
Xenos 	ed_01
Xinomas eb_13
Yelda 	fc_05
Yggdrasil 	fb_10
Yokozuna 	cc_08
Z-0 ba_06
Zagam, Gran Rey De La Avaricia 	fb_14
Zapador de Madrigueras 	dc_12
Zar Bomba 	ce_09
Zena 	cc_03
Zenguru fa_09
Zeus 	ec_06_olympians
Zigmo 	de_09
Zombat 	db_02
Zombi 	b_01
Zombi Debil b_02
Zomborg ba_01
Zortrex ce_04
]]

-- ---------------------------------------------------------
-- [NUEVO] 2. VARIABLES Y PROCESAMIENTO DE LA LISTA
-- ---------------------------------------------------------
local char_list = {}
if #raw_db > 10 then
    for line in raw_db:gmatch("[^\r\n]+") do
        local name, code = line:match("^(.-)%s+(%S+)$")
        if name and code then
            table.insert(char_list, {name = name, code = string.upper(code)})
        end
    end
end

-- Variables Globales Originales
originalHex = nil
newHex = nil
originalSpecimens = nil
newSpecimens = nil
reactorReady = false

-- ---------------------------------------------------------
-- [NUEVO] 3. FUNCIONES DEL CAMBIADOR INDIVIDUAL
-- ---------------------------------------------------------

-- Buscador de Nombres
function searchList(prompt_text)
    local input = gg.prompt({prompt_text}, nil, {"text"})
    if not input then return nil end
    
    local search_term = string.lower(input[1])
    local matches = {}
    local menu = {}
    
    for i, v in ipairs(char_list) do
        if string.find(string.lower(v.name), search_term, 1, true) then
            table.insert(matches, v)
            table.insert(menu, v.name .. " (" .. v.code .. ")")
        end
    end
    
    if #matches == 0 then 
        gg.alert("❌ No encontrado en la lista.") 
        return nil 
    end
    
    local choice = gg.choice(menu, nil, "Resultados:")
    if not choice then return nil end
    
    return matches[choice].code
end

-- Reemplazo Exacto (Método ":")
function replaceText(old_text, new_text)
    gg.clearResults()
    -- Regiones Ca, A, O (Las que usas manualmente)
    gg.setRanges(gg.REGION_ANONYMOUS | gg.REGION_C_ALLOC | gg.REGION_OTHER)
    
    gg.toast("🔎 Buscando: " .. old_text)
    
    -- Búsqueda exacta de texto
    gg.searchNumber(":" .. old_text, gg.TYPE_BYTE)
    
    local count = gg.getResultsCount()
    if count == 0 then
        gg.alert("❌ No encontrado: " .. old_text)
        return
    end
    
    if count > 3000 then
        gg.alert("⚠️ Demasiados resultados ("..count..").\nSé más específico o cambia de pantalla.")
        gg.clearResults()
        return
    end
    
    -- Cargar resultados (Arreglo del error anterior)
    gg.getResults(count)
    
    -- Editar Todo
    gg.editAll(":" .. new_text, gg.TYPE_BYTE)
    
    gg.toast("✅ ¡LISTO! " .. count .. " cambiados a " .. new_text)
    gg.clearResults() 
end
function Mutants()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0",gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 22 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 22 53 70 65 63 69 6d 65 6e",gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 26 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 26 53 70 65 63 69 6d 65 6e",gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 2c 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 2c 53 70 65 63 69 6d 65 6e",gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 53 70 65 63 69 6d 65 6e",gg.TYPE_BYTE)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
    gg.toast("Smith Luque")
end
-- Copiar código
function copyOnly()
    local code = searchList("Buscar mutante para COPIAR:")
    if code then
        gg.copyText(code)
        gg.toast("📋 Copiado: " .. code)
    end
end

-- Menú del Cambiador Individual
function MenuCambioIndividual()
    while true do
        local choice = gg.choice({
            "🔄 REEMPLAZAR (Buscar por Nombre)",
            "⌨️ REEMPLAZAR (Buscar por Código)",
            "📋 Lista de Mutantes (Solo lista)",
            "🔙 Volver al Menú Principal"
        }, nil, "🧬 CAMBIADOR INDIVIDUAL")
        
        if choice == 1 then
            local old = searchList("¿Qué mutante tienes?")
            if old then
                local new = searchList("¿Qué mutante quieres?")
                if new then replaceText(old, new) end
            end
        elseif choice == 2 then
            local input = gg.prompt({"Actual (ej: AA_01)", "Nuevo (ej: EE_02)"}, {"", ""})
            if input and input[1] ~= "" and input[2] ~= "" then
                replaceText(string.upper(input[1]), string.upper(input[2]))
            end
        elseif choice == 3 then
            copyOnly()
        elseif choice == 4 or choice == nil then
            break -- Salir del bucle para volver al menú principal
        end
    end
end

-- ---------------------------------------------------------
-- [ORIGINAL] 4. FUNCIONES ORIGINALES (INTACTAS)
-- ---------------------------------------------------------
function Medlab()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 26 42 75 69 6C 64 69 6E 67", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 26 42 75 69 6C 64 69 6E 67", gg.TYPE_BYTE)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function GoldFurnace()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber("1;44,000;0;0;0;0;0;0;2;20::165", gg.TYPE_DWORD)
    r = gg.getResults(100000)
    gg.editAll("6;1;1,769,292,314;1,852,400,748;1,128,816,487;12,895;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;2;3000", gg.TYPE_DWORD)
    gg.refineNumber("6", gg.TYPE_DWORD)
    r = gg.getResults(100000)
    gg.addListItems(r)
    gg.clearResults()
    gg.sleep(1000)
    gg.searchNumber("h1873635F7061636B6167655F3200000000000000000000000", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h 1a 42 75 69 6c 64 69 6e 67 5f 48 43 5f 32", gg.TYPE_BYTE)
    gg.clearResults()
end

function Speed5()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 2A 62 75 6E 64 6C 65 5F 6F 72 62 73 5F 73 70 65 65 64 5F 33 5F 33 00 00", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 2A 62 75 6E 64 6C 65 5F 6F 72 62 73 5F 73 70 65 65 64 5F 35 5F 31 00 00", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber(":speed_03", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll(":speed_05", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("400", gg.TYPE_DWORD)
    r = gg.getResults(100000)
    gg.editAll("1500", gg.TYPE_DWORD)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function xpOrb()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    local revert = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber(":*bundle_orbs_slash_4_2", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 0)
    gg.processResume()
    local t = gg.getResults(1)
    if #t == 0 then gg.alert("No se encontró nada.") return end
    for i, v in ipairs(t) do
        v.address = v.address + 0x378
        v.flags = gg.TYPE_BYTE
        v.value = "1"
        v.freeze = true
        v.freezeType = gg.FREEZE_NORMAL
    end
    gg.clearResults()
    gg.setValues(t)
    gg.addListItems(t)
    gg.processResume()
    gg.timeJump("5:0")
    t = nil
end

function JackpotBox()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h28416E6E697665727361727932335F426F785F3235000000106D6174657269616C000000", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 0)
    local start = gg.getResults(1)
    local valuesToEdit = {}
    for i = 1, #start do
        local target = start[i].address + 0xfffffffffffffff8
        table.insert(valuesToEdit, { address = target, flags = gg.TYPE_DWORD, value = 1 })
    end
    gg.setValues(valuesToEdit)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function XPJarBox()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h2C416E6E69766572736172795F323031395F426F785F3900106D6174657269616C000000", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 0)
    start = gg.getResults(1)
    valuesToEdit = {}
    for i = 1, #start do
        local target = start[i].address + 0xfffffffffffff578
        table.insert(valuesToEdit, { address = target, flags = gg.TYPE_DWORD, value = 1 })
    end
    gg.setValues(valuesToEdit)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function Attack7()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":orb_basic_attack_05", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll(":orb_basic_attack_07", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("300", gg.TYPE_DWORD)
    r = gg.getResults(100000)
    gg.editAll("10000", gg.TYPE_DWORD)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function AllMutants()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 22 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 22 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 26 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 26 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 2c 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 2c 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber("h00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    r = gg.getResults(100000)
    gg.editAll("h01 00 00 00 01 00 00 00 01 00 00 00 01 00 00 00 53 70 65 63 69 6d 65 6e", gg.TYPE_BYTE)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function BasicOrbs()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    local r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber(":(bundle_orbs_basic_06", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 0)
    gg.processResume()
    local t = gg.getResults(1)
    if #t == 0 then gg.alert("No se encontró nada.") return end
    for i, v in ipairs(t) do
        v.address = v.address - 0x38
        v.flags = gg.TYPE_BYTE
        v.value = "1"
        v.freeze = true
        v.freezeType = gg.FREEZE_NORMAL
    end
    gg.setValues(t)
    gg.addListItems(t)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function Bundle6Orbs()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    local r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber(":&bundle_orbs_core_06", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 1)
    gg.processResume()
    local t = gg.getResults(1)
    if #t == 0 then gg.alert("No se encontró nada.") return end
    for i, v in ipairs(t) do
        v.address = v.address - 0x38
        v.flags = gg.TYPE_BYTE
        v.value = "1"
        v.freeze = true
        v.freezeType = gg.FREEZE_NORMAL
    end
    gg.setValues(t)
    gg.addListItems(t)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function Buranka_Britany()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    local r = gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    gg.searchNumber(":&Bundle_Mutants_Fire", gg.TYPE_BYTE, false, gg.SIGN_EQUAL, 0, -1, 0)
    gg.processResume()
    local t = gg.getResults(1)
    if #t == 0 then gg.alert("No se encontró nada.") return end
    for i, v in ipairs(t) do
        v.address = v.address + 0x1B8
        v.flags = gg.TYPE_BYTE
        v.value = "1"
        v.freeze = true
        v.freezeType = gg.FREEZE_NORMAL
    end
    gg.setValues(t)
    gg.addListItems(t)
    gg.clearResults()
    gg.processResume()
    gg.timeJump("5:0")
end

function MutantReactor()
    gg.setVisible(false)
    gg.clearResults()
    if not reactorReady then
        gg.alert("Primero usa: Cambiar el Reactor -> selecciona NUEVO y luego el ORIGINAL (a reemplazar).")
        return
    end
    gg.searchNumber(originalHex, gg.TYPE_BYTE)
    local r = gg.getResults(100000)
    gg.editAll(newHex, gg.TYPE_BYTE)
    gg.clearResults()
    for i = 1, #originalSpecimens do
        gg.searchNumber(":" .. originalSpecimens[i], gg.TYPE_BYTE)
        local s = gg.getResults(100000)
        gg.editAll(":" .. newSpecimens[i], gg.TYPE_BYTE)
        gg.clearResults()
    end
    gg.toast("Reactor cambiado.")
    originalHex = nil
    newHex = nil
    originalSpecimens = nil
    newSpecimens = nil
    reactorReady = false
end

function ReadyFight()
    gg.setVisible(false)
    gg.clearResults()
    gg.searchNumber(":ready_fight", gg.TYPE_BYTE)
    local results = gg.getResults(100000)
    if #results == 0 then return end
    for i = 1, #results do
        results[i].value = 0
        results[i].freeze = true
    end
    gg.addListItems(results)
    gg.clearResults()
end

local reactorNames = {
    "Steampunk", "Girl Power", "Superheroes", "Gothic", "Japan", "Star Wars",
    "Villains", "Big Boss", "Movies", "Gods of the Arena", "Elements",
    "Time Soldiers", "Music", "Lucha Libre", "Dark Fantasy", "Western", "Beach",
    "Photosynthesis", "Bloody Games"
}

function ChangeReactorMenu()
    local newMenu = gg.choice(reactorNames, nil, "CAMBIAR REACTOR\n\nPaso 1/2: Selecciona el reactor NUEVO (el que quieres obtener).")
    if newMenu == nil then return end
    local originalMenu = gg.choice(reactorNames, nil, "CAMBIAR REACTOR\n\nPaso 2/2: Selecciona el reactor ORIGINAL (el que vas a reemplazar).")
    if originalMenu == nil then return end

    if originalMenu == 1 then originalHex = "h12737465616D70756E6B0000000000000000000000000000010000007E0400002867616368615F7061636B5F737465616D70756E6B000000" originalSpecimens = { "Specimen_BF_02", "Specimen_EC_01", "Specimen_AB_01", "Specimen_C_01", "Specimen_AC_02", "Specimen_AD_01" } end
    if originalMenu == 2 then originalHex = "h086769726C0000000000000000000000000000000000000001000000650400001E67616368615F7061636B5F6769726C0000000000000000" originalSpecimens = { "Specimen_AA_01", "Specimen_CB_01", "Specimen_CD_01", "Specimen_F_01", "Specimen_FB_01", "Specimen_CF_01" } end
    if originalMenu == 3 then originalHex = "h0C6865726F65730000000000000000000000000000000000020000003A0700002267616368615F7061636B5F6865726F6573000000000000" originalSpecimens = { "Specimen_FC_02", "Specimen_AE_01", "Specimen_BB_01", "Specimen_CA_01", "Specimen_FA_01", "Specimen_EF_02" } end
    if originalMenu == 4 then originalHex = "h0C676F746869630000000000000000000000000000000000010000007E0400002267616368615F7061636B5F676F74686963000000000000" originalSpecimens = { "Specimen_CE_01", "Specimen_BF_01", "Specimen_DC_01", "Specimen_E_01", "Specimen_FD_01", "Specimen_DC_03" } end
    if originalMenu == 5 then originalHex = "h0A6A6170616E00000000000000000000000000000000000003000000FC0800002067616368615F7061636B5F6A6170616E00000000000000" originalSpecimens = { "Specimen_CC_01", "Specimen_A_01", "Specimen_DF_01", "Specimen_BA_02", "Specimen_CB_02", "Specimen_FD_03" } end
    if originalMenu == 6 then originalHex = "h10737461727761727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F737461727761727300000000" originalSpecimens = { "Specimen_AF_04", "Specimen_CC_03", "Specimen_CD_01", "Specimen_EC_01", "Specimen_BC_01", "Specimen_BF_04" } end
    if originalMenu == 7 then originalHex = "h1076696C6C61696E7300000000000000000000000000000003000000FC0800002667616368615F7061636B5F76696C6C61696E7300000000" originalSpecimens = { "Specimen_DA_01", "Specimen_B_01", "Specimen_AB_02", "Specimen_EC_03", "Specimen_BA_03", "Specimen_CE_05" } end
    if originalMenu == 8 then originalHex = "h126761636861626F7373000000000000000000000000000003000000FC0800002867616368615F7061636B5F6761636861626F7373000000" originalSpecimens = { "Specimen_FF_01", "Specimen_D_01", "Specimen_FB_03", "Specimen_DB_01", "Specimen_EA_01", "Specimen_AB_05" } end
    if originalMenu == 9 then originalHex = "h0C6D6F76696573000000000000000000000000000000000003000000FC0800002267616368615F7061636B5F6D6F76696573000000000000" originalSpecimens = { "Specimen_ED_03", "Specimen_EB_04", "Specimen_CB_03", "Specimen_BD_03", "Specimen_CC_02", "Specimen_FA_06" } end
    if originalMenu == 10 then originalHex = "h126F6C796D7069616E73000000000000000000000000000003000000FC0800002867616368615F7061636B5F6F6C796D7069616E73000000" originalSpecimens = { "Specimen_CC_04", "Specimen_AC_01", "Specimen_BC_02", "Specimen_BB_03", "Specimen_CE_03", "Specimen_EC_06" } end
    if originalMenu == 11 then originalHex = "h10656C656D656E747300000000000000000000000000000003000000FC0800002667616368615F7061636B5F656C656D656E747300000000" originalSpecimens = { "Specimen_EF_01", "Specimen_EB_02", "Specimen_BD_04", "Specimen_EB_05", "Specimen_DF_04", "Specimen_EB_06" } end
    if originalMenu == 12 then originalHex = "h10736F6C646965727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F736F6C646965727300000000" originalSpecimens = { "Specimen_AB_04", "Specimen_CF_02", "Specimen_BC_04", "Specimen_AD_05", "Specimen_CD_06", "Specimen_BD_07" } end
    if originalMenu == 13 then originalHex = "h0A6D7573696300000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6D7573696300000000000000" originalSpecimens = { "Specimen_AA_03", "Specimen_BF_06", "Specimen_EE_04", "Specimen_FB_05", "Specimen_DE_05", "Specimen_DA_09" } end
    if originalMenu == 14 then originalHex = "h0A6C7563686100000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6C7563686100000000000000" originalSpecimens = { "Specimen_CF_03", "Specimen_DE_04", "Specimen_DC_05", "Specimen_FE_04", "Specimen_BE_05", "Specimen_AC_07" } end
    if originalMenu == 15 then originalHex = "h0E66616E746173790000000000000000000000000000000004000000C40900002467616368615F7061636B5F66616E746173790000000000" originalSpecimens = { "Specimen_FC_04", "Specimen_FC_05", "Specimen_DB_06", "Specimen_AC_03", "Specimen_BD_05", "Specimen_FC_09" } end
    if originalMenu == 16 then originalHex = "h0E7765737465726E0000000000000000000000000000000004000000C40900002467616368615F7061636B5F7765737465726E0000000000" originalSpecimens = { "Specimen_FF_06", "Specimen_FC_07", "Specimen_AA_06", "Specimen_DB_04", "Specimen_CF_06", "Specimen_BF_10" } end
    if originalMenu == 17 then originalHex = "h0A626561636800000000000000000000000000000000000004000000C40900002067616368615F7061636B5F626561636800000000000000" originalSpecimens = { "Specimen_FE_08", "Specimen_EE_07", "Specimen_BB_08", "Specimen_AB_07", "Specimen_AF_08", "Specimen_CA_11" } end
    if originalMenu == 18 then originalHex = "h0E7665676574616C0000000000000000000000000000000005000000C40900002467616368615F7061636B5F7665676574616C0000000000" originalSpecimens = { "Specimen_BB_02", "Specimen_DC_08", "Specimen_AF_01", "Specimen_DE_09", "Specimen_CA_06", "Specimen_DF_12" } end
    if originalMenu == 19 then originalHex = "h106F6C796D7069637300000000000000000000000000000005000000C40900002667616368615F7061636B5F6F6C796D7069637300000000" originalSpecimens = { "Specimen_FA_08", "Specimen_CA_02", "Specimen_FD_06", "Specimen_CA_07", "Specimen_CA_08", "Specimen_CA_14" } end

    if newMenu == 1 then newHex = "h12737465616D70756E6B0000000000000000000000000000010000007E0400002867616368615F7061636B5F737465616D70756E6B000000" newSpecimens = { "Specimen_BF_02", "Specimen_EC_01", "Specimen_AB_01", "Specimen_AB_01", "Specimen_AC_02", "Specimen_AD_01" } end
    if newMenu == 2 then newHex = "h086769726C0000000000000000000000000000000000000001000000650400001E67616368615F7061636B5F6769726C0000000000000000" newSpecimens = { "Specimen_AA_01", "Specimen_CB_01", "Specimen_CD_01", "Specimen_CD_01", "Specimen_FB_01", "Specimen_CF_01" } end
    if newMenu == 3 then newHex = "h0C6865726F65730000000000000000000000000000000000020000003A0700002267616368615F7061636B5F6865726F6573000000000000" newSpecimens = { "Specimen_FC_02", "Specimen_AE_01", "Specimen_BB_01", "Specimen_CA_01", "Specimen_FA_01", "Specimen_EF_02" } end
    if newMenu == 4 then newHex = "h0C676F746869630000000000000000000000000000000000010000007E0400002267616368615F7061636B5F676F74686963000000000000" newSpecimens = { "Specimen_CE_01", "Specimen_BF_01", "Specimen_DC_01", "Specimen_DC_01", "Specimen_FD_01", "Specimen_DC_03" } end
    if newMenu == 5 then newHex = "h0A6A6170616E00000000000000000000000000000000000003000000FC0800002067616368615F7061636B5F6A6170616E00000000000000" newSpecimens = { "Specimen_CC_01", "Specimen_CC_02", "Specimen_DF_01", "Specimen_BA_02", "Specimen_CB_02", "Specimen_FD_03" } end
    if newMenu == 6 then newHex = "h10737461727761727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F737461727761727300000000" newSpecimens = { "Specimen_AF_04", "Specimen_CC_03", "Specimen_CD_01", "Specimen_EC_01", "Specimen_BC_01", "Specimen_BF_04" } end
    if newMenu == 7 then newHex = "h1076696C6C61696E7300000000000000000000000000000003000000FC0800002667616368615F7061636B5F76696C6C61696E7300000000" newSpecimens = { "Specimen_DA_01", "Specimen_DA_01", "Specimen_AB_02", "Specimen_EC_03", "Specimen_BA_03", "Specimen_CE_05" } end
    if newMenu == 8 then newHex = "h126761636861626F7373000000000000000000000000000003000000FC0800002867616368615F7061636B5F6761636861626F7373000000" newSpecimens = { "Specimen_FF_01", "Specimen_FF_01", "Specimen_FB_03", "Specimen_DB_01", "Specimen_EA_01", "Specimen_AB_05" } end
    if newMenu == 9 then newHex = "h0C6D6F76696573000000000000000000000000000000000003000000FC0800002267616368615F7061636B5F6D6F76696573000000000000" newSpecimens = { "Specimen_ED_03", "Specimen_EB_04", "Specimen_CB_03", "Specimen_BD_03", "Specimen_CC_02", "Specimen_FA_06" } end
    if newMenu == 10 then newHex = "h126F6C796D7069616E73000000000000000000000000000003000000FC0800002867616368615F7061636B5F6F6C796D7069616E73000000" newSpecimens = { "Specimen_CC_04", "Specimen_AC_01", "Specimen_BC_02", "Specimen_BB_03", "Specimen_CE_03", "Specimen_EC_06" } end
    if newMenu == 11 then newHex = "h10656C656D656E747300000000000000000000000000000003000000FC0800002667616368615F7061636B5F656C656D656E747300000000" newSpecimens = { "Specimen_EF_01", "Specimen_EB_02", "Specimen_BD_04", "Specimen_EB_05", "Specimen_DF_04", "Specimen_EB_06" } end
    if newMenu == 12 then newHex = "h10736F6C646965727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F736F6C646965727300000000" newSpecimens = { "Specimen_AB_04", "Specimen_CF_02", "Specimen_BC_04", "Specimen_AD_05", "Specimen_CD_06", "Specimen_BD_07" } end
    if newMenu == 13 then newHex = "h0A6D7573696300000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6D7573696300000000000000" newSpecimens = { "Specimen_AA_03", "Specimen_BF_06", "Specimen_EE_04", "Specimen_FB_05", "Specimen_DE_05", "Specimen_DA_09" } end
    if newMenu == 14 then newHex = "h0A6C7563686100000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6C7563686100000000000000" newSpecimens = { "Specimen_CF_03", "Specimen_DE_04", "Specimen_DC_05", "Specimen_FE_04", "Specimen_BE_05", "Specimen_AC_07" } end
    if newMenu == 15 then newHex = "h0E66616E746173790000000000000000000000000000000004000000C40900002467616368615F7061636B5F66616E746173790000000000" newSpecimens = { "Specimen_FC_04", "Specimen_FC_05", "Specimen_DB_06", "Specimen_AC_03", "Specimen_BD_05", "Specimen_FC_09" } end
    if newMenu == 16 then newHex = "h0E7765737465726E0000000000000000000000000000000004000000C40900002467616368615F7061636B5F7765737465726E0000000000" newSpecimens = { "Specimen_FF_06", "Specimen_FC_07", "Specimen_AA_06", "Specimen_DB_04", "Specimen_CF_06", "Specimen_BF_10" } end
    if newMenu == 17 then newHex = "h0A626561636800000000000000000000000000000000000004000000C40900002067616368615F7061636B5F626561636800000000000000" newSpecimens = { "Specimen_FE_08", "Specimen_EE_07", "Specimen_BB_08", "Specimen_AB_07", "Specimen_AF_08", "Specimen_CA_11" } end
    if newMenu == 18 then newHex = "h0E7665676574616C0000000000000000000000000000000005000000C40900002467616368615F7061636B5F7665676574616C0000000000" newSpecimens = { "Specimen_BB_02", "Specimen_DC_08", "Specimen_AF_01", "Specimen_DE_09", "Specimen_CA_06", "Specimen_DF_12" } end
    if newMenu == 19 then newHex = "h106F6C796D7069637300000000000000000000000000000005000000C40900002667616368615F7061636B5F6F6C796D7069637300000000" newSpecimens = { "Specimen_FA_08", "Specimen_CA_02", "Specimen_FD_06", "Specimen_CA_07", "Specimen_CA_08", "Specimen_CA_14" } end

    reactorReady = true
    gg.toast("Listo: ahora ve a 'Hackear el Reactor' para aplicar el cambio.")
end

function OthersMenu()
    local othersMenu = gg.choice({
        "🧪 Laboratorio médico",
        "🔥 Horno de oro",
        "⚡ Velocidad x5",
        "💠 Orbe XP nivel 4",
        "🎰 Caja fichas Jackpot",
        "🧴 Caja frascos XP",
        "⚔️ Orbe ataque nivel 7",
        "🧬 Mutantes",
        "🔮 Orbes básicos nivel 6",
        "💥 Orbes ATK / VD / CRIT",
        "👥 Buranka y Britany",
        "🛡️ Preparar y pelear",
        "🌍 Todos los Mutantes"
                   
    }, nil,
    "OTROS")

    if othersMenu == 1 then Medlab()
    elseif othersMenu == 2 then GoldFurnace()
    elseif othersMenu == 3 then Speed5()
    elseif othersMenu == 4 then xpOrb()
    elseif othersMenu == 5 then JackpotBox()
    elseif othersMenu == 6 then XPJarBox()
    elseif othersMenu == 7 then Attack7()
    elseif othersMenu == 8 then AllMutants()
    elseif othersMenu == 9 then BasicOrbs()
    elseif othersMenu == 10 then Bundle6Orbs()
    elseif othersMenu == 11 then Buranka_Britany()
    elseif othersMenu == 12 then ReadyFight()
    elseif othersMenu == 13 then Mutants() 
    end
end
-- ==========================================
-- FUNCIÓN NUEVA: DESBLOQUEAR CAJAS (PRINCIPAL)
-- ==========================================
function UnlockBoxes()
    gg.setVisible(false)
    gg.toast("📦 Buscando Cajas...")
    
    -- Limpieza inicial
    gg.clearResults()
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()

    -- Lista de búsquedas de cajas (Optimizada)
    local boxSearches = {
        {search = "h28416E6E697665727361727932335F426F785F3235000000106D6174657269616C000000", type = gg.TYPE_BYTE, offset = 0xfffffffffffffff8},
        {search = "h2C416E6E69766572736172795F323031395F426F785F3900106D6174657269616C000000", type = gg.TYPE_BYTE, offset = 0xfffffffffffff578},
        {search = "1,986,289,960;1,601,465,957;1,701,601,635;1,918,985,326", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,836,605,296;1,650,422,625;1,650,423,919;6,649,196", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,836,605,296;1,650,422,625;1,734,309,999;1,852,138,866", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,836,605,296;1,650,422,625;1,918,859,375;25,701", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,852,727,596;1,919,252,073;2,037,539,187;2,020,565,599", type = gg.TYPE_DWORD, offset = 0xffffffffffffffc0},
        {search = "1,839,605,296;1,650,422,625;1,650,423,919;6,649,196", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,839,605,296;1,650,422,625;1,734,309,999;1,852,138,866", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc},
        {search = "1,839,605,296;1,650,422,625;1,918,859,375;25,701", type = gg.TYPE_DWORD, offset = 0xffffffffffffffbc}
    }

    local foundCount = 0
    
    for i, item in ipairs(boxSearches) do
        gg.searchNumber(item.search, item.type)
        local r = gg.getResults(100) -- Limitado para evitar crash
        if #r > 0 then
            local valuesToEdit = {}
            for k = 1, #r do
                local target = r[k].address + item.offset
                table.insert(valuesToEdit, {address = target, flags = gg.TYPE_DWORD, value = 1})
            end
            gg.setValues(valuesToEdit)
            foundCount = foundCount + #r
        end
        gg.clearResults()
    end
    
    -- Limpieza Final
    gg.searchNumber(":Allowed", gg.TYPE_BYTE)
    gg.getResults(100000)
    gg.editAll("0", gg.TYPE_BYTE)
    gg.clearResults()
    
    gg.processResume()
    gg.timeJump("5:0")
    
    if foundCount > 0 then
        gg.toast("✅ Cajas Desbloqueadas")
    else
        gg.toast("⚠️ No se encontraron cajas activas en memoria")
    end
end
while true do
    if gg.isVisible() and gg.isClickedUiButton() then
        local mainmenu = gg.choice({
            "Hackear el reactor (aplica el cambio)",
            "Cambiar el reactor (preparar)",
            "Otros",
            "Cambiar Mutante (Individual)",
            "📦 Desbloquear Cajas"
        }, nil,
        "MENU PRINCIPAL V3.0\n")

        if mainmenu == 1 then
            MutantReactor()
        elseif mainmenu == 2 then
            ChangeReactorMenu()
        elseif mainmenu == 3 then
            OthersMenu()
            MenuCambioIndividual()
        elseif mainmenu == 5 then
            UnlockBoxes()
        end
    end
    gg.sleep(100)
end