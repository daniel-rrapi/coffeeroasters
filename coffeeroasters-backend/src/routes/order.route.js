import express from "express";
import validateToken from "../middlewares/validateToken.middleware.js";
import {
  getAllOrders,
  getAllPersonalOrders,
} from "../controllers/order.controller.js";
import validateAdmin from "../middlewares/validateAdminRole.middleware.js";

const router = express.Router();

router.get("/orders/me", validateToken, getAllPersonalOrders);
router.get("/orders", validateToken, validateAdmin, getAllOrders);
router.post("/orders", validateToken);

export default router;
