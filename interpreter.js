#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = process.argv[2];

if (!file) {
    console.log("Uso: node interpreter.js main.frimport");
    process.exit(1);
}

const code = fs.readFileSync(file, "utf8").split("\n");

for (let i = 0; i < code.length; i++) {
    const line = code[i].trim();

    if (line === "import system") {
        console.log("[System] Cargado");
    }

    if (line === "Module") {
        const moduleName = code[++i].trim();
        const modulePath = path.join(__dirname, "modules", moduleName);

        if (fs.existsSync(modulePath)) {
            console.log("[Module] " + moduleName + " cargado");
        } else {
            console.log("[Error] No existe el módulo: " + moduleName);
        }
    }

    if (line === "print:") {
        const text = code[++i].trim().replace(/^"|"$/g, "");
        console.log(text);
    }
}
