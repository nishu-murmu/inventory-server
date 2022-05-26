import express from "express";

// files
import { createUser, login } from "../controllers/authController.js";
const router = express.Router();

// REGISTER
router.post("/register", createUser);
// LOGIN
router.post("/login", login);
// checking if it is working
router.get("/", (req, res) => {
  res.send("Authentication working");
});
export default router;
