/* eslint-disable class-methods-use-this */
import { ICrud, IResourceExample } from '../interfaces';
import { ResourceExampleRepository } from '../repository';
import { ResourceExample } from '../models';

/**
 *
 * The resource service,layer of repository pattern
 * @category Services
 * @class ResourceService
 * @implements {ICrud<IResourceExample, string>}
 */
class ResourceService implements ICrud<IResourceExample, string> {
  /**
   *
   * Create a resource
   * @param {IResourceExample} resource - The resource to create
   * @return {Promise<IResourceExample>}  A resource created
   * @memberof ResourceService
   */
  async create(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.create(resource);
  }

  /**
   *
   * List all resources
   * @return {Promise<Array<IResourceExample>>}  A list of tasks
   * @memberof ResourceService
   */
  async list(): Promise<Array<IResourceExample>> {
    return ResourceExampleRepository.list();
  }

  /**
   *
   * Find by id a resource
   * @param {string} id - The id to find
   * @return {Promise<IResourceExample>}  A resource
   * @memberof ResourceService
   */
  async getById(id: string): Promise<IResourceExample | null> {
    return ResourceExampleRepository.getById(id);
  }

  /**
   *
   * Remove a resource
   * @param {IResourceExample} resource - The resource to remove
   * @return {Promise<IResourceExample>}  A resource removed
   * @memberof ResourceService
   */
  async remove(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.remove(resource);
  }

  /**
   *
   * Remove by id a resource
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
   * Update a resource
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>}  A resource updated
   * @memberof ResourceService
   */
  async update(resource: IResourceExample): Promise<IResourceExample> {
    return ResourceExampleRepository.update(resource);
  }

  /**
   *
   * Update by id a resource
   * @param {string} id - The id to find
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>} A resource updated
   * @memberof ResourceService
   */
  async updateById(id: string, body: Object): Promise<IResourceExample | null > {
    // eslint-disable-next-line no-unused-vars
    return new Promise<IResourceExample | null>((resolve, _) => {
      ResourceExample.findOneAndUpdate({ _id: id }, { ...body }, { new: true },
        (error, task: IResourceExample | null) => resolve(task));
    });
  }
}

export default new ResourceService();
