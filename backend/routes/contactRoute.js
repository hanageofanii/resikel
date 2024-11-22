import express from "express";
import {
  createContact,
  deleteContact,
  getContact,
  getContactById,
  updateContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/contact", getContact);
router.get("/contact/:id", getContactById);
router.post("/contact", createContact);
router.patch("/contact/:id", updateContact);
router.delete("/contact/:id", deleteContact);

export default router;
