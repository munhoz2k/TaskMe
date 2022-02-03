import { Request, Response, Router } from 'express'

import createTask from '../controllers/createTask'


const router = Router()

router.get('/', )
router.post('/', createTask)

export { router }