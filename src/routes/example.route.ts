import {
  NextFunction, Request, Response, Router,
} from 'express';
import { ResourceExampleControler } from '../controller';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.list(req, res, next));
router.get('/:id', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.getById(req, res, next));
router.post('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.create(req, res, next));
router.put('/:id', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.updateById(req, res, next));
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.removeById(req, res, next));
export default router;
