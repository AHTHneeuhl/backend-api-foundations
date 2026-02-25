import bcrypt from "bcrypt";

/**
 * Password utility
 * Responsible ONLY for hashing and comparing passwords
 */

const SALT_ROUNDS = 10;

export const passwordUtil = {
  /**
   * Hash a plain-text password
   */
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  },

  /**
   * Compare plain password with hashed password
   */
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  },
};
