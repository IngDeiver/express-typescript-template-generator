import {
  NextFunction, Request, Response, Router,
} from 'express';
import { ExampleDTO } from '../dtos';
import { ResourceExampleControler } from '../controller';
import { validationMiddleware } from '../middlewares';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.list(req, res, next));
router.get('/:id', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.getById(req, res, next));
router.post('/', validationMiddleware(ExampleDTO, 'body'), (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.create(req, res, next));
router.put('/:id', validationMiddleware(ExampleDTO, 'body', true), (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.updateById(req, res, next));
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler.removeById(req, res, next));
export default router;
