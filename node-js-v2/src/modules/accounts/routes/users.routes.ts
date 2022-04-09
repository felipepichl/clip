import { Router } from 'express';

import { createUserController } from '../useCases/createUser';

const usersRouter = Router();

usersRouter.post('', (request, response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
