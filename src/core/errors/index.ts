import { INTERNAL_ERROR, NOT_FOUND, UNAUTHORIZED } from "@constants/message";

import errorFactory from "./CustomErrors";

const InternalError = errorFactory({
  name: "InternalError",
  message: INTERNAL_ERROR,
  code: 500,
});
const NotFound = errorFactory({ name: "NotFound", message: NOT_FOUND, code: 404 });
const BadRequest = errorFactory({ name: "BadRequest" });
const Unauthorized = errorFactory({ name: "Unauthorized", message: UNAUTHORIZED, code: 401 });
const InvalidData = errorFactory({ name: "InvalidData" });
const ErrorDefault = errorFactory({ name: "ErrorDefault" });

const Error = {
  InternalError,
  BadRequest,
  NotFound,
  InvalidData,
  Unauthorized,
  ErrorDefault,
};
export default Error;
