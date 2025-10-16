import { Router } from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/user.auth.controller.js";
import { registerSchema } from "../validators/userRegister.js";
import { loginSchema } from "../validators/userLogin.js";
import { validateRequest } from "../middlewares/validator.js";

const authRouter = Router();
authRouter.post("/auth/sign-up", validateRequest(registerSchema), registerUser);
authRouter.post("/auth/sign-in", validateRequest(loginSchema), loginUser);

export default authRouter;
