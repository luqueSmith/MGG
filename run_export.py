from pathlib import Path
import sys

print("✅ Python:", sys.executable)
print("✅ Carpeta actual:", Path.cwd())

targets = [
    Path("js/data-mutants.js"),
    Path("data-mutants.js"),
    Path("js/mutants.js"),
    Path("mutants.js"),
]

print("\nBuscando archivo de mutantes...")
found = None
for t in targets:
    print(" -", t, "=>", "OK" if t.exists() else "NO")
    if t.exists():
        found = t

if not found:
    print("\n❌ No encuentro tu archivo de mutantes.")
    print("➡️ Abre tu carpeta correcta en VS Code o dime dónde está el archivo.")
    input("Enter para salir...")
    raise SystemExit

print("\n✅ Encontrado:", found)

# Aquí llama a tu script real:
# Cambia el nombre si tu script se llama distinto
script = Path("export_mutants_to_excel.py")
if not script.exists():
    script = Path("export_mutants_pretty.py")

if not script.exists():
    print("\n❌ No encuentro el script exportador.")
    input("Enter para salir...")
    raise SystemExit

print("✅ Ejecutando:", script)
exec(script.read_text(encoding="utf-8"))
