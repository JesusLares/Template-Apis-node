import { IRepository } from "@interface/IRepository";
import { FilterQuery } from "mongoose";
import { User } from "../domain/User";
import { UserModel } from "../domain/UserModel";
import UserSchema from "../domain/UserSchema";

export default class UserRepository implements IRepository<UserModel> {
  create(item: User): Promise<UserModel> {
    const newUser = new UserSchema(item);
    return newUser.save();
  }

  find(query: FilterQuery<UserModel>): Promise<UserModel[]> {
    return UserSchema.find(query).exec();
  }

  findOne(query: FilterQuery<UserModel>): Promise<UserModel | null> {
    return UserSchema.findOne(query).exec();
  }

  findById(id: string): Promise<UserModel | null> {
    return UserSchema.findById(id).exec();
  }

  update(id: string, item: User): Promise<UserModel | null> {
    return UserSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<UserModel | null> {
    return UserSchema.findByIdAndDelete(id).exec();
  }
}
