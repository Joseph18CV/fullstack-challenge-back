import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../error"

const ensureEmailAndTelephoneExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    if(!req.body.email && !req.body.telephone){
        return next()
    }

    const findEmail = await clientRepository.findBy({
        email: req.body.email
    })

    const findTelephone = await clientRepository.findBy({
        telephone: req.body.telephone
    })

    if(findEmail.length > 0 || findTelephone.length > 0){
        throw new AppError("Email and Telephone exists", 409)
    }

    return next()

}

export {
    ensureEmailAndTelephoneExistsMiddlewares
}