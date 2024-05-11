import express from "express";
import {
  getAllCoffees,
  createCoffee,
} from "../controllers/coffee.controller.js";
import validateToken from "../middlewares/validateToken.middleware.js";
import validateAdmin from "../middlewares/validateAdminRole.middleware.js";

const router = express.Router();

router.get("/coffees", getAllCoffees);
router.post("/coffees", validateToken, validateAdmin, createCoffee);

export default router;
