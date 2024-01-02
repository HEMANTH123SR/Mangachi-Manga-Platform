import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("worked");
    }
  } catch (err) {
    console.log("connect mongo error", err);
  }
};

export default connectMongo