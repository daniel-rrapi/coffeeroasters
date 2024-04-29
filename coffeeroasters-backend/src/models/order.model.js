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
    selectedOptions: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "CoffeeOption",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
