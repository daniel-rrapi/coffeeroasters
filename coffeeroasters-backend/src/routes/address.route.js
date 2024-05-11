import express from "express";
import validateToken from "../middlewares/validateToken.middleware.js";
import {
  getAddresses,
  getAddressById,
  createNewAddress,
  getAllPersonalAddresses,
} from "../controllers/address.controller.js";
import validateAdmin from "../middlewares/validateAdminRole.middleware.js";

const router = express.Router();

router.get("/addresses", validateToken, validateAdmin, getAddresses);
router.get("/addresses/me", validateToken, getAllPersonalAddresses);
router.get("/addresses/:id", validateToken, getAddressById);
router.post("/addresses", validateToken, createNewAddress);

export default router;
