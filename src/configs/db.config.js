require("dotenv").config();
const env = require("process").env;

exports.config = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  name: env.BD_NAME,
  user: env.DB_USER,
  pass: env.DB_PASS,
};
