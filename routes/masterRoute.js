import express from "express";
import { store, getAll, mergeData } from "../controllers/masterController.js";

const router = express.Router();

router.post("/create", store);
router.get("/getAll", getAll);
router.get("/merged", mergeData);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Master SKU working");
});
export default router;
