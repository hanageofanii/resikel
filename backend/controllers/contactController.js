import Contact from "../models/contact.js";

export const getContact = async (req, res) => {
  try {
    const response = await Contact.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createContact = async (req, res) => {
  console.log("Request Body:", req.body); // Log data request

  try {
    const { name, email, message } = req.body;

    // Validasi input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Semua kolom harus diisi!" });
    }

    await Contact.create({ name, email, message });
    res.status(201).json({});
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat menyimpan data kontak" });
  }
};
