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

    let findClient;

    if(req.user){
        findClient = await clientRepository.createQueryBuilder(
            "client"
        ).where("client.id != :id AND (client.email = :email OR client.telephone = :telephone)", {
            id: req.user.id,
            email: req.body.email,
            telephone: req.body.telephone
        }).getOne()
    }else{
        findClient = await clientRepository.createQueryBuilder(
            "client"
        ).where("client.email = :email OR client.telephone = :telephone", {
            email: req.body.email,
            telephone: req.body.telephone
        }).getOne()
    }

    if(findClient){
        throw new AppError("Email or Telephone exists", 409)
    }

    return next()

}

export {
    ensureEmailAndTelephoneExistsMiddlewares
}