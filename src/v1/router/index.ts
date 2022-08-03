import { Router, Request, Response } from "express";
import env from "../../config/env";
import routes from "./routes";

export default (router: Router): void => {
  routes.forEach((route) => {
    const { method, path, handler } = route;
    router[method](path, handler);
  });

  router.use(env.initialRoute, (_: Request, res: Response) => {
    res.status(200).send("Template");
  });
};
