export interface DAOResource<K, M> {
  getAll(): M;
  get(): K;
  add(data: any): K;
  update(data: any): K;
}
