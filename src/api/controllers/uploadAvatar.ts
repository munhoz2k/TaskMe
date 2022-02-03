import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send('Avatar uploaded')
    } catch (error) {
        next(error)
    }
}