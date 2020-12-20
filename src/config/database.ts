/* eslint-disable no-console */
// getting-started.js
import mongoose, { Connection } from 'mongoose';

class Database {
 static db: Connection;

 static connect(): Connection {
   mongoose.connect(process.env.DB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('🟢 The database is connected.'))
     .catch((error) => console.log(`🔴 Unable to connect to the database: ${error}.`));
   this.db = mongoose.connection;
   this.db.on('error', (err) => console.log(err));
   return this.db;
 }

 static close(): void {
   this.db.close();
 }
}
export default Database;
