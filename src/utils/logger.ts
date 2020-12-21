import winston from 'winston';

// winston format
const { printf } = winston.format;

// Define log format
// eslint-disable-next-line no-shadow
const logFormat = printf(({ level, message }) => `${level}: ${message}`);

// simple log console with winston
const logger = winston.createLogger({
  format: logFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.splat(), winston.format.colorize(),
        winston.format.simple()),
    }),
  ],
});

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
