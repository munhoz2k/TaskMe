import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

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


}