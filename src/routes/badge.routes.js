import { Router } from "express";
import { getBadge } from "../controllers/badge.controller.js";
import { getSupportedLanguages, getDefaultLanguage } from "../utils/i18n.utils.js";

const router = Router();

// Route with language parameter (e.g., /pt/badge, /en/badge)
router.get("/:lang/badge", getBadge);

// Default route without language (uses default language)
router.get("/badge", (req, res, next) => {
  req.params.lang = getDefaultLanguage();
  next();
}, getBadge);

// Health check route with supported languages info
router.get("/", (req, res) => {
  res.json({
    message: "Academic Badge API is running! 🎓",
    supportedLanguages: getSupportedLanguages(),
    defaultLanguage: getDefaultLanguage(),
    examples: {
      portuguese: "/pt/badge?name=UNIFOR&course=Ciência da Computação&degree=Bacharelado&progress=75",
      english: "/en/badge?name=UNIFOR&course=Computer Science&degree=Bachelor&progress=75"
    }
  });
});

export default router;