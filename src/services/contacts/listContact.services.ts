import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"

export const listContactsServices = async(clientId: number) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    
    const contacts = await contactRepository.find({
        where: {
            client: {
                id: clientId
            }
        }
    })

    return contacts
}