import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"
const db = new PrismaClient()

export default async (taskId: string) => {
    // Marca a task como completada
    const task = await db.task.findFirst({ where: { id: taskId } })
    if (!task) {
        throw new AppError("Task não encontrada", 404)
    }

    const completedTask = await db.task.update({
        where: {
            id: taskId,
        },
        data: {
            isCompleted: true,
        },
    })

    return completedTask
}
