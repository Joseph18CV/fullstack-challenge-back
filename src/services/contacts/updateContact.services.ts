import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { TContactUpdate } from "../../interfaces/contacts.interface"
import { contactUpdateSchema } from "../../schemas/contacts.schemas"

const updateContactServices = async (newContactData: TContactUpdate[], contactId: number): Promise<TContactUpdate> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })

    const client = contactRepository.create({
        ...oldContactData,
        ...newContactData
    })

    await contactRepository.save(client)

    const updatedContact = contactUpdateSchema.parse(client)

    return updatedContact

}

export {
    updateContactServices
}