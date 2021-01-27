import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import {
  NextFunction, RequestHandler, Response, Request,
} from 'express';
import { HttpException } from '../exceptions';

/**
 *
 * Valid the body of DTO
 * @category Middlewares
 * @param {*} dto - the dto to validate
 * @param {('body' | 'query' | 'params')} value - the prperty to get from the request
 * @param {boolean} [skipMissingProperties=false] - true if should accept propertys unknow
 * @return {*}  {RequestHandler}
 */
const validationMiddleware = (
  dto: any,
  skipMissingProperties = false, // true when need update
  value: 'body' | 'query' | 'params' = 'body',
): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  // plainToClass is a mapping
  validate(plainToClass(dto, req[value]), {
    validationError: { target: false },
    skipMissingProperties,
    whitelist: true,
    forbidUnknownValues: true,
  }).then((errors: ValidationError[]) => {
    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) => {
          if (error.constraints) return error.constraints.value;
          return `${error.property}: validation error`;
        })
        .join(', ');
      next(new HttpException(400, message));
    } else {
      next();
    }
  });
};

export default validationMiddleware;
