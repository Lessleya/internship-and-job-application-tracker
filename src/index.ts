import express from "express";
import cors from "cors";

import logger from "./lib/logger";
import appConfig from "./config/app.config";
import database from "./config/initializers/db.init";
import routes from "./config/routes";

const app = express();

// global middleware
app.use(cors(), express.json());

app.use(routes);

database.initialize().then(() => {
  app.listen(appConfig.port, () => {
    logger().info(`Application started on ${appConfig.port}`);
  });
});