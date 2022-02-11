import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (userId: string) => {
    // Pega todas informações do usuário
    const user = await db.user.findFirst({
        where: {
            id: userId,
        },
    })

    // Verifica se o usuário existe
    if (!user) {
        throw new AppError("Usuário não encontrado", 404)
    }

    return user
}
