import { NextFunction, Request, Response } from "express"
import CreateGroup from "../services/CreateGroup"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
    const { groupName } = req.params

    try {
        const newGroup = await CreateGroup(id, groupName)

        res.status(201).json(newGroup)
    } catch (error) {
        next(error)
    }
}
