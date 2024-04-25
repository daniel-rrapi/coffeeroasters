import User from "../models/user.model.js";
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
  } catch (error) {}
};
