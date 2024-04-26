import express from "express";
import { getAllCoffees, createCoffee } from "../controllers/coffee.controller";

const router = express.Router();

router.get("/coffees", getAllCoffees);
router.post("/coffees", createCoffee);
