import { Request, Response } from 'express';

import { ImportOrderUseCase } from './ImportOrderUseCase';

class ImportOrderController {
  constructor(private importOrderUseCase: ImportOrderUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importOrderUseCase.execute({ file });

    return response.send();
  }
}

export { ImportOrderController };
