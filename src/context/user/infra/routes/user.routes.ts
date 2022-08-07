import env from "@config/env";
import { EnumMethodRoute, IRoute } from "@interface/IRoute";
import validateToken from "@middlewares/validateToken";
import UserController from "../controller/user.controller";

const URL_BASE = `${env.initialRoute}/client`;
const clientController = new UserController();

/**
 * Post track
 * @openapi
 * /api/v1/users:
 *  post:
 *    tags:
 *      - users
 *    sumary: "Get user"
 *    description: Get track detail of user
 *    requestBody:
 *      content:
 *        aplication/json:
 *          schema:
 *            $ref: "#/components/schemas/user"
 *    responses:
 *      '200':
 *        description: Retorna el objeto con el campo de user.
 *      '404':
 *        description: Error de validacion
 *    segurity:
 *      - bearerAuth: []
 */

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
