import mongoose from "mongoose";

const coffeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please put a name"],
  },
  description: {
    type: String,
    required: [true, "Please put a description"],
  },
});

export default mongoose.model("Coffee", coffeeSchema);
