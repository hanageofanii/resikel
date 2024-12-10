import express from "express";
import { createContact } from "../controllers/contactController.js";
import db from "../config/Database.js";

const router = express.Router();

router.post("/contact", createContact);

router.get("/contact", async (req, res) => {
  try {
    const [contactData] = await db.query("SELECT * FROM contact");
    res.json(contactData); // Kirimkan data feedback kontak dalam format JSON
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving contact data", error: err });
  }
});

export default router;
