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
const coffeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please put a name"],
  },
  title: {
    type: String,
    required: [true, "Please put a title"],
  },
  options: [coffeeOptionSchema],
});

export default mongoose.model("Coffee", coffeeSchema);
