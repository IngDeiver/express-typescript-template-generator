/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { IResourceExample } from '../interfaces';
import { ResourceExample } from '../models';
import { HttpException } from '../exceptions';
import { ResourceService } from '../services';

/**
 *
 * The controller of resources
 * @category Controllers
 * @class ResourceExampleController
 */
class ResourceExampleController {
  /**
   *
   * List all resources
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of resources
   * @memberof ResourceExampleController
   */
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const resources: Array<IResourceExample> = await ResourceService.list();
      res.json(resources);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * create a new resource
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A resource creted
   * @memberof ResourceExampleController
   */
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { property } = req.body;
      const resource:IResourceExample = new ResourceExample({ property });
      const resourceSaved: IResourceExample = await ResourceService.create(resource);
      res.json(resourceSaved);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Get resource by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of resources
   * @memberof ResourceExampleController
   */
  public static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const resource: IResourceExample | null = await ResourceService.getById(id);
      if (!resource) throw new HttpException(404, 'Resource not found');
      res.json(resource);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Remove tasresource by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of resourceS
   * @memberof ResourceExampleController
   */
  public static async removeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const resource: IResourceExample | null = await ResourceService
        .removeById(id);
      if (!resource) throw new HttpException(404, 'Resource not found');
      res.json(resource);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

  /**
   *
   * Update resource by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of resourceS
   * @memberof ResourceExampleController
   */
  public static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { property } = req.body;
      const resourceUpdated: IResourceExample | null = await ResourceService
        .updateById(id, { property });
      if (!resourceUpdated) throw new HttpException(404, 'resource not found');
      res.json(resourceUpdated);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }
}
export default ResourceExampleController;
