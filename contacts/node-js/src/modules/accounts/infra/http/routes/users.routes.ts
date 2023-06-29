import { Router } from 'express'

import { CreateUserController } from '@modules/accounts/infra/http/controllers/createUser/CreateUserController'
import { ListUserByCPFController } from '../controllers/listUserByCPF/ListUserByCPFController'

const usersRouter = Router()

const createUserController = new CreateUserController()
const listUserByCPFController = new ListUserByCPFController()

usersRouter.post('', createUserController.handle)
usersRouter.get('/:cpf', listUserByCPFController.handle)

export { usersRouter }
