import express from "express";

import {
  createArray,
  update,
  filter,
  awbfilter,
  filterCount,
} from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.put("/update", update);
router.put("/awbfilter", awbfilter);
router.put("/filter", filter);
router.put("/filterCount", filterCount);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
