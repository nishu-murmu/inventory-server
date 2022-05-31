import express from "express";
// files
import {
  createSalesReturn,
  getSalesReturn,
  update,
  filter,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.get("/getSalesReturn", getSalesReturn);
router.put("/update", update);
router.put("/filter", filter);

export default router;
