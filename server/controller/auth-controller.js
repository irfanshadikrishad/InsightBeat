import chalk from "chalk";
import Author from "../models/auth-model.js";
import pkg from "bcryptjs";
import { config } from "dotenv";

config();
const { genSalt, hash } = pkg;

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
          res.status(201).json({ message: "registered successfully" });
        });
      });
    }
  } catch (error) {
    console.log(chalk.magenta(`[controller] ${error.message}`));
    res.status(400).json({ message: error.message });
  }
};

export default register;
