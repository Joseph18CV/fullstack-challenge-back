import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contacts.entity"
import { AppError } from "../error"

const ensureIdContactExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const movieRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await movieRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findContact){
        throw new AppError("Contact not found", 404)
    }

    return next()

}

export {
    ensureIdContactExistsMiddleware
}