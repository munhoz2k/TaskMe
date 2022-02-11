import { Prisma } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import CreateTaskOnGroup from "../services/CreateTaskOnGroup"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
    const title: string = req.body.title
    const groupName: string = req.params.groupName

    try {
        const newTask = await CreateTaskOnGroup(title, groupName, id)

        res.status(201).json(newTask)
    } catch (error) {
        next(error)
    }
}
