import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";
import { notFound } from "./middleware/notFound.js";
import { globalError } from "./middleware/globalErrorHandler.js";

export const app: Application = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse Cookie header and populate req.cookies
app.use(cookieParser());

// Mount application module routes under /api/v1
app.use("/api/v1", routes);

// Base health check route
app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Server is running on port 5000",
  });
});

// Fallback 404 Not Found handler
app.use(notFound);

// Centralized Global Error Handler
app.use(globalError);
