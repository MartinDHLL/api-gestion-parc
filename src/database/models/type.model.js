const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Type = sequelize.define(
    "type",
    {
      code: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      nom: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: "type" }
  );
  return Type;
};
