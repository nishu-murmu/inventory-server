import express from "express";

// files
import { createUser, login } from "../controllers/authController.js";
import { verifyToken } from "../utils/verifyTokens.js";
const router = express.Router();

// REGISTER
router.post("/register", createUser);
// LOGIN
router.post("/login", login);
// CHECK AUTH
router.get("/checkAuth", verifyToken, (req, res, next) => {
  res.sendStatus(200);
});
// checking if it is working
router.get("/", (req, res) => {
  res.send("Authentication working");
});
export default router;
