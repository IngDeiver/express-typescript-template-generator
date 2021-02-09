import {
  NextFunction, Request, Response, Router,
} from 'express';
import { IRoute } from '../interfaces';
import { UserControler } from '../controller';
import { isDefinedParamMiddleware, validationMiddleware } from '../middlewares';
import { UserDTO } from '../dtos';


/**
 *
 * Managament the routes of user
 * @category Routes
 * @class UserRouter
 * @implements {IRoute}
 */
class UserRouter implements IRoute {
  public router = Router();

  public pathIdParam = '/:id';

  constructor() {
    this.createRoutes();
  }

  createRoutes(): void {

    // get user by Id
    this.router.get(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .getById(req, res, next),
    );

    // list users
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => UserControler
      .list(req, res, next));

    // Save user
    this.router.post('/',
      validationMiddleware(UserDTO),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .create(req, res, next),
    );

    // Update user
    this.router.put(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      validationMiddleware(UserDTO, true),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .updateById(req, res, next),
    );

    // Remove user
    this.router.delete(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .removeById(req, res, next),
    );
  }
}
export default new UserRouter().router;
