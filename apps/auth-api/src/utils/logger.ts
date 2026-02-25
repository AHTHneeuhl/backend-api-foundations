import { createLogger } from "@packages/shared-logger";
import { config } from "../config";

/**
 * Service-level logger instance
 */
export const logger = createLogger(config.service.name);
