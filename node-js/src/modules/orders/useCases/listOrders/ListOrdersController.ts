import { Request, Response } from 'express';

import { ListOrdersUseCase } from './ListOrdersUseCase';

class ListOrdersController {
  constructor(private listOrdersUseCase: ListOrdersUseCase) {}

  handle(request: Request, response: Response): Response {
    const orders = this.listOrdersUseCase.execute();

    return response.json({ orders });
  }
}

export { ListOrdersController };
