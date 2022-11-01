import express, {
    Application,
    Request,
    Response,
    NextFunction,
    Router,
  } from "express";
  import { auth, requiresAuth } from "express-openid-connect";
  import swaggerUi from "swagger-ui-express";
  
  import requestLogger from "../../middlware/requestLogger";
  import authConfig from "../auth.config";
  import interviewRoutes from "./interview.routes";
  import userRoutes from "./user.routes";
  import authRoutes from "./auth.routes";
  import internshipRoutes from "./internship.route";
  import logger from "../../lib/logger";
  
  import swaggerDoc from "../../swagger-output.json";
  
  const router = Router();
  
  interface StatusMap {
    [key: string]: number;
  }
  
  // API docs
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  
  // Login, logout, etc. with Auth0
  router.use(auth(authConfig), requestLogger);
  
  // Custom auth routes
  router.use(authRoutes(express.Router()));
  
  // Interview
  router.use("/api/v1/interviews", requiresAuth(), interviewRoutes(express.Router()));
  
  // Users
  router.use("/api/v1/users", userRoutes(express.Router()));
  
  // Internship
  router.use(internshipRoutes);
  
  // Custom 404 handler
  // See https://expressjs.com/en/starter/faq.html
  router.use((_req: Request, res: Response): void => {
    res.status(404).json({ error: "not found" });
  });
  
  // See http://expressjs.com/en/guide/error-handling.html
  router.use(
    (error: Error, req: Request, res: Response, _next: NextFunction): void => {
      const statusMap: StatusMap = {
        ValidationError: 400,
      };
  
      res.status(statusMap[error.name] || 500);
  
      res.json({
        error: error.message || "Application error, please contact support.",
      });
    }
  );
  
  export default router;