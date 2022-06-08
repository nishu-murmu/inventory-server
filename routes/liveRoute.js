import express from "express";
// files
import { create, getAll } from "../controllers/liveController.js";

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);

export default router;
