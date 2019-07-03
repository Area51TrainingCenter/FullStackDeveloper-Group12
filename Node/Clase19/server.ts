import express = require("express")
import fs = require("fs")
import bodyParser = require("body-parser")

const app = express()

app.use(express.static("./assets"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


/* app.use((req, res, next) => {
	fs.exists("./assets" + req.url, existe => {
		if (!existe) {
			next()
		} else {
			const lector = fs.createReadStream("./assets" + req.url)

			lector.pipe(res)
		}
	})
}) */

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.get("/usuarios", (req, res) => {
	fs.readFile("./usuarios.json", "utf-8", (err, contenido) => {
		const data = JSON.parse(contenido)
		res
			.status(200)
			.json(data.lista)
		/* console.log(data.incremental)
		res.send("ok") */
	})
	/* const listado = [
		{ id: 1, username: "psalinas" },
		{ id: 2, username: "acabezas" }
	]

	res
		.status(200)
		.json(listado) */

	/* 	res
			.type("application/json")
			.status(200)
			.send(listado) */
})

app.post("/usuarios", (req, res) => {
	const nuevoUsuario = { username: req.body.usuario }

	fs.readFile("./usuarios.json", "utf-8", (err, contenido) => {
		let data = JSON.parse(contenido)
		let incremental = data.incremental
		const lista = data.lista

		nuevoUsuario["id"] = incremental
		lista.push(nuevoUsuario)
		incremental++

		data = { incremental, lista }

		fs.writeFile("./usuarios.json", JSON.stringify(data), err => {
			res.end("Usuario insertado")
		})
	})
})

app.delete("/usuarios/:id", (req, res) => {
	const id = +req.params.id

	fs.readFile("./usuarios.json", "utf-8", (err, contenido) => {
		let data = JSON.parse(contenido)
		const lista = data.lista
		const incremental = data.incremental

		const indice = lista.findIndex(el => {
			return el.id === id
		})

		if (indice > -1) lista.splice(indice, 1)

		data = { incremental, lista }

		fs.writeFile("./usuarios.json", JSON.stringify(data), err => {
			res.end("Usuario eliminado")
		})
	})
})

app.put("/usuarios/:id", (req, res) => {
	const id = +req.params.id

	fs.readFile("./usuarios.json", "utf-8", (err, contenido) => {
		let data = JSON.parse(contenido)
		const lista = data.lista
		const incremental = data.incremental

		const indice = lista.findIndex(el => {
			return el.id === id
		})

		if (indice > -1) lista[indice].username = req.body.usuario

		data = { incremental, lista }

		fs.writeFile("./usuarios.json", JSON.stringify(data), err => {
			res.end("Usuario actualizado")
		})
	})

})



app.listen(3000, () => console.log("Servidor ejecutándose"))