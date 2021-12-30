import { Request, Response } from 'express';

import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  handle(request: Request, response: Response): Response {
    const { budget } = request.body();

    this.createOrderUseCase.execute({
      budget,
    });

    return response.status(201).send();
  }
}

export { CreateOrderController };
