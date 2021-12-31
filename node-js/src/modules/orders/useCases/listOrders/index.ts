import { OrderRepository } from '../../repositories/implementations/OrdersRepository';
import { ListOrdersController } from './ListOrdersController';
import { ListOrdersUseCase } from './ListOrdersUseCase';

const orderRepository = OrderRepository.getIntance();

const listOrdersUseCase = new ListOrdersUseCase(orderRepository);

const listOrdersController = new ListOrdersController(listOrdersUseCase);

export { listOrdersController };
