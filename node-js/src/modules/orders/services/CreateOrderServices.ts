import { OrderRepository } from '../repositories/OrdersRepository';

interface IRequest {
  budget: number;
}

class CreateOrderServices {
  constructor(private orderRepository: OrderRepository) {}

  public execute({ budget }: IRequest): void {
    const budgetAlreadyExists = this.orderRepository.findByBudget(budget);

    if (budgetAlreadyExists) {
      throw new Error('Budget already exists');
    }

    this.orderRepository.create({
      budget,
    });
  }
}

export { CreateOrderServices };
