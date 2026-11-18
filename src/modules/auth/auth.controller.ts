import { Request, Response } from "express";
import { authService } from "./auth.service.js";

const login = (req: Request, res: Response): void => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required fields",
      });
      return;
    }

    const user = authService.login({ email, password });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    res.status(401).json({
      success: false,
      message: errorMessage,
    });
  }
};

export const authController = {
  login,
};
