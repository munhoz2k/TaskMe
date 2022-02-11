import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (groupName: string, userId: string) => {
    //verifica se o grupo existe e pega todas as tasks dele
    const group = await db.group.findFirst({
        where: {
            name: groupName,
            userId: userId,
        },
        include: {
            task: true,
        },
    })
    if (!group) {
        throw new AppError("Grupo não encontrado", 404)
    }

    // Delte o grupo caso não tenha tasks dentro dele
    if (group.task.length == 0) {
        const deletedGroup = await db.group.delete({ where: { id: group.id } })
        return deletedGroup
    } else {
        throw new AppError("O grupo contem tasks, apague todas primeiro", 400)
    }
}
