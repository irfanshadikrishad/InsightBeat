import { Router } from "express";
import {
  createBlog,
  userBlog,
  fashion,
  lifestyle,
  travel,
  beauty,
  politics,
} from "../controller/blog-controller.js";

const router = Router();

router.route("/create").post(createBlog);

router.route("/user").post(userBlog);

router.route("/fashion").get(fashion);
router.route("/lifestyle").get(lifestyle);
router.route("/travel").get(travel);
router.route("/beauty").get(beauty);
router.route("/politics").get(politics);

export default router;
