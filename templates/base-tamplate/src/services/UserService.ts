/* eslint-disable class-methods-use-this */
import { ICrud, IUser} from '../interfaces';
import { UserRepository } from '../repository';
import { User} from '../models';
import { UserDTO } from 'dtos';

/**
 *
 * The user service,layer of repository pattern
 * @category Services
 * @class UserService
 * @implements {ICrud<IUser, string>}
 */
class UserService implements ICrud<IUser, string> {
  /**
   *
   * Create a user
   * @param {IUser} user - The user to create
   * @return {Promise<IUser>}  A user created
   * @memberof UserService
   */
  async create(user: IUser): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      UserRepository.create(user)
      .then((user: IUser) => resolve(user))
      .catch(err => reject(err))
    })
  }

  /**
   *
   * List all users
   * @return {Promise<Array<IUser>>}  A list of tasks
   * @memberof UserService
   */
  async list(): Promise<Array<IUser>> {
    return new Promise<Array<IUser>>((resolve, reject) => {
      UserRepository.list()
        .then((user: Array<IUser>) => resolve(user))
        .catch(err => reject(err))
    })
  }

  /**
   *
   * Find by id a user
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user
   * @memberof UserService
   */
  async getById(id: string): Promise<IUser| null> {
    return new Promise<IUser | null>((resolve, reject) => {
      UserRepository.getById(id)
        .then((user: IUser | null) => resolve(user))
        .catch(err => reject(err))
    })
  }

  /**
   *
   * Remove a user
   * @param {IUser} user - The user to remove
   * @return {Promise<IUser>}  A user removed
   * @memberof UserService
   */
  async remove(user: IUser): Promise<IUser> {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        if (user._id) await UserRepository.remove(user);
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   * Remove by id a user
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user removed
   * @memberof UserService
   */
  async removeById(id: string): Promise<IUser| null> {
    return new Promise<IUser | null>(async (resolve, reject) => {
      try {
        const userToDelete: IUser | null = await UserRepository.removeById(id)
        if (userToDelete) await userToDelete.remove();
        resolve(userToDelete)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   * Update a user
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>}  A user updated
   * @memberof UserService
   */
  async update(user: IUser): Promise<IUser> {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        if (user._id) await UserRepository.update(user)
        resolve(user)
      } catch (error) {
        reject(error)
      }
    });
  }

  /**
   *
   * Update by id a user
   * @param {string} id - The id to find
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>} A user updated
   * @memberof UserService
   */
  async updateById(id: string, user: UserDTO): Promise<IUser| null > {
    // eslint-disable-next-line no-unused-vars
    return new Promise<IUser | null>(async (resolve, reject) => {
      try {
        const userToUpdate = await UserRepository.updateById(id, user)
        resolve(userToUpdate)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default new UserService();
