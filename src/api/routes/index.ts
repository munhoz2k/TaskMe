import { Router } from "express";
import { router as taskRoutes } from "./tasks.routes";

const router = Router()

router.use('/tasks', taskRoutes)

export { router }