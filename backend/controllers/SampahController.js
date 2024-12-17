import { Op } from "sequelize";
import Sampah from "../models/SampahModel.js";

export const getSampah = async (req, res) => {
  try {
    const response = await Sampah.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSampah = async (req, res) => {
  console.log("Request Body:", req.body); // Log data request

  try {
    const { name, jenis, berat } = req.body;

    // Validasi input
    if (!name || !jenis || !berat) {
      return res.status(400).json({ error: "Semua kolom harus diisi!" });
    }

    await Sampah.create({ name, jenis, berat });
    res.status(201).json({});
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat menyimpan data kontak" });
  }
};

export const getSampahStats = async (req, res) => {
  try {
    // Ambil total berat untuk setiap jenis sampah
    const totalBerat = await Sampah.sum("berat");
    const organik = await Sampah.sum("berat", {
      where: { jenis: "Organik" },
    });
    const anorganik = await Sampah.sum("berat", {
      where: {
        jenis: {
          [Op.not]: "Organik", // Semua selain organik
        },
      },
    });

    // Hitung persentase
    const organikPercentage = Math.round((organik / totalBerat) * 100);
    const anorganikPercentage = Math.round((anorganik / totalBerat) * 100);

    // Kirim data ke frontend
    res.json({
      organik: organikPercentage,
      anorganik: anorganikPercentage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
