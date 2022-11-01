import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { authRedirect } from "../../controllers/users.controller";

const userRoutes = (router: Router): Router => {
  router.use(jsonResponse);

  router.get("/redirect", authRedirect);

  return router;
};

export default userRoutes;