import { Router } from "express";
import {
  createBlog,
  userBlog,
  fashion,
  lifestyle,
  travel,
  beauty,
  politics,
  games,
  trending,
  feature,
  blogs,
  editorsPick,
  popular,
  count,
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
router.route("/games").get(games);
router.route("/feature").get(feature);
router.route("/blogs").get(blogs);
router.route("/editorspick").get(editorsPick);
router.route("/popular").get(popular);
router.route("/count").get(count);

export default router;
