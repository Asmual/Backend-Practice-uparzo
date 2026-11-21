import { Request, Response } from "express";
import { authService } from "./auth.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { catchAsync } from "../../utils/catchAsync.js";

const login = catchAsync((req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = authService.login({ email, password });
  ApiResponse.success(res, result, "Login successful");
});

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.registerUser(req.body);
  ApiResponse.success(res, result, "Register successful");
});

export const authController = {
  login,
  registerUser,
};
