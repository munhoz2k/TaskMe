import { Prisma, PrismaClient, Task } from "@prisma/client"
import AppError from "../errors/AppError"
import { v4 } from "uuid"

const db = new PrismaClient()

export default async (title: string, groupName: string, userId: string) => {
    // Verifica a existencia do grupo
    const group = await db.group.findFirst({
        where: {
            name: groupName,
            userId: userId,
        },
    })
    if (!group) {
        throw new AppError("Grupo não encontrado", 404)
    }

    // Cria a Task no banco
    const newTask = await db.task.create({
        data: {
            id: v4(),
            title: title,
            groupId: group.id,
        },
    })

    return newTask
}
