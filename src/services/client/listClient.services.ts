import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"

const listClientServices = async (clientId: number): Promise<any> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })

    return client
}

export {
    listClientServices
}