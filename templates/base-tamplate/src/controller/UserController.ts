/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { IUser } from '../interfaces';
import { User } from '../models';
import { HttpException } from '../exceptions';
import { UserService } from '../services';
import bcrypt from 'bcrypt'
/**
 *
 * The user controller
 * @category Controllers
 * @class UserController
 */
class UserController {
  /**
   *
   * List all users
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of users
   * @memberof UserController
   */
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users: Array<IUser> = await UserService.list();
      res.json(users);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * create a new user
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A user creted
   * @memberof UserController
   */
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { username, email, password } = req.body;

      // Encrypt password
      password = bcrypt.hashSync(password, 10)

      const user:IUser = new User({ username, email, password });
      const userSaved: IUser = await UserService.create(user);
      res.json(userSaved);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Get user by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of users
   * @memberof UserController
   */
  public static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user: IUser | null = await UserService.getById(id);
      if (!user) throw new HttpException(404, 'User not found');
      res.json(user);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Remove user by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of userS
   * @memberof UserController
   */
  public static async removeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user: IUser | null = await UserService
        .removeById(id);
      if (!user) throw new HttpException(404, 'User not found');
      res.json(user);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Update user by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of userS
   * @memberof UserController
   */
  public static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      const userUpdated: IUser | null = await UserService
        .updateById(id, { username, email, password});
      if (!userUpdated) throw new HttpException(404, 'User not found');
      res.json(userUpdated);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

}
export default UserController;
