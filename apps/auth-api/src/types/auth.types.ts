/**
 * JWT payload structure
 * Keep this MINIMAL
 */
export type JwtPayload = {
  userId: string;
  role: "admin" | "user";
};
