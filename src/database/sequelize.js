const { config } = require("../configs/db.config");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: config.name,
  host: config.host,
  username: config.user,
  port: config.port,
  password: config.pass,
});

const db = {
  sequelize: sequelize,
  models: require("./models/models")(sequelize),
};

module.exports = db;
