import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { config } from "../config";
import { JwtPayload } from "../types/auth.types";

/**
 * Token utility
 * Handles JWT creation and verification
 */
const JWT_SECRET: Secret = config.auth.jwtSecret;

// 👇 Explicit options object prevents overload confusion
const SIGN_OPTIONS: SignOptions = {
  expiresIn: config.auth.jwtExpiresIn,
};

export const tokenUtil = {
  /**
   * Generate JWT token
   */
  generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, JWT_SECRET, SIGN_OPTIONS);
  },

  /**
   * Verify JWT token
   */
  verifyToken(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  },
};
