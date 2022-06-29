import express from "express";
// files
import {
  createSalesReturn,
  update,
  filter,
  received,
  grouped,
  receivedmapped,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.get("/received", received);
router.put("/filter", filter);
router.get("/receivedmapped", receivedmapped);
router.get("/grouped", grouped);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
