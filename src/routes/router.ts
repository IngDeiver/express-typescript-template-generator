import {
  NextFunction, Request, Response, Router,
} from 'express';
import { HttpException } from '../server/errorHandler';

const router = Router();
router.get('/api', (req: Request, res: Response, next: NextFunction) => next(new HttpException(500, 'Error hanlder works!')));

export default router;
