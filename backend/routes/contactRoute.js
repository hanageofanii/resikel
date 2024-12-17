import express from "express";
import { createContact, getContact } from "../controllers/contactController.js";

const router = express.Router();

router.get("/contact", getContact);
router.post("/contact", createContact);

export default router;
