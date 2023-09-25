import { BAD_REQUEST } from "@constants/message";
import { ErrorParams } from "@interface/Errors";

interface Params extends ErrorParams {
  name: string;
}
// eslint-disable-next-line func-names
const errorFactory = function ({ name, message = BAD_REQUEST, code = 400 }: Params) {
  return class BusinessError extends Error {
    code: number;

    constructor(params: ErrorParams = {}) {
      super(params.message ?? message);
      this.code = params.code ?? code;
      this.name = name;
    }
  };
};

export default errorFactory;
