import { IssuesRepository } from '../../repositories/implementations/IssuesRepository';
import { CreateIssueController } from './CreateIssueController';
import { CreateIssueUseCase } from './CreateIssueUseCase';

const issuesRepository = new IssuesRepository();

const createIssueUseCase = new CreateIssueUseCase(issuesRepository);
const createIssueController = new CreateIssueController(createIssueUseCase);

export { createIssueController };
