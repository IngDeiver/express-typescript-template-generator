import { Router } from 'express';
import exampleRouter from './example.route';

const router = Router();
const prefix: string = '/api';

router.use(`${prefix}/example`, exampleRouter);

export default router;
