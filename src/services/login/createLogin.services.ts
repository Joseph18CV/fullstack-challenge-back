import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity"; 
import { AppError } from "../../error";
import { iLogin } from "../../interfaces/login.interfaces";
import "dotenv/config" 
import { Repository } from "typeorm";

const createLoginServices = async (loginData: iLogin): Promise<string> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        email: loginData.email
    })

    if(!client){
        throw new AppError("Invalid credentials", 401)
    }

    const passwordMatch = await compare(loginData.password, client.password)

    if(!passwordMatch){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        {
            admin: client.id
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: client.id.toString()
        }
    )

    return token

}

export {
    createLoginServices
}