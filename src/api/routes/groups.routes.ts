import { Router } from "express"

import createGroup from "../controllers/createGroup"
import deleteGroup from "../controllers/deleteGroup"
import getAllGroups from "../controllers/getAllGroups"
import updateGroupName from "../controllers/updateGroupName"
import ensureAuthenticated from "../middleware/ensureAuthenticated"

const router = Router()

router.get("/", ensureAuthenticated, getAllGroups)
router.post("/:groupName", ensureAuthenticated, createGroup)
router.put("/:actualGroupName", ensureAuthenticated, updateGroupName)
router.delete("/:groupName", ensureAuthenticated, deleteGroup)

export { router }
