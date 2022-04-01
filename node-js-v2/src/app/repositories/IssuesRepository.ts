import { AppError } from 'app/error/AppError';

import { ICreateIssueDTO } from '../dtos/ICreateIssueDTO';
import { Issue } from '../entities/Issue';

class IssuesRepository {
  private issues: Issue[];

  constructor() {
    this.issues = [];
  }

  public create({ description, cordinates }: ICreateIssueDTO): void {
    const issue = new Issue();

    const cordinateExists = this.issues.some(
      issue =>
        issue.latitude === cordinates.latitude &&
        issue.longitude === cordinates.longitude,
    );

    if (!cordinateExists) {
      throw new AppError('Cordinates already exists', 400);
    }

    Object.assign(issue, {
      description,
      cordinates,
    });

    this.issues.push(issue);
  }

  public list(): Issue[] {
    return this.issues;
  }
}

export { IssuesRepository };
