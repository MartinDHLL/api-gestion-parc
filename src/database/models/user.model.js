const { DataTypes } = require("sequelize");
// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize();

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      nom: {
        type: DataTypes.STRING,
      },
      prenom: {
        type: DataTypes.STRING,
      },
      roles: {
        type: DataTypes.JSON,
      },
    },
    { freezeTableName: "user" }
  );
  return User;
};
