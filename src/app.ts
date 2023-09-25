import express, { Application } from "express";

import addRouter from "@router";
import addPlugins from "@config/addPlugins";
import { NODE_ENV } from "@constants/app";

const app: Application = express();
addPlugins(app);
addRouter(app);

// eslint-disable-next-line no-console
if (process.env.NODE_ENV?.trim() !== NODE_ENV.test) console.log("Connect with Database");

export default app;
