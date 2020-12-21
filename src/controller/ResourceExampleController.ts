/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, IResourceExample } from '../interfaces';
import { ResourceExample } from '../models';

class ResourceExampleControler implements ICrud<IResourceExample, string> {
  create(resource: IResourceExample): IResourceExample {
    return new ResourceExample();
  }

  list(): Array<IResourceExample> {
    return [];
  }

  getById(id: string): IResourceExample {
    return new ResourceExample();
  }

  remove(resource: IResourceExample): IResourceExample {
    return new ResourceExample();
  }

  removeById(id: string): IResourceExample {
    return new ResourceExample();
  }

  update(resource: IResourceExample): IResourceExample {
    return new ResourceExample();
  }

  updateById(id: string): IResourceExample {
    return new ResourceExample();
  }
}
export default new ResourceExampleControler();
