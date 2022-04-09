import { Request, Response } from 'express';

import { CreateIssueUseCase } from './CreateIssueUseCase';

class CreateIssueController {
  constructor(private createIssueUseCase: CreateIssueUseCase) {}

  handle(request: Request, response: Response): Response {
    const { description, latitude, longitude } = request.body;

    const cordinates = {
      latitude,
      longitude,
    };

    this.createIssueUseCase.execute({ description, cordinates });

    return response.status(201).send();
  }
}

export { CreateIssueController };
