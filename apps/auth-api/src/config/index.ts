/**
 * Centralized configuration loader
 * This file is the ONLY place allowed to access process.env
 */

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const config = {
  service: {
    name: "auth-api",
    port: Number(process.env.PORT) || 4001,
    env: process.env.NODE_ENV || "development",
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET || "dev-secret",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15m",
  },
};
