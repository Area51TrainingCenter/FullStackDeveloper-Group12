import express = require("express")
import { RolesController } from "../controllers/roles.controller"
import { cacheo } from "../handlers/errors.handler";

const controller = new RolesController()

const router = express.Router()

router.get("/", cacheo(controller.listar))
router.post("/", cacheo(controller.insertar))
router.delete("/:_id", cacheo(controller.eliminar))
router.put("/:_id", cacheo(controller.actualizar))

export { router }