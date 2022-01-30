import { NextFunction, Request, Response } from "express"
import { FindTask } from "../services/FindTask"

const controller = {
    findAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tasks = await FindTask.execute()

            res.status(200).json(tasks)
        } catch (error) {
            next(error)
        }
    },

    create: (req: Request, res: Response, next: NextFunction): void=> {
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

export { controller }