/* eslint-disable no-restricted-syntax */
import Router from "express";

import { Route } from "@src/core/interface/Route";

export default class RoutesGen {
  static exec(routes: Route[]) {
    const router = Router();

    for (const route of routes) {
      const { method, path, handler } = route;
      router[method](path, handler);
    }

    return router;
  }

  static generateRoutes(routes: Route[]) {
    const router = RoutesGen.exec(routes);
    return router;
  }
}
