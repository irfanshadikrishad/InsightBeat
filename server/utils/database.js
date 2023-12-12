import { connect } from "mongoose";
import { config } from "dotenv";
import chalk from "chalk";

config();

const database = async () => {
  try {
    await connect(process.env.URI);
    console.log(chalk.cyan(`[database] connected`));
  } catch (error) {
    console.log(chalk.magenta(`[database] ${error.message}`));
  }
};

export default database;
