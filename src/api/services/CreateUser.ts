import { Prisma, PrismaClient, User } from "@prisma/client"
import { v4 } from "uuid"
import { hash } from "bcrypt"
import { sign } from "jsonwebtoken"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (data: Prisma.UserCreateInput) => {
    const verifyEmail = await db.user.findFirst({
        where: { email: data.email },
    })
    if (verifyEmail) {
        throw new AppError("O email já está registrado", 400)
    }

    const newUser = await db.user.create({
        data: {
            id: v4(),
            name: data.name,
            email: data.email,
            password: await hash(data.password, 10),
            photo_path: `${process.env.API_URL}/uploads/user.jpg`,
        },
    })

    const newGroup = await db.group.create({
        data: {
            id: v4(),
            userId: newUser.id,
        },
    })

    // Crindo JWT
    const payload = {
        id: newUser.id,
    }
    const token = sign(payload, process.env.SERVER_PASSWORD, {
        expiresIn: "30d",
    })

    // Deletando a senha para prevenções de segurança
    delete newUser.password

    return { newUser, newGroup, token }
}
