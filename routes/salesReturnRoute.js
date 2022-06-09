import express from "express";
// files
import {
  createSalesReturn,
  getSalesReturn,
  update,
  filter,
  dispatchFilter,
  pendingFilter,
  partialFilter,
  wrongfilter,
  filterCount,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.get("/getAll", getSalesReturn);
router.put("/update", update);
router.put("/filter", filter);
router.get("/dispatchfilter", dispatchFilter);
router.get("/pendingfilter", pendingFilter);
router.get("/partialfilter", partialFilter);
router.get("/wrongfilter", wrongfilter);
router.get("/filterCount", filterCount);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
