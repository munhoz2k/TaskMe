import { NextFunction, Request, Response } from "express";
import { CreateUser } from "../services/CreateUser";

export default async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  try {
    const { user, token } = await CreateUser.execute(data);

    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};
