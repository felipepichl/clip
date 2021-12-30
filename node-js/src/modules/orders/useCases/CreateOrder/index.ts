import { OrderRepository } from 'modules/orders/repositories/implementations/OrdersRepository';

import { CreateOrderController } from './CreateOrderController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const orderRepository = OrderRepository.getIntance();

const createOrderUseCase = new CreateOrderUseCase(orderRepository);

const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
