import { Request, Response, NextFunction } from "express";

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
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
