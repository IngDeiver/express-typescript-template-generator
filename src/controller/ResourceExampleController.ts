/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { IResourceExample } from 'interfaces';
import { HttpException } from '../exceptions';
import { ResourceExampleRepository } from '../repository';

class TaskControler {
  // eslint-disable-next-line no-undef
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks: Array<IResourceExample> = await ResourceExampleRepository.list();
      res.json(tasks);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }
}
export default TaskControler;
