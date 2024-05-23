import express from "express";
import dbConnection from "./config/datebase.config.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import coffeeRouter from "./routes/coffee.route.js";
import addressRouter from "./routes/address.route.js";
import coffeeOptionRouter from "./routes/coffeeOptions.route.js";
import orderRouter from "./routes/order.route.js";
import "dotenv/config.js";
const app = express();

app.use(express.json()); // Setting json as default requests
app.use(cors());

app.use("/", userRouter);
app.use("/", coffeeRouter);
app.use("/", addressRouter);
app.use("/", coffeeOptionRouter);
app.use("/", orderRouter);

dbConnection();

app.listen(10000, () => {
  console.log("Server running on 10000 port");
});
