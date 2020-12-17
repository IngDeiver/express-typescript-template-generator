import express from 'express';

export default class Server {
    public app: express.Application;

    // eslint-disable-next-line no-unused-vars
    constructor(private port: number) {
      this.app = express();
    }

    static init(port: number): Server {
      return new Server(port);
    }

    listen(callback: Function): void {
      this.app.listen(this.port, callback());
    }
}
