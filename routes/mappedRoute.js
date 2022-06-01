import express from "express";
import { createMapped, getMapped } from "../controllers/mappedController.js";
const router = express.Router();

router.post("/createMapped", createMapped);
router.get("/getAllMapped", getMapped);

// troubleshooting
router.get("/", (req, res) => {
  res.send("Mapped working");
});
export default router;
