import { Request, Response } from 'express';

import { CreateIssueUseCase } from './CreateIssueUseCase';

class CreateIssueController {
  constructor(private createIssueUseCase: CreateIssueUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, latitude, longitude } = request.body;

    const cordinates = {
      latitude,
      longitude,
    };

    await this.createIssueUseCase.execute({ description, cordinates });

    return response.status(201).send();
  }
}

export { CreateIssueController };
