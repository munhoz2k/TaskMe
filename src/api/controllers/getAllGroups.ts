import { NextFunction, Request, Response } from "express"
import GetAllGroups from "../services/GetAllGroups"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user

    try {
        const uncheckedTask = await GetAllGroups(id)

        res.status(201).json(uncheckedTask)
    } catch (error) {
        next(error)
    }
}
