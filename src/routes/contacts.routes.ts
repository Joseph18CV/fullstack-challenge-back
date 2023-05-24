import { Router } from "express"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares"
import { createContactController } from "../controllers/contacts.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares"
import { contactSchemaRequest } from "../schemas/contacts.schemas"
import { ensureEmailAndTelephoneExistsMiddlewaresContact } from "../middlewares/ensureEmailAndTelephoneExistsContact.middleware"

const contactRouters: Router = Router()

contactRouters.post("", ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(contactSchemaRequest), ensureEmailAndTelephoneExistsMiddlewaresContact, createContactController)

export default contactRouters