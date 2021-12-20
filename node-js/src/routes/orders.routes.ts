import { Router } from 'express';

import { OrderRepository } from '../repositories/OrdersRepository';
import { CreateOrderServices } from '../services/CreateOrderServices';

const ordersRouter = Router();
const repository = new OrderRepository();

ordersRouter.post('/', (request, response) => {
  const { budget } = request.body();

  const service = new CreateOrderServices(repository);

  service.execute({
    budget,
  });

  return response.status(201).send();
});

ordersRouter.get('/', (request, response) => {
  const orders = repository.list();

  return response.json({ orders });
});

export { ordersRouter };
