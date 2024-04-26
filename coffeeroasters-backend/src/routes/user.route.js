import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/auth/register", registerUser);

router.post("/auth/login", loginUser);

router.post("/auth/me");

export default router;
