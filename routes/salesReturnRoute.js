import express from "express";
// files
import {
  createSalesReturn,
  getSalesReturn,
  update,
  filter,
  dispatchFilter,
  pendingFilter,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.get("/getSalesReturn", getSalesReturn);
router.put("/update", update);
router.put("/filter", filter);
router.get("/dispatchfilter", dispatchFilter);
router.get("/pendingfilter", pendingFilter);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
