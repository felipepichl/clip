import { ICreateOrderDTO } from '../dtos/CreateOrderDTO';
import { Order } from '../model/Order';

interface IOrderRepository {
  create(data: ICreateOrderDTO): void;
  list(): Order[];
  findByBudget(budget: number): Order;
}

export { IOrderRepository };
