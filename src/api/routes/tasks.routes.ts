import { Request, Response, Router } from 'express'

import createTask from '../controllers/createTask'

import { taskFinder } from '../controllers/taskFinder'


const router = Router()

router.get('/', taskFinder.all)
router.post('/', createTask)

router.get('/:id', taskFinder.byId)

export { router }