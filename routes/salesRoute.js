import express from "express";

import {
  createArray,
  update,
  filter,
  awbfilter,
  filterCount,
  getAll,
  updatemapped,
  dispatch,
} from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.put("/update", update);
router.put("/awbfilter", awbfilter);
router.put("/filter", filter);
router.put("/filterCount", filterCount);
router.get("/dispatch", dispatch);
router.put("/updatemapped", updatemapped);
router.get("/getall", getAll);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
