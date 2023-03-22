const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Type = sequelize.define(
    "type",
    {
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: "type" }
  );
  return Type;
};
