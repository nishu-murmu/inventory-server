import express from "express";
// files
import {
  createSalesReturn,
  getSalesReturn,
  filter,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.get("/getSalesReturn", getSalesReturn);
router.post("/filter", filter);

export default router;
