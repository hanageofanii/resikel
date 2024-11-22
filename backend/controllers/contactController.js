import Contact from "../models/contact.js";

export const getContact = async (req, res) => {
  try {
    // const { name, email, message } = req.body;
    // const newContact = await Contact.create({ name, email, message });
    // res.status(201).json(newContact);

    const response = await Contact.findAll();
    res.status(200).json(response);
  } catch (error) {
    // console.error(error);
    // res
    //   .status(500)
    //   .json({ message: "Terjadi kesalahan saat menyimpan data kontak" });

    console.log(error.message);
  }
};

export const getContactById = async (req, res) => {
  try {
    const response = await Contact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(201).json({ msg: "Contact Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateContact = async (req, res) => {
  try {
    await Contact.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Contact Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Contact Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

// export default createContact;
