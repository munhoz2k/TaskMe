import { Router } from "express";
import { controller as userController } from "../controllers/userController"
import { multerUpload as multer } from "../../configs/multer";

const router = Router()

router.get('/', userController.findAll)
router.post('/', userController.create)

router.post('/new-avatar', multer.single('file'), userController.uploadNewAvatar)

export { router }