const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Issue = sequelize.define(
    "issue",
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
    { freezeTableName: "issue" }
  );
  return Issue;
};
