import { Request, Response, NextFunction } from "express"
import AuthenticateUser from "../services/AuthenticateUser"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    try {
        const { user, token } = await AuthenticateUser(email, password)

        res.status(200).json({ user, token })
    } catch (error) {
        next(error)
    }
}
