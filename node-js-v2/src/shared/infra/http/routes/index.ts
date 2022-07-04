import { authenticateRoutes } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { usersRouter } from '@modules/accounts/infra/http/routes/users.routes';
import { issuesRouter } from '@modules/issues/routes/issues.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);
router.use(authenticateRoutes);

router.use('/issues', issuesRouter);

export { router };
