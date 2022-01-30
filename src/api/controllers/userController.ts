import { NextFunction, Request, Response } from "express";
import { CreateUser } from "../services/CreateUser";
import { FindUser } from "../services/FindUser";

const controller = {

    findAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await FindUser.findAll()

            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    },

    create: async (req: Request, res: Response, next: NextFunction) => {
        const data = req.body
        try {
            const newUser = await CreateUser.execute(data)

            res.status(201).json(newUser)
        } catch (error) {
            next(error)
        }
    },

    uploadNewAvatar: async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).send('Upload Completed')
        } catch (error) {
            next(error)
        }
    }

}

export { controller }