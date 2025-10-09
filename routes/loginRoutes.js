import express from "express";
import { loginController } from "../controllers/loginController.js";
import { registerController } from "../controllers/registrationController.js";
import { validateLogin, validateRegistration } from "../validators/auth_input.js";

const router = express.Router();

router.post("/api/login", validateLogin, loginController);
router.post("/api/register", validateRegistration, registerController);

export default router;