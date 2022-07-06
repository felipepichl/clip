import { injectable, inject } from 'tsyringe';

import { Issue } from '@modules/issues/infra/typeorm/entities/Issue';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';

@injectable()
class ListIssuesUseCase {
  constructor(
    @inject('IssuesRepository')
    private issuesRepository: IIssuesRepository,
  ) {}

  async execute(): Promise<Issue[]> {
    const issues = await this.issuesRepository.list();

    return issues;
  }
}

export { ListIssuesUseCase };
