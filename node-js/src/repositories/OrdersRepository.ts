import { v4 as uuidV4 } from 'uuid';

import { ICreateOrderDTO } from '../dtos/CreateOrderDTO';
import { Order } from '../model/Order';

class OrderRepository {
  private orders: Order[] = [];

  public async create({ budget }: ICreateOrderDTO): Promise<Order> {
    const order = new Order();

    Object.assign(order, { id: uuidV4() }, { budget, created_at: new Date() });

    this.orders.push(order);

    return order;
  }
}

export { OrderRepository };
