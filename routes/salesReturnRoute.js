import express from "express";
// files
import {
  createSalesReturn,
  update,
  filter,
  grouped,
  received,
} from "../controllers/salesReturnController.js";

const router = express.Router();

router.post("/create", createSalesReturn);
router.put("/update", update);
router.put("/filter", filter);
router.put("/received", received);
router.get("/grouped", grouped);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales Return working");
});

export default router;
