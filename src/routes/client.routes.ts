import { Router } from "express"
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controllers"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares"
import { clientSchemaRequest, clientUpdateSchema } from "../schemas/client.schemas"
import { ensureEmailAndTelephoneExistsMiddlewares } from "../middlewares/ensureEmailAndTelephoneExists.middlawares"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares"
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleares"

const clientRouters: Router = Router()

clientRouters.post("", ensureDataIsValidMiddleware(clientSchemaRequest), ensureEmailAndTelephoneExistsMiddlewares, createClientController)
clientRouters.get("", ensureTokenIsValidMiddleware, listClientController)
clientRouters.patch("/:id", ensureTokenIsValidMiddleware, ensureIdExistsMiddleware, ensureDataIsValidMiddleware(clientUpdateSchema), ensureEmailAndTelephoneExistsMiddlewares, updateClientController)
clientRouters.delete("/:id", ensureTokenIsValidMiddleware, ensureIdExistsMiddleware, deleteClientController)

export default clientRouters