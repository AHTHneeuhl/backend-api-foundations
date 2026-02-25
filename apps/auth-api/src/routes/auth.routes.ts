import { Router } from "express";

/**
 * Auth routes
 * Real handlers will be wired in later phases
 */
export const authRouter = Router();

// placeholder
authRouter.post("/register", (_req, res) => {
  res.status(501).json({ message: "Not implemented" });
});
