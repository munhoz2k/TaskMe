import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"
const db = new PrismaClient()

export default async (userId: string) => {
    // Pega os grupos e as tasks dos grupos
    const groups = await db.group.findMany({
        where: {
            userId: userId,
        },
        include: {
            task: true,
        },
    })

    // Verifica o objeto "groups"
    if (!groups) {
        throw new AppError("Não foi possivel encontrar os grupos", 404)
    }

    return groups
}
