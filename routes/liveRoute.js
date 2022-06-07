import express from "express";
// files
import { create, calculations } from "../controllers/liveController.js";
import { verifyToken } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/create", create);
router.put("/calculations", calculations);

export default router;
