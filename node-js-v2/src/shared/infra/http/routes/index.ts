import { usersRouter } from '@modules/accounts/routes/users.routes';
import { issuesRouter } from '@modules/issues/routes/issues.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);

router.use('/issues', issuesRouter);

export { router };
