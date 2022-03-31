import { ICreateIssueDTO } from '../dtos/ICreateIssueDTO';
import { Issue } from '../entities/Issue';

class IssuesRepository {
  private issues: Issue[];

  constructor() {
    this.issues = [];
  }

  public create({ description, latitude, longitude }: ICreateIssueDTO): void {
    const issue = new Issue();

    Object.assign(issue, {
      description,
      latitude,
      longitude,
    });

    this.issues.push(issue);
  }

  public list(): Issue[] {
    return this.issues;
  }
}

export { IssuesRepository };
