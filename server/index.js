import express from "express";
import authRoutes from "./routes/auth.route.js";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("Server running");
});
