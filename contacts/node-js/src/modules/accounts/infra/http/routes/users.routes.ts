import { CreateUserController } from '@modules/accounts/infra/http/controllers/createUser/CreateUserController'
import { Router } from 'express'

const usersRouter = Router()

const createUserController = new CreateUserController()

usersRouter.post('', createUserController.handle)

export { usersRouter }
