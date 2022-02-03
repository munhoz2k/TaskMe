import { NextFunction, Request, Response } from "express";
import { CreateUser } from "../services/CreateUser";

export default async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body
    try {
        const newUser = await CreateUser.execute(data)

        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
    
}