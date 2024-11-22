import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Sampah = db.define(
  "sampah",
  {
    name: DataTypes.STRING,
    jenis: DataTypes.STRING,
    berat: DataTypes.INTEGER,

    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // nama: {
    //   type: Sequelize.STRING,
    // },
    // jenis: {
    //   type: Sequelize.STRING,
    // },
    // berat: {
    //   type: Sequelize.INTEGER,
    // },
  },
  {
    freezeTableName: true,
  }
);

export default Sampah;

(async () => {
  await db.sync();
})();
