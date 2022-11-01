import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { create, index } from "../../controllers/internship.controller";

const router = Router();

router.use(jsonResponse);

router.get("/api/v1/internships", index);
router.post("/api/v1/internships", create);

export default router;