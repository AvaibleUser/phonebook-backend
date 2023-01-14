import mongoose from "mongoose";
import { config } from "dotenv";

config();

const url = process.env.MONGODB_URI;

try {
  mongoose.connect(url);
  console.log("connected to MongoDB");
} catch (error) {
  console.log("error connecting to MongoDB:", error.message);
}

export default undefined;