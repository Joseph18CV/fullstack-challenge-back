import { Request, Response } from "express"
import { TContactRequest } from "../interfaces/contacts.interface"
import { createContactServices } from "../services/contacts/createContact.services"

const createContactController = async (req: Request, res: Response): Promise<Response> => {

    const contactData: TContactRequest = req.body
    const clientId: number = Number(req.user.id)

    const newContact = await createContactServices(contactData, clientId)

    return res.status(201).json(newContact)

}

export {
    createContactController
}