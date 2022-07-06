import { injectable, inject } from 'tsyringe';

import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';

interface IRequest {
  description: string;
  cordinates: {
    latitude: number;
    longitude: number;
  };
}

@injectable()
class CreateIssueUseCase {
  constructor(
    @inject('IssuesRepository')
    private issuesRepository: IIssuesRepository,
  ) {}

  async execute({ description, cordinates }: IRequest): Promise<void> {
    await this.issuesRepository.create({
      description,
      cordinates,
    });
  }
}

export { CreateIssueUseCase };
