import { Schema, model } from "mongoose";

const createSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = model("Blog", createSchema);

export default Blog;
