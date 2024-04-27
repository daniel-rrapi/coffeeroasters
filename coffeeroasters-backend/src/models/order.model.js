import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "User",
    },
    address: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Address",
    },
  },
  {
    timestamps: true,
  }
);
