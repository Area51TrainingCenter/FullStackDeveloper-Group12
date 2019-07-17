import jwt = require("jwt-simple")
import moment = require("moment")

const crearToken = (username, rol) => {
	const payload = {
		iat: moment().unix(),
		exp: moment().add(60, "seconds").unix(),
		username,
		rol
	}


	const token = jwt.encode(payload, process.env.KEYWORD)

	return token
}

const validarToken = (token) => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, process.env.KEYWORD)
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