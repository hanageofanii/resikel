import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Contact = db.define(
  "contact",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT,

    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // name: {
    //   type: Sequelize.STRING,
    // },
    // email: {
    //   type: Sequelize.STRING,
    // },
    // message: {
    //   type: Sequelize.TEXT,
    // },
  },
  {
    freezeTableName: true,
  }
);

export default Contact;

(async () => {
  await db.sync();
})();
