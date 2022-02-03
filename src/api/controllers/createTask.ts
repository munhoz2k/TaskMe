import { NextFunction, Request, Response } from "express"
import { CreateTask } from "../services/CreateTask"

export default async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    try {
        const newTask = await CreateTask.execute(data)

        res.status(201).json(newTask)
    } catch (error) {
        next(error)
    }
}