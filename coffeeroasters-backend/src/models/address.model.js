import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  address_line1: {
    type: String,
    required: true,
  },
  address_line2: String,
  city: {
    type: String,
    required: true,
  },
  postal_code: {
    type: Number,
    required: true,
  },
  state_province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone_number: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.model("Address", addressSchema);
