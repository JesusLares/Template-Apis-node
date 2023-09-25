/* eslint-disable arrow-body-style */
import { RequestHandler } from "express";

import { BAD_REQUEST } from "@constants/message";

const getCatchErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const requestCatch = (requestHandler: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<any> => {
    try {
      return await requestHandler(req, res, next);
    } catch (error) {
      return res.status(400).json({ message: getCatchErrorMessage(error) || BAD_REQUEST });
    }
  };
};

export default requestCatch;
