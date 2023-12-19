import { registerSchema, loginSchema } from "../validators/auth-validator.js";
import validate from "../middleware/validate-middleware.js";
import { Router } from "express";
import register, {
  login,
  user,
  editUser,
  userInspect,
} from "../controller/auth-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = Router();

router.route("/register").post(validate(registerSchema), register);
router.route("/login").post(validate(loginSchema), login);

router.route("/user").get(authMiddleware, user);
router.route("/edit").patch(authMiddleware, editUser);
router.route("/userinspect").post(userInspect);

export default router;
