require("dotenv").config();
const env = require("process").env;

exports.config = {
  port: env.APP_PORT,
  secret: env.SECRET,
};
