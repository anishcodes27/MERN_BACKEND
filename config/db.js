import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb://newadmin:123456@localhost:27017/merndatabase?authSource=admin"
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1);
  }
};

export default dbConnect;