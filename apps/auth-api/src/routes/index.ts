import { Router } from "express";
import { authRouter } from "./auth.routes";

export const apiRouter = Router();

/**
 * /api/v1/auth/*
 */
apiRouter.use("/auth", authRouter);
