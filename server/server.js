import cors from "cors";
import chalk from "chalk";
import express from "express";
import { config } from "dotenv";
import database from "./utils/database.js";
import authRouter from "./router/auth-router.js";
import blogRouter from "./router/blog-router.js";

config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "*",
  })
);
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);

app.listen(process.env.PORT, async () => {
  await database();
  console.log(chalk.cyan(`[listen] ${process.env.PORT}`));
});
