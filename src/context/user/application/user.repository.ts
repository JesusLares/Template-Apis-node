/* eslint-disable class-methods-use-this */
import { IRepository } from "@interface/IRepository";
import User from "../domain/User";
import { UserModel } from "../domain/UserModel";

export default class UserRepository implements IRepository<UserModel> {
  create(item: User): Promise<UserModel> {
    return { item };
  }

  find(query: object): Promise<UserModel> {
    return query;
  }

  findOne(query: object): Promise<UserModel> {
    return query;
  }

  findById(id: string): Promise<UserModel> {
    return id;
  }

  update(id: string, item: User): Promise<UserModel> {
    return { id, item };
  }

  delete(id: string): Promise<UserModel> {
    return id;
  }
}
