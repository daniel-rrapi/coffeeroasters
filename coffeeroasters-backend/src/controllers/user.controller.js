import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400).json({ message: "Email already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ id: user.id, email: user.email });
    } else {
      res.status(400).json({ message: "User data is not valid" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default registerUser;
