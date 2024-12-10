import express from "express";
import { createSampah } from "../controllers/SampahController.js";
import db from "../config/Database.js";

const router = express.Router();

router.post("/sampah", createSampah);

router.get("/sampah", async (req, res) => {
  try {
    const [sampah] = await db.query("SELECT * FROM sampah");
    res.json(sampah); // Kirimkan data sampah dalam format JSON
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving sampah data", error: err });
  }
});

export default router;
