import { NextFunction, Request, Response } from "express"
import { FindUser } from "../services/FindUser";

export const userFinder = {

    all: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await FindUser.findAll()
    
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    },

    byId: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params
        try {
            const users = await FindUser.findById(id)
    
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    },

    byEmail: async (req: Request, res: Response, next: NextFunction) => {
        const { email } = req.body
        try {
            const users = await FindUser.findById(email)
    
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

}