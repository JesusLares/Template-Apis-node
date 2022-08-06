import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import addPlugins from "./config/addPlugins";
import swaggerSetup from "./config/swagger";
import addRouter from "./router";

const app: Application = express();
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));
addPlugins(app);
addRouter(app);
if (process.env.NODE_ENV !== "test") console.log("Connect with Database");
export default app;
