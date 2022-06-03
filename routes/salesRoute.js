import express from "express";

import {
  createArray,
  getAll,
  update,
  filter,
  filterCount,
  dispatchFilter,
  pendingFilter,
} from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.get("/cancelfilter", getAll);
router.put("/update", update);
router.put("/filter", filter);
router.get("/dispatchfilter", dispatchFilter);
router.get("/pendingfilter", pendingFilter);
router.put("/filterCount", filterCount);

// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
