import mongoose from "mongoose";
// Connect to MongoDb
const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/Brandisby`);
  console.log("Database Connected");
};
export default connectDB;
