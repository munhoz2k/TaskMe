import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()


interface Request {
    title: string
}


class CreateTask {

    async execute (data: Request) {

        // Create task on Database
        const newTask = await db.task.create({ data: data })

        return newTask
    }

}