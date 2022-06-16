import { IssuesRepository } from '../../repositories/implementations/IssuesRepository';
import { ListIssuesController } from './ListIssuesController';
import { ListIssuesUseCase } from './ListIssuesUseCase';

export default (): ListIssuesController => {
  const issuesRepository = new IssuesRepository();

  const listIssuesUseCase = new ListIssuesUseCase(issuesRepository);
  const listIssuesController = new ListIssuesController(listIssuesUseCase);

  return listIssuesController;
};
