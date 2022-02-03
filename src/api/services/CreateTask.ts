import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()


interface Request {
    title: string
}


export class CreateTask {

    static async execute (data: Request) {

        // Create task on Database
        const newTask = await db.task.create({ data: data })

        return newTask
    }

}