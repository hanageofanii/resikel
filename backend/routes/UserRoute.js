import express from "express";
import {
  // createUser,
  // deleteUser,
  getUsers,
  Register,
  Login,
  Logout,
  // getUsersById,
  // updateUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
// router.get("/users/:id", getUsersById);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.post("/logout", Logout);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
