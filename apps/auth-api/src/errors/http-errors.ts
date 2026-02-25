import { AppError } from "./app-error";
import { ErrorCode } from "@packages/shared-types";

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, ErrorCode.VALIDATION_ERROR, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, ErrorCode.UNAUTHORIZED, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, ErrorCode.FORBIDDEN, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, ErrorCode.NOT_FOUND, 404);
  }
}
