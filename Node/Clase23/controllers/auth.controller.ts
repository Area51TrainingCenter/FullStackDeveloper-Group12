import Usuario from '../models/usuario.model';
import { crearToken } from '../utils/token.util';

export class AuthController {
	async login(req, res, next) {
		const data: any = req.body

		data.username = data.username.trim()
		data.password = data.password.trim()

		const usuario = await Usuario.findOne(data)

		if (usuario) {
			res.json({
				username: usuario.username,
				token: crearToken(usuario.username, usuario.rol.rol)
			})
		} else {
			res
				.status(404)
				.send("Usuario no encontrado")
		}
	}
}