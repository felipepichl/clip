import { Router } from 'express';

import { createOrderController } from '../modules/orders/useCases/CreateOrder';

const ordersRouter = Router();

ordersRouter.post('/', (request, response) => {
  return createOrderController.handle(request, response);
});

ordersRouter.get('/', (request, response) => {
  // const orders = repository.list();
  // return response.json({ orders });
});

export { ordersRouter };
