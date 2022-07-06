import { ICreateIssueDTO } from '@modules/issues/dtos/ICreateIssueDTO';
import { Issue } from '@modules/issues/infra/typeorm/entities/Issue';

interface IIssuesRepository {
  create(data: ICreateIssueDTO): Promise<void>;
  list(): Promise<Issue[]>;
}

export { IIssuesRepository };
