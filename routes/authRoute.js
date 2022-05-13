import express from "express";

// files
import { createUser, login } from "../controllers/authController.js";
const router = express.Router();

// REGISTER
router.post("/register", createUser);
router.get("/register", (req, res) => {
  res.send("Register ho raha hai!");
});
// LOGIN
router.post("/login", login);

export default router;
