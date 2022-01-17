import { CustomError } from "./custom-error";
const ERROR_TEXT = 'Not Authorized';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;


  constructor() {
    super(ERROR_TEXT);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: ERROR_TEXT }]
  }
}
