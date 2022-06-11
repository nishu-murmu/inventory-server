import express from "express";
// files
import {
  createSalesReturn,
  update,
  awbfilter,
  filter,
  filterCount,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.put("/awbfilter", awbfilter);
router.put("/filter", filter);
router.put("/filterCount", filterCount);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
