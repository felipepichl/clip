import { Router } from 'express';

import createIssueController from '../useCases/createIssue';
import listIssuesController from '../useCases/listIssues';

const issuesRoutes = Router();

issuesRoutes.post('/', (request, response) => {
  return createIssueController().handle(request, response);
});

issuesRoutes.get('/', (request, response) => {
  return listIssuesController().handle(request, response);
});

export { issuesRoutes };
