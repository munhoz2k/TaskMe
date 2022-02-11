import { NextFunction, Request, Response } from "express"
import DeleteGroup from "../services/DeleteGroup"

export default async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user.id
    const groupName = req.params.groupName

    try {
        const deletedGroup = await DeleteGroup(groupName, userId)

        res.status(200).json(deletedGroup)
    } catch (error) {
        next(error)
    }
}
