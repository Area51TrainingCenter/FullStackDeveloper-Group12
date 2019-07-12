export class GenericoController {
	model: any

	constructor(model: any) {
		this.model = model
		this.listar = this.listar.bind(this)
	}

	async listar(req, res, next) {
		const data = await this.model.find()

		res
			.status(200)
			.json(data)
	}

	async insertar(req, res) {
		const documento: any = new this.model()

		for (let field in req.body) {
			documento[field] = req.body[field]
		}

		await documento.save()

		res.send("Documento insertado")
	}

	async actualizar(req, res) {
		const _id = req.params._id

		await this.model.findOneAndUpdate({ _id }, req.body)

		res.send("Documento actualizado")
	}

	async eliminar(req, res) {
		const _id = req.params._id

		await this.model.findOneAndRemove({ _id })

		res.send("Documento eliminado")
	}
}