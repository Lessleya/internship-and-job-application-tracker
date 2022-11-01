import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import {
  create,
  show,
  index,
  update,
  destroy,
} from "../../controllers/interview.controller";

const eventRoutes = (router: Router): Router => {
  router.use(jsonResponse);

  router.post("/", create);
  router.get("/:id", show);
  router.get("/", index);
  router.put("/:id", update);
  router.delete("/:id", destroy);

  return router;
};

export default eventRoutes;