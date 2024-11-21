import Sequelize from "sequelize";
import db from "../config/Database";

const Contact = db.define("contact", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.TEXT,
  },
});

export default Contact;
