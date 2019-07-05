import fs = require("fs")

export class RecetasController {

	async listar(req, res, next) {
		const promesa = new Promise((resolve, reject) => {
			fs.readFile("./recetas.json", "utf-8", (err, contenido) => {
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
	}

	async insertar(req, res) {
		const promesa = new Promise((resolve, reject) => {
			const nuevaReceta = { titulo: req.body.titulo, descripcion: req.body.descripcion }

			fs.readFile("./recetas.json", "utf-8", (err, contenido) => {
				let data = JSON.parse(contenido)
				let incremental = data.incremental
				const lista = data.lista

				nuevaReceta["id"] = incremental
				lista.push(nuevaReceta)
				incremental++

				data = { incremental, lista }

				fs.writeFile("./recetas.json", JSON.stringify(data), err => {
					if (err) return reject(err)
					resolve("Receta insertada")
				})
			})
		})

		const respuesta = await promesa.then()

		res.send(respuesta)
	}

	async actualizar(req, res) {
		const id = +req.params.id

		const promesa = new Promise((resolve, reject) => {
			fs.readFile("./recetas.json", "utf-8", (err, contenido) => {
				let data = JSON.parse(contenido)
				const lista = data.lista
				const incremental = data.incremental

				const indice = lista.findIndex(el => {
					return el.id === id
				})

				if (indice > -1) {
					lista[indice].titulo = req.body.titulo
					lista[indice].descripcion = req.body.descripcion
				}

				data = { incremental, lista }

				fs.writeFile("./recetas.json", JSON.stringify(data), err => {
					if (err) return reject(err)
					resolve("Receta actualizada")
				})
			})
		})

		const respuesta = await promesa.then()

		res.send(respuesta)
	}

	async eliminar(req, res) {
		const id = +req.params.id

		const promesa = new Promise((resolve, reject) => {
			fs.readFile("./recetas.json", "utf-8", (err, contenido) => {
				let data = JSON.parse(contenido)
				const lista = data.lista
				const incremental = data.incremental

				const indice = lista.findIndex(el => {
					return el.id === id
				})

				if (indice > -1) lista.splice(indice, 1)

				data = { incremental, lista }

				fs.writeFile("./recetas.json", JSON.stringify(data), err => {
					if (err) return reject(err)
					resolve("Receta eliminada")
				})
			})
		})

		const respuesta = await promesa.then()

		res.send(respuesta)
	}
}