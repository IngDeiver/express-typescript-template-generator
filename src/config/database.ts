/* eslint-disable no-console */
// getting-started.js
import mongoose, { Connection } from 'mongoose';

/**
 *
 * The clas for database managament
 * @class Database
 *
 */
class Database {
 static db: Connection;

 /**
  *
  * Make a conecttion with database configured
  * @static
  * @return Connection  return a new connection
  * @memberof Database
  */
 static connect(): Connection {
   mongoose.connect(process.env.DB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('🟢 The database is connected.'))
     .catch((error) => console.log(`🔴 Unable to connect to the database: ${error}.`));
   this.db = mongoose.connection;
   this.db.on('error', (err) => console.log(err));
   return this.db;
 }

 /**
  *
  * CLose the current connection
  * @static
  * @memberof Database
  */
 static close(): void {
   this.db.close();
 }
}
export default Database;
