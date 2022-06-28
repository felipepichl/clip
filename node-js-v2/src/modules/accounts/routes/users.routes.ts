import uploadConfig from '@config/upload';
import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '../infra/http/middlewares/ensureAuthenticated';
import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '../useCases/uploadUserAvatar/UploadUserAvatarController';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRouter.post('', createUserController.handle);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle,
);

export { usersRouter };
