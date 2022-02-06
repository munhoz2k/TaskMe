import { PrismaClient, User } from "@prisma/client"
import axios from "axios"
import { sign } from "jsonwebtoken"

const db = new PrismaClient()

interface Request {
    id_token: string
    registerMethod: string
}

interface Response {
    user: User
    token: string
}

export class CreateUserWithProvider {
    static async execute({ id_token, registerMethod }: Request) {
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
            throw new Error("Erro")
        }
    }
}
