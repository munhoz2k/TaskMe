import { PrismaClient, User } from "@prisma/client"

const db = new PrismaClient()

export class FindUser {
    static async findById(id: string): Promise<User> {
        // Find user by ID
        const user = await db.user.findFirst({ where: { id: Number(id) } })

        return user
    }

    static async findByEmail(email: string): Promise<User> {
        // Find user by ID
        const user = await db.user.findFirst({ where: { email: email } })

        return user
    }

    static async findAll(): Promise<Object> {
        // Find user by ID
        const user = await db.user.findMany()

        return user
    }
}
