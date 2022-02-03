import { Router } from "express";
import { multerUpload as multer } from "../../configs/multer";

import login from "../controllers/login";
import createUser from "../controllers/createUser";
import uploadAvatar from "../controllers/uploadAvatar";

import { userFinder } from "../controllers/userFinder";


const router = Router()

router.get('/', userFinder.all)
router.post('/', createUser)

router.post('/login', login)

router.post('/new-avatar', multer.single('file'), uploadAvatar)

export { router }