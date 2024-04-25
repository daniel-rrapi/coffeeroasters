import express from "express";
import dbConnection from "./config/datebase.config.js";
import userRouter from "./routes/user.route.js";
import "dotenv/config.js";
const app = express();

app.use(express.json()); // Setting json as default requests

app.use("/", userRouter);

dbConnection();

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
