import express from "express";

import {
  createArray,
  update,
  filter,
  // updatemapped,
  dispatch,
  grouped,
  bulkupdate,
} from "../controllers/salesController.js";
const router = express.Router();
router.post("/create", createArray);
router.put("/update", update);
router.put("/filter", filter);
router.put("/dispatch", dispatch);
// router.put("/updatemapped", updatemapped);
router.get("/grouped", grouped);
router.put("/bulkupdate", bulkupdate);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
