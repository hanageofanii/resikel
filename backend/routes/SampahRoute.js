import express from "express";
import { createSampah } from "../controllers/SampahController.js";

const router = express.Router();

router.post("/sampah", createSampah);

export default router;
