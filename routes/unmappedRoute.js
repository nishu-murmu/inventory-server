import express from "express";

// files
import { create, getAll } from "../controllers/unmappedController.js";

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);

export default router;
