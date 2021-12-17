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

ordersRouter.get('/', (request, response) => {
  const repository = new OrderRepository();

  const orders = repository.list();

  return response.json({ orders });
});

export { ordersRouter };
