const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

module.exports = (sequelize) => {
  const Solution = sequelize.define(
    "solution",
    {
      intitule: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: "solution" }
  );
  return Solution;
};
