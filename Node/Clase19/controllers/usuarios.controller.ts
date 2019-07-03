import fs = require("fs")

export class UsuariosController {

	async listar(req, res) {
		const promesa = new Promise((resolve, reject) => {
			fs.readFile("./usuarios.json", "utf-8", (err, contenido) => {
				if (err) {
					reject(err)
				} else {
					const data = JSON.parse(contenido)
					resolve(data)
				}
			})
		})

		const data: any = await promesa.then()

		res
			.status(200)
			.json(data.lista)

		/* promesa.then((data: any) => {
				res
					.status(200)
					.json(data.lista)
			}) */

		/* 		promesa.catch(err => {
						res
							.status(500)
							.send(err)
					}) */



	}

	insertar(req, res) {
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
	}

	actualizar(req, res) {
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
	}

	eliminar(req, res) {
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
	}
}