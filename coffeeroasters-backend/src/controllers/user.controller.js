import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return res.status(400).json({ message: "Email already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).json({ id: user.id, email: user.email });
    } else {
      return res.status(400).json({ message: "User data is not valid" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.status(200).json({ accessToken });
    } else {
      return res
        .status(400)
        .json({ message: "Email or password is not valid" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const currentUser = (req, res) => {
  res.status(200).json(req.decoded);
};

export { registerUser, loginUser, currentUser };
