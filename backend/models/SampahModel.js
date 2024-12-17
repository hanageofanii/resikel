import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Sampah = db.define(
  "sampah",
  {
    name: DataTypes.STRING,
    jenis: DataTypes.STRING,
    berat: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Sampah;

(async () => {
  await db.sync();
})();
