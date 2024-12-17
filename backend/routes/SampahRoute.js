import express from "express";
import {
  createSampah,
  getSampah,
  getSampahStats,
} from "../controllers/SampahController.js";

const router = express.Router();

router.get("/sampah", getSampah);
router.post("/sampah", createSampah);
router.get("/sampah/stats", getSampahStats);

export default router;
