import { Router } from 'express'
import UsersController from '../app/controllers/UsersController'
import CommentsController from '../app/controllers/CommentsController'

const router = Router()

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.store)

router.get('/comments', CommentsController.index)
router.get('/comments/:id', CommentsController.show)
router.post('/comments', CommentsController.store)

export default router
