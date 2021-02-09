/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, IUser } from '../interfaces';
import { User } from '../models';

/**
 *
 * The user repository 
 * @category Repositorys
 * @class UserRepository
 * @implements {ICrud<IUser, string>}
 */
class UserRepository implements ICrud<IUser, string> {
  /**
   *
   *
   * @param {IUser} user - The user to create
   * @return {Promise<IUser>}  A user created
   * @memberof UserRepository
   */
  async create(user: IUser): Promise<IUser> {
    return user.save();
  }

  /**
   *
   *
   * @return {Promise<Array<IUser>>}  A list of users
   * @memberof UserRepository
   */
  async list(): Promise<Array<IUser>> {
    return User.find({});
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A User
   * @memberof UserRepository
   */
  async getById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  /**
   *
   *
   * @param {IUser} user - The user to remove
   * @return {Promise<IUser>}  A user removed
   * @memberof UserRepository
   */
  async remove(user: IUser): Promise<IUser> {
    if (user._id) await user.remove();
    return user;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user removed
   * @memberof UserRepository
   */
  async removeById(id: string): Promise<IUser | null> {
    const userToDelete = await this.getById(id);
    if (userToDelete) await userToDelete.remove();
    return userToDelete;
  }

  /**
   *
   *
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>}  A user updated
   * @memberof UserRepository
   */
  async update(user: IUser): Promise<IUser> {
    if (user._id) await user.update();
    return user;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>} A user updated
   * @memberof UserRepository
   */
  async updateById(id: string, user: IUser):
  Promise<IUser | null > {
    const userToUpdate = await this.getById(id);
    if (userToUpdate) {
      userToUpdate.username = user.username;
      userToUpdate.email = user.email;
      userToUpdate.password = user.password;
      await userToUpdate.update();
    }
    return userToUpdate;
  }
}
export default new UserRepository();
