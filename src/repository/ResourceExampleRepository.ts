/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, IResourceExample } from '../interfaces';
import { ResourceExample } from '../models';

/**
 *
 * The repository of resources
 * @category Repositorys
 * @class ResourceRepository
 * @implements {ICrud<IResourceExample, string>}
 */
class ResourceExampleRepository implements ICrud<IResourceExample, string> {
  /**
   *
   *
   * @param {IResourceExample} task - The resource to create
   * @return {Promise<IResourceExample>}  A resource created
   * @memberof ResourceRepository
   */
  async create(task: IResourceExample): Promise<IResourceExample> {
    return task.save();
  }

  /**
   *
   *
   * @return {Promise<Array<IResourceExample>>}  A list of resourceS
   * @memberof ResourceRepository
   */
  async list(): Promise<Array<IResourceExample>> {
    return ResourceExample.find({});
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IResourceExample>}  A resource
   * @memberof Resourceepository
   */
  async getById(id: string): Promise<IResourceExample | null> {
    return ResourceExample.findById(id);
  }

  /**
   *
   *
   * @param {IResourceExample} resource - The resource to remove
   * @return {Promise<IResourceExample>}  A resource removed
   * @memberof ResourceRepository
   */
  async remove(resource: IResourceExample): Promise<IResourceExample> {
    if (resource._id) await resource.remove();
    return resource;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IResourceExample>}  A resource removed
   * @memberof ResourceRepository
   */
  async removeById(id: string): Promise<IResourceExample | null> {
    const resourceToDelete = await this.getById(id);
    if (resourceToDelete) await resourceToDelete.remove();
    return resourceToDelete;
  }

  /**
   *
   *
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>}  A resource updated
   * @memberof ResourceRepository
   */
  async update(resource: IResourceExample): Promise<IResourceExample> {
    if (resource._id) await resource.update();
    return resource;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {IResourceExample} resource - The resource to updated
   * @return {Promise<IResourceExample>} A resource updated
   * @memberof ResourceRepository
   */
  async updateById(id: string, resource: IResourceExample):
  Promise<IResourceExample | null > {
    const resourceToUpdate = await this.getById(id);
    if (resourceToUpdate) {
      resourceToUpdate.property = resource.property;
      await resourceToUpdate.update();
    }
    return resourceToUpdate;
  }
}
export default new ResourceExampleRepository();
