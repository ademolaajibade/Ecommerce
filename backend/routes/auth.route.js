import express from "express";

import {
  signup,
  login,
  logout,
  refresh_token,
  getProfile,
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh-token", refresh_token);
router.get("/profile", protectRoute, getProfile);

export default router;
