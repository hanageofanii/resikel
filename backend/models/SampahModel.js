import Sequelize from "sequelize";
import db from "../config/Database";

const Sampah = db.define("sampah", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: Sequelize.STRING,
  },
  jenis: {
    type: Sequelize.STRING,
  },
  berat: {
    type: Sequelize.INTEGER,
  },
});

export default Sampah;
