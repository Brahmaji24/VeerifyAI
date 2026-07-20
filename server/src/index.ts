import "dotenv/config";
import dns from "node:dns";
import mongoose from "mongoose";
import { app } from "./app.js";
import { connectDatabase } from "./database.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const port = Number.parseInt(process.env.PORT || "4001", 10);

const startServer = async () => {
  console.log(`Starting server on port: ${port}`);
  await connectDatabase();
  console.log("MongoDB connected successfully");
  app.listen(port, "0.0.0.0", () => {
    console.log(`API server running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });
};

const shutdown = async (signal: string) => {
  console.log(`${signal} received, shutting down gracefully`);
  await mongoose.connection.close();
  process.exit(0);
};

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
