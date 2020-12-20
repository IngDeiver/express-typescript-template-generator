import {
  NextFunction, Request, Response, Router,
} from 'express';

const router = Router();
// eslint-disable-next-line no-unused-vars
router.get('/api', (req: Request, res: Response, next: NextFunction) => res.sendStatus(200));

export default router;
