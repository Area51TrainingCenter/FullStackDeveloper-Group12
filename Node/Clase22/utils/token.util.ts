import jwt = require("jwt-simple")
import moment = require("moment")

const PALABRA_SECRETA = "ARLKJD838383KK"

const crearToken = (username, rol) => {
	const payload = {
		iat: moment().unix(),
		exp: moment().add(20, "seconds").unix(),
		username,
		rol
	}

	const token = jwt.encode(payload, PALABRA_SECRETA)

	return token
}

const validarToken = (token) => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, PALABRA_SECRETA)
			resolve(payload)
		} catch (error) {
			reject({
				status: 409,
				message: "Token inválido"
			})
		}
	})

	return promesa
}

export { crearToken, validarToken }