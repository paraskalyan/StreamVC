import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};
