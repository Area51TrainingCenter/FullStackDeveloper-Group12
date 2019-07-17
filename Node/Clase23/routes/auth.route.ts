import express = require("express")
import { AuthController } from "../controllers/auth.controller"
import { cacheo } from "../handlers/errors.handler";

const controller = new AuthController()

const router = express.Router()

router.post("/login", (controller.login))

export { router }