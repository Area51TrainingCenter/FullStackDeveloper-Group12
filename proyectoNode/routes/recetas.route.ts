import express = require("express")
import { RecetasController } from "../controllers/recetas.controller"
import { cacheo } from "../handlers/errors.handler";

const controller = new RecetasController()

const router = express.Router()

router.get("/", cacheo(controller.listar))
router.post("/", cacheo(controller.insertar))
router.delete("/:id", cacheo(controller.eliminar))
router.put("/:id", cacheo(controller.actualizar))

export { router }