import dotenv from "dotenv";

dotenv.config();

interface ApplicationConfig {
  port: string;
}

const appConfig: ApplicationConfig = {
  port: process.env.PORT || "8080",
};

export default appConfig;