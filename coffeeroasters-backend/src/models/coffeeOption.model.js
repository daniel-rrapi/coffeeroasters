import mongoose from "mongoose";

const coffeeOptionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please put a name"],
  },
  description: {
    type: String,
    required: [true, "Please put a description"],
  },
});

export default mongoose.model("CoffeeOption", coffeeOptionSchema);
