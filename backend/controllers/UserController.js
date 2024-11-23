import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const getUsers = async (req, res) => {
//   try {
//     const response = await User.findAll();
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getUsersById = async (req, res) => {
//   try {
//     const response = await User.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createUser = async (req, res) => {
//   try {
//     await User.create(req.body);
//     res.status(201).json({ msg: "User Created" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updateUser = async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "User Updated" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "User Deleted" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

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
  const { name, email, phone, password, confPassword } = req.body;
  if (password !== confPassword)
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
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email not found" });
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
