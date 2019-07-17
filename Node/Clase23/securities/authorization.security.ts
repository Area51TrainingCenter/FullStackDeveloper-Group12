const authorization = (...rolesPermitidos) => {
	return (req, res, next) => {
		if (rolesPermitidos.indexOf(res.locals.rol) > -1) return next()

		res
			.status(401)
			.json({
				status: 401,
				message: "User forbidden"
			})
	}
}

export { authorization }