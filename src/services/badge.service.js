import { badgeSvg } from "../templates/badge.svg.js";
import { fetchImageAsBase64 } from "../utils/image.utils.js";

export async function generateBadge(data) {
  const imageData = data.img ? await fetchImageAsBase64(data.img) : null;

  return badgeSvg({
    ...data,
    img: imageData
  });
}