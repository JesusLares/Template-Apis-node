import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, UNAUTHORIZED } from "@constants/message";

const validateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  try {
    const token = req.header("auth-token");

    if (!token) {
      return res.status(404).json({
        message: UNAUTHORIZED,
      });
    }

    return next();
  } catch (error) {
    return res.status(404).json({
      message: BAD_REQUEST,
    });
  }
};

export default validateToken;
