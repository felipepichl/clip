import { Repository, getRepository } from 'typeorm';

import { ICreateIssueDTO } from '../../dtos/ICreateIssueDTO';
import { Issue } from '../../entities/Issue';
import { IIssuesRepository } from '../IIssuesRepository';

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

    await this.issues.save(issue);
  }

  public async list(): Promise<Issue[]> {
    const issues = await this.issues.find();

    return issues;
  }
}

export { IssuesRepository };
