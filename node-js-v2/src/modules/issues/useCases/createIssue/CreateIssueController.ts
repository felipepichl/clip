import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIssueUseCase } from './CreateIssueUseCase';

class CreateIssueController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, latitude, longitude } = request.body;

    const cordinates = {
      latitude,
      longitude,
    };

    const createIssueUseCase = container.resolve(CreateIssueUseCase);

    await createIssueUseCase.execute({ description, cordinates });

    return response.status(201).send();
  }
}

export { CreateIssueController };
