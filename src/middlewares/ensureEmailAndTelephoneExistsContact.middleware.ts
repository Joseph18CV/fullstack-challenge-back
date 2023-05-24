import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contacts.entity"
import { AppError } from "../error"

const ensureEmailAndTelephoneExistsMiddlewaresContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    if(!req.body.email && !req.body.telephone){
        return next()
    }

    const findEmail = await contactRepository.findBy({
        email: req.body.email
    })

    const findTelephone = await contactRepository.findBy({
        telephone: req.body.telephone
    })

    if(findEmail.length > 0 || findTelephone.length > 0){
        throw new AppError("Email and Telephone exists", 409)
    }

    return next()

}

export {
    ensureEmailAndTelephoneExistsMiddlewaresContact
}