import { Request, Response, NextFunction } from 'express';
import HttpException from './httpException';

/**
 *
 * The middleware for catch they erros into application
 * @category Exceptions
 * @param {HttpException} err - The error (if exist)
 * @param {Request} req - The request
 * @param {Response} res - The response
 * @param {NextFunction} cb - The next function (if pass)
 * @return {void}  void
 */
const errorHandler = (err: HttpException, req: Request, res: Response, cb: NextFunction): void => {
  if (res.headersSent) {
    return cb(err);
  }

  res.status(err.status).json({
    error: {
      message: err.message,
      status: err.status,
      stack: err.stack,
    },
  });
};

export default errorHandler;
