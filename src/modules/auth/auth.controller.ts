import { Request, Response } from "express";
import { authService } from "./auth.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const login = catchAsync((req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = authService.login({ email, password });
  ApiResponse.success(res, result, "Login successful");
});

export const authController = {
  login,
};
