import { PrismaClient, User } from "@prisma/client"
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"

const db = new PrismaClient()

interface Request {
    name: string
    email: string
    password: string
}

interface Response {
    user: User
    token: string
}

export class CreateUser {
    static async execute({
        name,
        email,
        password,
    }: Request): Promise<Response> {
        // Checks if email is being used
        const verifyEmail = await db.user.findFirst({
            where: { email },
        })
        if (verifyEmail) {
            throw new Error("This email is being used")
        }

        let newUser: User

        // Encrypt password
        password = await bcrypt.hash(password, 10)

        // Create user on Database
        newUser = await db.user.create({
            data: {
                name,
                email,
                password,
                registerMethod: "email",
            },
        })

        // Creating JWT
        const payload = {
            id: newUser.id,
        }

        const token = sign(payload, process.env.SERVER_PASSWORD, {
            expiresIn: "30d",
        })

        // Deleting users pass for security prevention
        delete newUser.password

        newUser.photo_path = `${process.env.API_URL}/uploads/${newUser.photo_path}`

        return { user: newUser, token }
    }
}
