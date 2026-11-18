import { Router } from "express";
import { authController } from "./auth.controller.js";

const router: Router = Router();

// Handle login endpoint
router.post("/login", authController.login);

export const authRouter = router;
