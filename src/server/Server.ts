import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../routes';
import errorHandler from '../exceptions/errorHandler';
import { stream } from '../utils';

/**
 *
 *
 * The class of managament application
 * @class Server
 */
class Server {
  /**
   *
   *
   * @type {express.Application} - the instance of application
   * @memberof Server
   */
  public app: express.Application;

  /**
   *
   *
   * @type {string} - the current environment
   * @memberof Server
   */
  public env: string;

  /**
   * Creates an instance of Server.
   * @param {number} port - The por of app listen
   * @memberof Server
   */
  // eslint-disable-next-line no-unused-vars
  constructor(private port: number) {
    this.app = express();
    this.env = process.env.NODE_ENV || 'development';
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  /**
   *
   * Initialize the application
   * @static
   * @param {number} port - the port
   * @return Server
   * @memberof Server
   */
  static init(port: number): Server {
    return new Server(port);
  }

  /**
   *
   * Start listen the server
   * @param {Function} callback
   * @memberof Server
   */
  listen(callback: Function): void {
    this.app.listen(this.port, callback());
  }

  /**
   *
   * Initialize the middlewares of the application
   * @private
   * @memberof Server
   */
  private initializeMiddlewares() {
    if (this.env === 'production') {
      this.app.use(morgan('combined', { stream }));
      this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
    } else if (this.env === 'development') {
      this.app.use(morgan('dev', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(express.json());
    this.app.use(router);
  }

  /**
   *
   * Initialize the routes of application
   * @private
   * @memberof Server
   */
  private initializeRoutes(): void {
    this.app.use(router);
  }

  /**
   *
   * Initialize the error handler of the applicacion
   * @private
   * @memberof Server
   */
  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
}

export default Server;
