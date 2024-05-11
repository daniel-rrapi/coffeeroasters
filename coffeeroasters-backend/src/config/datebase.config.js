import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Connection to the database failed", error);
    });
};

export default dbConnection;
