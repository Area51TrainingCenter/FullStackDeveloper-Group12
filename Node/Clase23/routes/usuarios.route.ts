import express = require("express")
import fs = require("fs")
import { UsuariosController } from "../controllers/usuarios.controller"
import { cacheo } from "../handlers/errors.handler";
import { authentication } from "../securities/authentication.security";
import { authorization } from "../securities/authorization.security";

const controller = new UsuariosController()

const router = express.Router()

router.get("/", authentication, authorization("OPERADOR", "ADMINISTRADOR"), cacheo(controller.listar))
router.post("/", cacheo(controller.insertar))
router.delete("/:_id", cacheo(controller.eliminar))
router.put("/:_id", cacheo(controller.actualizar))

export { router }