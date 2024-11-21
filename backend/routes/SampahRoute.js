import express from "express";
import sampahController from "../controllers/SampahController";

const router = express.Router();

router.post("/sampah", sampahController.createSampah);

export default router;
