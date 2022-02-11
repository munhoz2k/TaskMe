import { Prisma, PrismaClient } from "@prisma/client"
import { v4 } from "uuid"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (userId: string, groupName: string) => {
    // Verifica o tamanho do nome do grupo
    if (groupName.length >= 25) {
        throw new AppError("Nome muito grande!", 400)
    }

    // Cria o grupo
    const newGroup = await db.group.create({
        data: {
            id: v4(),
            name: groupName,
            userId: userId,
        },
    })

    return newGroup
}
