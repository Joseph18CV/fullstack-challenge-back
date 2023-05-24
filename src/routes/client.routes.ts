import { Router } from "express"
import { createClientController } from "../controllers/client.controllers"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares"
import { clientSchemaRequest } from "../schemas/client.schemas"
import { ensureEmailAndTelephoneExistsMiddlewares } from "../middlewares/ensureEmailAndTelephoneExists.middlawares"

const clientRouters: Router = Router()

clientRouters.post("", ensureDataIsValidMiddleware(clientSchemaRequest), ensureEmailAndTelephoneExistsMiddlewares, createClientController)

export default clientRouters