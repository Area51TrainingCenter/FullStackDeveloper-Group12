import Usuario from "../models/usuario.model"
import { GenericoController } from "./generico.controller";

export class UsuariosController extends GenericoController {

	constructor() {
		super(Usuario)
	}

	/* 	async listar(req, res, next) {
			const data = await Usuario.find().populate("rol")
	
			res
				.status(200)
				.json(data)
		} */
}