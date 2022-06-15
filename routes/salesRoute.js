import express from "express";

import {
  createArray,
  getAll,
  update,
  filter,
  awbfilter,
  filterCount,
  remove,
} from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.put("/update", update);
router.get("/getAll", getAll);
router.put("/awbfilter", awbfilter);
router.put("/filter", filter);
router.put("/filterCount", filterCount);
router.get("/remove", remove);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
