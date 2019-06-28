import express = require("express")
import fs = require("fs")

const app = express()

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

app.get("/usuarios/nuevo", (req, res) => {
	const nuevoUsuario = { username: "nuevo" }

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

app.listen(3000, () => console.log("Servidor ejecutándose"))