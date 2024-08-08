// Import
import mongoose from "mongoose";

// Create DataBase
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected DataBase Successfully`);
  } catch (error) {
    console.log(`Failed to Connect DataBase!`);
  }
};

// Export
export default connectDB;
