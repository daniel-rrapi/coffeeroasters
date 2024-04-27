import express from "express";
import validateToken from "../middlewares/validateToken.middleware.js";
import {
  getAddresses,
  createNewAddress,
} from "../controllers/address.controller.js";

const router = express.Router();

router.get("/addresses", validateToken, getAddresses);
router.post("/addresses", validateToken, createNewAddress);

export default router;
