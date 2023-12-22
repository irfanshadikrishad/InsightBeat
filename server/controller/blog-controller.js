import chalk from "chalk";
import Blog from "../models/blog-model.js";
import Author from "../models/auth-model.js";

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

const games = async (req, res) => {
  try {
    const gamesBlogs = await Blog.find({ category: "Games" });
    if (gamesBlogs) {
      res.status(200).json(gamesBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[games] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const trending = async (req, res) => {
  try {
    const trending = await Blog.find().limit(4);
    if (trending) {
      res.status(200).json(trending);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[trending] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const feature = async (req, res) => {
  try {
    const featureBlogs = await Blog.findOne();
    if (featureBlogs) {
      res.status(200).json(featureBlogs);
    } else {
      res.status(404).json({ message: "Empty!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[feature] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const blogs = async (req, res) => {
  try {
    const blooogs = await Blog.find().limit(9);
    res.status(200).json(blooogs);
  } catch (error) {
    console.log(chalk.magenta(`[blogs] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const editorsPick = async (req, res) => {
  try {
    const editorsPickBlogs = await Blog.find().limit(4).sort({ title: -1 });
    res.status(200).json(editorsPickBlogs);
  } catch (error) {
    console.log(chalk.magenta(`[editorsPick] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const popular = async (req, res) => {
  try {
    const popularBlogs = await Blog.find().limit(4).sort({ body: -1 });
    res.status(200).json(popularBlogs);
  } catch (error) {
    console.log(chalk.magenta(`[popular] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const count = async (req, res) => {
  try {
    const travel = await Blog.find({ category: "Travel" }).count();
    const politics = await Blog.find({ category: "Politics" }).count();
    const fashion = await Blog.find({ category: "Fashion" }).count();
    const beauty = await Blog.find({ category: "Beauty" }).count();
    const lifestyle = await Blog.find({ category: "Lifestyle" }).count();
    const games = await Blog.find({ category: "Games" }).count();

    res.status(200).json([
      {
        category: "travel",
        count: travel,
      },
      {
        category: "politics",
        count: politics,
      },
      {
        category: "fashion",
        count: fashion,
      },
      {
        category: "beauty",
        count: beauty,
      },
      {
        category: "lifestyle",
        count: lifestyle,
      },
      {
        category: "games",
        count: games,
      },
    ]);
  } catch (error) {
    console.log(chalk.magenta(`[count] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const singleBlog = async (req, res) => {
  try {
    const { id } = await req.body;
    const blog = await Blog.findById(id);
    if (blog) {
      const author = await Author.findOne({ username: blog.author }).select({
        password: 0,
      });
      res.status(200).json({ blog, author });
    } else {
      res.status(404).json({ message: "Not found!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[singleBlog] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const personalBlogCount = async (req, res) => {
  try {
    const { author } = await req.body;
    const count = await Blog.find({ author }).count();
    res.status(200).json({ count });
  } catch (error) {
    console.log(chalk.magenta(`[personalBlogCount] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const blogAuthor = async (req, res) => {
  try {
    const { author } = await req.body;
    const writer = await Author.findOne({ username: author }).select({
      password: 0,
    });
    res.status(200).json(writer);
  } catch (error) {
    console.log(chalk.magenta(`[blogAuthor] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

export {
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
  singleBlog,
  personalBlogCount,
  blogAuthor,
};
