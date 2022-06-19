import { Router } from 'express';

import { CreateIssueController } from '../useCases/createIssue/CreateIssueController';
import { ListIssuesController } from '../useCases/listIssues/ListIssuesController';

const issuesRouter = Router();

const createIssueController = new CreateIssueController();
const listIssuesController = new ListIssuesController();

issuesRouter.post('/', createIssueController.handle);

issuesRouter.get('/', listIssuesController.handle);

export { issuesRouter };
