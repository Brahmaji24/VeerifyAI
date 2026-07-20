import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;
let connectionPromise: Promise<typeof mongoose> | null = null;

export const connectDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(mongoUri).catch((error) => {
      connectionPromise = null;
      throw error;
    });
  }

  return connectionPromise;
};
