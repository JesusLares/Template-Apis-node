export interface IRepository<T> {
  create(item: T): Promise<T>;
  find(query: object): Promise<T>;
  findOne(query: object): Promise<T>;
  findById(id: string): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<T>;
}
