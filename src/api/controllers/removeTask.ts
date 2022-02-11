import { NextFunction, Request, Response } from "express"
import RemoveTask from "../services/RemoveTask"

export default async (req: Request, res: Response, next: NextFunction) => {
    const taskId = req.params.taskId

    try {
        const removedTask = await RemoveTask(taskId)

        res.status(200).json(removedTask)
    } catch (error) {
        next(error)
    }
}
