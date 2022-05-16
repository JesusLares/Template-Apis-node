import dotEnv from "dotenv";
import path from "path";

let envPath = "";
switch (process.env.NODE_ENV) {
  case "test":
    envPath = path.join(process.cwd(), ".env.test");
    break;
  case "development":
    envPath = path.join(process.cwd(), ".env.development");
    break;
  default:
    envPath = path.join(process.cwd(), ".env.production");
}

dotEnv.config({
  path: envPath,
});

export default {
  port: process.env.PORT,
  ipServer: "localhost",
  apiVersion: process.env.API_VERSION,
  initialRoute: `/api/${process.env.API_VERSION}`,
  databaseUrl: process.env.DATABASE_URL,
  secretToken: process.env.SECRET,
};
