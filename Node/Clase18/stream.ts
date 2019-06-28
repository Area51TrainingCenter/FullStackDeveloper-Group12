import fs = require("fs")

const lector = fs.createReadStream("./lectura.txt")

const escritor = fs.createWriteStream("./escritura.txt")

lector.on("data", chunck => {
	escritor.write(chunck)
})

