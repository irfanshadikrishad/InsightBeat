import { config } from "dotenv";
import chalk from "chalk";
import pkg from "jsonwebtoken";
import Author from "../models/auth-model.js";

config();
const { verify } = pkg;

const authMiddleware = async (req, res, next) => {
  try {
    const authorization = await req.header("Authorization");
    const token = await authorization.split(" ")[1];
    const isVerified = verify(token, process.env.SECRET);
    if (!token && !isVerified) {
      res.status(401).json({ message: "Unauthorized!" });
    } else {
      const user = await Author.findOne({ email: isVerified.email }).select({
        password: 0,
      });
      req.user = user;
      req.id = user._id.toString();
      req.token = token;
      next();
    }
  } catch (error) {
    console.log(chalk.magenta(`[authMiddleware] ${error.message}`));
  }
};

export default authMiddleware;
