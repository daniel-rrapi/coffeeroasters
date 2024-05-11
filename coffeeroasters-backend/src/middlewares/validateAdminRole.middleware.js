const validateAdmin = async (req, res, next) => {
  try {
    const decoded = req.decoded;
    if (decoded.user.role === "admin") {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden. Please contact an admin" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default validateAdmin;
