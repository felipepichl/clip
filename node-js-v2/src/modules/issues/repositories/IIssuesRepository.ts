import { ICreateIssueDTO } from '../dtos/ICreateIssueDTO';
import { Issue } from '../infra/typeorm/entities/Issue';

interface IIssuesRepository {
  create(data: ICreateIssueDTO): Promise<void>;
  list(): Promise<Issue[]>;
}

export { IIssuesRepository };
