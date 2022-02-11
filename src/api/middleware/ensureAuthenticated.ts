import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import AppError from "../errors/AppError"

interface TokenPayload {
    id: string
}

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("JWT token is missing!", 400)
    }

    const [, token] = authHeader.split(" ")

    try {
        const data = verify(token, process.env.SERVER_PASSWORD)

        const { id } = data as TokenPayload
        req.user = { id: id }

        return next()
    } catch {
        throw new AppError("Invalid JWT token!", 400)
    }
}
