import Articles from "../models/ArticleModel.js";

export const getArticles = async (req, res) => {
  try {
    const response = await Articles.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getArticlesById = async (req, res) => {
  try {
    const response = await Articles.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createArticles = async (req, res) => {
  try {
    const { title, desc, altText, author, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    await Articles.create({ title, desc, imageUrl, altText, author, content });
    res.status(201).json({ msg: "Article Created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateArticles = async (req, res) => {
  try {
    const { title, desc, altText, author, content } = req.body;

    const article = await Articles.findOne({
      where: { id: req.params.id },
    });

    if (!article) return res.status(404).json({ msg: "Article not found" });

    const imageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : article.imageUrl;

    await Articles.update(
      { title, desc, imageUrl, altText, author, content },
      { where: { id: req.params.id } }
    );

    res.status(200).json({ msg: "Article Updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error updating article" });
  }
};

export const deleteArticles = async (req, res) => {
  try {
    await Articles.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Article Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
