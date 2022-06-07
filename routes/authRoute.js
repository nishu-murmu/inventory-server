import express from "express";

// files
import { createUser, login } from "../controllers/authController.js";
import { verifyToken } from "../utils/verifyTokens.js";
const router = express.Router();

// REGISTER
router.post("/register", createUser);
router.get("/checkAuth", verifyToken, (req, res, next) => {
  res.send("you are authenticated");
});
// LOGIN
router.post("/login", login);
// checking if it is working
router.get("/", (req, res) => {
  res.send("Authentication working");
});
export default router;
