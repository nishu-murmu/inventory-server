import express from "express";
// files
import {
  createSalesReturn,
  update,
  awbfilter,
  filter,
  received,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.put("/awbfilter", awbfilter);
router.get("/received", received);
router.put("/filter", filter);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
