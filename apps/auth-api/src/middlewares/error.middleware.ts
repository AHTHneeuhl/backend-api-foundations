import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

/**
 * Centralized error handler
 * No raw errors should ever leak to the client
 */
export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(
    {
      message: err.message,
      stack: err.stack,
    },
    "Unhandled error",
  );

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
