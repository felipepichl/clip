import { issuesRoutes } from '@modules/issues/routes/issues.routes';
import { Router } from 'express';

import { sessionRouter } from '../app/routes/session.routes';
import { createUserRouter } from '../app/routes/user.routes';

const router = Router();

router.use('/users', createUserRouter);
router.use('/session', sessionRouter);

issuesRoutes.use('issues', issuesRoutes);

export default router;
