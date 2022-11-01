
import winston, { Logger, format } from "winston";

let memo: Logger;

const logger = (): Logger => {
  if (memo) return memo;

  memo = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({
        format: format.combine(format.timestamp(), format.json()),
      }),
    ],
  });

  return memo;
};

export default logger;