import { createApp } from "./app";
import { config } from "./config";
import { logger } from "./utils/logger";

const app = createApp();

app.listen(config.service.port, () => {
  logger.info(
    {
      port: config.service.port,
      env: config.service.env,
    },
    "auth-api started successfully",
  );
});
