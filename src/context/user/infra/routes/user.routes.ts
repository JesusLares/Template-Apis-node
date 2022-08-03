import UserController from "../controller/user.controller";
import env from "../../../../config/env";
import { EnumMethodRoute, IRoute } from "../../../../interface/IRoute";
import validateToken from "../../../../middlewares/validateToken";

const URL_BASE = `${env.initialRoute}/client`;
const clientController = new UserController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: EnumMethodRoute.POST,
    handler: [clientController.store],
  },
  {
    path: `${URL_BASE}/all`,
    method: EnumMethodRoute.GET,
    handler: [clientController.search],
  },
  {
    path: URL_BASE,
    method: EnumMethodRoute.GET,
    handler: [clientController.findOne],
  },
  {
    path: `${URL_BASE}/:id`,
    method: EnumMethodRoute.GET,
    handler: [clientController.findById],
  },
  {
    path: `${URL_BASE}/:id`,
    method: EnumMethodRoute.PUT,
    handler: [validateToken, clientController.update],
  },
  {
    path: `${URL_BASE}/:id`,
    method: EnumMethodRoute.DELETE,
    handler: [validateToken, clientController.delete],
  },
];

export default routes;
