import express from "express";
import validateToken from "../middlewares/validateToken.middleware.js";
import createNewAddress from "../controllers/address.controller.js";

const router = express.Router();

router.post("/addresses", validateToken, createNewAddress);

export default router;
