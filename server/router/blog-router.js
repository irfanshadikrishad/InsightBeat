import { Router } from "express";
import { createBlog, userBlog } from "../controller/blog-controller.js";

const router = Router();

router.route("/create").post(createBlog);

router.route("/user").post(userBlog);

export default router;
