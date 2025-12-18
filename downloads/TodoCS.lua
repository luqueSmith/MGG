-- Mutants Genetic Gladiators (MGG) - Script
-- Estilo "masculino": sin emojis y con menús claros
-- Arreglado: el botón "Otros" ya NO entra en "Cambiar el Reactor"

gg.alert("MGG - Script")

gg.showUiButton()

originalHex = nil
newHex = nil
originalSpecimens = nil
newSpecimens = nil
reactorReady = false

-- =========================
-- FUNCIONES (OTROS)
-- =========================
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
    if #t == 0 then
        gg.alert("No se encontró nada.")
        return
    end

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
    if #t == 0 then
        gg.alert("No se encontró nada.")
        return
    end

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
    if #t == 0 then
        gg.alert("No se encontró nada.")
        return
    end

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
    if #t == 0 then
        gg.alert("No se encontró nada.")
        return
    end

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

-- =========================
-- REACTOR
-- =========================
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

-- =========================
-- MENUS
-- =========================
local reactorNames = {
    "Steampunk", "Girl Power", "Superheroes", "Gothic", "Japan", "Star Wars",
    "Villains", "Big Boss", "Movies", "Gods of the Arena", "Elements",
    "Time Soldiers", "Music", "Lucha Libre", "Dark Fantasy", "Western", "Beach",
    "Photosynthesis", "Bloody Games"
}

function ChangeReactorMenu()
    -- Guia:
    -- 1) Elige el reactor NUEVO (el que quieres obtener)
    -- 2) Elige el reactor ORIGINAL (el que vas a reemplazar)
    local newMenu = gg.choice(reactorNames, nil, "CAMBIAR REACTOR\n\nPaso 1/2: Selecciona el reactor NUEVO (el que quieres obtener).")
    if newMenu == nil then return end

    local originalMenu = gg.choice(reactorNames, nil, "CAMBIAR REACTOR\n\nPaso 2/2: Selecciona el reactor ORIGINAL (el que vas a reemplazar).")
    if originalMenu == nil then return end

    -- Original reactor hex/specimens
    if originalMenu == 1 then
        originalHex = "h12737465616D70756E6B0000000000000000000000000000010000007E0400002867616368615F7061636B5F737465616D70756E6B000000"
        originalSpecimens = { "Specimen_BF_02", "Specimen_EC_01", "Specimen_AB_01", "Specimen_C_01", "Specimen_AC_02", "Specimen_AD_01" }
    elseif originalMenu == 2 then
        originalHex = "h086769726C0000000000000000000000000000000000000001000000650400001E67616368615F7061636B5F6769726C0000000000000000"
        originalSpecimens = { "Specimen_AA_01", "Specimen_CB_01", "Specimen_CD_01", "Specimen_F_01", "Specimen_FB_01", "Specimen_CF_01" }
    elseif originalMenu == 3 then
        originalHex = "h0C6865726F65730000000000000000000000000000000000020000003A0700002267616368615F7061636B5F6865726F6573000000000000"
        originalSpecimens = { "Specimen_FC_02", "Specimen_AE_01", "Specimen_BB_01", "Specimen_CA_01", "Specimen_FA_01", "Specimen_EF_02" }
    elseif originalMenu == 4 then
        originalHex = "h0C676F746869630000000000000000000000000000000000010000007E0400002267616368615F7061636B5F676F74686963000000000000"
        originalSpecimens = { "Specimen_CE_01", "Specimen_BF_01", "Specimen_DC_01", "Specimen_E_01", "Specimen_FD_01", "Specimen_DC_03" }
    elseif originalMenu == 5 then
        originalHex = "h0A6A6170616E00000000000000000000000000000000000003000000FC0800002067616368615F7061636B5F6A6170616E00000000000000"
        originalSpecimens = { "Specimen_CC_01", "Specimen_A_01", "Specimen_DF_01", "Specimen_BA_02", "Specimen_CB_02", "Specimen_FD_03" }
    elseif originalMenu == 6 then
        originalHex = "h10737461727761727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F737461727761727300000000"
        originalSpecimens = { "Specimen_AF_04", "Specimen_CC_03", "Specimen_CD_01", "Specimen_EC_01", "Specimen_BC_01", "Specimen_BF_04" }
    elseif originalMenu == 7 then
        originalHex = "h1076696C6C61696E7300000000000000000000000000000003000000FC0800002667616368615F7061636B5F76696C6C61696E7300000000"
        originalSpecimens = { "Specimen_DA_01", "Specimen_B_01", "Specimen_AB_02", "Specimen_EC_03", "Specimen_BA_03", "Specimen_CE_05" }
    elseif originalMenu == 8 then
        originalHex = "h126761636861626F7373000000000000000000000000000003000000FC0800002867616368615F7061636B5F6761636861626F7373000000"
        originalSpecimens = { "Specimen_FF_01", "Specimen_D_01", "Specimen_FB_03", "Specimen_DB_01", "Specimen_EA_01", "Specimen_AB_05" }
    elseif originalMenu == 9 then
        originalHex = "h0C6D6F76696573000000000000000000000000000000000003000000FC0800002267616368615F7061636B5F6D6F76696573000000000000"
        originalSpecimens = { "Specimen_ED_03", "Specimen_EB_04", "Specimen_CB_03", "Specimen_BD_03", "Specimen_CC_02", "Specimen_FA_06" }
    elseif originalMenu == 10 then
        originalHex = "h126F6C796D7069616E73000000000000000000000000000003000000FC0800002867616368615F7061636B5F6F6C796D7069616E73000000"
        originalSpecimens = { "Specimen_CC_04", "Specimen_AC_01", "Specimen_BC_02", "Specimen_BB_03", "Specimen_CE_03", "Specimen_EC_06" }
    elseif originalMenu == 11 then
        originalHex = "h10656C656D656E747300000000000000000000000000000003000000FC0800002667616368615F7061636B5F656C656D656E747300000000"
        originalSpecimens = { "Specimen_EF_01", "Specimen_EB_02", "Specimen_BD_04", "Specimen_EB_05", "Specimen_DF_04", "Specimen_EB_06" }
    elseif originalMenu == 12 then
        originalHex = "h10736F6C646965727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F736F6C646965727300000000"
        originalSpecimens = { "Specimen_AB_04", "Specimen_CF_02", "Specimen_BC_04", "Specimen_AD_05", "Specimen_CD_06", "Specimen_BD_07" }
    elseif originalMenu == 13 then
        originalHex = "h0A6D7573696300000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6D7573696300000000000000"
        originalSpecimens = { "Specimen_AA_03", "Specimen_BF_06", "Specimen_EE_04", "Specimen_FB_05", "Specimen_DE_05", "Specimen_DA_09" }
    elseif originalMenu == 14 then
        originalHex = "h0A6C7563686100000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6C7563686100000000000000"
        originalSpecimens = { "Specimen_CF_03", "Specimen_DE_04", "Specimen_DC_05", "Specimen_FE_04", "Specimen_BE_05", "Specimen_AC_07" }
    elseif originalMenu == 15 then
        originalHex = "h0E66616E746173790000000000000000000000000000000004000000C40900002467616368615F7061636B5F66616E746173790000000000"
        originalSpecimens = { "Specimen_FC_04", "Specimen_FC_05", "Specimen_DB_06", "Specimen_AC_03", "Specimen_BD_05", "Specimen_FC_09" }
    elseif originalMenu == 16 then
        originalHex = "h0E7765737465726E0000000000000000000000000000000004000000C40900002467616368615F7061636B5F7765737465726E0000000000"
        originalSpecimens = { "Specimen_FF_06", "Specimen_FC_07", "Specimen_AA_06", "Specimen_DB_04", "Specimen_CF_06", "Specimen_BF_10" }
    elseif originalMenu == 17 then
        originalHex = "h0A626561636800000000000000000000000000000000000004000000C40900002067616368615F7061636B5F626561636800000000000000"
        originalSpecimens = { "Specimen_FE_08", "Specimen_EE_07", "Specimen_BB_08", "Specimen_AB_07", "Specimen_AF_08", "Specimen_CA_11" }
    elseif originalMenu == 18 then
        originalHex = "h0E7665676574616C0000000000000000000000000000000005000000C40900002467616368615F7061636B5F7665676574616C0000000000"
        originalSpecimens = { "Specimen_BB_02", "Specimen_DC_08", "Specimen_AF_01", "Specimen_DE_09", "Specimen_CA_06", "Specimen_DF_12" }
    elseif originalMenu == 19 then
        originalHex = "h106F6C796D7069637300000000000000000000000000000005000000C40900002667616368615F7061636B5F6F6C796D7069637300000000"
        originalSpecimens = { "Specimen_FA_08", "Specimen_CA_02", "Specimen_FD_06", "Specimen_CA_07", "Specimen_CA_08", "Specimen_CA_14" }
    end

    -- Replacement reactor hex/specimens (nuevo)
    if newMenu == 1 then
        newHex = "h12737465616D70756E6B0000000000000000000000000000010000007E0400002867616368615F7061636B5F737465616D70756E6B000000"
        newSpecimens = { "Specimen_BF_02", "Specimen_EC_01", "Specimen_AB_01", "Specimen_AB_01", "Specimen_AC_02", "Specimen_AD_01" }
    elseif newMenu == 2 then
        newHex = "h086769726C0000000000000000000000000000000000000001000000650400001E67616368615F7061636B5F6769726C0000000000000000"
        newSpecimens = { "Specimen_AA_01", "Specimen_CB_01", "Specimen_CD_01", "Specimen_CD_01", "Specimen_FB_01", "Specimen_CF_01" }
    elseif newMenu == 3 then
        newHex = "h0C6865726F65730000000000000000000000000000000000020000003A0700002267616368615F7061636B5F6865726F6573000000000000"
        newSpecimens = { "Specimen_FC_02", "Specimen_AE_01", "Specimen_BB_01", "Specimen_CA_01", "Specimen_FA_01", "Specimen_EF_02" }
    elseif newMenu == 4 then
        newHex = "h0C676F746869630000000000000000000000000000000000010000007E0400002267616368615F7061636B5F676F74686963000000000000"
        newSpecimens = { "Specimen_CE_01", "Specimen_BF_01", "Specimen_DC_01", "Specimen_DC_01", "Specimen_FD_01", "Specimen_DC_03" }
    elseif newMenu == 5 then
        newHex = "h0A6A6170616E00000000000000000000000000000000000003000000FC0800002067616368615F7061636B5F6A6170616E00000000000000"
        newSpecimens = { "Specimen_CC_01", "Specimen_CC_02", "Specimen_DF_01", "Specimen_BA_02", "Specimen_CB_02", "Specimen_FD_03" }
    elseif newMenu == 6 then
        newHex = "h10737461727761727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F737461727761727300000000"
        newSpecimens = { "Specimen_AF_04", "Specimen_CC_03", "Specimen_CD_01", "Specimen_EC_01", "Specimen_BC_01", "Specimen_BF_04" }
    elseif newMenu == 7 then
        newHex = "h1076696C6C61696E7300000000000000000000000000000003000000FC0800002667616368615F7061636B5F76696C6C61696E7300000000"
        newSpecimens = { "Specimen_DA_01", "Specimen_DA_01", "Specimen_AB_02", "Specimen_EC_03", "Specimen_BA_03", "Specimen_CE_05" }
    elseif newMenu == 8 then
        newHex = "h126761636861626F7373000000000000000000000000000003000000FC0800002867616368615F7061636B5F6761636861626F7373000000"
        newSpecimens = { "Specimen_FF_01", "Specimen_FF_01", "Specimen_FB_03", "Specimen_DB_01", "Specimen_EA_01", "Specimen_AB_05" }
    elseif newMenu == 9 then
        newHex = "h0C6D6F76696573000000000000000000000000000000000003000000FC0800002267616368615F7061636B5F6D6F76696573000000000000"
        newSpecimens = { "Specimen_ED_03", "Specimen_EB_04", "Specimen_CB_03", "Specimen_BD_03", "Specimen_CC_02", "Specimen_FA_06" }
    elseif newMenu == 10 then
        newHex = "h126F6C796D7069616E73000000000000000000000000000003000000FC0800002867616368615F7061636B5F6F6C796D7069616E73000000"
        newSpecimens = { "Specimen_CC_04", "Specimen_AC_01", "Specimen_BC_02", "Specimen_BB_03", "Specimen_CE_03", "Specimen_EC_06" }
    elseif newMenu == 11 then
        newHex = "h10656C656D656E747300000000000000000000000000000003000000FC0800002667616368615F7061636B5F656C656D656E747300000000"
        newSpecimens = { "Specimen_EF_01", "Specimen_EB_02", "Specimen_BD_04", "Specimen_EB_05", "Specimen_DF_04", "Specimen_EB_06" }
    elseif newMenu == 12 then
        newHex = "h10736F6C646965727300000000000000000000000000000003000000FC0800002667616368615F7061636B5F736F6C646965727300000000"
        newSpecimens = { "Specimen_AB_04", "Specimen_CF_02", "Specimen_BC_04", "Specimen_AD_05", "Specimen_CD_06", "Specimen_BD_07" }
    elseif newMenu == 13 then
        newHex = "h0A6D7573696300000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6D7573696300000000000000"
        newSpecimens = { "Specimen_AA_03", "Specimen_BF_06", "Specimen_EE_04", "Specimen_FB_05", "Specimen_DE_05", "Specimen_DA_09" }
    elseif newMenu == 14 then
        newHex = "h0A6C7563686100000000000000000000000000000000000004000000C40900002067616368615F7061636B5F6C7563686100000000000000"
        newSpecimens = { "Specimen_CF_03", "Specimen_DE_04", "Specimen_DC_05", "Specimen_FE_04", "Specimen_BE_05", "Specimen_AC_07" }
    elseif newMenu == 15 then
        newHex = "h0E66616E746173790000000000000000000000000000000004000000C40900002467616368615F7061636B5F66616E746173790000000000"
        newSpecimens = { "Specimen_FC_04", "Specimen_FC_05", "Specimen_DB_06", "Specimen_AC_03", "Specimen_BD_05", "Specimen_FC_09" }
    elseif newMenu == 16 then
        newHex = "h0E7765737465726E0000000000000000000000000000000004000000C40900002467616368615F7061636B5F7765737465726E0000000000"
        newSpecimens = { "Specimen_FF_06", "Specimen_FC_07", "Specimen_AA_06", "Specimen_DB_04", "Specimen_CF_06", "Specimen_BF_10" }
    elseif newMenu == 17 then
        newHex = "h0A626561636800000000000000000000000000000000000004000000C40900002067616368615F7061636B5F626561636800000000000000"
        newSpecimens = { "Specimen_FE_08", "Specimen_EE_07", "Specimen_BB_08", "Specimen_AB_07", "Specimen_AF_08", "Specimen_CA_11" }
    elseif newMenu == 18 then
        newHex = "h0E7665676574616C0000000000000000000000000000000005000000C40900002467616368615F7061636B5F7665676574616C0000000000"
        newSpecimens = { "Specimen_BB_02", "Specimen_DC_08", "Specimen_AF_01", "Specimen_DE_09", "Specimen_CA_06", "Specimen_DF_12" }
    elseif newMenu == 19 then
        newHex = "h106F6C796D7069637300000000000000000000000000000005000000C40900002667616368615F7061636B5F6F6C796D7069637300000000"
        newSpecimens = { "Specimen_FA_08", "Specimen_CA_02", "Specimen_FD_06", "Specimen_CA_07", "Specimen_CA_08", "Specimen_CA_14" }
    end

    reactorReady = true
    gg.toast("Listo: ahora ve a 'Hackear el Reactor' para aplicar el cambio.")
end

function OthersMenu()
    local othersMenu = gg.choice({
        "Laboratorio medico",
        "Horno de oro",
        "Velocidad x5",
        "Orbe XP nivel 4",
        "Caja fichas Jackpot",
        "Caja frascos XP",
        "Orbe ataque nivel 7",
        "Todos los mutantes",
        "Orbes basicos nivel 6",
        "Orbes AtK/VD/Crit",
        "Buranka y Britany",
        "Preparar y pelear"
    }, nil,
    "OTROS\n\n(En este apartado ya esta la descripcion por nombre.)")

    if othersMenu == 1 then
        Medlab()
    elseif othersMenu == 2 then
        GoldFurnace()
    elseif othersMenu == 3 then
        Speed5()
    elseif othersMenu == 4 then
        xpOrb()
    elseif othersMenu == 5 then
        JackpotBox()
    elseif othersMenu == 6 then
        XPJarBox()
    elseif othersMenu == 7 then
        Attack7()
    elseif othersMenu == 8 then
        AllMutants()
    elseif othersMenu == 9 then
        BasicOrbs()
    elseif othersMenu == 10 then
        Bundle6Orbs()
    elseif othersMenu == 11 then
        Buranka_Britany()
    elseif othersMenu == 12 then
        ReadyFight()
    end
end

while true do
    if gg.isVisible() and gg.isClickedUiButton() then
        local mainmenu = gg.choice({
            "Hackear el reactor (aplica el cambio)",
            "Cambiar el reactor (preparar)",
            "Otros"
        }, nil,
        "GUIA RAPIDA\n\n" ..
        "1) Cambiar el reactor: eliges NUEVO y luego ORIGINAL.\n" ..
        "2) Hackear el reactor: aplica el cambio ya preparado.\n" ..
        "3) Otros: funciones extra.\n")

        if mainmenu == 1 then
            -- Guia: solo funciona si antes preparaste el reactor
            MutantReactor()
        elseif mainmenu == 2 then
            ChangeReactorMenu()
        elseif mainmenu == 3 then
            -- ARREGLO: ahora 'Otros' entra solo aqui
            OthersMenu()
        end
    end
    gg.sleep(100)
end
