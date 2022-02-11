import { NextFunction, Request, Response } from "express"
import GetAllUserInfos from "../services/GetAllUserInfos";

export default async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.user

    try {
        const infos = await GetAllUserInfos(id)

        res.status(200).json(infos)
    } catch (error) {
        
    }
}