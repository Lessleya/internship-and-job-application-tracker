import mongoose from "mongoose";
import dbConfig from "../db.config";
import Initializer from "./initializer";
import logger from "../../lib/logger";

const database: Initializer = {
  initialize: async () => {
    try {
      logger().info("Connecting to database...");
      await mongoose.connect(dbConfig.url);
    } catch (e) {
      logger().error(`Error connecting to database: ${e}`);
      return false;
    }

    logger().info("Connected to database.");
    return true;
  },
};

export default database;