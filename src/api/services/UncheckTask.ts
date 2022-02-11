import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (taskId: string) => {
    // Verifica se a task existe
    const task = await db.task.findFirst({ where: { id: taskId } })
    if (!task) {
        throw new AppError("Task não encontrada", 404)
    }

    // Desmarca a Task
    const uncheckedTask = await db.task.update({
        where: {
            id: taskId,
        },
        data: {
            isCompleted: false,
        },
    })

    return uncheckedTask
}
