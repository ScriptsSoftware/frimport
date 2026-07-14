#!/usr/bin/env node

const fs = require("fs");

const file = process.argv[2];

const code = fs.readFileSync(file, "utf8").split("\n");

for (let i = 0; i < code.length; i++) {
    const line = code[i].trim();

    if (line === "frimport get-import-module.frimport") {
        console.log("[Importer] cargado");
    }

    if (line === "Module") {
        const moduleName = code[++i].trim();
        console.log("[Module] " + moduleName + " cargado");
    }
}
