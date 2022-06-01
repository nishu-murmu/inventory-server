import express from "express";
// files
import {
  createSalesReturn,
  getSalesReturn,
  update,
  filter,
  dispatchFilter,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.get("/getAll", getSalesReturn);
router.put("/update", update);
router.put("/filter", filter);
router.get("/dispatchfilter", dispatchFilter);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
