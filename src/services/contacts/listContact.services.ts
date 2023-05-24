import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"

export const listContactsServices = async() => {

    const contactRepository = AppDataSource.getRepository(Contact)
    
    const contacts = await contactRepository.find()

    return contacts
}