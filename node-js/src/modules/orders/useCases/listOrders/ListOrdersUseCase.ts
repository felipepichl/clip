import { Order } from 'modules/orders/model/Order';

import { IOrderRepository } from '../../repositories/IOrderRepository';

class ListOrdersUseCase {
  constructor(private ordersRepository: IOrderRepository) {}

  execute(): Order[] {
    const orders = this.ordersRepository.list();

    return orders;
  }
}

export { ListOrdersUseCase };
