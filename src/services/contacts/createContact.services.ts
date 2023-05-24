import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { Contact } from "../../entities/contacts.entity"
import { TContact, TContactRequest } from "../../interfaces/contacts.interface"

const createContactServices = async(data: TContactRequest, clientId: number): Promise<TContact> => {

    const contactsRepository = AppDataSource.getRepository(Contact)

    const clientRepository = AppDataSource.getRepository(Client)

    const client: any = await clientRepository.findOneBy({
        id: clientId
    })

    const contact = contactsRepository.create({
        ...data,
        client: client
    })

    await contactsRepository.save(contact)

    return contact
}

export {
    createContactServices
}