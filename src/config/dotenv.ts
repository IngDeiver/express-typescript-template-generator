import * as dotenv from 'dotenv';
import path from 'path';

const environment = process.env.NODE_ENV;

if (environment === 'production') {
  dotenv.config();
} else {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.dev') });
}
