import express from "express";
// files
import {
  createSalesReturn,
  update,
  filter,
  receivedFilter,
  partialFilter,
  wrongfilter,
  filterCount,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.put("/filter", filter);
router.get("/receivedfilter", receivedFilter);
router.get("/partialfilter", partialFilter);
router.get("/wrongfilter", wrongfilter);
router.get("/filterCount", filterCount);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
