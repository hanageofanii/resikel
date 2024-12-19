import express from "express";
import {
  addSampah,
  getSampah,
  getSampahStats,
} from "../controllers/SampahController.js";

const router = express.Router();

router.get("/sampah", getSampah);
router.post("/sampah", addSampah);
router.get("/sampah/stats", getSampahStats);

export default router;
