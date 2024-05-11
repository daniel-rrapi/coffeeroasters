import orderModel from "../models/order.model.js";

const getAllPersonalOrders = async (req, res) => {
  try {
    const userId = req.decoded.user._id;
    const orders = await orderModel
      .find({ user: userId })
      .populate([
        { path: "coffeeSelections.coffeeField" },
        { path: "coffeeSelections.selectedOption" },
        { path: "address" },
        { path: "user", select: "-password" },
      ]);
    if (orders) {
      return res.status(200).json(orders);
    } else {
      return res.status(400).json({ message: "Please try again" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}).populate();
    if (orders) {
      return res.status(200).json(orders);
    } else {
      return res.status(400).json({ message: "Please try again" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createOrder = async (req, res) => {
  try {
    const { address, coffeeSelections } = req.body;
    if (!address || !coffeeSelections) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const userId = req.decoded.user._id;
    const newOrder = await orderModel.create({
      user: userId,
      address,
      coffeeSelections,
    });
    if (newOrder) {
      return res.status(201).json(newOrder);
    } else {
      return res.status(400).json({ message: "Please try again" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export { getAllOrders, getAllPersonalOrders, createOrder };
