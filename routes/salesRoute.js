import express from "express";

import { createArray } from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);

export default router;
