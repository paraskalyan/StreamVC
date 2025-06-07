import express from "express";
import {
  login,
  logout,
  onboard,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/onboard", protectRoute, onboard);

export default router;
