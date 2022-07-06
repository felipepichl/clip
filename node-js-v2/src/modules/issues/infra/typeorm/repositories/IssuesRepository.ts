import { Repository, getRepository } from 'typeorm';

import { ICreateIssueDTO } from '@modules/issues/dtos/ICreateIssueDTO';
import { Issue } from '@modules/issues/infra/typeorm/entities/Issue';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';

class IssuesRepository implements IIssuesRepository {
  private issues: Repository<Issue>;

  constructor() {
    this.issues = getRepository(Issue);
  }

  public async create({
    description,
    cordinates,
  }: ICreateIssueDTO): Promise<void> {
    const { latitude, longitude } = cordinates;

    const issue = this.issues.create({
      description,
      latitude,
      longitude,
    });

    console.log(issue);

    // await this.issues.save(issue);
  }

  public async list(): Promise<Issue[]> {
    const issues = await this.issues.find();

    return issues;
  }
}

export { IssuesRepository };
