import express from "express";
import { config } from "./config";
import { apiRouter } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

export const createApp = () => {
  const app = express();

  // Parse JSON request body
  app.use(express.json());

  // Health check (VERY important in microservices)
  app.get("/health", (_req, res) => {
    res.status(200).json({
      service: config.serviceName,
      status: "healthy",
    });
  });

  // API routes
  app.use("/api/v1", apiRouter);

  // Global error handler (always last)
  app.use(errorMiddleware);

  return app;
};
