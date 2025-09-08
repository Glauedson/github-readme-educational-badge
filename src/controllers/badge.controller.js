import { generateBadge } from "../services/badge.service.js";
import { imageToBase64 } from "../utils/imageToBase64.js";

export async function getBadge(req, res) {
  const { name, course, degree, progress, img } = req.query;

  const imgBase64 = img ? await imageToBase64(img) : "";
  const degreeIcon = await imageToBase64("https://cdn-icons-png.flaticon.com/512/43/43298.png");
  
  if (!name || !course || !degree || !progress || !img) {
    return res
      .status(400)
      .send("Required params: name, course, degree, progress, img");
  }

  const svg = generateBadge({ name, course, degree, progress, imgBase64, degreeIcon });

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
}
