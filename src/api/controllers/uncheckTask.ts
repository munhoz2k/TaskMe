import { NextFunction, Request, Response } from "express"
import UncheckTask from "../services/UncheckTask"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { taskId } = req.params

    try {
        const uncheckedTask = await UncheckTask(taskId)

        res.status(201).json(uncheckedTask)
    } catch (error) {
        next(error)
    }
}
