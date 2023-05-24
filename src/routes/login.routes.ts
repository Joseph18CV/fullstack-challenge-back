import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { loginSchema } from "../schemas/login.schemas";

const loginRouters: Router = Router()

loginRouters.post("", ensureDataIsValidMiddleware(loginSchema), createLoginController)

export {
    loginRouters
}