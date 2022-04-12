import { Request, Response } from 'express';

import { ListIssuesUseCase } from './ListIssuesUseCase';

class ListIssuesController {
  constructor(private listIssuesUseCase: ListIssuesUseCase) {}

  handle(request: Request, response: Response): Response {
    const issues = this.listIssuesUseCase.execute();

    return response.json(issues);
  }
}

export { ListIssuesController };
