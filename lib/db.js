import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("DB error:", error);
        throw error;
    }
};