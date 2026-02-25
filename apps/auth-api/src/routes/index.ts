import { Router } from "express";

export const apiRouter = Router();

/**
 * Temporary route
 * Will be removed once auth routes are added
 */
apiRouter.get("/ping", (_req, res) => {
  res.json({
    message: "auth-api is alive",
  });
});
