import { Router } from "express";
import { authController } from "./auth.controller.js";
import { UserValidation } from "./auth.validate.js";
import validateRequest from "../../middleware/validateRequest.js";

const router: Router = Router();

router.post("/login", authController.login);
router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  authController.registerUser
);

export const authRouter = router;
