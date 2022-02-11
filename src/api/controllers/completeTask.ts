import { NextFunction, Request, Response } from "express"
import CompleteTask from "../services/CompleteTask"

export default async (req: Request, res: Response, next: NextFunction) => {
    const taskId = req.params.taskId

    try {
        const completedTask = await CompleteTask(taskId)

        res.status(200).json(completedTask)
    } catch (error) {
        next(error)
    }
}
