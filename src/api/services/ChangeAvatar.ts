import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

class ChangeAvatar {

    static async execute(path: string) {
        //await db.user.update()
    }

}