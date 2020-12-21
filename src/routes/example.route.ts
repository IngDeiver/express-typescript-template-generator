import {
  NextFunction, Request, Response, Router,
} from 'express';
import { ResourceExampleControler } from '../controller';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.list(req, res, next));
router.post('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.create(req, res, next));
export default router;
