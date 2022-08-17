import { Sequelize } from "sequelize";
import env from "./env";

const { database, username, password, storage } = env;

const sequelize = new Sequelize(database, username, password, {
  dialect: "sqlite",
  storage,
  logging: false,
});

export default sequelize;
