import express from "express";
import {
  registerUser,
  loginUser,
  currentUser,
} from "../controllers/user.controller.js";
import validateToken from "../middlewares/validateToken.middleware.js";
import validateAdmin from "../middlewares/validateAdminRole.middleware.js";

const router = express.Router();

router.post("/auth/register", registerUser);

router.post("/auth/login", loginUser);

router.get("/auth/me", validateToken, validateAdmin, currentUser);

export default router;
