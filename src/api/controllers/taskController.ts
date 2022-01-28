import { NextFunction, Request, Response } from "express"

const controller = {
    create: (req: Request, res: Response, next: NextFunction): void=> {
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

export { controller }