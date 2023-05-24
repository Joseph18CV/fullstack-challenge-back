import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { TClientUpdate } from "../../interfaces/client.interfaces"
import { clientUpdateSchema } from "../../schemas/client.schemas"

const updateClientServices = async (newClientData: TClientUpdate[], clientId: number): Promise<TClientUpdate> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const oldClientData: Client | null = await clientRepository.findOneBy({
        id: clientId
    })

    const client = clientRepository.create({
        ...oldClientData,
        ...newClientData
    })

    await clientRepository.save(client)

    const updatedUser = clientUpdateSchema.parse(client)

    return updatedUser

}

export {
    updateClientServices
}