import express from "express";
// files
import {
  createSalesReturn,
  update,
  filter,
  received,
  grouped,
  updatemapped,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.get("/received", received);
router.put("/filter", filter);
router.get("/received", received);
router.put("/updatemapped", updatemapped);
router.get("/grouped", grouped);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
