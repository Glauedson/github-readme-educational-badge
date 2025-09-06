import express from "express";
import badgeRoutes from "./routes/badge.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Academic Badge API is running!");
});

app.use("/", badgeRoutes);

export default app;
