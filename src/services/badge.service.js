import { badgeSvg } from "../templates/badge.svg.js";
import { fetchImageAsBase64 } from "../utils/image.utils.js";
import { getDefaultLanguage } from "../utils/i18n.utils.js";

export async function generateBadge(data) {
  // Fetch image data if URL is provided
  const imageData = data.img ? await fetchImageAsBase64(data.img) : null;
  
  // Ensure language is set, fallback to default if not provided
  const language = data.language || getDefaultLanguage();
  
  return badgeSvg({
    ...data,
    img: imageData,
    language
  });
}