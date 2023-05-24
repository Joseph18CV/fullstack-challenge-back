import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../error"

const ensureIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const movieRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const findUser = await movieRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    return next()

}

export {
    ensureIdExistsMiddleware
}