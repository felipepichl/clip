import { Router } from 'express';

import { Order } from '../model/Order';

const ordersRouter = Router();

const orders: Order[] = [];

ordersRouter.post('/', (request, response) => {
  const { budget } = request.body();

  const order = new Order();

  Object.assign(order, {
    budget,
    created_at: new Date(),
  });

  orders.push(order);

  return response.status(201).send({ order });
});

export { ordersRouter };
