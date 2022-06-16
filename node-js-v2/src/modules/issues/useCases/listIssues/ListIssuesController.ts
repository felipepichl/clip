import { Request, Response } from 'express';

import { ListIssuesUseCase } from './ListIssuesUseCase';

class ListIssuesController {
  constructor(private listIssuesUseCase: ListIssuesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const issues = await this.listIssuesUseCase.execute();

    return response.json(issues);
  }
}

export { ListIssuesController };
