import { Issue } from '../../entities/Issue';
import { IIssuesRepository } from '../../repositories/IIssuesRepository';

class ListIssuesUseCase {
  constructor(private issuesRepository: IIssuesRepository) {}

  async execute(): Promise<Issue[]> {
    const issues = await this.issuesRepository.list();

    return issues;
  }
}

export { ListIssuesUseCase };
