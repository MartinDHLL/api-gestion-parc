require("dotenv").config();
const env = require("process").env;

exports.config = {
  environment: env.NODE_ENV,
};
