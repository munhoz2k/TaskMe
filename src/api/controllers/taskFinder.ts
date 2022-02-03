import { NextFunction, Request, Response } from "express"
import { FindTask } from "../services/FindTask";

export const taskFinder = {

    all: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tasks = await FindTask.all()
    
            res.status(200).json(tasks)
        } catch (error) {
            next(error)
        }
    },

    byId: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params
        try {
            const task = await FindTask.byId(id)
    
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

}