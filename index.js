import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// files
import AuthRoute from "./routes/authRoute.js";
import MasterRoute from "./routes/masterRoute.js";
import SalesRoute from "./routes/salesRoute.js";
import PurchaseRoute from "./routes/purchaseRoute.js";
import PurchaseReturnRoute from "./routes/purchaseReturnRoute.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API endpoints
app.use("/api/auth", AuthRoute);
app.use("/api/master", MasterRoute);
app.use("/api/purchase", PurchaseRoute);
app.use("/api/purchaseReturn", PurchaseReturnRoute);
app.use("/api/sales", SalesRoute);

// error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Getting some confirmation message
app.use("/", (req, res) => {
  res.send("Backend working");
});

app.listen("3001", () => {
  connect();
  console.log("Connected to backend");
});
