import { Router } from 'express';

import { OrderRepository } from '../repositories/OrdersRepository';

const ordersRouter = Router();

ordersRouter.post('/', (request, response) => {
  const { budget } = request.body();

  const repository = new OrderRepository();

  const order = repository.create({
    budget,
    created_at: new Date(),
  });

  return response.status(201).send({ order });
});

export { ordersRouter };
