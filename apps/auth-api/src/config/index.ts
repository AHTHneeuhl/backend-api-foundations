/**
 * Centralized configuration loader
 * This file is the ONLY place where process.env is accessed
 */

export const config = {
  serviceName: "auth-api",
  port: Number(process.env.PORT) || 4001,
  nodeEnv: process.env.NODE_ENV || "development",
};
