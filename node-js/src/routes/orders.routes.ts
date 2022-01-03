import { Router } from 'express';
import multer from 'multer';

import { createOrderController } from '../modules/orders/useCases/CreateOrder';
import { listOrdersController } from '../modules/orders/useCases/listOrders';

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
  const { file } = request;

  console.log(file);

  return response.send();
});

export { ordersRouter };
