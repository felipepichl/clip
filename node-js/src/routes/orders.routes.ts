import { Router } from 'express';

import { OrderRepository } from '../repositories/OrdersRepository';

const ordersRouter = Router();

ordersRouter.post('/', (request, response) => {
  const { budget } = request.body();

  const repository = new OrderRepository();

  repository.create({
    budget,
  });

  return response.status(201).send();
});

export { ordersRouter };
