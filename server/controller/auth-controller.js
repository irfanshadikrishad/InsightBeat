import chalk from "chalk";
import Author from "../models/auth-model.js";
import pkg from "bcryptjs";
import { config } from "dotenv";

config();
const { genSalt, hash, compare } = pkg;

const register = async (req, res) => {
  try {
    const { name, email, username, password } = await req.body;
    const isRegisteredEmail = await Author.findOne({ email: email });
    const isUsedUsername = await Author.findOne({ username: username });
    if (isRegisteredEmail || isUsedUsername) {
      res.status(403).json({ message: "User already exists!" });
    } else {
      genSalt(Number(process.env.SALT), function (err, salt) {
        hash(password, salt, function (err, hashedPassword) {
          const user = new Author({
            name,
            email,
            username,
            password: hashedPassword,
          });
          const author = user.save();
          res.status(201).json({
            registered: author._id,
            token: user.genJWT(),
            id: user._id,
          });
        });
      });
    }
  } catch (error) {
    console.log(chalk.magenta(`[controller] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const author = await Author.findOne({ email: email });
    if (!author) {
      res.status(404).json({ message: "Invalid Credentials!" });
    } else {
      compare(password, author.password, function (err, isValid) {
        if (isValid) {
          res.status(200).json({
            id: author._id.toString(),
            email: author.email,
            token: author.genJWT(),
          });
        } else {
          res.status(404).json({ message: "Invalid Credentials!" });
        }
      });
    }
  } catch (error) {
    console.log(chalk.magenta(`[controller-306] ${error.message}`));
    res.status(403).json({ message: error.message });
  }
};

export default register;
export { login };
