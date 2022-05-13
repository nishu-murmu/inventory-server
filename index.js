import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// files
import AuthRoute from "./routes/authRoute.js";
import UserRoute from "./routes/userRoute.js";

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
app.use(cookieParser());
app.use(express.json());

// API endpoints
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

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

app.listen("3001", () => {
  connect();
  console.log("Connected to backend");
});
