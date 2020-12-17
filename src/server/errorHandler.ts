import { Request, Response, NextFunction } from 'express';

export class HttpException extends Error {
    public status: number

    public message: string

    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
}

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
