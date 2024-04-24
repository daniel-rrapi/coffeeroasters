import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add the firstName"],
    },
    lastName: {
      type: String,
      required: [true, "Please add the lastName"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add the email"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
