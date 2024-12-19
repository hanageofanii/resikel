import express from "express";
import {
  addSampahAndPoints,
  getUserPoints,
  redeemPoints,
} from "../controllers/PointController.js";

const router = express.Router();

router.get("/points/:email", getUserPoints);
router.post("/sampah", addSampahAndPoints);
router.post("/redeem", redeemPoints);

export default router;
