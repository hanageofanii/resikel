import express from "express";
import {
  createArticles,
  deleteArticles,
  getArticles,
  getArticlesById,
  updateArticles,
} from "../controllers/ArticleController.js";

const router = express.Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticlesById);
router.post("/articles", createArticles);
router.patch("/articles/:id", updateArticles);
router.delete("/articles/:id", deleteArticles);

export default router;
