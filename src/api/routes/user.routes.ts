import { Router } from "express"
import { multerUpload as multer } from "../../configs/multer"

import login from "../controllers/login"
import createUser from "../controllers/createUser"
import createUserWithProvider from "../controllers/createUserWithProvider"
import uploadAvatar from "../controllers/uploadAvatar"

import { userFinder } from "../controllers/userFinder"
import ensureAuthenticated from "../middleware/ensureAuthenticated"

const router = Router()

router.get("/", ensureAuthenticated, userFinder.byToken)

router.post("/", createUser)
router.post("/:provider", createUserWithProvider)
router.post("/login", login)
router.post("/new-avatar", multer.single("file"), uploadAvatar)

export { router }
