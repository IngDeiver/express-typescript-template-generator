import {
  NextFunction, Request, Response, Router,
} from 'express';
import { ResourceExampleControler } from '../controller';

const router = Router();

router.get('/', (req: Request, res: Response, x: NextFunction) => ResourceExampleControler.list(req, res, x));
export default router;
