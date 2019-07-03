import express = require("express")
import fs = require("fs")
import { UsuariosController } from "../controllers/usuarios.controller"

const controller = new UsuariosController()

const router = express.Router()

router.get("/", controller.listar)
router.post("/", controller.insertar)
router.delete("/:id", controller.eliminar)
router.put("/:id", controller.actualizar)

export { router }