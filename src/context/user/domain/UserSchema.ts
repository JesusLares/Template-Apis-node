import { model, Schema, SchemaTypes } from "mongoose";
import { UserModel } from "./UserModel";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
      index: true,
    },
    age: {
      type: SchemaTypes.Number,
      required: true,
    },
    email: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default model<UserModel>("users", UserSchema);
