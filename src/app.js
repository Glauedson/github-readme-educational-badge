import express from "express";
import badgeRoutes from "./routes/badge.routes.js";
import { startCacheCleanup } from "./utils/image.utils.js";

const app = express();

startCacheCleanup();

app.get("/", (req, res) => {
  res.send("Academic Badge API is running! 🎓");
});

app.use("/", badgeRoutes);

export default app;