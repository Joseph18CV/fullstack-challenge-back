import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../error"

const deleteClientServices = async (clientId: number): Promise<void> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: any = await clientRepository.findOne({
        where: {
            id: clientId
        }
    })

    if(!client){
        throw new AppError("User has already been deleted", 404)
    }

    await clientRepository.delete(client)

}

export {
    deleteClientServices
}