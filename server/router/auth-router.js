import { registerSchema, loginSchema } from "../validators/auth-validator.js";
import validate from "../middleware/validate-middleware.js";
import { Router } from "express";
import register from "../controller/auth-controller.js";

const router = Router();

router.route("/register").post(validate(registerSchema), register);

export default router;
