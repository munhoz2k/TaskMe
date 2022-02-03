import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  id: string;
}

export default (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new Error('JWT token is missing!');
    }

    const [, token] = authHeader.split(' ');

    try {
    const data = verify(token, process.env.SERVER_PASSWORD);

    console.log("JWT: ", data);


    const { id } = data as TokenPayload;

    req.user = { id: id };

    return next();

    } catch {
    throw new Error('Invalid JWT token!');
    }
}