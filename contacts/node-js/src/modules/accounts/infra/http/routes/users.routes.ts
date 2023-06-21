import { uploadConfig } from '@config/upload';
import { CreateUserController } from '@modules/accounts/infra/http/controllers/createUser/CreateUserController';
import { Router } from 'express';
import multer from 'multer';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();

usersRouter.post('', createUserController.handle);

usersRouter.patch('/avatar', uploadAvatar.single('avatar'));

export { usersRouter };
