import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app: Application = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse Cookie header and populate req.cookies
app.use(cookieParser());
