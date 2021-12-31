import { Router } from 'express';

import { createOrderController } from '../modules/orders/useCases/CreateOrder';
import { listOrdersController } from '../modules/orders/useCases/listOrders';

const ordersRouter = Router();

ordersRouter.post('/', (request, response) => {
  return createOrderController.handle(request, response);
});

ordersRouter.get('/', (request, response) => {
  return listOrdersController.handle(request, response);
});

export { ordersRouter };
