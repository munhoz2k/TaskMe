import { Router } from 'express'
import { controller as taskController } from '../controllers/taskController'

const router = Router()

router.post('/', taskController.create)

export { router }