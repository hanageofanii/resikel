import express from "express";
import {
  // sampahController
  createSampah,
  deleteSampah,
  getSampah,
  getSampahById,
  updateSampah,
} from "../controllers/SampahController.js";

const router = express.Router();

router.get("/sampah", getSampah);
router.get("/sampah/:id", getSampahById);
router.post("/sampah", createSampah);
router.patch("/sampah/:id", updateSampah);
router.delete("/sampah/:id", deleteSampah);

// router.post("/sampah", sampahController.createSampah);

export default router;
