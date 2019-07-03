import express = require("express")
import fs = require("fs")
import bodyParser = require("body-parser")
import { router as RouterUsuarios } from "./routes/usuarios.route"

const app = express()

app.use(express.static("./assets"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


/* app.use((req, res, next) => {
	fs.exists("./assets" + req.url, existe => {
		if (!existe) {
			next()
		} else {
			const lector = fs.createReadStream("./assets" + req.url)

			lector.pipe(res)
		}
	})
}) */

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.use("/usuarios", RouterUsuarios)

app.listen(3000, () => console.log("Servidor ejecutándose"))