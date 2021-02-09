import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from '../interfaces';
import bcrypt from 'bcrypt'

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// Verify the password
UserSchema.methods.verifyPassword = function (password: string) {
  return bcrypt.compare(password, this.password)
}

const User: Model<IUser> = mongoose.model('User', UserSchema);
export default User;
