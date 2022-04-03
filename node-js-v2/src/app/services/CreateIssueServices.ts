import { IssuesRepository } from 'app/repositories/IssuesRepository';

interface IRequest {
  description: string;
  cordinates: {
    latitude: number;
    longitude: number;
  };
}

class CreateIssueServices {
  constructor(private issuesRepository: IssuesRepository) {}

  execute({ description, cordinates }: IRequest): void {
    this.issuesRepository.create({
      description,
      cordinates,
    });
  }
}

export { CreateIssueServices };
