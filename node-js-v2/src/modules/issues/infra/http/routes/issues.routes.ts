import { Router } from 'express';

import { CreateIssueController } from '@modules/issues/useCases/createIssue/CreateIssueController';
import { ListIssuesController } from '@modules/issues/useCases/listIssues/ListIssuesController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const issuesRouter = Router();

const createIssueController = new CreateIssueController();
const listIssuesController = new ListIssuesController();

issuesRouter.use(ensureAuthenticated);

issuesRouter.post('/', createIssueController.handle);

issuesRouter.get('/', listIssuesController.handle);

export { issuesRouter };
