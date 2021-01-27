import {
  NextFunction, Request, Response, Router,
} from 'express';
import { IRoute } from '../interfaces';
import { ResourceExampleControler } from '../controller';
import { isDefinedParamMiddleware, validationMiddleware } from '../middlewares';
import { ExampleDTO } from '../dtos';

/**
 *
 * Managament the routes of resource
 * @category Routes
 * @class ExampleRouter
 * @implements {IRoute}
 */
class ExampleRouter implements IRoute {
  public router = Router();

  public pathIdParam = '/:id';

  constructor() {
    this.createRoutes();
  }

  createRoutes(): void {
    this.router.get(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => ResourceExampleControler
        .getById(req, res, next),
    );
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => ResourceExampleControler
      .list(req, res, next));
    this.router.post(
      '/',
      validationMiddleware(ExampleDTO),
      (req: Request, res: Response, next: NextFunction) => ResourceExampleControler
        .create(req, res, next),
    );
    this.router.put(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      validationMiddleware(ExampleDTO, true),
      (req: Request, res: Response, next: NextFunction) => ResourceExampleControler
        .updateById(req, res, next),
    );
    this.router.delete(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => ResourceExampleControler
        .removeById(req, res, next),
    );
  }
}
export default new ExampleRouter().router;
