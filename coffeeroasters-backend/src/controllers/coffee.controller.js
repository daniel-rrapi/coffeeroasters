import Coffee from "../models/coffee.model.js";

const getAllCoffees = async (req, res) => {
  try {
    const allCoffees = await Coffee.find();
    res.status(200).json(allCoffees);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createCoffee = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const coffee = await Coffee.create({
      name,
      description,
    });
    if (coffee) {
      return res.status(201).json(coffee);
    } else {
      res.status(400).json({ message: "Coffee data is not valid!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export { getAllCoffees, createCoffee };
