import express from "express";
import { createMapped, getMapped } from "../controllers/mappedController.js";
const router = express.Router();

router.post("/createMapped", createMapped);
router.get("/getAllMapped", getMapped);

export default router;
