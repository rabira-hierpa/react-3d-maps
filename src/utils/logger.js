import * as winston from "winston";
import { createLogger, format, transports, addColors, label } from "winston";

export const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.label({ label }),
    format.colorize({ addColors }),
    format.simple(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info) =>
        `${info.timestamp} [${info.level}] : ${info.message} ${info.label}`
    )
  ),
  transports: [new transports.Console()],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;
