import { Router } from "express";
import { getBadge } from "../controllers/badge.controller.js";

const router = Router();

router.get("/badge", getBadge);

export default router;
