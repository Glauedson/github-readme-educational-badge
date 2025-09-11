import express from "express";
import badgeRoutes from "./routes/badge.routes.js";
import { startCacheCleanup } from "./utils/image.utils.js";

const app = express();

// Start image cache cleanup
startCacheCleanup();

// Use badge routes (includes language routing)
app.use("/", badgeRoutes);

export default app;