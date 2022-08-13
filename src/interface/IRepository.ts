import { FilterQuery } from "mongoose";

export interface IRepository<T> {
  create(item: T): Promise<T>;
  find(query: FilterQuery<T>): Promise<T[]>;
  findOne(query: FilterQuery<T>): Promise<T | null>;
  findById(id: string): Promise<T | null>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}
