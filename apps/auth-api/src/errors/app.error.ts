/**
 * Base application error
 * All custom errors will extend this
 */
export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
  ) {
    super(message);
  }
}
