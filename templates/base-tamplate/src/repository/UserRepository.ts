/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { UserDTO } from 'dtos';
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
  create(user: IUser): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      user.save()
        .then((user: IUser) => resolve(user))
        .catch(err => reject(err))
    })
  }

  /**
   *
   *
   * @return {Promise<Array<IUser>>}  A list of users
   * @memberof UserRepository
   */
  list(): Promise<Array<IUser>> {
    return new Promise<Array<IUser>>((resolve, reject) => {
      User.find({})
        .then((user: Array<IUser>) => resolve(user))
        .catch(err => reject(err))
    })
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A User
   * @memberof UserRepository
   */
  getById(id: string): Promise<IUser | null> {
    return new Promise<IUser | null>((resolve, reject) => {
      User.findById(id)
        .then((user: IUser | null) => resolve(user))
        .catch(err => reject(err))
    })
  }

  /**
   *
   *
   * @param {IUser} user - The user to remove
   * @return {Promise<IUser>}  A user removed
   * @memberof UserRepository
   */
  remove(user: IUser): Promise<IUser> {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        if (user._id) await user.remove();
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user removed
   * @memberof UserRepository
   */
  removeById(id: string): Promise<IUser | null> {
    return new Promise<IUser | null>(async (resolve, reject) => {
      try {
        const userToDelete: IUser | null = await User.findByIdAndRemove(id)
        if (userToDelete) await userToDelete.remove();
        resolve(userToDelete)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>}  A user updated
   * @memberof UserRepository
   */
  async update(user: IUser): Promise<IUser> {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        if (user._id) await user.update();
        resolve(user)
      } catch (error) {
        reject(error)
      }
    });
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>} A user updated
   * @memberof UserRepository
   */
  async updateById(id: string, user: UserDTO):
    Promise<IUser | null> {
    return new Promise<IUser | null>(async (resolve, reject) => {
      try {
        const userToUpdate = await User.findByIdAndUpdate(id, user, { new: true})
        resolve(userToUpdate)
      } catch (error) {
        reject(error)
      }
    })
  }
}
export default new UserRepository();
