import mongoose from "mongoose";
// Connect to MongoDb
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/Brandisby`);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};
export default connectDB;
