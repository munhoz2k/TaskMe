import { NextFunction, Request, Response } from "express"
import UpdateGroupName from "../services/UpdateGroupName"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
    const groupName = req.params.actualGroupName
    const { newName } = req.body

    try {
        const updatedGroup = await UpdateGroupName(groupName, newName, id)

        res.status(200).json(updatedGroup)
    } catch (error) {
        next(error)
    }
}
