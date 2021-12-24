import { v4 as uuidV4 } from 'uuid';

import { ICreateOrderDTO } from '../dtos/CreateOrderDTO';
import { Order } from '../model/Order';
import { IOrderRepository } from './IOrderRepository';

class OrderRepository implements IOrderRepository {
  private orders: Order[];

  constructor() {
    this.orders = [];
  }

  public create({ budget }: ICreateOrderDTO): void {
    const order = new Order();

    Object.assign(order, { id: uuidV4() }, { budget, created_at: new Date() });

    this.orders.push(order);
  }

  public list(): Order[] {
    return this.orders;
  }

  public findByBudget(budget: number): Order {
    return this.orders.find((order) => order.budget === budget);
  }
}

export { OrderRepository };