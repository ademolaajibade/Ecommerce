import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authroute from "./routes/auth.route.js";
import productroute from "./routes/product.route.js";
import cartroute from "./routes/cart.route.js";
import couponroute from "./routes/coupon.route.js";
import paymnetroute from "./routes/payment.route.js";
import analyticsroutes from "./routes/analytics.route.js";
import { connectDB } from "./lib/config.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());

app.use("/api/auth", authroute);
app.use("/api/products", productroute);
app.use("/api/cart", cartroute);
app.use("/api/coupons", couponroute);
app.use("/api/payments", paymnetroute);
app.use("/api/analytics", analyticsroutes);

// app.use(cors()); // Enable CORS for all origins, or configure specific origins

// Configure CORS to allow requests from your frontend's origin
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend origin
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} || 5000`);

  connectDB();
  console.log("under connect to server");
});
