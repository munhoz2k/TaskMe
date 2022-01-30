import { PrismaClient, User } from "@prisma/client"
import bcrypt from "bcrypt"

const db = new PrismaClient()

interface Request {
    name:  string
    email: string
    password: string
}

export class CreateUser {

    static async execute(data: Request): Promise<User> {

        // Checks if email is being used
        const verifyEmail = await db.user.findFirst({ where: { email: data.email } }) 
        if(verifyEmail) {
            throw new Error('This email is being used')
        }

        // Encrypt password
        data.password = await bcrypt.hash(data.password, 10)

        // Create user on Database
        const newUser = await db.user.create({ data: data })

        return newUser
    }

}