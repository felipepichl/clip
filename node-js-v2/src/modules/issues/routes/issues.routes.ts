import { Router } from 'express';

import { createIssueController } from '../useCases/createIssue';

const issuesRoutes = Router();

issuesRoutes.post('', (request, response) => {
  return createIssueController.handle(request, response);
});

issuesRoutes.get('', (request, response) => {
  return response.json({ message: 'ToDo' });
});

export { issuesRoutes };
