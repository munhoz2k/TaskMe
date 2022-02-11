import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (groupName: string, newName: string, userId: string) => {
    // Verifica se o grupo existe
    const group = await db.group.findFirst({
        where: {
            name: groupName,
            userId: userId,
        },
    })
    if (!group) {
        throw new AppError("Grupo não encontrado", 404)
    }

    // Atualiza o nome do grupo
    const updatedGroup = await db.group.update({
        where: {
            id: group.id,
        },
        data: {
            name: newName,
        },
    })

    return updatedGroup
}
