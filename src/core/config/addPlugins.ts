import express, { Application } from "express";
import path from "path";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import corsOptionsDelegate from "@helpers/corsOptionsDelegate";
import { FOLDER_FRONTEND, NODE_ENV } from "@constants/app";

export default (app: Application): void => {
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(cors(corsOptionsDelegate));
  app.use(express.json());
  app.use(morgan("dev", { skip: () => process.env.NODE_ENV?.trim() === NODE_ENV.test }));
  app.use(express.static(path.join(process.cwd(), FOLDER_FRONTEND)));
};
