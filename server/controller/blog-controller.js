import chalk from "chalk";
import Blog from "../models/blog-model.js";

const createBlog = async (req, res) => {
  try {
    const { title, body, image, category, author } = await req.body;
    const blog = new Blog({ title, body, image, category, author });
    const savedBlog = await blog.save();
    console.log(chalk.cyan(`created ${savedBlog._id}`));
    res.status(201).json({ message: "Blog Posted" });
  } catch (error) {
    console.log(chalk.magenta(`[blog-controller] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const userBlog = async (req, res) => {
  try {
    const { username } = await req.body;
    if (username) {
      const userBlogs = await Blog.find({ author: username });
      res.status(200).json(userBlogs);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const fashion = async (req, res) => {
  try {
    const fashionBlogs = await Blog.find({ category: "Fashion" });
    console.log(fashionBlogs);
    if (fashionBlogs) {
      res.status(200).json(fashionBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[fashion] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const lifestyle = async (req, res) => {
  try {
    const lifestyleBlogs = await Blog.find({ category: "Lifestyle" });
    console.log(lifestyleBlogs);
    if (lifestyleBlogs) {
      res.status(200).json(lifestyleBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[lifestyle] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const travel = async (req, res) => {
  try {
    const travelBlogs = await Blog.find({ category: "Travel" });
    console.log(travelBlogs);
    if (travelBlogs) {
      res.status(200).json(travelBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[travel] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const beauty = async (req, res) => {
  try {
    const beautyBlogs = await Blog.find({ category: "Beauty" });
    console.log(beautyBlogs);
    if (beautyBlogs) {
      res.status(200).json(beautyBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[beauty] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const politics = async (req, res) => {
  try {
    const politicsBlogs = await Blog.find({ category: "Politics" });
    console.log(politicsBlogs);
    if (politicsBlogs) {
      res.status(200).json(politicsBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[politics] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

export { createBlog, userBlog, fashion, lifestyle, travel, beauty, politics };
