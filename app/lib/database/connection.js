const mongoose = require("mongoose");

// Keep track of the database connection state
let isConnected = false;

export const connectToDb = async () => {
  if (isConnected) {
    console.log("Using existing database connection.");
    return;
  }

  try {
    const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.3a6xn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    // Attempt connection
    const db = await mongoose.connect(url, {
      serverSelectionTimeoutMS: 5000, // Timeout if MongoDB is unresponsive
      socketTimeoutMS: 45000, // Keep socket alive for 45 seconds
    });

    isConnected = db.connections[0].readyState === 1; // Set connection state
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};
