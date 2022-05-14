import express from "express";

// files
import {
  createPurchaseReturn,
  updatePurchaseReturn,
  deletePurchaseReturn,
  allPurchaseReturn,
} from "../controllers/purchaseReturnController.js";

const router = express.Router();

router.post("/create", createPurchaseReturn);
router.put("/update/:id", updatePurchaseReturn);
router.delete("/delete/:id", deletePurchaseReturn);
router.get("/getAll", allPurchaseReturn);

export default router;
