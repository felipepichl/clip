import { Router } from 'express';

import { OrderRepository } from '../repositories/OrdersRepository';

const ordersRouter = Router();
const repository = new OrderRepository();

ordersRouter.post('/', (request, response) => {
  const { budget } = request.body();

  const budgetAlreadyExists = repository.findByBudget(budget);

  if (budgetAlreadyExists) {
    return response.status(400).json({ error: 'Budget already exists' });
  }

  repository.create({
    budget,
  });

  return response.status(201).send();
});

ordersRouter.get('/', (request, response) => {
  const orders = repository.list();

  return response.json({ orders });
});

export { ordersRouter };
