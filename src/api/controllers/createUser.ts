import { NextFunction, Request, Response } from "express"
import { CreateUser } from "../services/CreateUser"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body

    try {
        const { user, token } = await CreateUser.execute({
            name,
            email,
            password,
        })

        res.status(201).json({ user, token })
    } catch (error) {
        next(error)
    }
}
