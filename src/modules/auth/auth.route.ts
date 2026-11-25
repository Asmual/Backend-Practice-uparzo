import { Router } from "express";
import { authController } from "./auth.controller.js";
import { UserValidation } from "./auth.validate.js";
import validateRequest from "../../middleware/validateRequest.js";
import { upload } from "../../middleware/r2_middelware.js";

const router: Router = Router();

router.post("/login", authController.login);
router.post(
  "/register",
  upload.single("avatar"),
  validateRequest(UserValidation.createUserValidationSchema),
  authController.registerUser
);

export const authRouter = router;
