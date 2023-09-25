/* eslint-disable semi */
import { Request } from "express";
import { ID } from "./Shared";

export interface IPayload {
  id: ID;
}

export default interface IRequest extends Request {
  payload?: IPayload;
}
