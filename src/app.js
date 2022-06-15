import express, { json } from "express";
import transformRoutes from "./routes/transform.route";

const app = express();

// middleware
app.use(json());

// routes
app.use("/api/transform", transformRoutes);

export default app;
