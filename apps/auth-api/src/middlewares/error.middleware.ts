import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";
import { logger } from "../utils/logger";

/**
 * Centralized Express error handler
 * MUST be registered last
 */
export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError) {
    logger.warn({ code: err.code, stack: err.stack }, err.message);

    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  // Unknown / programming errors
  logger.error({ stack: err.stack }, "Unhandled error");

  return res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong",
    },
  });
};
