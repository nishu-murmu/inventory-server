import express from "express";

import { createArray } from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
