import { validarToken } from "../utils/token.util";

const authentication = (req, res, next) => {
	const headers = req.headers

	const authorization = headers.authorization

	if (authorization && authorization.split(" ")[1]) {
		validarToken(authorization.split(" ")[1])
			.then((data: any) => {
				res.locals.rol = data.rol
				console.log(data)
				next()
			})
			.catch(err => {
				res
					.status(err.status)
					.send(err.message)
			})
	} else {
		res
			.status(404)
			.send("No se encontro el token")
	}
}

export { authentication }