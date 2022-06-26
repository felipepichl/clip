import { Router } from 'express';

import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '../useCases/uploadUserAvatar/UploadUserAvatarController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRouter.post('', createUserController.handle);

usersRouter.patch('/avatar', uploadUserAvatarController.handle);

export { usersRouter };
