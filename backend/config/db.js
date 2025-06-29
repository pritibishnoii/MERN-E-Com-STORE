import mongoose from "mongoose";

const connectDB = async (calback) => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log(`Database connection is successfull..🚀🚀💘❤️`);
    });
    calback();
  } catch (error) {
    console.log(`some database connections issues ${error}`);
  }
};

export default connectDB;
