import { Request } from "express";

const corsOptionsDelegate = (req: Request, callback: any) => {
  interface ICorsOptions {
    origin: boolean;
  }
  const allowlist = ["*"];

  const corsOptions: ICorsOptions = { origin: false };
  const origin = req.header("Origin") || "";
  const isValidOrigin = allowlist.indexOf(origin) >= 0;
  corsOptions.origin = !!isValidOrigin;
  callback(null, corsOptions);
};

export default corsOptionsDelegate;
