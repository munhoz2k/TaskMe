import { Router } from "express"
import { router as taskRoutes } from "./tasks.routes"
import { router as userRoutes } from "./user.routes"
import { router as groupRouter } from "./groups.routes"

const router = Router()

router.use("/tasks", taskRoutes)
router.use("/groups", groupRouter)
router.use("/users", userRoutes)

export { router }
