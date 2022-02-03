import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"

const db = new PrismaClient

export default async (email: string, password: string) => {
    // Search for user's email
    const user = await db.user.findFirst({ where: { email: email } })
    if (!user) {
        throw new Error('Incorrect email or password')
    }

    // Verify user's password
    const isPassCorrect = await bcrypt.compare(password, user.password)
    if(!isPassCorrect) {
        throw new Error('Incorrect email or password')
    }

    // Creating JWT
    const payload = {
        id: user.id
    }
    const token = sign(payload, process.env.SERVER_PASSWORD, { expiresIn: "30d" });

    // Deleting users pass for security prevention
    delete user.password;

    return { user, token }
}