import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getCartProducts,
  addToCart,
  removeAllFromCart,
  updateQuatity,
} from "../controllers/cart.controllers.js";

const router = express.Router();

router.get("/", protectRoute, getCartProducts);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/", protectRoute, updateQuatity);

export default router;
