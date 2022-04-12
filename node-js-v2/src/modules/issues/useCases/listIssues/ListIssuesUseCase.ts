import { Issue } from '../../entities/Issue';
import { IIssuesRepository } from '../../repositories/IIssuesRepository';

class ListIssuesUseCase {
  constructor(private issuesRepository: IIssuesRepository) {}

  execute(): Issue[] {
    return this.issuesRepository.list();
  }
}

export { ListIssuesUseCase };
