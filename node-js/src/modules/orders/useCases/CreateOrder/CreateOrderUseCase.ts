import { IOrderRepository } from '../../repositories/IOrderRepository';

interface IRequest {
  budget: number;
}

class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

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

export { CreateOrderUseCase };
