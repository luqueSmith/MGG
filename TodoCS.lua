-- MGG LOADER VIP
gg.toast("☁️ Conectando con el servidor...")

-- Tu URL exacta
local url = "http://raul-smith.wuaze.com/load.php"

-- Peticion al servidor
local response = gg.makeRequest(url)

-- Verificar si hubo respuesta
if response == nil then
    gg.alert("❌ Error: No hay internet o el servidor no responde.")
    os.exit()
end

-- Verificar si el servidor nos aceptó (Código 200)
if response.code ~= 200 then
    gg.alert("⛔ Error " .. response.code .. ": Acceso denegado o archivo no encontrado.")
    os.exit()
end

-- Convertir el texto descargado en código ejecutable
local script, errorLoad = load(response.content)

if script then
    -- Ejecutar el script descargado
    script() 
else
    gg.alert("❌ Error al procesar el script: " .. tostring(errorLoad))
end