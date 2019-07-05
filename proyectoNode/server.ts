import express = require("express")
import fs = require("fs")
import bodyParser = require("body-parser")
import { router as RouterRecetas } from "./routes/recetas.route"
import { rutaNoEncontrada, general } from "./handlers/errors.handler";

const app = express()

app.use(express.static("./assets"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.use("/recetas", RouterRecetas)

app.use(rutaNoEncontrada)

app.use(general)

app.listen(3000, () => console.log("Servidor ejecutándose"))