import { Router } from "express"
import { upload } from "../../configs/multer"

import login from "../controllers/login"
import createUser from "../controllers/createUser"
import createUserWithProvider from "../controllers/createUserWithProvider"
import getAllUserInfos from "../controllers/getAllUserInfos"
import uploadAvatar from "../controllers/uploadAvatar"

import ensureAuthenticated from "../middleware/ensureAuthenticated"

const router = Router()

router.post("/login", login)

router.post("/", createUser)
router.post("/provider/:provider", createUserWithProvider)

router.get("/", ensureAuthenticated, getAllUserInfos)

router.post(
    "/new-avatar",
    [upload.single("file"), ensureAuthenticated],
    uploadAvatar
)

export { router }
