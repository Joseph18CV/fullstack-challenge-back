import { Request, Response } from "express"
import { TClientRequest, TClientUpdate } from "../interfaces/client.interfaces"
import { createClientServices } from "../services/client/createClient.services"
import { listClientServices } from "../services/client/listClient.services"
import { updateClientServices } from "../services/client/updateClient.services"
import { deleteClientServices } from "../services/client/deleteClient.services"

const createClientController = async (req: Request, res: Response): Promise<Response> => {

    const clientData: TClientRequest = req.body

    const newClient = await createClientServices(clientData)

    return res.status(201).json(newClient)

}

const listClientController = async (req: Request, res: Response): Promise<Response> => {

    const clientId: number = Number(req.params.id)

    const client = await listClientServices(clientId)

    return res.status(201).json(client)

}

const updateClientController = async (req: Request, res: Response): Promise<Response> => {

    const clientData: TClientUpdate[] = req.body
    const clientId: number = Number(req.params.id)

    const updateClient = await updateClientServices(clientData, clientId)

    return res.status(201).json(updateClient)

}

const deleteClientController = async (req: Request, res: Response): Promise<Response> => {

    await deleteClientServices(parseInt(req.params.id))

    return res.status(204).send()

}

export {
    createClientController,
    listClientController,
    updateClientController,
    deleteClientController
}