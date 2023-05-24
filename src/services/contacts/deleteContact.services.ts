import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { AppError } from "../../error"

const deleteContactServices = async (contactId: number): Promise<void> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: any = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    if(!contact){
        throw new AppError("Contact has already been deleted", 404)
    }

    await contactRepository.delete(contact)

}

export {
    deleteContactServices
}