import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//Register
export const Register = async (req, res) => {
  const { name, email, phone, password, repeatPassword } = req.body;
  if (password !== repeatPassword)
    return res.status(400).json({ msg: "Passwords don't match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name: name,
      email: email,
      phone: phone,
      password: hashPassword,
    });
    res.json({ msg: "User created" });
  } catch (error) {
    console.log(error);
  }
};

//Login
export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
    }

    // Cek password dengan bcrypt
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Password salah" });

    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const points = user.points;

    // Buat access token dan refresh token
    const accessToken = jwt.sign(
      { userId, name, email, points },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );
    const refreshToken = jwt.sign(
      { userId, name, email, points },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    // Update refresh token di database
    await Users.update(
      { refresh_token: refreshToken },
      { where: { id: userId } }
    );

    // Simpan refresh token di cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login berhasil",
      user: {
        id: userId,
        name: name,
        email: email,
        points: points,
        accessToken: accessToken,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan pada server", error });
  }
};

//Logout
export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_Token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const Delete = async (req, res) => {
  const { id } = req.params; // Ambil ID dari parameter URL
  try {
    const result = await Users.destroy({
      where: { id: id },
    });

    if (result === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: `User with ID ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
