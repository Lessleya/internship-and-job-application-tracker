import { Router } from "express";

import { login } from "../../controllers/auth.controller";

const authRoutes = (router: Router): Router => {
  router.get("/login", login);

  return router;
};

export default authRoutes;