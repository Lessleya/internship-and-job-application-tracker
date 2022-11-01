import dotenv from "dotenv";

dotenv.config();

interface DatabaseConfig {
  url: string;
}

const dbConfig: DatabaseConfig = {
  url: process.env.DB_URL || "",
};

export default dbConfig;