import { generateBadge } from "../services/badge.service.js";
import { validateBadgeParams, validateProgress } from "../utils/validation.utils.js";

export async function getBadge(req, res) {
  try {
    const { name, course, degree, progress, img } = req.query;
    
    const validationErrors = validateBadgeParams({ name, course, degree, progress });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: `Parâmetros inválidos: ${validationErrors.join(', ')}`,
        example: "/badge?name=UNIFOR&course=Ciência da Computação&degree=Bacharelado&progress=75&img=https://exemplo.com/logo.png"
      });
    }

    const progressValidation = validateProgress(progress);
    if (!progressValidation.isValid) {
      return res.status(400).json({
        error: progressValidation.error
      });
    }

    const svg = await generateBadge({ 
      name, 
      course, 
      degree, 
      progress: progressValidation.value, 
      img: img || null 
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    res.send(svg);
    
  } catch (error) {
    console.error("Error generating badge:", error);
    res.status(500).json({
      error: "Internal server error generating badge"
    });
  }
}