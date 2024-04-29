import mongoose from "mongoose";
import coffeeOptionSchema from "./coffeeOption.model.js";

const coffeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please put a name"],
  },
  title: {
    type: String,
    required: [true, "Please put a title"],
  },
  options: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "CoffeeOption",
    required: true,
    validate: [arrayLimit, "Path exceeds the limit of 3"],
  },
});

function arrayLimit(val) {
  return val.length <= 3;
}

export default mongoose.model("Coffee", coffeeSchema);
