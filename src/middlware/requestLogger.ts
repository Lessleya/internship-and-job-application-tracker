import { Request, Response, NextFunction } from "express";

import logger from "../lib/logger";

const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  
  const ip = req.headers["x-forwarded-for"] || req.ip;

  logger().info(` ==> Started request to ${req.url}`);
  logger().info(`Query parameters: ${JSON.stringify(req.query)}`);
  logger().info(`Body: ${JSON.stringify(req.body)}`);
  logger().info(`User: ${req.oidc?.user?.email} from ${ip}`);

  next();
};

export default requestLogger;