import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Article = db.define(
  "articles",
  {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    altText: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Article;

(async () => {
  await db.sync();
})();
