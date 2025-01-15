import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("MongoDB connection established successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("MongoDB connection disconnected");
        });

        await mongoose.connect(process.env.MONGODB_URI); // No options needed
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application if connection fails
    }
};

export default connectDB;

{/*mongoose.connection.on('connected',()=>{
    console.log("connection established");})
await mongoose.connect(`${process.env.MONGODB_URI}/musicify`);*/}