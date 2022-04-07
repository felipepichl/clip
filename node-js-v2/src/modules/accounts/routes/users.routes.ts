import { Router } from 'express';

import { UsersRepository } from '../repositories/implementations/UsersRepository';
import { CreateUsersServices } from '../services/CreateUsersServices';

const usersRouter = Router();

usersRouter.post('', (request, response) => {
  const { name, email, password } = request.body;

  const services = new CreateUsersServices(new UsersRepository());

  services.execute({
    name,
    email,
    password,
  });

  return response.status(201).send();
});

export { usersRouter };
