import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIssuesUseCase } from './ListIssuesUseCase';

class ListIssuesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIssuesUseCase = container.resolve(ListIssuesUseCase);

    const issues = await listIssuesUseCase.execute();

    return response.json(issues);
  }
}

export { ListIssuesController };
