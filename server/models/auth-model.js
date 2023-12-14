import { Schema, model } from "mongoose";
import pkg from "jsonwebtoken";
import { config } from "dotenv";

config();
const { sign } = pkg;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

authorSchema.methods.genJWT = function () {
  return sign(
    {
      id: this._id.toString(),
      email: this.email,
    },
    process.env.SECRET,
    { expiresIn: "30d" }
  );
};

const Author = model("Author", authorSchema);

export default Author;
