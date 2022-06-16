import { Router } from 'express';

import { CreateIssueController } from '../useCases/createIssue/CreateIssueController';
import listIssuesController from '../useCases/listIssues';

const issuesRoutes = Router();

const createIssueController = new CreateIssueController();

issuesRoutes.post('/', createIssueController.handle);

issuesRoutes.get('/', (request, response) => {
  return listIssuesController().handle(request, response);
});

export { issuesRoutes };
