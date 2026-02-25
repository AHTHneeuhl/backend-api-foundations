/**
 * Centralized configuration loader
 * This file is the ONLY place allowed to access process.env
 */

import dotenv from "dotenv";
import type { SignOptions } from "jsonwebtoken";

// Load environment variables
dotenv.config();

export const config = {
  service: {
    name: "auth-api",
    port: Number(process.env.PORT) || 4001,
    env: process.env.NODE_ENV || "development",
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET as string,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  },
};
