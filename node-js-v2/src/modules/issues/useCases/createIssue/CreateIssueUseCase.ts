import { IIssuesRepository } from '../../repositories/IIssuesRepository';

interface IRequest {
  description: string;
  cordinates: {
    latitude: number;
    longitude: number;
  };
}

class CreateIssueUseCase {
  constructor(private issuesRepository: IIssuesRepository) {}

  async execute({ description, cordinates }: IRequest): Promise<void> {
    await this.issuesRepository.create({
      description,
      cordinates,
    });
  }
}

export { CreateIssueUseCase };
