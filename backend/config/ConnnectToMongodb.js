import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL).then(() => {
      console.log("Connected to db");
    });
  } catch (e) {
    console.log("error conneting to mongodb", error);
  }
};

export default connectToMongodb;
