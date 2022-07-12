import express from "express";
import {
  store,
  getAll,
  mergeData,
  groupsku,
} from "../controllers/masterController.js";

const router = express.Router();

router.post("/create", store);
router.get("/getAll", getAll);
router.put("/groupedsku", groupsku);
router.get("/merged", mergeData);
// troubleshooting
router.get("/", (req, res) => {
  res.send("Master SKU working");
});
export default router;
