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

  execute({ description, cordinates }: IRequest): void {
    this.issuesRepository.create({
      description,
      cordinates,
    });
  }
}

export { CreateIssueUseCase };
