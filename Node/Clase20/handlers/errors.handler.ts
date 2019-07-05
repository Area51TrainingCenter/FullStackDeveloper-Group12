import { runInNewContext } from "vm";

interface IError extends Error {
	status?: number
}

const cacheo = (ftn: (req, res, next) => Promise<any>) => {
	return (rq, rs, nx) => {
		return ftn(rq, rs, nx).catch((error: IError) => {
			//error.status = 500
			nx(error)
			/* rs
				.status(500)
				.send(error) */
		})
	}
}

const rutaNoEncontrada = (req, res, next) => {
	const error: IError = new Error("Ruta no encontrada")
	error.status = 404
	next(error)
	//res.status(404).send("Ruta no encontrada")
}

const general = (error: IError, req, res, next) => {
	res
		.status(error.status)
		.json({
			nameX: error.name,
			message: error.message,
			stack: error.stack
		})
}

export { cacheo, rutaNoEncontrada, IError, general }