import { Router } from 'express';

import { issuesRoutes } from '../app/routes/issues.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { createUserRouter } from '../app/routes/user.routes';

const router = Router();

router.use('/users', createUserRouter);
router.use('/session', sessionRouter);

issuesRoutes.use('issues', issuesRoutes);

export default router;
