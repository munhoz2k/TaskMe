//import { NextFunction, Request, Response } from "express";
import { app } from "./app";
import { router } from './routes'

app.use(router)

app.listen((3000), () => console.log('Server Up'))