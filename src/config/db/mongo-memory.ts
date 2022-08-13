/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod: MongoMemoryServer;

export const connectMemoryDB = async (): Promise<void> => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  };

  await mongoose.connect(uri, config);
};

export const closeDataBase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

export const clearDataBase = async (): Promise<void> => {
  const { collections } = mongoose.connection;
  const promises = [];

  for (const key in collections) {
    const collection = collections[key];
    promises.push(collection.deleteMany({}));
  }
  await Promise.all(promises);
};
