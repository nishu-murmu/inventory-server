import express from "express";
import { store, getAll } from "../controllers/masterController.js";

const router = express.Router();

router.post("/store", store);
router.get("/getAll", getAll);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Master SKU working");
});
export default router;
