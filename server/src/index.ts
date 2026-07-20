import "dotenv/config";
import dns from "node:dns";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router as api } from "./routes";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:8080",
  "https://veerify-ai-frontend.vercel.app",
  "https://veerify-ai-ashy.vercel.app",
  "https://api.veerifyai.com",
  "https://veerifyai.com",
  "https://www.veerifyai.com",
  "https://veerify-ai-three.vercel.app",
  "https://*.vercel.app",
];

if (process.env.FRONTEND_URL) {
  const frontendUrl = process.env.FRONTEND_URL.replace(/\/$/, "");
  if (!allowedOrigins.includes(frontendUrl)) {
    allowedOrigins.push(frontendUrl);
  }
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      const isAllowed = allowedOrigins.some((allowedOrigin) => {
        if (allowedOrigin.includes("*")) {
          const pattern = `^${allowedOrigin
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            .replace("\\*", ".*")}$`;
          return new RegExp(pattern).test(origin);
        }
        return allowedOrigin === origin;
      });

      return isAllowed
        ? callback(null, true)
        : callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({
    message: "VeerifyAI API",
    version: "1.0.0",
    status: "running",
    endpoints: {
      health: "/api/health",
      demoRequests: "/api/demo-requests",
    },
  });
});

app.use("/api", api);

const port = Number.parseInt(process.env.PORT || "4001", 10);
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/veerifyai";

const connectDB = async () => {
  await mongoose.connect(mongoUri);
  console.log("MongoDB connected successfully");
};

const startServer = async () => {
  console.log(`Starting server on port: ${port}`);
  await connectDB();
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
