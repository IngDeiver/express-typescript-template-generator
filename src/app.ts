import Server from './server/Server';
import router from './routes/router';
import errorHandler from './server/errorHandler';

require('./config/dotenv');

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server: Server = Server.init(PORT);

// Router
server.app.use(router);

// Middlewares

// Error handler
server.app.use(errorHandler);

// START
// eslint-disable-next-line no-console
server.listen(() => console.log('Server started on port: ', PORT));
export default server;
