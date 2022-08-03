import { Router, Request, Response } from "express";
import env from "../config/env";
import routesV1 from "./v1/routes";

export default (router: Router): void => {
  const allRoutes = [...routesV1];
  allRoutes.forEach((route) => {
    const { method, path, handler } = route;
    router[method](path, handler);
  });

  router.use(env.initialRoute, (_: Request, res: Response) => {
    res.status(200).send("Template");
  });
};
