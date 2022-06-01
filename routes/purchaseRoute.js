import express from "express";

// files
import {
  createPurchase,
  updatePurchase,
  deletePurchase,
  allPurchase,
} from "../controllers/purchaseController.js";

const router = express.Router();

router.post("/create", createPurchase);
router.put("/update/:id", updatePurchase);
router.delete("/delete/:id", deletePurchase);
router.get("/getAll", allPurchase);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Purchase working");
});

export default router;
