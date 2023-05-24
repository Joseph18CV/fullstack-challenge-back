import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity" 
import { TClientRequest, TClientResponse } from "../../interfaces/client.interfaces"
import { clientSchemaResponse } from "../../schemas/client.schemas"

const createClientServices = async (clientData: TClientRequest): Promise<TClientResponse> => {

   const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

   const client: Client = clientRepository.create(clientData)

   await clientRepository.save(client)

   const newClient = clientSchemaResponse.parse(client)

   return newClient
    
}

export {    
    createClientServices
}