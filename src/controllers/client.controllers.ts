import { Request, Response } from "express"
import { TClientRequest } from "../interfaces/client.interfaces"
import { createClientServices } from "../services/client/createClient.services"

const createClientController = async (req: Request, res: Response): Promise<Response> => {

    const clientData: TClientRequest = req.body
    console.log(clientData)

    const newClient = await createClientServices(clientData)

    return res.status(201).json(newClient)

}

export {
    createClientController
}