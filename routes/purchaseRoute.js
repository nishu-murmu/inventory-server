import express from "express";

// files
import {
  createPurchase,
  updatePurchase,
  deletePurchase,
  allPurchase,
  mergedData,
} from "../controllers/purchaseController.js";

const router = express.Router();

router.post("/create", createPurchase);
router.put("/update", updatePurchase);
router.delete("/delete", deletePurchase);
router.get("/getAll", allPurchase);
router.get("/merged", mergedData);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Purchase working");
});

export default router;
