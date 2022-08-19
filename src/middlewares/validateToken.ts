import { NextFunction, Request, Response } from "express";
import { ACCESS_DENIED } from "@utils/errorsMessage";

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(404).json({
      message: ACCESS_DENIED,
    });
  }
  return next();
};

export default validateToken;
