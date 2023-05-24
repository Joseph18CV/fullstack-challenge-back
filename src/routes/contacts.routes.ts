import { Router } from "express"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares"
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contacts.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares"
import { contactSchemaRequest, contactUpdateSchema } from "../schemas/contacts.schemas"
import { ensureEmailAndTelephoneExistsMiddlewaresContact } from "../middlewares/ensureEmailAndTelephoneExistsContact.middleware"
import { ensureIdContactExistsMiddleware } from "../middlewares/ensureIdContactExists.middlewares"

const contactRouters: Router = Router()

contactRouters.post("", ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(contactSchemaRequest), ensureEmailAndTelephoneExistsMiddlewaresContact, createContactController)
contactRouters.get("", ensureTokenIsValidMiddleware, listContactsController)
contactRouters.patch("/:id", ensureTokenIsValidMiddleware, ensureIdContactExistsMiddleware, ensureDataIsValidMiddleware(contactUpdateSchema), ensureEmailAndTelephoneExistsMiddlewaresContact, updateContactController)
contactRouters.delete("/:id", ensureTokenIsValidMiddleware, ensureIdContactExistsMiddleware, deleteContactController)

export default contactRouters