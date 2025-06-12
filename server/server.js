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
    origin: ["https://insight-beat.vercel.app", "http://localhost:5173"],
    methods: "*",
  }),
);
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);

// SERVER Status
app.route("/").get((req, res) => {
  res.status(200).json({ status: 200 });
});

app.listen(process.env.PORT, async () => {
  await database();
  console.log(chalk.cyan(`[listen] ${process.env.PORT}`));
});
