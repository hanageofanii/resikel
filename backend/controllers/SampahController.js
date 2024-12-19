import { Op } from "sequelize";
import Sampah from "../models/SampahModel.js";
import Users from "../models/UserModel.js";

export const getSampah = async (req, res) => {
  try {
    const response = await Sampah.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addSampah = async (req, res) => {
  console.log("Request Body:", req.body); // Log data request

  try {
    const { email, jenis, berat } = req.body;

    if (!email || !jenis || !berat) {
      return res.status(400).json({ error: "Semua kolom harus diisi!" });
    }

    const sampah = await Sampah.create({ email, jenis, berat });

    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    const newPoints = user.points + berat * 5000;

    await user.update({ points: newPoints });

    res.status(201).json({
      message: "Data sampah berhasil disimpan dan poin diperbarui",
      sampah: {
        id: sampah.id,
        email: sampah.email,
        jenis: sampah.jenis,
        berat: sampah.berat,
      },
      user: {
        id: user.id,
        email: user.email,
        points: newPoints,
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Terjadi kesalahan pada server",
      details: error.message,
    });
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
