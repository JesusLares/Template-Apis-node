import { Model } from "sequelize";
import { User } from "./User";

export interface UserModel extends Model, User {}
