import express = require("express")
import fs = require("fs")
import { UsuariosController } from "../controllers/usuarios.controller"
import { cacheo } from "../handlers/errors.handler";

const controller = new UsuariosController()

const router = express.Router()

router.get("/", cacheo(controller.listar))
router.post("/", cacheo(controller.insertar))
router.delete("/:_id", controller.eliminar)
router.put("/:_id", controller.actualizar)

export { router }