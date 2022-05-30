import express from "express";

import { createArray, getAll, filter } from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.get("/getAll", getAll);
router.post("/filter", filter);

// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
