import dotenv from "dotenv";

dotenv.config();

import { ConfigParams } from "express-openid-connect";

const authConfig: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL || `http://localhost:${process.env.PORT}`,
  clientID: process.env.AUTH_ZERO_CLIENT_ID || "",
  issuerBaseURL: process.env.AUTH_ZERO_URL || "",
  secret: process.env.AUTH_ZERO_CLIENT_SECRET || "",
  routes: {
    login: false, // Override for custom returnTo
  },
};

export default authConfig;