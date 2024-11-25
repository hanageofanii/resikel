import Sampah from "../models/SampahModel.js";

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
