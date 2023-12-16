import { Router } from "express";
import {
  createBlog,
  userBlog,
  fashion,
  lifestyle,
  travel,
  beauty,
  politics,
  trending,
  feature,
} from "../controller/blog-controller.js";

const router = Router();

router.route("/create").post(createBlog);

router.route("/user").post(userBlog);

router.route("/fashion").get(fashion);
router.route("/lifestyle").get(lifestyle);
router.route("/travel").get(travel);
router.route("/beauty").get(beauty);
router.route("/politics").get(politics);
router.route("/trending").get(trending);
router.route("/feature").get(feature);

export default router;
