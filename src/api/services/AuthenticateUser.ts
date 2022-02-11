import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import AppError from "../errors/AppError"

const db = new PrismaClient()

export default async (email: string, password: string) => {
    // Verifica se o usuário já existe, através do email
    try {
        if (!email || !password) {
            throw new AppError(
                "Porfavor insira o email e a senha corretamente",
                404
            )
        }

        const user = await db.user.findFirst({ where: { email: email } })
        if (!user) {
            throw new AppError("Email ou senha inválidos", 401)
        }

        // Verifica a senha do usuário
        const isPassCorrect = await bcrypt.compare(password, user.password)
        if (!isPassCorrect) {
            throw new AppError("Email ou senha inválidos", 401)
        }

        // Cria o JWT
        const payload = {
            id: user.id,
        }
        const token = jwt.sign(payload, process.env.SERVER_PASSWORD, {
            expiresIn: "30d",
        })

        // Deleting users pass for security prevention
        delete user.password

        return { user, token }
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new AppError("Erro no JWT", 500)
        } else {
            return error
        }
    }
}
