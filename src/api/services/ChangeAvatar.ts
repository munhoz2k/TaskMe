import { PrismaClient } from "@prisma/client"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (userId: string, filename: string) => {
    // Pega o usuário e verifica se ele existe
    const user = await db.user.update({
        where: {
            id: userId,
        },
        data: {
            photo_path: `${process.env.API_URL}/uploads/${filename}`,
        },
    })
    if (!user) {
        throw new AppError("Usuário não encontrado", 404)
    }

    delete user.password
    return user
}
