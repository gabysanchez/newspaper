import { Resource } from '../../models/Resource';
import { DAOResource } from './DAOResource';

export class DAOResourceMSQL
  implements DAOResource<Promise<Resource>, Promise<Resource[]>>
{
  getAll(): Promise<Resource[]> {
    throw new Error('Method not implemented.');
  }
  get(): Promise<Resource> {
    throw new Error('Method not implemented.');
  }
  add(data: any): Promise<Resource> {
    throw new Error('Method not implemented.');
  }
  update(data: any): Promise<Resource> {
    throw new Error('Method not implemented.');
  }
}
