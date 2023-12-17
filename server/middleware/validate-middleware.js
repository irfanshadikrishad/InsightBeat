import chalk from "chalk";

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = err.errors[0].message;
    const error = {
      status,
      message,
    };
    console.log(chalk.magenta(`[validate] ${err}`));
    res.status(412).json({ message: err.message });
    next(error);
  }
};

export default validate;
