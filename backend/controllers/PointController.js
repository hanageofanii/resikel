import Sampah from "../models/SampahModel.js";
import Users from "../models/UserModel.js";

// Ambil poin total pengguna berdasarkan email
export const getUserPoints = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.params.email } });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ totalPoints: user.total_points });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan sampah dan perbarui poin pengguna berdasarkan email
export const addSampahAndPoints = async (req, res) => {
  try {
    const { name, jenis, berat, email } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const newPoints = berat * 5000; // Hitung poin dari berat sampah
    user.total_points += newPoints; // Tambahkan poin ke total pengguna
    await user.save();

    await Sampah.create({ name, jenis, berat, userId: user.id });
    res
      .status(201)
      .json({
        message: "Sampah added and points updated",
        totalPoints: user.total_points,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tukarkan poin berdasarkan email
export const redeemPoints = async (req, res) => {
  try {
    const { email, cost } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.total_points < cost) {
      return res.status(400).json({ message: "Insufficient points" });
    }

    user.total_points -= cost;
    await user.save();
    res
      .status(200)
      .json({
        message: "Points redeemed successfully",
        totalPoints: user.total_points,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
