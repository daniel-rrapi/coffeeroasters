import Address from "../models/address.model.js";

const getAddresses = async (req, res) => {
  try {
    const userId = req.decoded.user._id;
    const addresses = await Address.find({ user: userId });
    return res.status(200).json({ addresses });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAddressById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Please insert the id" });
    }
    const userId = req.decoded.user._id;
    const address = await Address.findById(id);
    if (
      address &&
      (address.user.toString() === userId || req.decoded.user.role === "admin")
    ) {
      return res.status(200).json(address);
    } else if (!address && req.decoded.user.role !== "admin") {
      return res
        .status(400)
        .json({ message: "Address not found for the current user" });
    } else {
      return res.status(400).json({ message: "Address not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAllPersonalAddresses = async (req, res) => {
  try {
    const userId = req.decoded.user._id;
    const addresses = await Address.find({
      user: userId,
    }).populate();
    if (addresses) {
      return res.status(200).json(addresses);
    } else {
      return res.status(400).json({
        message: "Please try again",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createNewAddress = async (req, res) => {
  try {
    const {
      fullname,
      address_line1,
      address_line2,
      city,
      postal_code,
      state_province,
      country,
      phone_number,
    } = req.body;
    const userId = req.decoded.user._id;
    if (
      !fullname ||
      !address_line1 ||
      !city ||
      !postal_code ||
      !state_province ||
      !country
    ) {
      return res.status(400).json({ message: "Requested required fields" });
    }
    const newAddress = await Address.create({
      fullname,
      address_line1,
      address_line2: address_line2,
      city,
      postal_code,
      state_province,
      country,
      phone_number: phone_number,
      user: userId,
    });
    if (newAddress) {
      return res.status(201).json(newAddress);
    } else {
      return res
        .status(500)
        .json({ message: "Something went wrong! Please try later" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export {
  getAddresses,
  getAddressById,
  createNewAddress,
  getAllPersonalAddresses,
};
