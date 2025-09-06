import { generateBadge } from "../services/badge.service.js";

export function getBadge(req, res) {
  const { name, course, degree, progress, img } = req.query;

  if (!name || !course || !degree || !progress || !img) {
    return res
      .status(400)
      .send("Required params: name, course, degree, progress, img");
  }

  const svg = generateBadge({ name, course, degree, progress, img });

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
}
