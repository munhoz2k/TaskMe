import { Router } from "express"

import createTaskOnGroup from "../controllers/createTaskOnGroup"
import completeTask from "../controllers/completeTask"
import removeTask from "../controllers/removeTask"
import ensureAuthenticated from "../middleware/ensureAuthenticated"
import uncheckTask from "../controllers/uncheckTask"

const router = Router()

router.get("/check/:taskId", ensureAuthenticated, completeTask)
router.get("/uncheck/:taskId", ensureAuthenticated, uncheckTask)
router.post("/:groupName", ensureAuthenticated, createTaskOnGroup)
router.delete("/:taskId", ensureAuthenticated, removeTask)

export { router }
