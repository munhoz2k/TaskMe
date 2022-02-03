import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export class FindTask {

    static async all (): Promise<object> {
        
        // Find all tasks
        const tasks = await db.task.findMany()
        return tasks
    }

    static async byId (id: string) {
        const task = await db.task.findFirst({ where: { id: Number(id) } })
        if(!task) {
            throw new Error('Task not found')
        }

        return task
    }

}