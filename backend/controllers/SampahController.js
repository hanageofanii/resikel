import Sampah from "../models/SampahModel";

const createSampah = async (req, res) => {
  try {
    const { nama, jenis, berat } = req.body;
    const newSampah = await Sampah.create({ nama, jenis, berat });
    res.status(201).json(newSampah);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menyimpan data sampah" });
  }
};

export default {
  createSampah,
};
