/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, IResourceExample } from '../interfaces';
import { ResourceExample } from '../models';

class ResourceExampleRepository implements ICrud<IResourceExample, string> {
  async create(task: IResourceExample): Promise<IResourceExample> {
    return new ResourceExample();
  }

  async list(): Promise<Array<IResourceExample>> {
    return ResourceExample.find({});
  }

  async getById(id: string): Promise<IResourceExample> {
    return new ResourceExample();
  }

  async remove(task: IResourceExample): Promise<IResourceExample> {
    return new ResourceExample();
  }

  async removeById(id: string): Promise<IResourceExample> {
    return new ResourceExample();
  }

  async update(task: IResourceExample): Promise<IResourceExample> {
    return new ResourceExample();
  }

  async updateById(id: string): Promise<IResourceExample> {
    return new ResourceExample();
  }
}
export default new ResourceExampleRepository();
