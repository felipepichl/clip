import { ICreateIssueDTO } from '../../dtos/ICreateIssueDTO';
import { Issue } from '../../infra/typeorm/entities/Issue';
import { IIssuesRepository } from '../IIssuesRepository';

class IssuesRepositoryInMemory implements IIssuesRepository {
  private issues: Issue[] = [];

  async create(data: ICreateIssueDTO): Promise<void> {
    const issues = new Issue();

    Object.assign(issues, data);

    this.issues.push(issues);
  }
  async list(): Promise<Issue[]> {
    return this.issues;
  }
}

export { IssuesRepositoryInMemory };
