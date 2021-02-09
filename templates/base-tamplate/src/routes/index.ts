import { Router } from 'express';
import UserRouter from './user.route';

const router = Router();
const prefix: string = '/api';

router.use(`${prefix}/user`, UserRouter);

export default router;
