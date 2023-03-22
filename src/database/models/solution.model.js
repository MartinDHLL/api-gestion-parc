const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Solution = sequelize.define(
    "solution",
    {
      intitule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { freezeTableName: "solution" }
  );
  return Solution;
};
