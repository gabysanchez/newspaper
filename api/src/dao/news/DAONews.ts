import { ObjectId } from 'mongoose';

export interface DAONews<K, M> {
  getAll(): M;
  get(id: String): K;
  getReporter(id: any): M;
  add(data: any): K;
  delete(id: String): void;
}
