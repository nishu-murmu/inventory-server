import express from "express";

import { createArray, getAll } from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.get("/getAll", getAll);

// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
