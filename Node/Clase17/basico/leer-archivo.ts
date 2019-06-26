import fs = require("fs")

const contenido = fs.readFileSync("./lectura.txt", { encoding: "utf8" })

console.log("Archivo leido")
console.log(contenido)