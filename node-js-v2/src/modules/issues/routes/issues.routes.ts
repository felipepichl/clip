import { Router } from 'express';

import { CreateIssueController } from '../useCases/createIssue/CreateIssueController';
import { ListIssuesController } from '../useCases/listIssues/ListIssuesController';

const issuesRoutes = Router();

const createIssueController = new CreateIssueController();
const listIssuesController = new ListIssuesController();

issuesRoutes.post('/', createIssueController.handle);

issuesRoutes.get('/', listIssuesController.handle);

export { issuesRoutes };
