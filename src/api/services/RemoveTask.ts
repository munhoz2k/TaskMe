import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"
const db = new PrismaClient()

export default async (taskId: string) => {
    // Verifica existencia da Task
    if (!(await db.task.findFirst({ where: { id: taskId } }))) {
        throw new AppError("Task não encontrada", 404)
    }

    const removedTask = await db.task.delete({ where: { id: taskId } })

    return removedTask
}
