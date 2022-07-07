import { Repository } from 'typeorm';

import { ICreateIssueDTO } from '@modules/issues/dtos/ICreateIssueDTO';
import { Issue } from '@modules/issues/infra/typeorm/entities/Issue';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';
import { AppDataSource } from '@shared/infra/typeorm';

class IssuesRepository implements IIssuesRepository {
  private issues: Repository<Issue>;

  constructor() {
    this.issues = AppDataSource.getRepository(Issue);
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
