import { usersRouter } from '@modules/accounts/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);

export { router };
