import express from "express";
import {
  createArticles,
  deleteArticles,
  getArticles,
  getArticlesById,
  updateArticles,
} from "../controllers/ArticleController.js";
import upload from "../middleware/Upload.js";

const router = express.Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticlesById);
router.post("/articles", upload.single("image"), createArticles);
router.patch("/articles/:id", upload.single("image"), updateArticles);
router.delete("/articles/:id", deleteArticles);

export default router;
