import express from "express";
import registerUser from "../controllers/user.controller.js";

const router = express.Router();

router.post("/auth/register", registerUser);

router.post("/auth/login");

router.post("/auth/me");

export default router;
