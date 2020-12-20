import { Request, Response, NextFunction } from 'express';
import HttpException from './httpException';

const errorHandler = (err: HttpException, req: Request, res: Response, cb: NextFunction): void => {
  if (res.headersSent) {
    return cb(err);
  }

  res.status(500).json({
    error: {
      message: err.message,
      status: err.status,
      stack: err.stack,
    },
  });
};

export default errorHandler;
