import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectDatabase } from "./database.js";
import { router as api } from "./routes.js";

export const app = express();

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

app.use(
  "/api",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      await connectDatabase();
      next();
    } catch (error) {
      console.error("MongoDB connection error:", error);
      res.status(503).json({
        success: false,
        message: "Database connection unavailable",
      });
    }
  },
  api,
);
