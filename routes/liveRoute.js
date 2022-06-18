import express from "express";
// files
import { create, getAll, deleteList } from "../controllers/liveController.js";

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);
router.delete("/delete", deleteList);

export default router;
