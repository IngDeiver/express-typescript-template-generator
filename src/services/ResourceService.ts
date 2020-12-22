/* eslint-disable class-methods-use-this */
import { ICrud, IResourceExample } from '../interfaces';
import { ResourceExampleRepository } from '../repository';

/**
 *
 * The resource service,layer of repository pattern
 * @class ResourceService
 * @implements {ICrud<IResourceExample, string>}
 */
class ResourceService implements ICrud<IResourceExample, string> {
  /**
   *
   *
   * @param {IResourceExample} resource - The resource to create
   * @return {Promise<IResourceExample>}  A resource created
   * @memberof ResourceService
   */
  async create(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.create(resource);
  }

  /**
   *
   *
   * @return {Promise<Array<IResourceExample>>}  A list of tasks
   * @memberof ResourceService
   */
  async list(): Promise<Array<IResourceExample>> {
    return ResourceExampleRepository.list();
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IResourceExample>}  A resource
   * @memberof ResourceService
   */
  async getById(id: string): Promise<IResourceExample | null> {
    return ResourceExampleRepository.getById(id);
  }

  /**
   *
   *
   * @param {IResourceExample} resource - The resource to remove
   * @return {Promise<IResourceExample>}  A resource removed
   * @memberof ResourceService
   */
  async remove(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.remove(resource);
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IResourceExample>}  A resource removed
   * @memberof ResourceService
   */
  async removeById(id: string): Promise<IResourceExample | null> {
    const taskToDelete = await this.getById(id);
    if (taskToDelete) await taskToDelete.remove();
    return taskToDelete;
  }

  /**
   *
   *
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>}  A resource updated
   * @memberof ResourceService
   */
  async update(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.update(resource);
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>} A resource updated
   * @memberof ResourceService
   */
  async updateById(id: string, resource: IResourceExample): Promise<IResourceExample | null > {
    const taskToUpdate = await this.getById(id);
    if (taskToUpdate) {
      taskToUpdate.property = resource.property;
      await taskToUpdate.update();
    }
    return taskToUpdate;
  }
}

export default new ResourceService();
