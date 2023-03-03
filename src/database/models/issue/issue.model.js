const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Issue = sequelize.define(
    "issue",
    {
      intitule: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: "issue" }
  );
  return Issue;
};
