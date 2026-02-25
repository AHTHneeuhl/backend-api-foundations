import { createApp } from "./app";
import { config } from "./config";

const app = createApp();

app.listen(config.service.port, () => {
  console.log(
    `[${config.service.name}] running on port ${config.service.port} in ${config.service.env} mode`,
  );
});
