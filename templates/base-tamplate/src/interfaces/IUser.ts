import { Document } from 'mongoose';

/**
 * Define a user interface to managament with mongoose
 * @category Interfaces
 * @interface   IUser
 * @extends {Document}
 */
interface   IUser extends Document{
    username: String,
    email: String,
    password: String,
    verifyPassword: Function
}
export default  IUser;
