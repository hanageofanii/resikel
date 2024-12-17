import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Article = db.define(
  "articles",
  {
    ctg: DataTypes.STRING,
    title: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    altText: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    src: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Article;

(async () => {
  await db.sync();
})();
