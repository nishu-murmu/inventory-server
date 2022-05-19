import express from "express";
import { store, getAll } from "../controllers/masterController.js";

const router = express.Router();

router.post("/store", store);
router.get("/getall", getAll);

export default router;
