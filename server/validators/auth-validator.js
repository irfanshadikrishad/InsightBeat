import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must be atleat 3 characters long" })
    .max(20, {
      message: "username can not exceed 20 characters",
    }),
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be atleat 3 characters long" })
    .max(255, {
      message: "name can not exceed 255 characters",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email adress" })
    .min(3, { message: "Email must be atleast 3 characters." })
    .max(255, {
      message: "Email must not be more than  255 characters.",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters." })
    .max(1024, {
      message: "Password can't be greater than 1024 characters.",
    }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email adress" })
    .min(3, { message: "Email must be atleast 3 characters." })
    .max(255, {
      message: "Email must not be more than  255 characters.",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters." })
    .max(1024, {
      message: "Password can't be greater than 1024 characters.",
    }),
});

export { registerSchema, loginSchema };
