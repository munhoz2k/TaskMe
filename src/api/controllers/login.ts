import { Request, Response, NextFunction } from "express"
import verifyUser from "../auth/verifyUser"

export default (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body
    try {
        const token = verifyUser(email, password)

        res.set('Authorization', password)
    } catch (error) {
        
    }

}