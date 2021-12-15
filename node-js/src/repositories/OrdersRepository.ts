import { v4 as uuidV4 } from 'uuid';

import { Order } from '../model/Order';

type OrderDTO = {
  id?: string;

  budget: number;

  created_at: Date;
};

class OrderRepository {
  private orders: Order[] = [];

  public async create(orderData: OrderDTO): Promise<Order> {
    const order = new Order();

    Object.assign(order, { id: uuidV4() }, orderData);

    this.orders.push(order);

    return order;
  }
}

export { OrderRepository };
