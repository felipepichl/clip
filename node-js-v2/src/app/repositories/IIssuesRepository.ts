import { ICreateIssueDTO } from '../dtos/ICreateIssueDTO';
import { Issue } from '../entities/Issue';

interface IIssuesRepository {
  create(data: ICreateIssueDTO): void;
  list(): Issue[];
}

export { IIssuesRepository };
