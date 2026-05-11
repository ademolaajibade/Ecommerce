import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () => {
  console.log("came inside connectDB");
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("error in connecting to database");
      console.log(err);
    });

  console.log("Finished into DB");
};
