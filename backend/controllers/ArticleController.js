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
    await Articles.create(req.body);
    res.status(201).json({ msg: "Article Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateArticles = async (req, res) => {
  try {
    await Articles.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Article Updated" });
  } catch (error) {
    console.log(error.message);
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
