import { v4 as uuid } from 'uuid';

import { ICreateIssueDTO } from '../dtos/ICreateIssueDTO';
import { Issue } from '../entities/Issue';

class IssuesRepository {
  private issues: Issue[] = [];

  public create({
    id = uuid(),
    description,
    latitude,
    longitude,
    created_at = new Date(),
  }: ICreateIssueDTO): Issue {
    const issue = new Issue();

    Object.assign(issue, {
      id,
      description,
      latitude,
      longitude,
      created_at,
    });

    this.issues.push(issue);

    return issue;
  }
}

export { IssuesRepository };
