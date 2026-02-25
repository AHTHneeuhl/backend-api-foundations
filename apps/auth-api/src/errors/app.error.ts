import { ErrorCode } from "@packages/shared-types";

/**
 * Base application error
 * All custom errors MUST extend this
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    code: ErrorCode,
    statusCode = 500,
    isOperational = true,
  ) {
    super(message);

    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}
