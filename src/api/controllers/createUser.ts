import { Prisma } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import CreateUser from "../services/CreateUser"

export default async (req: Request, res: Response, next: NextFunction) => {
    const data: Prisma.UserCreateInput = req.body

    try {
        const { newUser, newGroup, token } = await CreateUser(data)

        res.status(201).json({ newUser, newGroup, token })
    } catch (error) {
        next(error)
    }
}
