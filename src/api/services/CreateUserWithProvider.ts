import { PrismaClient, User } from "@prisma/client"
import AppError from "../errors/AppError"
import { sign } from "jsonwebtoken"
import axios from "axios"

const db = new PrismaClient()

export class CreateUserWithProvider {
    static async execute(id_token: string, registerMethod: string) {
        let user

        if (registerMethod === "google") {
            user = axios.get(
                `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`
            )
            return user
        } else if (registerMethod === "facebook") {
            user = axios.get(
                `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`
            )
            return user
        } else {
            throw new AppError(
                "Não foi possivel identificar o método de registro",
                500
            )
        }
    }
}
