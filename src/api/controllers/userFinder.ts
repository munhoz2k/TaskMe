import { NextFunction, Request, Response } from "express"
import { FindUser } from "../services/FindUser"

export const userFinder = {
    byToken: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await FindUser.findById(req.user.id)

            user.photo_path = `${process.env.API_URL}/uploads/${user.photo_path}`

            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },
}
