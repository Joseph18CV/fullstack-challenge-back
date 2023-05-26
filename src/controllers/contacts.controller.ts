import { Request, Response } from "express"
import { TContactRequest, TContactUpdate } from "../interfaces/contacts.interface"
import { createContactServices } from "../services/contacts/createContact.services"
import { listContactsServices } from "../services/contacts/listContact.services"
import { updateContactServices } from "../services/contacts/updateContact.services"
import { deleteContactServices } from "../services/contacts/deleteContact.services"

const createContactController = async (req: Request, res: Response): Promise<Response> => {

    const contactData: TContactRequest = req.body
    const clientId: number = Number(req.user.id)

    const newContact = await createContactServices(contactData, clientId)

    return res.status(201).json(newContact)

}

const listContactsController = async (req: Request, res: Response): Promise<Response> => {

    const contacts = await listContactsServices(req.user.id)

    return res.status(200).json(contacts)

}

const updateContactController = async (req: Request, res: Response): Promise<Response> => {

    const contactData: TContactUpdate[] = req.body
    const contactId: number = Number(req.params.id)

    const updateContact = await updateContactServices(contactData, contactId)

    return res.status(201).json(updateContact)

}

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {

    await deleteContactServices(parseInt(req.params.id))

    return res.status(204).send()

}

export {
    createContactController,
    listContactsController,
    updateContactController,
    deleteContactController
}