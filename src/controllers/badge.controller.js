import { generateBadge } from "../services/badge.service.js";
import { validateBadgeParams, validateProgress } from "../utils/validation.utils.js";
import { getTranslation, isValidLanguage, getDefaultLanguage } from "../utils/i18n.utils.js";

export async function getBadge(req, res) {
  try {
    // Extract language from params (from route like /:lang/badge)
    const language = req.params.lang || getDefaultLanguage();
    
    // Validate language
    if (!isValidLanguage(language)) {
      return res.status(400).json({
        error: getTranslation(getDefaultLanguage(), 'errors.invalidParameters'),
        message: `Unsupported language: ${language}. Supported languages: pt, en`
      });
    }

    const { name, course, degree, progress, img } = req.query;
    
    // Validate badge parameters with localized error messages
    const validationErrors = validateBadgeParams({ name, course, degree, progress }, language);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: `${getTranslation(language, 'errors.invalidParameters')}: ${validationErrors.join(', ')}`,
        example: `/${language}/badge?name=UNIFOR&course=Computer Science&degree=Bachelor&progress=75&img=https://example.com/logo.png`
      });
    }

    // Validate progress with localized error message
    const progressValidation = validateProgress(progress, language);
    if (!progressValidation.isValid) {
      return res.status(400).json({
        error: progressValidation.error
      });
    }

    // Generate badge with language context
    const svg = await generateBadge({
      name,
      course,
      degree,
      progress: progressValidation.value,
      img: img || null,
      language 
    });

    // Set response headers
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Language", language);
    res.send(svg);

  } catch (error) {
    console.error("Error generating badge:", error);
    const errorLanguage = req.params.lang && isValidLanguage(req.params.lang) 
      ? req.params.lang 
      : getDefaultLanguage();
    
    res.status(500).json({
      error: getTranslation(errorLanguage, 'errors.internalError')
    });
  }
}