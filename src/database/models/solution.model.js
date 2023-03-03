const { DataTypes } = require("sequelize");

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
