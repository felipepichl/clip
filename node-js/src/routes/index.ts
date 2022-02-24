import { Router } from 'express';

import { ordersRouter } from './orders.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/orders', ordersRouter);
router.use('/users', userRoutes);

export { router };
