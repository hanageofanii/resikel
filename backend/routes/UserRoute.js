import express from "express";
import db from "../config/Database.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  Delete,
  // createUser,
  // deleteUser,
  getUsers,
  Login,
  Logout,
  Register,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
// router.get("/users/:id", getUsersById);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.post("/logout", Logout);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);
router.delete("/users/:id", Delete);

router.get("/all-users", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error: err });
  }
});

export default router;
