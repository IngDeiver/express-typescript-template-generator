import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../routes';
import errorHandler from '../exceptions/errorHandler';

export default class Server {
    public app: express.Application;

    public env: string;

    // eslint-disable-next-line no-unused-vars
    constructor(private port: number) {
      this.app = express();
      this.env = process.env.NODE_ENV || 'development';
      this.initializeMiddlewares();
      this.initializeRoutes();
      this.initializeErrorHandling();
    }

    static init(port: number): Server {
      return new Server(port);
    }

    listen(callback: Function): void {
      this.app.listen(this.port, callback());
    }

    private initializeMiddlewares() {
      if (this.env === 'production') {
        this.app.use(morgan('combined'));
        this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
      } else if (this.env === 'development') {
        this.app.use(morgan('dev'));
        this.app.use(cors({ origin: true, credentials: true }));
      }

      this.app.use(router);
    }

    private initializeRoutes(): void {
      this.app.use(router);
    }

    private initializeErrorHandling() {
      this.app.use(errorHandler);
    }
}
