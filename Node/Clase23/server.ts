import express = require("express")
import fs = require("fs")
import bodyParser = require("body-parser")
import cors = require("cors")
import { router as RouterUsuarios } from "./routes/usuarios.route"
import { router as RouterRoles } from "./routes/roles.route"
import { router as RouterAuth } from "./routes/auth.route"
import { rutaNoEncontrada, IError, general } from "./handlers/errors.handler";

require("dotenv").config({ path: "./variables.env" })

import mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-2a0hw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log("Error", error))

require("./models/usuario.model")
require("./models/roles.model")

const app = express()

app.use(cors({ origin: "http://dominio.com" }))

app.use(express.static("./public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.use("/usuarios", RouterUsuarios)
app.use("/roles", RouterRoles)
app.use("/auth", RouterAuth)

//app.use(rutaNoEncontrada)
app.use((req, res, next) => {
	//res.send("no encontrada")
	res.sendFile(__dirname + "/public/index.html")
})

app.use(general)

app.listen(process.env.PORT, () => console.log("Servidor ejecutándose"))