import express from "express";

import {
  createArray,
  getAll,
  update,
  filter,
  // productsFilter,
} from "../controllers/salesController.js";
const router = express.Router();

router.post("/create", createArray);
router.get("/getAll", getAll);
router.put("/update", update);
router.put("/filter", filter);
// router.put("productsfilter", productsFilter);

// troubleshooting
router.get("/", (req, res) => {
  res.send("Sales working");
});

export default router;
