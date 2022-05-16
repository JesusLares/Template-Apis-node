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
console.log("hola", envPath);
export default {
  port: process.env.PORT,
  ipServer: process.env.IP_SERVER,
  apiVersion: process.env.API_VERSION,
  initialRoute: process.env.INITIAL_ROUTE,
};
