import { NextFunction, Request, Response } from "express"
import ChangeAvatar from "../services/ChangeAvatar"

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
    const filename = req.file.filename

    try {
        await ChangeAvatar(id, filename)

        res.status(200).send("Avatar uploaded")
    } catch (error) {
        next(error)
    }
}
