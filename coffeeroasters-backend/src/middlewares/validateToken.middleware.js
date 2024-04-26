import { json } from "express";
import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(400).json({ message: "Token not valid!" });
        req.decoded = decoded;
        next();
      });
    } else {
      return res
        .status(400)
        .json({ message: "Please put the token in the header request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default validateToken;
