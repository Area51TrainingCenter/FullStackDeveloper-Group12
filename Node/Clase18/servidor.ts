import http = require("http")
import fs = require("fs")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

	if (req.url.toLowerCase() == "/") {
		res.writeHead(200, { "content-type": "text/plain" })
		res.write("Mensaje inicial")
		res.end()
	} else if (req.url.toLowerCase() == "/home") {
		res.writeHead(200, { "content-type": "text/html; charset=utf-8" })
		res.write("<h1>Título</h1>")
		res.write("<strong>texto en negrita</strong>")
		res.end()
	} else if (req.url.toLowerCase() == "/resumen") {
		res.writeHead(200, { "content-type": "text/html; charset=utf-8" })

		const lector = fs.createReadStream("./resumen.html")

		//lector.on("data", chunck => res.write(chunck))
		lector.pipe(res)
	} else if (req.url.toLowerCase() == "/manual") {
		res.writeHead(200, { "content-type": "application/pdf" })

		const lector = fs.createReadStream("./manual.pdf")

		//lector.on("data", chunck => res.write(chunck))
		lector.pipe(res)
	} else if (req.url.toLowerCase() == "/usuarios") {
		res.writeHead(200, { "content-type": "application/json" })

		const listado = [
			{ id: 10, username: "jpuerta" },
			{ id: 20, username: "psalinas" }
		]

		res.end(JSON.stringify(listado))
	} else {
		res.writeHead(404, { "content-type": "text/plain" })
		res.end("Ruta no encontrada")
	}




	console.log(req.url)
})

servidor.listen(3000, () => console.log("Servidor ejecutándose"))