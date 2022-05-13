import express from "express";

// files
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyUser, verifyAdmin, verifyToken } from "../utils/verifyTokens.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});
router.put("/:id", verifyUser, updateUser);
// delete user
router.delete("/:id", verifyUser, deleteUser);
// delete user
router.get("/:id", verifyUser, getUser);
// delete user
router.get("/", verifyAdmin, getUsers);

export default router;
