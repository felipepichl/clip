import { Router } from 'express';

import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { CreateIssueController } from '@modules/issues/useCases/createIssue/CreateIssueController';
import { ListIssuesController } from '@modules/issues/useCases/listIssues/ListIssuesController';

const issuesRouter = Router();

const createIssueController = new CreateIssueController();
const listIssuesController = new ListIssuesController();

issuesRouter.use(ensureAuthenticated);

issuesRouter.post('/', createIssueController.handle);

issuesRouter.get('/', listIssuesController.handle);

export { issuesRouter };
