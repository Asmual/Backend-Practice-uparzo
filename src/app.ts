import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route.js";

export const app: Application = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse Cookie header and populate req.cookies
app.use(cookieParser());

// Mount application module routes
app.use("/auth", authRouter);

// Base health check route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running smoothly",
  });
});

// Fallback 404 Not Found route handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    error: {
      path: req.originalUrl,
      message: "The requested path was not found on this server.",
    },
  });
});
