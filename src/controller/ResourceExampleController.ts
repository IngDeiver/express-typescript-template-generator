/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { IResourceExample } from 'interfaces';
import { HttpException } from '../exceptions';
import { ResourceExampleRepository } from '../repository';
import { ResourceExample } from '../models';

class TaskControler {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const resource: Array<IResourceExample> = await ResourceExampleRepository.list();
      res.json(resource);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { property } = req.body;
      if (!property) return next(new HttpException(500, 'The porperty is required'));
      const resource:IResourceExample = new ResourceExample({ property });
      const resourceSaved: IResourceExample = await ResourceExampleRepository.create(resource);
      res.json(resourceSaved);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }
}
export default TaskControler;
