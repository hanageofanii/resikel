import Sampah from "../models/SampahModel.js";

export const getSampah = async (req, res) => {
  try {
    // const { nama, jenis, berat } = req.body;
    // const newSampah = await Sampah.create({ nama, jenis, berat });
    // res.status(201).json(newSampah);
    const response = await Sampah.findAll();
    res.status(200).json(response);
  } catch (error) {
    // console.error(error);
    // res
    //   .status(500)
    //   .json({ message: "Terjadi kesalahan saat menyimpan data sampah" });
    console.log(error.message);
  }
};

export const getSampahById = async (req, res) => {
  try {
    const response = await Sampah.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSampah = async (req, res) => {
  try {
    await Sampah.create(req.body);
    res.status(201).json({ msg: "Sampah Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSampah = async (req, res) => {
  try {
    await Sampah.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Sampah Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSampah = async (req, res) => {
  try {
    await Sampah.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Sampah Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

// export default {
//   createSampah,
// };
