import { NextFunction, Request, Response } from "express"
import { CreateUserWithProvider } from "../services/CreateUserWithProvider"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id_token } = req.body
    const { provider } = req.params

    try {
        const data = await CreateUserWithProvider.execute(id_token, provider)

        res.status(201).json({ data })
    } catch (error) {
        next(error)
    }
}
