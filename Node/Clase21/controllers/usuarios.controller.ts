import fs = require("fs")
import { IError } from "../handlers/errors.handler";
import Usuario from "../models/usuario.model"

export class UsuariosController {

	async listar(req, res, next) {
		const data = await Usuario.find()

		res
			.status(200)
			.json(data)
	}

	async insertar(req, res) {
		const usuario: any = new Usuario()

		usuario.username = req.body.username

		await usuario.save()

		res.send("Usuario insertado")
	}

	async actualizar(req, res) {
		const _id = req.params._id

		await Usuario.findOneAndUpdate({ _id }, { username: req.body.username })

		/* const usuario:any = Usuario.findOne({_id})
		usuario.username = req.body.username

		await usuario.save() */

		res.send("Usuario actualizado")
	}

	async eliminar(req, res) {
		const _id = +req.params._id

		await Usuario.findOneAndRemove({ _id })

		res.send("Usuario eliminado")
	}
}