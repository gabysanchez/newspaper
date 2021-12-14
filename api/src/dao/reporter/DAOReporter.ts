import { Reporter } from '../../models/Reporter';

export interface DAOReporter<K, M> {
  getAll(): M;
  get(id: String): K;
  add(data: any): K;
  update(id: String, data: any): K;
  delete(id: String): K;
}
