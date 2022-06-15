import express from "express";

// files
import {
  createUser,
  login,
  authentication,
} from "../controllers/authController.js";
const router = express.Router();

// REGISTER
router.post("/register", createUser);
// LOGIN
router.post("/login", login);
// CHECK AUTH
router.get("/checkAuth", authentication);
// checking if it is working
router.get("/", (req, res) => {
  res.send("Authentication working");
});
export default router;
