/* eslint-disable class-methods-use-this */
import { ICrud, IUser} from '../interfaces';
import { UserRepository } from '../repository';
import { User} from '../models';

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
    return UserRepository.create(user);
  }

  /**
   *
   * List all users
   * @return {Promise<Array<IUser>>}  A list of tasks
   * @memberof UserService
   */
  async list(): Promise<Array<IUser>> {
    return UserRepository.list();
  }

  /**
   *
   * Find by id a user
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user
   * @memberof UserService
   */
  async getById(id: string): Promise<IUser| null> {
    return UserRepository.getById(id);
  }

  /**
   *
   * Remove a user
   * @param {IUser} user - The user to remove
   * @return {Promise<IUser>}  A user removed
   * @memberof UserService
   */
  async remove(user: IUser): Promise<IUser> {
    return UserRepository.remove(user);
  }

  /**
   *
   * Remove by id a user
   * @param {string} id - The id to find
   * @return {Promise<IUser>}  A user removed
   * @memberof UserService
   */
  async removeById(id: string): Promise<IUser| null> {
    const taskToDelete = await this.getById(id);
    if (taskToDelete) await taskToDelete.remove();
    return taskToDelete;
  }

  /**
   *
   * Update a user
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>}  A user updated
   * @memberof UserService
   */
  async update(user: IUser): Promise<IUser> {
    return UserRepository.update(user);
  }

  /**
   *
   * Update by id a user
   * @param {string} id - The id to find
   * @param {IUser} user - The user to updated
   * @return {Promise<IUser>} A user updated
   * @memberof UserService
   */
  async updateById(id: string, body: Object): Promise<IUser| null > {
    // eslint-disable-next-line no-unused-vars
    return new Promise<IUser| null>((resolve, _) => {
      User.findOneAndUpdate({ _id: id }, { ...body }, { new: true },
        (error, task: IUser| null) => resolve(task));
    });
  }
}

export default new UserService();
