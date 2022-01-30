import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export class FindTask {

    static async execute (): Promise<object> {
        
        // Find all tasks
        const tasks = await db.task.findMany()

        return tasks
    }

}