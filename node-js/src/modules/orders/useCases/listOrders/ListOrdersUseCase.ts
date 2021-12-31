import { Order } from '../../model/Order';
import { IOrderRepository } from '../../repositories/IOrderRepository';

class ListOrdersUseCase {
  constructor(private ordersRepository: IOrderRepository) {}

  execute(): Order[] {
    const orders = this.ordersRepository.list();

    return orders;
  }
}

export { ListOrdersUseCase };
