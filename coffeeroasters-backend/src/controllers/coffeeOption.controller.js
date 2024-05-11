import coffeeOptionModel from "../models/coffeeOption.model.js";

const getAllCoffeeOptions = async (req, res) => {
  try {
    const allCoffeeOptions = await coffeeOptionModel.find({});
    if (allCoffeeOptions) {
      return res.status(200).json(allCoffeeOptions);
    } else {
      return res
        .status(400)
        .json({ message: "Something went wrong, try again" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createCoffeeOption = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newCoffeeOption = await coffeeOptionModel.create({
      name,
      description,
    });
    if (newCoffeeOption) {
      return res.status(201).json(newCoffeeOption);
    } else {
      return res
        .status(400)
        .json({ message: "Something went wrong, try again" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export { getAllCoffeeOptions, createCoffeeOption };
