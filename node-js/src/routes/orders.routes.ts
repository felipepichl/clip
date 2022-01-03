import { Router } from 'express';
import multer from 'multer';

import { createOrderController } from '../modules/orders/useCases/CreateOrder';
import { importOrderController } from '../modules/orders/useCases/ImportOrder';
import { listOrdersController } from '../modules/orders/useCases/ListOrders';

const ordersRouter = Router();

const upload = multer({
  dest: './tmp',
});

ordersRouter.post('/', (request, response) => {
  return createOrderController.handle(request, response);
});

ordersRouter.get('/', (request, response) => {
  return listOrdersController.handle(request, response);
});

ordersRouter.post('/import', upload.single('file'), (request, response) => {
  return importOrderController.handle(request, response);
});

export { ordersRouter };
