import { IssuesRepository } from '../../repositories/implementations/IssuesRepository';
import { ListIssuesController } from './ListIssuesController';
import { ListIssuesUseCase } from './ListIssuesUseCase';

const issuesRepository = new IssuesRepository();

const listIssuesUseCase = new ListIssuesUseCase(issuesRepository);
const listIssuesController = new ListIssuesController(listIssuesUseCase);

export { listIssuesController };
