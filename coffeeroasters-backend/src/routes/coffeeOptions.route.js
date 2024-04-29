import express from "express";
import {
  createCoffeeOption,
  getAllCoffeeOptions,
} from "../controllers/coffeeOption.controller.js";
import validateAdmin from "../middlewares/validateAdminRole.middleware.js";
import validateToken from "../middlewares/validateToken.middleware.js";
const router = express.Router();

router.get("/coffees/options", getAllCoffeeOptions);
router.post(
  "/coffees/options",
  validateToken,
  validateAdmin,
  createCoffeeOption
);

export default router;
